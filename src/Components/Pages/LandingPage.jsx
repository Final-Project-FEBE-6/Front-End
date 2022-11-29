import React from 'react'
import Navbar from '../Navbar'
import home from "./home copy.svg"
import "./Landing.css"

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <Navbar/>
           <div className="pt-6 pb-20 bg-sky-100 rounded-lg mt-10 mr-10 ml-10">
              <div className="flex lg:flex-row mt-20 gap-20 items-center md : flex-col">
                    <div className='basis-auto ml-10 mr-10'>
                        <h1 className='text-5xl font-extrabold text-base' style={{color : '#1B97CC'}}>Sapasikolog</h1><br />
                        <p className='text-xl font-lg'>Kesehatan mental adalah kondisi ketika batin dan watak manusia dalam keadaan normal, tenteram, dan tenang.
                        Mental yang sehat juga merupakan cikal bakal bagi diri kita untuk terus berkembang</p><br />
                        <p className=' text-lg mb-5 italic'> Cek Kesehatan Mentalmu Disini</p>
                        <button className='text-lg px-3 py-2 text-base outline outline-2 outline-blue-300 hover:text-white hover:text-xl hover:outline-3 hover:bg-sky-200 rounded' style={{backgroundColor:'#1B97CC'}}>Cek disini</button>
                    </div>
                    
                    <div className='basis-auto object-center ml-10 mr-10'>
                        <img src={home} alt="Image Not Found"/>
                    </div>
                </div>
           </div>
    </div>
  )
}

export default LandingPage