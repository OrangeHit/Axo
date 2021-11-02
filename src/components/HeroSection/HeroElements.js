import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    

`;

export const HeroBg = styled.div`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 100%;
 overflow: hidden;
`;



export const HeroContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 100px;
    
    @media screen and (max-width: 768px) {
        margin-left: 0px;
    }
    
`;

export const HeroH1 = styled.h1 `
color: #fff;
font-size: 60px;
text-align: center;


@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
` ;

export const HeroH2 = styled.h1 `
color: #fff;
font-size: 60px;
text-align: start;

@media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: start;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
    text-align: start;
}
` ;

export const HeroP = styled.p `
margin-top: 20px;
color: #fff;
font-size: 16px;
text-align: start;
max-width: 600px;

@media screen and (max-width: 768px) {
    font-size: 12px
    text-align: start;
}

@media screen and (max-width: 480px) {
    font-size: 10px;
    text align: start;
}
`;


export const HeroBtnWrapper = styled.div `
margin-top: 32px;
display: flex;
flex-direcction: column;
align-items: center;
`

export const ArrowForward = styled(MdArrowForward) `
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight) `
margin-left: 8px;
font-size: 20px;
`