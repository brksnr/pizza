import React from 'react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Anasayfa() {

    const İmg = styled.img`
    
    `
    const Deneme = styled.div`
   
    background-image: ('./src/assets/Iteration-1-assets/home-banner.png');
    
    `;

return (
    <>
    <Deneme>
    <İmg src='.\src\assets\Iteration-1-assets\logo.svg' />
    </Deneme>
    </>
)
};

/*max-width: 100%; 
    max-height: 100%; 
    object-fit: contain; */