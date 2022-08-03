import { Photo } from "../types/Photo"
import {storage} from '../libs/firebase'
import {ref, listAll, getDownloadURL, uploadBytes} from 'firebase/storage'
import { v4 as createId} from "uuid"

export const getAll = async () => {
    let list:Photo[] = []

    const imagesFolder = ref(storage, 'images')//Criando uma referência para a pasta images no storage
    const photoList = await listAll(imagesFolder)//Listando tudo que estiver dentro dessa referência

    for(let i in photoList.items){
        let photoURL = await getDownloadURL(photoList.items[i])//gerando Url para as fotos

        list.push({
            name: photoList.items[i].name,
            url: photoURL,
        })
    }

    return list
}


export const insert = async (file:File) => {
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)){
        let randomName = createId()
        let newFile = ref(storage, `images/${randomName}`)
        let upload = await uploadBytes(newFile, file)
        let photoUrl = await getDownloadURL(upload.ref)
        return {
            name: upload.ref.name,
            url: photoUrl
        } as Photo
    } else {
        return new Error('Tipo de arquivo inválido!')
    }
}