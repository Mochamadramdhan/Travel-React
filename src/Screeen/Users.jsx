import React from 'react'
import { useNavigate } from 'react-router-dom'
import back from './img/Back.png'

export default function Users() {
    const navigate = useNavigate ()
  return (
<>
    <div className='container'>
        <div className='bg-reservation'>
            <div className="opacity">
                <img src={back} onClick={()=>navigate("/")}  alt="Icon.Back" className='back'/>

                    <div className='form'>
                        <h1 className='Reservation'>Reservation</h1>
                        <input type="text" name="username" className='input-username' placeholder="Input your name" />
                        <input type="text" name="email"  placeholder="Input your email" />
                        <div className='container-phone'>
                            <input type="text" name="phone" className='Phone' placeholder="Phone number" />
                            <input type="text" name="select" className='select' placeholder="Select your nationality" />
                        </div>
                        <textarea name="biografi" placeholder="Explain about your trip"></textarea>
                    <div onClick={()=>navigate("#")} className='button-submit'>Submit</div>
            </div>

        </div>
    </div>
    </div>
</>
  )
}
