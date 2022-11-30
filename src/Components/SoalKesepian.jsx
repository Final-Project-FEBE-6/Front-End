import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import "../pages/Result.css"
import picture from '../assets/result.png'
import {Link} from 'react-router-dom'
// import ResultCategory from './ResultCategory'
import {
  increment_skor,
} from "../redux/reducer/SkorReducer"
import ResultKesepian from './ResultKesepian'

const soal = [
   "1. Seberapa sering kamu merasa tidak bisa meminta bantuan ke siapapun? ",
   "2. Seberapa sering kamu merasa sendirian?",
   "3. Seberapa sering kamu merasa cocok dengan orang-orang di sekitarmu? ",
   "4. Seberapa sering kamu merasa tidak memiliki sahabat? ",
   "5. Seberapa sering kamu merasa bahwa kamu memiliki banyak kesamaan dengan orang di sekitarmu?",
   "6. Seberapa sering kamu merasa sebagai orang yang ramah dan mudah bergaul dengan orang lain?",
   "7. Seberapa sering kamu merasa dikucilkan oleh orang lain?",
   "8. Seberapa sering kamu merasa hubungan kamu dengan orang lain tidak bermakna?",
   "9. Seberapa sering kamu merasa terasing dari orang lain?",
   "10. Seberapa sering kamu merasa bahwa kamu memiliki teman untuk bercerita?",
  ]

function SoalKesepian() {
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
      <div className="pt-6 pb-16 bg-sky-100 w-14/12 mt-10 ml-10 mr-10 rounded-lg">
        <div className="">
            <h2 className="italic font-bold text-2xl mt-5 ml-10" style={{color : '#1B97CC'}}>SapaSikolog.com</h2>
            <p className="text-xl mt-10 ml-10">{soal[index]}</p>
                  <div className="jawaban mt-10 font white mr-10 ml-10">
                      <button id="1" onClick={() => setSkor(1)}>Tidak Pernah</button>
                      <button id="2" onClick={() => setSkor(2)}>Jarang</button>
                      <button id="3" onClick={() => setSkor(3)}>Kadang-kadang</button>
                      <button id="4" onClick={() => setSkor(4)}>Cukup Sering</button>
                      <button id="5" onClick={() => setSkor(5)}>Sering</button>
                  </div>
            <div className="tombol">
                  {changeButton ? 
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl mr-10" onClick={handleDisplay}>Selesai</button> : 
                  <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mr-10" onClick={handleClick}>Selanjutnya</button>}
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
                      <Link to={"/"}> HOME</Link>
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <ResultKesepian/>
    </div>}
    </>
  )
}

export default SoalKesepian;