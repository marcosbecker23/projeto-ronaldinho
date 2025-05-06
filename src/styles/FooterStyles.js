import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerFooter = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 2rem;
    background-color: #FFFFFF;

`
export const ListaFooter = styled.ul`
    display:flex;
    flex-direction: column;
    list-style-type: none;
    gap: 0;
`
export const TitleFooter = styled.h1`
    font-size: 1.7rem;
    color: #000;

`
export const ListaItemFooter = styled.li`
    margin: 0 0 0 2rem;
`
export const LinkFooter = styled(Link)`
    font-size: .9rem;
    color: #000;
    text-decoration: none;
    transition: .3s ease-in;

    &:hover {
    color: #a93226;
    }
`
export const CopyFooter = styled.p`
    font-size: .7rem;
    text-align: center;
    
`