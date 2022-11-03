import React from 'react'
// import { useNavigate } from 'react-router-dom'
import back from './img/Back.png'
import './Style.css'

export default function users() {
  // const navigate = useNavigate ()
  return (
    <><body>
    <div class="container bg-reservation"></div>

    <div class="squere">
      {/* <img src={back} onClick={()=>navigate("/")}  alt="Icon.Back" class="back"/> */}

        <div class="form">
            <h1 class="Reservation">Reservation</h1>
                <input type="text" name="username" class="input-username" placeholder="Input your name" />
                <input type="text" name="email"  placeholder="Input your email" />
                <div class="container-phone">
                    <input type="text" name="phone" class="Phone" placeholder="Phone number" />
                    <input type="text" name="select" class="select" placeholder="Select your nationality" />
                </div>
                <textarea name="biografi" placeholder="Explain about your trip"></textarea>
                
            <a href="#" class="button-submit">Submit</a>
        </div>
    </div>
    

</body></>
  )
}
