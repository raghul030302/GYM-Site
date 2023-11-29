import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className=" d-flex text-light justify-content-around content">
            <div className="">
                <ul className=' list-unstyled '>
                    <li className='fhead fw-bold text-info'>Menu</li>
                    <li>Home</li>
                    <li>premium</li>
                    <li>Exercise</li>
                    <li>Calorie</li>
                    <li>Diet</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="">
                <ul className=' list-unstyled '>
                    <li className='fhead fw-bold text-info '>Service</li>
                    <li>Weight Loss</li>
                    <li>Diet</li>
                    <li>Cutting</li>
                    <li>Bulking</li>
                </ul>
            </div>
            <div className="">
                <ul className=' list-unstyled '>
                    <li className='fhead fw-bold text-info'>Collaborate</li>
                    <li>FS Gym</li>
                    <li>Gold's Gym</li>
                    <li>Iron Gym</li>
                    <li>Waves Gym</li>
                    <li>Fitty Gym</li>
                </ul>
            </div>
        </div>
        <div className="rights bg-info py-3 d-flex justify-content-center text-light fw-semibold "><div>@2023 [Your Gym's Name]. All Rights Reserved </div></div>
    </footer>
  )
}

export default Footer