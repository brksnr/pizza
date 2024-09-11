import React from 'react';
import styled, { createGlobalStyle } from "styled-components";


const Wrapper = styled.body`
width: 1600px;
height: 783px;
display: flex;
justify-content: center;
padding-top: 8rem;

background: #CE2829;
;
  `

const Siparisalindi = styled.div`
width: 636px;
height: 600px;
display: flex;
justify-content: flex-end;

flex-direction: column;
align-items: center;
row-gap: 17rem;

 img {
width: 361.93px;
height: 45.79px;
top: 149px;
left: 779.37px;
gap: 0px;
opacity: 0px;

 }

 div {
 
 padding-bottom: 5rem;
 }

 h1 {
font-family: Roboto Condensed;
font-size: 70px;
font-weight: 300;
line-height: 92px;
letter-spacing: 1.5px;
text-align: center;
color: #FFFFFF;

 }
`;

    
export default function Onay() {

    
    return (
    <Wrapper>
    <Siparisalindi>
        <img src='./src/assets/Iteration-1-assets/logo.svg'/>
        <div><h1>TEBRİKLER! SİPARİŞİNİZ ALINDI!</h1></div>
        
    </Siparisalindi>
    </Wrapper>
    )
}
