import React from 'react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Form() {

    const Header = styled.header`
    display: flex;
    background: #CE2829;
    padding: 50px;
    text-align: center;
    flex-direction: column;
    color:black;
    border-bottom: 1px solid #C20608
    box-shadow: 0px 9px 150px -30px #00000017;
    p {
    display: flex;
    justify-content: flex-end;
    width: 47%;
    font-family: Barlow;
    font-size: 16px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: left;
    }
    `
    const Formsection = styled.section`
    padding: 0% 34%;
    `
    const PizzaBilgi = styled.div`
    padding: 2rem 0rem;
    
    h4 {
    font-family: Barlow;
    font-size: 22px;
    font-weight: 600;
    line-height: 29.44px;
    text-align: left; 
    };
    h3 {
    font-family: Barlow;
    font-size: 28px;
    font-weight: 700;
    line-height: 37.47px;
    text-align: left;
    }
    a {
    font-family: Barlow;
    font-size: 16px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: right;
    }
    p{
    font-family: Barlow;
    font-size: 16px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: left;
    }
    `
    const Fiyat = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
    const Puan = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20%;
    `
    const Boyutvehamur = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 1.5rem 0rem;
    span {
    font-family: Barlow;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.76px;
    text-align: left;
    color: #D80027;
    }
    `
    const Boyutsec = styled.form`
    

    h3{
    font-family: Barlow;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.76px;
    text-align: left;
    }
    label {
    padding: 0rem 1rem;
    font-family: Barlow;
    font-size: 16px;
    font-weight: 500;
    line-height: 45px;
    text-align: left;
    }`

    const Hamursec = styled.div`
    gap: 1rem;
    h3{
    font-family: Barlow;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.76px;
    text-align: left;
    }
    `
    const Select = styled.select`
     width: 130%;
    `
    const Ekmalzemeler = styled.div`
    padding: 1.5rem 0rem;
    h3 {
    font-family: Barlow;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.76px;
    text-align: left; 
    }
    a {
    font-family: Barlow;
    font-size: 16px;
    font-weight: 500;
    line-height: 56px;
    text-align: left;
    }
    `
    const Malzemesecim = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0rem;
    width: Fixed (524px)px;
    height: Fixed (214px)px;
    gap: 13px;
    opacity: 0px;
    label {
    font-family: Barlow;
    font-size: 16px;
    font-weight: 700;
    line-height: 28.8px;
    text-align: left;
    color: #5F5F5F;
    }
    input {
    margin-right: 10px;
    }
    `
    const Siparisnotu = styled.div`
    h3 {
    font-family: Barlow;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.76px;
    text-align: left;
    }
    textarea {
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
    text-align: left;

    }
    `;

    const Hesapozeti = styled.div`
    display: flex;
    gap: 1rem;
    padding: 2rem 0rem;
    `;
    const Siparisver = styled.div`
    width: 70%;
    border: 1px solid slategray;
    border-radius: 3%;
    h4 {
    font-family: Barlow;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.76px;
    text-align: left;
    }
    p {
    font-family: Barlow;
    font-size: 18px;
    font-weight: 600;
    line-height: 24.76px;
    text-align: left;
    }
     .toplam-p {
     color: #CE2829;
     }
     .secim-p {
     color: #5F5F5F;
     }
    `;
    
  return (
   

    <>
    <Header>
      <h1>Teknolojik Yemekler</h1>
      <p>Ana Sayfa - Sipariş Oluştur</p>
    </Header>
    <Formsection>

    <PizzaBilgi>
        <h4> 
        Position Absolute Acı Pizza
        </h4>
                <Fiyat> 
                <h3> 85.50TL</h3>
                <Puan>
                <a>4.9 </a>
                <a>(200)</a>
                </Puan>
                </Fiyat>
        <p>
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmışi daha sonra geleneksel
        olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan italyan kökenli lezzetli bir yemektir..  
        Küçük bir pizzaya bazen pizetta denir.
        </p>
    </PizzaBilgi>

    <Boyutvehamur>
    <Boyutsec>
    <h3>Boyut Seç <span>*</span></h3>
    <div >
          <input
            type="radio"
            id="option1"
            name="options"
            value="A"
          />
          <label htmlFor="option1">Küçük</label>
        </div>
        <div>
          <input
            type="radio"
            id="option2"
            name="options"
            value="B"
          />
          <label htmlFor="option2">Orta</label>
        </div>
        <div>
          <input
            type="radio"
            id="option3"
            name="options"
            value="C"
          />
          <label htmlFor="option3">Büyük</label>
        </div>
    </Boyutsec>
    <Hamursec>
    <h3>Hamur Seç <span>*</span></h3>
      <Select >
        <option value="">Hamur Kalınlığı</option>
        <option value="A">İnce Hamur</option>
        <option value="B">Orta Hamur</option>
        <option value="C">Kalın Hamur</option>
      </Select>
    </Hamursec>
    </Boyutvehamur>

    <Ekmalzemeler>
    <div className='ekmalzeme-bilgi'>
        <h3>Ek Malzemeler</h3>
        <a>En Fazla 10 malzeme seçebilirsiniz. 5₺</a>
        </div>
    <Malzemesecim>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="A"
        />
        Pepperoni
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="B"
        />
        Sosis
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="C"
        />
        Soğan
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="C"
        />
        Mısır
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="C"
        />
        Domates
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="C"
        />
        Sucuk
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="C"
        />
        Biber
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="C"
        />
        Ananas
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="C"
        />
        Sarımsak
      </label>
      
    </Malzemesecim>
    </Ekmalzemeler>

    <Siparisnotu>
    <h3>Sipariş Notu</h3>
      <form className='text-area'>
        <textarea
          rows="4" 
          cols="50" 
          placeholder="Siparişine eklemek istediğin bir not var mı?"
        />
      </form>
    </Siparisnotu>

    <Hesapozeti>
      
    <div className='ekle'><button>-</button><p>1</p><button>+</button> </div>
    
    <Siparisver>
    <div className='siparis-container'>
    <div className='siparis-toplamı'>
      <h4>Sipariş Toplamı</h4>
      <div className='secimler'>
        <p>Seçimler</p>
        <p  className='secim-p'>25.00₺</p>
      </div>
      <div className='toplam'>
        <p  className='toplam-p'>Toplam</p>
        <p  className='toplam-p'>110.50₺</p>
      </div>
    </div>
    
    </div>
    <button className='siparis-button'>Sipariş Ver</button>
    </Siparisver>
    </Hesapozeti>

    </Formsection>
    


    </>



  );
}
