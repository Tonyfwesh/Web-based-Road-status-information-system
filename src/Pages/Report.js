import React,{useEffect, useState} from 'react'
import "../Style/badroad.css"
import { Navigate } from 'react-router-dom'
import {useAuth} from "../context/AuthContext"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { db } from '../config/firebase'
import {collection,addDoc, getDocs}from "firebase/firestore"

const Report = () => {
  const [state, setState]= useState("")
  const [surname,setSurname] = useState("")
  const [firstname,setfirstname] = useState("")
  const [othername, setOthername] = useState("")
  const [email, setEmail] = useState("")
  const [phonenumber,setPhonenumber] = useState("")
  const [city,setCity] = useState("")
  const [address,setAddress] = useState("")
  const [rating,setRating] = useState("")
  const [describe,setDescribe] =useState("")


  const {currentUser} = useAuth()
  if (!currentUser) {
    return <Navigate to="/Login" />
  }

  const userCollectionRef = collection(db,"userdetailsreview")

  const createUser= async() => {
    await addDoc(userCollectionRef,{surname: surname, firstname:firstname, othername:othername,
    email:email, phonenumber:phonenumber,city:city, address:address, roaadrating:rating, describetheriad:describe})
  }

  // useEffect(() =>{
  //   constgetUsers = async() => {
  //     const data = await getDocs(userCollectionRef)
  //     setUsers(data.docs.map((docs) =>({...docs.data(),id:docs.id})))
  //   }
  //   getUsers()
  // },  [])
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
           onChange={(e) => {setfirstname(e.target.value)}}
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
           <input type='file' name='file' id='file'></input>
           
          
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
