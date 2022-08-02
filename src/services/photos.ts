import { Photo } from "../types/Photo"
import {storage} from '../libs/firebase'
import {ref, listAll, getDownloadURL} from 'firebase/storage'

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