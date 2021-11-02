import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    border-radius: 50px;
    border-width: 2px;
    background: ${({ primary }) => (primary ? '#01bf71' : 'transparent')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px': '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px': '16px')};
    outline: none;
    border-style: solid;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#3593F1')};
    }
    `