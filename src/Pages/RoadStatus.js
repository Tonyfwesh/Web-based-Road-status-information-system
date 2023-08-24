import React, {useState, useEffect} from 'react'
import Map from '../Component/Map'
import "../Style/roadstatus.css"
import img1 from "../image/roadsatus2.jpg"
import { Navigate } from 'react-router-dom'
import {useAuth} from "../context/AuthContext"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import axios from 'axios'
import Modal from 'react-modal';
import { db } from '../config/firebase';
import { collection, getDocs, addDoc } from "firebase/firestore"


const modalStyles = {
  content: {
    width: '40%',
    margin: 'auto',
    padding: '20px',
    height: "500px"
  },
};

Modal.setAppElement('#root');

const RoadStatus = () => {

  const [newName, setNewName] = useState("")
  const [newReview, setNewReview] = useState("")
  const [users, setUsers] = useState([])
  const [data, setData] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const openModal = (index) => {
    setSelectedStory(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedStory(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersColectionRef)
      setUsers(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })))
    }
    getUsers()
  }, [])


  const valRef = collection(db, 'userdetailsreview');
  useEffect(() => {
    const getData = async () => {
      const dataDb = await getDocs(valRef);
     
      setData(dataDb.docs.map((docs) => ({ ...docs.data(), id: docs.id })))
    }
    getData()
  }, [])


  const usersColectionRef = collection(db, "review")

  const createUser = async () => {
    await addDoc(usersColectionRef, { name: newName, email: newReview })


  }
  const {currentUser} = useAuth()
  if (!currentUser) {
    return <Navigate to="/signin" />
  }

  
  return (
    <>
    <Navbar/>
     
          <div className='header'>
      Tffic Flow Condition Status
      <p>Find out the trafffic condition in your area</p>
      </div> 
      <div className='mapstatus'>
<h1>GET AHEAD OF TRAFFIC JAMS!</h1>
<h6>Beat the traffic and stay ahead of delays! Get access to real-time traffic updates and ensure a smooth journey. 
  Don't let congestion catch you off guard. Plan your route with the latest traffic status at your fingertips. </h6>
<button className='bttn'> <a className= "omo" href="https://road-status-traffic.w3spaces.com/traffic.html">View Traffic Status</a></button>

</div>
 
<div className='header'>
     Bad Road Status
     </div> 
     <p>Reports on bad road in Enugu state</p>
     <div className='grid'>
{data.map((user, index) => (
              <div key={index} className='box'   onClick={() => openModal(index)}>
               
             <div className='content'>
  <img src={user.imgurl} />
  <div className='details'>
        <h2>{user.city} Road</h2>
        <p>{user.describetheriad}</p>
        </div>
        </div>
                </div>
                
              ))}
                <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Story Modal"
      >
        <button className="close-btn" onClick={closeModal}>X</button>
        {selectedStory !== null && (
          <div className="modal-content">
            <h2 className='modal-head'>{data[selectedStory].city} Road</h2>
            <div className='modal-details'>Name: {data[selectedStory].firstname}</div>
            <div className='modal-details'>Road Address: {data[selectedStory].address}</div>
            <div className='modal-details'>Description: {data[selectedStory].describetheriad}</div>
          </div>
        )}
      </Modal>
              </div>
     

      <div className='header'>
      Road Condition Status
      <p>Tell us about the road condition in your area</p>
      </div> 
      <div>
      <input type='text' className='ccomment'
       onChange={(e) => { setNewName(e.target.value) }}
       placeholder='Enter your username'/>
      <label for="commentt" className='commentt'></label>
           <textarea 
            onChange={(e) => { setNewReview(e.target.value) }}
           className='typee' type='text' placeholder='Please type your current road cndition here '
           ></textarea>
           <button className='link'onClick={createUser}>Add messge</button>
           </div>

           {users.map((user, index) => (
              <div key={index} className=' contain'>
              <p className='mini-text'>{user.name}</p>
              <div className='rectangle'>
                <p className='chat'>
               {user.email}
                </p>
                
                </div>
                <hr/>
                </div>
              ))}
     

      
<Footer/>
    </>
  )
}

export default RoadStatus
