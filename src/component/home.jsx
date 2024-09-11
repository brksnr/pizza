import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from "styled-components";

const Header = styled.section`
    background: black;
    padding: 391px;
    background-image: url("./src/assets/Iteration-1-assets/home-banner.png");
    padding: 15rem;
    border: 1px black solid;
    display: flex;
    justify-content: center;
    width: 1980px;
    height: 980px;
    @media (max-width: 540px) {
    max-width: fit-content;
    background-position: top;
    padding: 10%;
    }
     `;
     const Bilgi = styled.div`
     display: flex;
     flex-direction: column;
     row-gap: 2rem;
     text-align: center;
     width: 70%;
     button {
     width: 193.27px;
     height: 56px;
     padding: 3.73px 50.16px 0.27px 49.64px;
     gap: 0px;
     border-radius: 50px;
     opacity: 0px;
     background: #FDC913;
     }
     h1 {
    font-family: Roboto Condensed;
    font-size: 86px;
    font-weight: 300;
    line-height: 92px;
    letter-spacing: 1.5px;
    text-align: center;
    color: #FFFFFF;
     }
     @media (max-width: 540px) {
        padding-top: 10rem;
        display: flex;
        align-items: center;
       }
     `

export default function Home() {

    

return (
    <>
    <Header>
    <Bilgi>
    <div><img src='./src/assets/Iteration-1-assets/logo.svg'/></div>
    <div><h1>KOD ACIKTIRIR PİZZA, DOYURUR</h1></div>
    <div><Link to="form"><button>ACIKTIM</button></Link></div>
    </Bilgi>
    </Header>
    </>
)
};
