import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

let initialForm = {
  isim: "",
  boyut: "",
  hamur: "",
  malzeme: [],
  not: "",
  adet: 1
}

const Header = styled.header`
display: flex;
background: #CE2829;
padding: 50px;
text-align: center;
flex-direction: column;
color:black;
border-bottom: 1px solid #C20608
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
.malzeme {
width: 31%;
gap: 1rem;
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
const Divdeneme = styled.div`
padding: 2rem 0rem;
width: 73.5%;
h3 {
font-family: Barlow;
font-size: 20px;
font-weight: 600;
line-height: 24.76px;
text-align: left;
}
`
const Input = styled.input`
width: 100%;
padding: 1rem;

`

const Siparisnotu = styled.form`
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
.ekle {
display: flex;
width: 30%;
justify-content: space-between;
}
.ekle button {
width: 100%;
height: 20%;
background: #FDC913;
}
.ekle p {
display: flex;
width: 10rem;
justify-content: center;
height: 20%;
align-items: center;
border: 1px solid #D9D9D9
}
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
 .siparis-toplamı {
display: flex;
flex-direction: column;
} 
 .siparis-container {
padding: 9% 10% 0% 10%;
}
.secimler {
display: flex;
justify-content: space-between;
}
.toplam {
display: flex;
justify-content: space-between;
padding: 0rem 0rem 1rem 0rem;
}
.siparis-button {
width: 100%;
height: 3rem;
background: #FDC913;
border-radius: 6px;
}
.ekle button {
background: #FDC913;
border-radius: 10%;
}

`;


export default function Form() {

  
  const [ formData, setFormData] = useState(initialForm);
  const [ errors, setErrors ] = useState({
    isim:"en az 3 karakter giriniz",
    boyut: "Pizza boyutu seçini",
    hamur: "Hamur kalınlığı seçiniz",
    malzeme: "En az 3 malzeme seçiniz",
  })
  const [isValid, setIsValid] = useState(false);

  
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    if (type === 'checkbox') {
      const updatedMalzemeler = checked ? formData.malzeme.includes(value)  ? formData.malzeme : [...formData.malzeme, value]  : formData.malzeme.filter(malzeme => malzeme !== value);
  
      setFormData({
        ...formData, malzeme: updatedMalzemeler
      });
    } else {
      setFormData({
        ...formData, [name]: value
      });
    }
  };
  
  useEffect(() => {
    console.log(formData);
    
  }, [formData]);


  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submit edildi');
  }

  


   
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
            id="kucuk"
            name="boyut"
            value="kucuk"
            onChange={handleChange}
          />
          <label htmlFor="kucuk">Küçük</label>
        </div>
        <div>
          <input
            type="radio"
            id="orta"
            name="boyut"
            value="orta"
            onChange={handleChange}
          />
          <label htmlFor="orta">Orta</label>
        </div>
        <div>
          <input
            type="radio"
            id="buyuk"
            name="boyut"
            value="buyuk"
            onChange={handleChange}
          />
          <label htmlFor="buyuk">Büyük</label>
        </div>
    </Boyutsec>

    <Hamursec>
    <h3>Hamur Seç <span>*</span></h3>
      <Select 
      name="hamur" 
      value={formData.hamur}
      onChange={handleChange}
      >
        <option value="" >Hamur Kalınlığı</option>
        <option value="ince">İnce Hamur</option>
        <option value="orta">Orta Hamur</option>
        <option value="kalın">Kalın Hamur</option>
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
          value="Pepperoni"
          name="malzeme"
          onChange={handleChange}
        />
        Pepperoni
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="Sosis"
          name="malzeme"
          onChange={handleChange}
        />
        Sosis
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="Soğan"
          name="malzeme"
          onChange={handleChange}
        />
        Soğan
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="Mısır"
          name="malzeme"
          onChange={handleChange}
        />
        Mısır
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="Domates"
          name="malzeme"
          onChange={handleChange}
        />
        Domates
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="Sucuk"
          name="malzeme"
          onChange={handleChange}
        />
        Sucuk
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="Biber"
          name="malzeme"
          onChange={handleChange}
        />
        Biber
      </label>
      <label className='malzeme'>
        <input
          type="checkbox"
          value="Ananas"
          name="malzeme"
          onChange={handleChange}
        />
        Ananas
      </label>
      <label className='malzeme' >
        <input
          type="checkbox"
          value="Sarımsak"
          name="malzeme"
          onChange={handleChange}
        />
        Sarımsak
      </label>
      
    </Malzemesecim>
    </Ekmalzemeler>

    <Divdeneme  onSubmit={handleSubmit}>
    <form  onSubmit={handleSubmit}>
    <h3>İsim</h3>
    <Input
    id="isim"
    name="isim"
    value={formData.isim}
    onChange={handleChange}
    type="text"
    />
    </form>
    </Divdeneme>

    <Siparisnotu onSubmit={handleSubmit}>
    <h3>Sipariş Notu</h3>
      <form className='text-area'>
        <textarea
          id="not"
          name="not"
          rows="4" 
          cols="50" 
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          onChange={handleChange}
          value={formData.not}
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
