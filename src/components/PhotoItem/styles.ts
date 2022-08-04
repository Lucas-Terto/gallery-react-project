import styled from "styled-components";

export const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #756df4;
        border: 0;
        color: #fff;
        font-size: 1.2em;
        border-radius: 5px;
        cursor: pointer;
        transition: .3s;
        font-weight: bold;

        &:hover {
            opacity: .7;
        }
    }
`