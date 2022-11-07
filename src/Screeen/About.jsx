import React from 'react'
import { useNavigate } from 'react-router-dom'
import back from './img/Back.png'

export default function About() {
  const navigate = useNavigate ()
  return (
<>
  <div className='container'>
    <div className='bg-about'>
        <div className="opacity">
          <img src={back} onClick={()=>navigate("/")}  alt="Icon.Back" className='back'/>
          <h1 className='aboutUs'>About Us</h1>
          <p className='p-about'>More than 10 years, Ramdans Travel Services has grow at a steady pace and become one of Indonesia's leading travel agent offering a complete travel solution for both leisure and business travels. The company has over 500 staff within 24 branches across the country
          </p>
        </div>
      </div>
  </div>
</>
  )
}
