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
     gap: 6.3rem;

     .menu-content {
      display: flex;
      align-items: center;
      gap: 1rem;
     }
     `

     const Hero = styled.section`
     width: 1920px;
     height: 760px;
     border: 5px solid green;
    display: flex;
    justify-content: center;
    
    background: #FAF7F2;

     
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
        row-gap: .7rem;
        img {
          border-radius: 2%;
        }
        .hackathlon {
          position: absolute;
          font-family: Barlow;
          font-size: 32px;
          font-weight: 600;
          line-height: 44.27px;
          text-align: left;
          color: #FFFFFF;
          width: 182.35px; 
          height: 86px;
          top: 125%;
          left: 54%;
        }
        .hackathlon-siparis-ver {
          position:absolute;
          width: 138px;
          height: 48px;
          top: 143.5px;
         left: 32px;
          padding: 3px 18px 0px 18px;
          gap: 0px;
          border-radius: 50px;
          opacity: 0px;
          top:139%;
          left:54%;
          font-family: Barlow;
          font-size: 14px;
          font-weight: 600;
          line-height: 40px;
          color: #CE2829;

        }
        .npm-kurye {
          position: absolute;
          width: 254px;
height: 88px;
top: 157%;
left: 54%;
gap: 0px;
opacity: 0px;
font-family: Barlow;
font-size: 32px;
font-weight: 600;
line-height: 44.27px;
text-align: left;
        }
        .npm-siparis-ver {
          position: absolute;
          width: 138px;
height: 48px;
top: 171%;
left: 54%;
padding: 3px 18px 0px 18px;
gap: 0px;
border-radius: 50px;
opacity: 0px;
font-family: Barlow;
font-size: 14px;
font-weight: 600;
line-height: 40px;
text-align: center;
color: #CE2829;
background: #FFFFFF;





        }

     }
     .image-container {
        position: relative;
        img {
          
border-radius: 2%;

        }
     }
     .lezzetus {
        position: absolute;
        color: white;
        top: 15%;
        left: 10%;
        font-family: Quattrocento;
      font-size: 68px;
      font-weight: 700;
      line-height: 72px;
      text-align: left;
      border: 1px solid black;
     }
    .position {
        position: absolute;
        font-family: Barlow;
font-size: 20px;
font-weight: 600;
line-height: 26.76px;
text-align: left;
top: 70%;
        left: 10%;
        color:white;
    }
    .siparis-ver {
      position: absolute;
      width: 138px;
height: 48px;
top: 203.75px;
left: -10px;
padding: 3px 18px 0px 18px;
gap: 0px;
border-radius: 50px;
opacity: 0px;
background: #FFFFFF;
top: 85%;
        left: 10%;
      p {
        font-family: Barlow;
font-size: 14px;
font-weight: 600;
line-height: 40px;
text-align: center;
color: #CE2829;


      }

    }
    


     
     `
     const Heroiki = styled.section`
     width: 1920px;
     height: 260px;
     
     display: flex;
     justify-content: center;
     align-items: center;
     background: #FAF7F2;

     `
    const Slogan = styled.div`

