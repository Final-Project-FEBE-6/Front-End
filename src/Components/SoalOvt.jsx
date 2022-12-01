import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import "../pages/Result.css"
import picture from '../assets/result.png'
import {Link} from 'react-router-dom'
// import ResultCategory from './ResultCategory'
import { increment_skor,} from "../redux/reducer/SkorReducer"
import ResultOvt from './ResultOvt'

const soal = [
  "1. Apakah kamu pernah berpikir “Aku kesepian”? ",
  "2. Apakah kamu pernah berpikir “Ketika aku tidak dapat keluar dari kondisi ini , aku tidak bisa melanjutkan study?“ ",
  "3. Apakah kamu pernah berpikir “Aku lelah dan tidak nyaman dengan kondisi ini” ",
  "4. Apakah menurut kamu “Berkonsentrasi adalah hal yang sulit” ? ",
  "5. Apakah kamu pernah berpikir “Aku tidak termotivasi untuk melakukan aktivitas apapun?“ ",
  "6. Apakah kamu pernah mencoba menganalisis hal yang baru saja terjadi untuk mencari penyebab mengapa aku merasa depresi",
  "7. Apakah kamu pernah menuliskan isi pikiranmu dan menganalisis dengan lebih dalam",
  "8. Apakah kamu pernah memikirkan situasi saat ini dan berharap andai saja kondisinya lebih baik",
  "9. Apakah kamu pernah berpikir Aku tidak dapat berkonsentrasi jika terus menerus merasakan hal ini",
  "10. Apakah kamu pernah memikirkan semua kegagalan, kekurangan, dan kesalahan yang kamu alami",
  ]

function SoalOvt() {
  const [changeButton, setChangeButton] = useState(false)
  const [index, setIndex] = useState(0)
  const [changeDisplay, setDisplay] = useState(true)

  const dispatch = useDispatch();
  const [skor, setSkor] = useState(0);
  const [hasilSkor, setHasilSkor] = useState(0);

  const handleClick = () => {
    dispatch(increment_skor(hasilSkor));
    setHasilSkor(skor + hasilSkor);
    setIndex(index + 1)
    if (index == soal.length -2) {
      setChangeButton(true)
    }
  }

  const handleDisplay = () =>{
    setHasilSkor(skor + hasilSkor);
    setDisplay(false)
  }


  return (
    <>
      {changeDisplay ? 
      <div className="pt-6 pb-16 bg-sky-100 w-14/12 mt-20 ml-10 mr-10 rounded-lg">
      <div className="">
          <h2 className="italic font-bold text-3xl  ml-10" style={{color : '#1B97CC'}}>SapaSikolog.com</h2>
          <p className="text-xl mt-20 ml-20">{soal[index]}</p>
                <div className="jawaban mt-10 font white mr-20 ml-20">
                    <button id="1" onClick={() => setSkor(1)}>Tidak Pernah</button>
                    <button id="2" onClick={() => setSkor(2)}>Jarang</button>
                    <button id="3" onClick={() => setSkor(3)}>Kadang-kadang</button>
                    <button id="4" onClick={() => setSkor(4)}>Cukup Sering</button>
                    <button id="5" onClick={() => setSkor(5)}>Sering</button>
                </div>
          <div className="tombol">
                {changeButton ? 
                <button className="bg-red-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-xl mr-20" onClick={handleDisplay}>Selesai</button> : 
                <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-xl mr-20" onClick={handleClick}>Selanjutnya</button>}
          </div>
      </div>
    </div>
    : 
    <div className='card-result'>
      <div className="mt-10">
        <div className="flex justify-center ">
          <div className="rounded-lg shadow-lg bg-white max-w-md shadow-md">
            <h1 className="text-2xl font-black text-violet-400 text-center mt-3 mb-5 shadow-sm">Sapasikolog.com</h1>
              <div className="p-6">
                  <img src={picture} alt="Image Not Found"/>
                  <h3 className="text-center text-gray-900 text-2xl font-extrabold mb-10">SKOR TES ANDA : {hasilSkor}</h3>
                  <p className="text-black-700 text-center mb-2">Informasi selengkapnya ada pada card dibawah ini</p>
                  <div className="text-center mt-10">
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-violet-200 text-black font-medium text-s leading-tight uppercase rounded shadow-md hover:bg-violet-400 hover:shadow-lg text-white focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      <Link to={"/"}>HOME</Link>
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <ResultOvt/>
    </div>}
    </>
  )
}

export default SoalOvt;