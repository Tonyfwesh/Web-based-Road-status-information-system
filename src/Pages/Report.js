import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { db } from '../config/firebase';
import {
  collection,
  addDoc,
} from 'firebase/firestore';
import { storage } from '../config/firebase';
import { v4 } from 'uuid';
import {
  getDownloadURL,
  uploadBytes,
  ref,
} from 'firebase/storage';
import "../Style/badroad.css"

const Report = () => {
  const [state, setState] = useState('');
  const [surname, setSurname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [othername, setOthername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [rating, setRating] = useState('');
  const [describe, setDescribe] = useState('');
  const [img, setImg] = useState('');

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleUpload = (e) => {
    const imgs = ref(storage, `imgs/${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        setImg(val);
      });
    });
  };

  const valRef = collection(db, 'userdetailsreview');

  const createUser = async (e) => {
    e.preventDefault();
    
    await addDoc(valRef, {
      surname: surname,
      firstname: firstname,
      othername: othername,
      imgurl: img,
      email: email,
      phonenumber: phonenumber,
      city: city,
      address: address,
      roaadrating: rating,
      describetheriad: describe,
    });
    alert('Data added successfully');
  };

  if (!currentUser) {
    return <Navigate to="/signin" />;
  }
 
  return (
    <>
    <Navbar/>
    <div className='holder'>
      <div className='formbox'>
        <h1>Report a Bad Road</h1>
        <h6>Kindly report a  Road you consider bad. We shall attend to your feedback as soon as possible.</h6>
        <form>
          <div className='input-group'>
          <label for="name">Surname:</label>
           <input type='text' 
           onChange={(e) => {setSurname(e.target.value)}}
           placeholder='Surname'></input>
          
           <label for="name">First Name:</label>
           <input type='text' placeholder='First Name'
           onChange={(e) => {setFirstname(e.target.value)}}
           ></input>
           
           <label for="name">Other Names:</label>
           <input type='text' placeholder='Other Name'
           onChange={(e) => {setOthername(e.target.value)}}
           ></input>
           
           <label for="email">E-mail:</label>
           <input type='email' placeholder='E-mail'
           onChange={(e) => {setEmail(e.target.value)}}
           ></input>
         
           <label for="email">Phonenumber:</label>
           <input type='digit' placeholder='Phonenumber'
           onChange={(e) => {setPhonenumber(e.target.value)}}
           ></input>
           
           <label for="state">State:</label>
           <input type='text' value={state} placeholder='Enugu'></input>
           
           <label for="city">City:</label>
           <input type='text' placeholder='city'
           onChange={(e) => {setCity(e.target.value)}}
           ></input>
           
           <label for="location">Address of bad road:</label>
           <input type='text' placeholder=' '
           onChange={(e) => {setAddress(e.target.value)}}
           ></input>
         
           <label for="badroad">HOW WOULD YOU rate THE STATE OF THE ROAD:</label>
           <select
           onChange={(e) => {setRating(e.target.value)}}
           >
           <option value=""> </option>
            <option value="">Bad</option>
            <option value="">Very Bad</option>
            <option value="">Totally damaged</option>
           </select>
           
           <label for="badroad">DESCRIBE THE bad ROAD:</label>
           <textarea className='type' type='text' placeholder='Please type our description here '
           onChange={(e) => {setDescribe(e.target.value)}}
           ></textarea>

           <label for="picture">Attach File:</label>
           <input type='file' name='file' id='file' onChange={(e) =>handleUpload(e)}></input>
           
          
          <button className='button' onClick={createUser}> submit </button>
          </div>
        </form>
        </div>      
    </div>
    <Footer/>
    </>
  )
}

export default Report
