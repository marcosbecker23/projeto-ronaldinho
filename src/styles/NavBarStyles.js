import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerNav = styled.nav`
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    padding: 2rem 0;


`
export const ListaNav = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    list-style-type: none;
`

export const LinkNav = styled(Link)`
    font-size: 1.1rem;
    color: #000000;
    text-decoration: none;
    text-transform: uppercase;
    transition: .3s ease-in;

    &:hover {
        color: #a93226;
    }

`