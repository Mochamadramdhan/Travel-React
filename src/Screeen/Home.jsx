import React from 'react'
import IconBali from './img/IconBali.png'
import { useNavigate } from 'react-router-dom'
import './Style.css'


export default function Home() {
  const navigate = useNavigate ()
  return (
    <><body>
    <div class="container bg-index">
            
            <div class="squere"> 
                <img src={IconBali} alt="Logo.IconBali" class="IconBali"/>
                <h1 class="h1-White">A Better way to</h1>
                <h1 >Travel to Bali</h1>
                <p class="index">Cheapest and  Easier</p>
                <div class="container-button-index">
                  <div onClick={()=>navigate("About")} class="button about">About Us</div>
                  <div onClick={()=>navigate("Users")} class="button reservation">Reservation</div>
            </div>
            </div>
    </div>
    
    
</body></>
  )
}
