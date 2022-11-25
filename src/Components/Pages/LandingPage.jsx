import React from 'react'
import Navbar from '../Navbar'
import home from "./home.svg"
import "./Landing.css"

const LandingPage = () => {
  return (
    <div className='bg-sky-500'>
        <Navbar/>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <h1 className='text-4xl font-extrabold text-center mt-5'>Sapasikolog</h1>
                </div>
                
                <div>
                    <img src={home} alt="Image Not Found"/>
                </div>
            </div>
    </div>
  )
}

export default LandingPage