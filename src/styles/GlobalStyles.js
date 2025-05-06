import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body,html, #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #E6E6E6;
    font-family: "Roboto", sans-serif;
}

ul,p{
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
}
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 10rem;
    gap: 3rem;
`