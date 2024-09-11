import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormFeedback } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
}
`
const Hamursec = styled.form`
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
const Malzemesecim = styled.form`
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
const Isım = styled.div`
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
`;
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
const Siparisver = styled.form`
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

let initialForm = {
  isim: "",
  boyut: "",
  hamur: "",
  malzeme: [],
  not: "",
  adet: 1
}

let errorMessages = {
  isim:"en az 3 karakter giriniz",
  boyut: "Pizza boyutu seçiniz",
  hamur: "Hamur kalınlığı seçiniz",
  malzeme: "En az 3 malzeme seçiniz",
};

const boyutFiyatlari = {
  kucuk: 150,
  orta: 250,
  buyuk: 300
};

const hamurFiyatlari = {
  ince: 0,
  orta: 50,
  kalın: 100
};


export default function Form() {

  
  const [ formData, setFormData] = useState(initialForm);
  const [ errors, setErrors ] = useState({
    isim: false,
    boyut: false,
    hamur: false,
    malzeme: false,
  })
  const [isValid, setIsValid] = useState(false);
  const [malzemeTutari, setMalzemeTutari] = useState(0)
  const [toplamFiyat, setToplamFiyat] = useState(85.50);
  
  const herMalzeme = 5;

  const sayiyiArtir = () => {
    setFormData(prevFormData => ({...prevFormData, adet: prevFormData.adet + 1
    }));
  };

  const sayiyiAzalt = () => {
    setFormData(prevFormData => ({...prevFormData, adet: prevFormData.adet > 1 ? prevFormData.adet - 1 : 1
    }));
  };

  
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    if (type === 'checkbox') {
      const updatedMalzemeler = checked ? formData.malzeme.includes(value)  ? formData.malzeme : [...formData.malzeme, value]  : formData.malzeme.filter(malzeme => malzeme !== value);
  
      setFormData({...formData, malzeme: updatedMalzemeler});

      setMalzemeTutari(updatedMalzemeler.length * herMalzeme);

    } else if (name=="isim") {
        if(value.trim().length >= 3) {
          setErrors({...errors, [name]: false})
        } else {
          setErrors({...errors, [name]: true})
        }
        setFormData({
          ...formData, [name]: value
        });

    } else {
      setFormData({
        ...formData, [name]: value
      });
    }
  };

  useEffect(() => {
    const isNameValid = formData.isim.trim().length >= 3;
    const isMalzemeValid = formData.malzeme.length >= 4;
    const isBoyutSelected = formData.boyut !== '';
    const isHamurSelected = formData.hamur !== '';

    if (isNameValid && isMalzemeValid && isBoyutSelected && isHamurSelected) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  useEffect(() => {
    const boyutFiyat = boyutFiyatlari[formData.boyut] || 0;
    const hamurFiyat = hamurFiyatlari[formData.hamur] || 0;
    const malzemeFiyat = malzemeTutari;
  
    setToplamFiyat(85.50 + boyutFiyat + hamurFiyat + malzemeFiyat);
  }, [formData.boyut, formData.hamur, malzemeTutari]);


  function handleSubmit(event) {
    if(!isValid) return;
    event.preventDefault();

    axios.post('https://reqres.in/api/pizza', formData)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
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
    <Boyutsec data-cy="boyut-input">
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

    <Hamursec data-cy="hamur-input">
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
    <Malzemesecim data-cy="malzeme-input" onSubmit={handleSubmit}>
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
      {errors.malzeme && <FormFeedback>{errorMessages.malzeme}</FormFeedback>}
    </Malzemesecim>
    </Ekmalzemeler>

    <Isım >
    <form  onSubmit={handleSubmit}>
    <h3>İsim</h3>
    <Input
     data-cy="ad-input"
    id="isim"
    name="isim"
    value={formData.isim}
    onChange={handleChange}
    type="text"
    aria-invalid={errors.isim}
    />
    {errors.isim && <FormFeedback>{errorMessages.isim}</FormFeedback>}
    </form>
    </Isım>

    <Siparisnotu onSubmit={handleSubmit} className='text-area'>
    <h3>Sipariş Notu</h3>  
        <textarea
          id="not"
          name="not"
          rows="4" 
          cols="50" 
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          onChange={handleChange}
          value={formData.not}
        /> 
    </Siparisnotu>

    <Hesapozeti>
      
    <div className='ekle'>
      <button
      onSubmit={handleSubmit}
      id="adet"
      name="adet"
      onClick={sayiyiAzalt}
      onChange={handleChange}
      value={formData.adet}
      type="button"
      >-</button>
      <p>{formData.adet}</p>
      <button
      onSubmit={handleSubmit}
      id="adet"
      name="adet"
      onClick={sayiyiArtir}
      onChange={handleChange}
      value={formData.adet}
      type="button"
      >+</button>
    </div>
    
    <Siparisver onSubmit={handleSubmit}>
    <div className='siparis-container'>
    <div className='siparis-toplamı'>
      <h4>Sipariş Toplamı</h4>
      <div className='secimler'>
        <p>Seçimler</p>
        <p  className='secim-p'>{malzemeTutari.toFixed(2)}₺</p>
      </div>
      <div className='toplam'>
        <p  className='toplam-p'>Toplam</p>
        <p  className='toplam-p'>{toplamFiyat.toFixed(2)}₺</p>
      </div>
    </div>
    
    </div>
    <Link to="/onay"><button data-cy="siparis-input" className='siparis-button' disabled={!isValid}>Sipariş Ver</button></Link>
    </Siparisver>
    </Hesapozeti>
    </Formsection>
    </>



  );
}
