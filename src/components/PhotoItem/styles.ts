import styled from "styled-components";

export const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 5px;
    padding: 10px;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    button{
        width: 100%;
        background-color: #756df4;
        border: 0;
        color: #fff;
        padding: .4em .8em;
        font-size: 1em;
        border-radius: 5px;
        cursor: pointer;
        transition: .3s;

        &:hover {
            opacity: .7;
        }
    }
`

