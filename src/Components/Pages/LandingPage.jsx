import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import home from "../Pages/AssetGambar/home copy.svg"
import "./Landing.css"

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <Navbar/>
           <div className="pt-6 pb-20 bg-sky-100 rounded-lg mt-20 mr-10 ml-10">
              <div className="flex lg:flex-row mt-20 gap-20 items-center md : flex-col">
                    <div className='basis-auto ml-10 mr-10'>
                        <h1 className='text-4xl font-extrabold text-base mb-5' style={{color : '#1B97CC'}}>Sapasikolog</h1>
                        <p className='text-2xl font-lg '>Mental yang sehat merupakan cikal bakal bagi diri kita untuk terus berkembang</p><br />
                        <p className='text-md font-lg'>Rutin cek kesehatan mentalmu supaya kesehatan mental kamu terjaga dan terhindar dari Stress, Depresi, Dan Overthinking berlebihan yang dapat menghambat aktifitasmu</p><br />
                        <p className=' text-sm mb-3 italic'>Cek Kesehatan Mentalmu Disini *</p>
                        <button className='text-lg px-3 py-2 text-base outline outline-2 outline-blue-300 hover:text-white hover:text-xl hover:outline-3 hover:bg-sky-200 rounded' style={{backgroundColor:'#1B97CC'}}>
                          <Link to={"/test"}>Cek disini</Link>
                        </button>
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