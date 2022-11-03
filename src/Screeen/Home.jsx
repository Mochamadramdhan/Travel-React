import React from 'react'
import IconBali from './img/IconBali.png'
import './Style.css'


export default function Home() {
  return (
    <><body>
    <div class="container bg-index">
            
            <div class="squere"> 
                <img src={IconBali} alt="Logo.IconBali" class="IconBali"/>
                <h1 class="h1-White">A Better way to</h1>
                <h1 >Travel to Bali</h1>
                <p class="index">Cheapest and  Easier</p>
                <div class="container-button-index">
                    <a href="about.html" class="button about">About Us</a>
                    <a href="reservation.html" class="button reservation">Reservation</a>
            </div>
            </div>
    </div>
    
    
</body></>
  )
}
