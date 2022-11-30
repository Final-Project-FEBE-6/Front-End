import React from 'react'
import './Result.css'
import picture from '../assets/result.png'
import ResultCategory from '../components/ResultCategory'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-domnpm'

const Result = () => {
  const kategori = [
    {
      testResult : "Berat",
      deskripsi : <>
                    Hasil tes kamu menunjukkan kamu memiliki persepsi tingkat stres yang <b>Berat</b>. Saat ini kamu cenderung merasa memiliki banyak beban dalam hidupmu.<br/>
                    Mungkin kamu merasa tidak berdaya untuk menyelesaikan berbagai permasalahan yang kamu alami. Banyak hal tidak terduga yang terjadi dan kamu mulai merasa kehilangan kontrol atas hidupmu
                  </>
    },
    {
      testResult : "Ringan",
      deskripsi : <>
                    Hasil tes kamu menunjukkan persepsi tingkat stres yang <b>Ringan</b> Saat ini kamu cenderung merasa tidak nyaman dengan kehidupanmu. <br />
                    Mungkin kamu merasa ada hal-hal tidak terduga yang terjadi dalam hidupmu. Kamu juga mungkin mengalami kesulitan untuk mengatasi masalah-masalah yang sedang dihadapi.
                  </>
  },
    {
      testResult : "Sedang",
      deskripsi : <>
                  Hasil tes kamu menunjukkan persepsi tingkat stres yang <b>Sedang</b>. Saat ini kamu cenderung merasa tidak nyaman dengan kehidupanmu.<br/>
                  Mungkin kamu merasa ada hal-hal tidak terduga yang terjadi dalam hidupmu. Kamu juga mungkin mengalami kesulitan untuk mengatasi masalah-masalah yang sedang dihadapi.
      </>
    }
  ]

  const {skor} = useSelector(state => state)

  function hasil() {
    if(skor <= 16) {
      console.log("a")
    }else if(skor <= 32){
      console.log("b")
    }else {
      console.log("c")
    }
  }

  return (
    <div className='card-result'>
        <div className="mt-20">
        <div className="flex justify-center ">
          <div className="rounded-lg shadow-lg bg-white max-w-md shadow-md">
          <h1 className="text-2xl font-black text-violet-400 text-center mt-3 mb-5 shadow-sm">Sapasikolog.com</h1>
            <div className="p-6">
                <img src={picture} alt="Image Not Found"/>
                <ResultCategory testResult= "Berat" deskripsi={
                    <>
                        Hasil tes kamu menunjukkan kamu memiliki persepsi tingkat stres yang <b>Berat</b>. Saat ini kamu cenderung merasa memiliki banyak beban dalam hidupmu. <br/>
                        Mungkin kamu merasa tidak berdaya untuk menyelesaikan berbagai permasalahan yang kamu alami. Banyak hal tidak terduga yang terjadi dan kamu mulai merasa kehilangan kontrol atas hidupmu.
                    </>
                }/>
              
              <div className="text-center mt-10">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-violet-200 text-black font-medium text-s leading-tight uppercase rounded shadow-md hover:bg-violet-400 hover:shadow-lg text-white focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <Link to={"/"}>Kembali</Link>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result;