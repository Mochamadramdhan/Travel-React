import React from 'react'
import IconBali from './img/IconBali.png'
import { useNavigate } from 'react-router-dom'
import './Style.css'


export default function Home() {
  const navigate = useNavigate ()
  return (
    <><body>
    <div className='container bg-index'>
            
            <div className='squere'> 
                <img src={IconBali} alt="Logo.IconBali" className='IconBali'/>
                <h1 className='h1-White'>A Better way to</h1>
                <h1 >Travel to Bali</h1>
                <p className='index'>Cheapest and  Easier</p>
                <div className='container-button-index'>
                  <div onClick={()=>navigate("About")} className='button about'>About Us</div>
                  <div onClick={()=>navigate("Users")} className='button reservation'>Reservation</div>
            </div>
            </div>
    </div>
    
    
</body></>
  )
}
