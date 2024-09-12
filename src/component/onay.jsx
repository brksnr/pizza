import React from 'react';
import styled, { createGlobalStyle } from "styled-components";


const ContainerOne = styled.section`
max-width: 100%;
max-width: 100%;
display: flex;
justify-content: center;
background: #CE2829;
@media (max-width: 540px) {
    width: 510px;


max-width: fit-content;
    
    padding: 40%;
    }
;
  `
const Siparisalindi = styled.div`

display: flex;
border: 1px solid black;
flex-direction: column;
align-items: center;
justify-content: center;
img {
    margin: 4rem 0rem 6rem;
}
 h1 {
font-family: Roboto Condensed;
font-size: 70px;
font-weight: 300;
line-height: 92px;
letter-spacing: 1.5px;
text-align: center;
color: #FFFFFF;
margin: 0rem 0rem 4rem;
 }
 .lezzet-yolda{
    width: 324px;
height: 46px;
top: 176.46px;
left: 798px;
gap: 0px;
opacity: 0px;
font-family: Satisfy;
font-size: 32px;
font-weight: 400;
line-height: 44.27px;
text-align: center;
color: #FDC913;
 }
 .position{
    width: 476px;
height: 56px;
top: 396px;
left: 736px;
gap: 0px;
opacity: 0px;
font-family: Barlow;
font-size: 22px;
font-weight: 600;
line-height: 29.44px;
text-align: center;
color: #FFFFFF;
 }
 .ozet {
    width: 50%;
 }
 .bilgi {
font-family: Barlow;
font-size: 16px;
font-weight: 700;
line-height: 24.76px;
font-family: Barlow;
font-size: 16px;
font-weight: 400;
line-height: 24.76px;
color: #FFFFFF;
 }
 .toplam-siparis {
border: 1px solid #FAF7F2; 
padding: 2rem 6rem;
border-radius: 6px;
margin: 3rem 0rem 10rem;
display: flex;
flex-direction: column;
align-content: flex-start;
 }
 .toplam {
font-family: Barlow;
font-size: 20px;
font-weight: 600;
line-height: 24.76px;
text-align: left;
color: #FFFFFF;
 }
 .adet {
width: 154px;
height: 25px;
font-family: Barlow;
font-size: 18px;
font-weight: 600;
line-height: 24.76px;
text-align: left;
color: #FFFFFF;

 }
`;
const ContainerTwo = styled.section`
max-width: 100%;
max-width: 100%;
display: flex;
justify-content: center;
background: #1A1A1A;

.main-container{
    width: 50%;
    margin: 3rem 0rem 2rem;
    display: flex;
    justify-content: space-between;
    border:1px solid orange;
}
.tekno-yemek{
border: 1px solid white;
color:white;
margin-bottom: 5rem;
.iletisim-icon {
    display: flex;
  align-items: center;
}
.iletisim {
    img {
        margin-right: 10px;
    }
  }
}
.hot-menu{
    border: 1px solid orange;
    color:white;
    margin-top: 2rem;
}
.instagram{
    border: 1px solid blue;
    color:white;
    margin: 2rem 0rem 2rem;
    
    .resimler{
       display: grid;
       grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
}
`

    
export default function Onay({liftFormData}) {
    
   
    if(!liftFormData) {
        return <div>yüklenir....</div>
    }
    
    return (
<>
    <ContainerOne>
    <Siparisalindi>
        <img src='./src/assets/Iteration-1-assets/logo.svg'/>
        <p className='lezzet-yolda'>lezzetin yolda</p>
        <div><h1>SİPARİŞ ALINDI!</h1></div>
        <p className='position'>Position Absolute Acı Pizza</p>   
       <div className='ozet'>
        <p className='bilgi'>Malzemeler: {liftFormData.malzeme.join(",")}</p>
        <p className='bilgi'>Boyut: {liftFormData.boyut}</p>
        <p className='bilgi'>Hamur: {liftFormData.hamur}</p>
        <p className='bilgi'>Adet: {liftFormData.adet}</p>
        </div> 
        <div className='toplam-siparis'>
        <p className='toplam'>Sipariş Toplamı</p>
        <p className='adet'>Seçimler: {liftFormData.malzemeTutarı}₺</p>
        <p className='adet'>Toplam: {liftFormData.toplam}₺</p>
        </div>
       
       
       
    </Siparisalindi>
    </ContainerOne>
    <ContainerTwo>
        <div className='main-container'>
            <div className='tekno-yemek'>
                <h1>Teknolojik<br/> yemekler</h1>
                <div className='iletisim'>
                    <div className='iletisim-icon'>
                    <img src='./src/assets/Iteration-2-assets/footer-icon/icon-1.png' />
                    <p>341 Londonderry Road,<br/>Istabul Türkiye </p>
                    </div>
                    <div className='iletisim-icon'>
                    <img src='./src/assets/Iteration-2-assets/footer-icon/icon-2.png'></img>
                    <p>aciktim@teknolojikyemekler.com</p>
                    </div>
                    <div className='iletisim-icon'>
                    <img src='./src/assets/Iteration-2-assets/footer-icon/icon-3.png'></img>
                    <p>+90 216 123 45 67</p>
                    </div>
                </div>
            </div>
            <div className='hot-menu'>
            <h4>Hot Menu</h4>
            <div className='pizza-burger'>
                <p>Terminal Pizza</p>
                <p>5 Kişilik Hackathlon Pizza</p>
                <p>useEffect Tavuklu Pizza</p>
                <p>Beyaz Console Frosty</p>
                <p>Testler Geçti Mutlu Burger</p>
                <p>Position Absolute Acı Burger</p>
            </div>

            </div>
            <div className='instagram'>
            <h4>Instagram</h4>
            <div className='resimler'>
                <img src='./src/assets/Iteration-2-assets/instagram/li-0.png'></img>
                <img src='./src/assets/Iteration-2-assets/instagram/li-1.png'></img>
                <img src='./src/assets/Iteration-2-assets/instagram/li-2.png'></img>
                <img src='./src/assets/Iteration-2-assets/instagram/li-3.png'></img>
                <img src='./src/assets/Iteration-2-assets/instagram/li-4.png'></img>
                <img src='./src/assets/Iteration-2-assets/instagram/li-5.png'></img>
            </div>
            </div>
        </div>
    </ContainerTwo>
</>
    )
}