display: flex;
align-items: center;
flex-direction: column;
    h5 {
         
         width: 408px;
height: 46px;
top: -9px;
left: 444px;
gap: 0px;
opacity: 0px;
font-family: Satisfy;
font-size: 32px;
font-weight: 400;
line-height: 44.27px;
text-align: center;
color: #CE2829;

    }
    h4{
      width: 712px;
height: 56px;
top: 45px;
left: 292px;
gap: 0px;
opacity: 0px;
font-family: Barlow;
font-size: 42px;
font-weight: 600;
line-height: 56.2px;
text-align: center;
color: #292929;



    }


         `
    const HeroUc = styled.section`
    background: #FAF7F2;
    display: flex;
    justify-content: center;
     gap: 3.8rem;
     padding-bottom: 5rem;
     .pizza {
      background: #292929;
      color: #FFFFFF;

     }
     button {
      
      width: Hug (146.72px)px;
height: Hug (66px)px;
padding: 12px 20px 12px 20px;
gap: 10px;
border-radius: 50px;
opacity: 0px;
background: #FFFFFF;

     }
     .button-content {
      display: flex;
align-items: center;
justify-content: center;
gap: 1rem;

     }
    `

    const HeroDort = styled.section`
    
    display: flex;
    justify-content: center;
    background: #FAF7F2;

    `

    const UcluPaket = styled.div`
   
     display: flex;
     width: 73%;
     justify-content: space-between;
     
    .tpu-p {
      width: 270.67px;
height: 29px;
gap: 0px;
opacity: 0px;
font-family: Barlow;
font-size: 22px;
font-weight: 600;
line-height: 29.44px;
text-align: left;
color: #292929;
padding-left: 2rem;
width: 100%;


    }
     img {
        padding: 1rem 4rem;
        border-radius: 5%;
     }
     div {
        background-color: white;
        display: flex;
        flex-direction: column;
        border-radius: 5%;
     }
     .fiyat-ve-puan {
    p {
            display: flex;
     }
    .sol {
    text-align: left;
    flex-grow: 1; 
    width: 23px;
height: 29px;
gap: 0px;
opacity: 0px;
font-family: Barlow;
font-size: 16px;
font-weight: 600;
line-height: 28.8px;
text-align: left;
color: #1B1B1BB2;
padding-left: 2rem;
    }
    .orta {
    text-align: center;
    flex-grow: 1; 
    width: 38px;
height: 29px;
left: 144.14px;
gap: 0px;
opacity: 0px;
font-family: Barlow;
font-size: 16px;
font-weight: 600;
line-height: 28.8px;
text-align: left;
color: #1B1B1BB2;
padding-left: 8rem;
    }
    .sag {
    text-align: right;
    flex-grow: 1;
    width: 55.01px;
height: 25px;
top: 2px;
left: 215.65px;
gap: 0px;
opacity: 0px;
font-family: Barlow;
font-size: 20px;
font-weight: 700;
line-height: 24.76px;
text-align: right;
color: #292929;
padding-right: 2rem;


    }
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
        <div className='menu-content'><img src='./src/assets/Iteration-2-assets/icons/1.svg'/><h5>YENİ! Kore</h5></div>
        <div className='menu-content'><img src='./src/assets/Iteration-2-assets/icons/2.svg'/><h5>Pizza</h5></div>
        <div className='menu-content'><img src='./src/assets/Iteration-2-assets/icons/3.svg'/><h5>Burger</h5></div>
        <div className='menu-content'><img src='./src/assets/Iteration-2-assets/icons/4.svg'/><h5>Kızartmalar</h5></div>
        <div className='menu-content'><img src='./src/assets/Iteration-2-assets/icons/5.svg'/><h5>Fast food</h5></div>
        <div className='menu-content'><img src='./src/assets/Iteration-2-assets/icons/6.svg'/><h5>Gazlı İçecek</h5></div>
    </Menü>
    <Hero>
        <Uclumenu>
        <div className='image-container'>
                <img src='./src/assets/Iteration-2-assets/cta/kart-1.png'/>
                <div className="lezzetus"><p>Özel</p><p>Lezzetus</p></div>
                <div className="position"><p>Position:Absolute Acı Burger</p> </div>
                <div><button className='siparis-ver'><p>SİPARİŞ VER</p></button></div>
        </div>
        <div className='ikili'>
                <img src='./src/assets/Iteration-2-assets/cta/kart-2.png'/>
                <div className="hackathlon"><p>Hackathlon</p><p>Burger Menü</p></div>
                <div><button className='hackathlon-siparis-ver'><p>SİPARİŞ VER</p></button></div>
                <img src='./src/assets/Iteration-2-assets/cta/kart-3.png'/>
                <div className="npm-kurye"><p>Çoooook hızlı</p><p>npm gibi kurye</p></div>
                <div><button className='npm-siparis-ver'><p>SİPARİŞ VER</p></button></div>
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
    <button><div className='button-content'><img src='./src/assets/Iteration-2-assets/icons/1.svg'/><h5>YENİ! Kore</h5></div></button>
    <button className='pizza' ><div className='button-content'><img src='./src/assets/Iteration-2-assets/icons/2.svg'/><h5>Pizza</h5></div></button>
    <button><div className='button-content'><img src='./src/assets/Iteration-2-assets/icons/3.svg'/><h5>Burger</h5></div></button>
    <button><div className='button-content'><img src='./src/assets/Iteration-2-assets/icons/4.svg'/><h5>Kızartmalar</h5></div></button>
    <button><div className='button-content'><img src='./src/assets/Iteration-2-assets/icons/5.svg'/><h5>Fast food</h5></div></button>
    <button><div className='button-content'><img src='./src/assets/Iteration-2-assets/icons/6.svg'/><h5>Gazlı İçecek</h5></div></button>
    </HeroUc>
    <HeroDort>
    <UcluPaket>
    <div>
    <img src='./src/assets/Iteration-2-assets/pictures/food-1.png'/>
    <p className='tpu-p'>Terminal Pizza</p>
    <div className='fiyat-ve-puan'>
    <p>
  <span className="sol">4.9</span>
  <span className="orta">(200)</span>
  <span className="sag">60TL</span>
    </p>
    </div>
    </div>
    <div>
    <img src='./src/assets/Iteration-2-assets/pictures/food-2.png'/>
    <p className='tpu-p'>Position Absolute Acı Pizza</p>
    <div className='fiyat-ve-puan'>
    <p>
  <span className="sol">4.9</span>
  <span className="orta">(928)</span>
  <span className="sag">85TL</span>
    </p>
    </div>
    </div>
    <div>
    <img src='./src/assets/Iteration-2-assets/pictures/food-3.png'/>
    <p className='tpu-p'>useEffect Tavuklu Burger</p>
    <div className='fiyat-ve-puan'>
    <p>
  <span className="sol">4.9</span>
  <span className="orta">(462)</span>
  <span className="sag">75TL</span>
    </p>
    </div>
    </div>
    </UcluPaket>
    </HeroDort>
    </>
)
};