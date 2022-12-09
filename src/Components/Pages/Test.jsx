import React from 'react'
import './Soal.css'
import {Link} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import stress from '../assets/stress.svg'
import kesepian from '../assets/kesepian.svg'
import ovt from '../assets/ovt.svg'

function Test() {
  return (
    <>
      <Navbar/>
      <div className='mt-20'>
          <div className='card-result'>
            <div className="mt-10">
              <div className="flex justify-center ">
                <div className="rounded-lg shadow-lg bg-white max-w-md shadow-md">
                  <h1 className="text-2xl font-black text-violet-400 text-center mt-3 mb-5 shadow-sm">Sapasikolog.com</h1>
                    <div className="p-6">
                        <img src={stress} alt="" />
                        <h3 className="text-center text-gray-900 text-2xl font-extrabold mb-5 mt-3">STRESS TEST</h3>
                        <p className="text-black-700 text-center mb-2">Stres adalah reaksi seseorang baik secara fisik maupun emosional (mental/psikis) apabila ada perubahan dari lingkungan yang mengharuskan seseorang menyesuaikan diri.</p>
                        <div className="text-center mt-10">
                          <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-violet-200 text-black font-medium text-s leading-tight uppercase rounded shadow-md hover:bg-violet-400 hover:shadow-lg text-white focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            <Link to={"/stress"}>Test</Link>
                          </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ml-20 mr-20 mt-10 mb-20">
          <div className="flex justify-center ">
                <div className="rounded-lg shadow-lg bg-white max-w-md shadow-md">
                  <h1 className="text-2xl font-black text-violet-400 text-center mt-3 mb-5 shadow-sm">Sapasikolog.com</h1>
                    <div className="p-6">
                        <img src={kesepian} alt="" className='rounded-full'/>
                        <h3 className="text-center text-gray-900 text-2xl font-extrabold mb-5 mt-3">TES TINGKAT KESEPIAN</h3>
                        <p className="text-black-700 text-center mb-2 mt-2">Rasa kesepian yang tinggi dikhawatirkan dapat memicu masalah terhadap kesehatan mental kamu. 
                        Cek tingkat kesepianmu sebagai langkah awal dalam mengurangi risiko.</p>
                        <div className="text-center mt-10">
                          <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-violet-200 text-black font-medium text-s leading-tight uppercase rounded shadow-md hover:bg-violet-400 hover:shadow-lg text-white focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            <Link to={"/kesepian"}>Test</Link>
                          </button>
                      </div>
                  </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className="rounded-lg shadow-lg bg-white max-w-md shadow-md">
                  <h1 className="text-2xl font-black text-violet-400 text-center mt-3 mb-5 shadow-sm">Sapasikolog.com</h1>
                    <div className="p-6">
                        <img src={ovt} className="rounded-full" alt="" />
                        <h3 className="text-center text-gray-900 text-2xl font-extrabold mb-5 mt-3">TES TINGKAT OVERTHINKING</h3>
                        <p className="text-black-700 text-center mb-2">Overthinking adalah cara seseorang berpikir mengenai suatu hal secara berulang-ulang; terlalu mengkhawatirkan masa lalu 
                        atau memikirkan hal yang sama.</p>
                        <div className="text-center mt-10">
                          <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-violet-200 text-black font-medium text-s leading-tight uppercase rounded shadow-md hover:bg-violet-400 hover:shadow-lg text-white focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            <Link to={"/ovt"}>Test</Link>
                          </button>
                      </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Test