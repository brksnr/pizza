import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from "styled-components";

const Header = styled.section`
    padding: 391px;
    background-image: url("./src/assets/Iteration-1-assets/home-banner.png");
    padding: 15rem;
    border: 1px black solid;
    display: flex;
    justify-content: center;
    width: 1920px;
    height: 960px;
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
     const Menü = styled.div`
     display: flex;
     
     justify-content: center;
     border: 1px solid black;
     gap: 9rem;
     `
     const Hero = styled.section`
     width: 1920px;
     height: 760px;
     border: 5px solid green;
    display: flex;
    justify-content: center;
    border: 3px solid blue;
     
     `
     const Uclumenu = styled.div`
     padding-top: 7rem;
     display: flex;
     height: 57%;
     border: 1px solid green;
     width: 70%;
     justify-content: space-between;
     .ikili {
        display: flex;
        flex-direction: column;
        
        row-gap: 1.5rem;
     }
     `
     const Heroiki = styled.section`
     width: 1920px;
     height: 260px;
     border: 1px solid black;
     display: flex;
     justify-content: center;
     align-items: center;
     `
    const Slogan = styled.div`
         border: 3px solid green
         `
    const HeroUc = styled.section`
    display: flex;
     justify-content: center;
     border: 1px solid black;
     gap: 9rem;
    `

    const HeroDort = styled.section`
    border: 3px solid red;
    display: flex;
    justify-content: center;
    background-color: gray;
    `

    const UcluPaket = styled.div`
    border: 4px solid purple;
    padding-top: 7rem;
     display: flex;
     height: 57%;
     width: 73%;
     justify-content: space-between;
     display: flex;
     justify-content: space-between;
     img {
        background: white;
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
    <Menü>
        <div><img src='./src/assets/Iteration-2-assets/icons/1.svg'/><h5>YENİ! Kore</h5></div>
        <div><img src='./src/assets/Iteration-2-assets/icons/2.svg'/><h5>Pizza</h5></div>
        <div><img src='./src/assets/Iteration-2-assets/icons/3.svg'/><h5>Burger</h5></div>
        <div><img src='./src/assets/Iteration-2-assets/icons/4.svg'/><h5>Kızartmalar</h5></div>
        <div><img src='./src/assets/Iteration-2-assets/icons/5.svg'/><h5>Fast food</h5></div>
        <div><img src='./src/assets/Iteration-2-assets/icons/6.svg'/><h5>Gazlı İçecek</h5></div>
    </Menü>
    <Hero>
        <Uclumenu>
        <div>
                <img src='./src/assets/Iteration-2-assets/cta/kart-1.png'/>
        </div>
        <div className='ikili'>
                <img src='./src/assets/Iteration-2-assets/cta/kart-2.png'/>
                <img src='./src/assets/Iteration-2-assets/cta/kart-3.png'/>
        </div>
        </Uclumenu>
        
    </Hero>
    <Heroiki>
    <Slogan>
            <h5>en çok paketlenen menüler</h5>
            <h4> Acıktıran Kodlara Doyuran Lezzetler</h4>
    </Slogan>
    </Heroiki>
    <HeroUc>
    <div><img src='./src/assets/Iteration-2-assets/icons/1.svg'/><h5>YENİ! Kore</h5></div>
        <div><img src='./src/assets/Iteration-2-assets/icons/2.svg'/><h5>Pizza</h5></div>
        <div><img src='./src/assets/Iteration-2-assets/icons/3.svg'/><h5>Burger</h5></div>
        <div><img src='./src/assets/Iteration-2-assets/icons/4.svg'/><h5>Kızartmalar</h5></div>
        <div><img src='./src/assets/Iteration-2-assets/icons/5.svg'/><h5>Fast food</h5></div>
        <div><img src='./src/assets/Iteration-2-assets/icons/6.svg'/><h5>Gazlı İçecek</h5></div>
    </HeroUc>
    <HeroDort>
    <UcluPaket>
    <div><img src='./src/assets/Iteration-2-assets/pictures/food-1.png'/></div>
    <div><img src='./src/assets/Iteration-2-assets/pictures/food-2.png'/></div>
    <div><img src='./src/assets/Iteration-2-assets/pictures/food-3.png'/></div>
    </UcluPaket>
    </HeroDort>
    </>
)
};
