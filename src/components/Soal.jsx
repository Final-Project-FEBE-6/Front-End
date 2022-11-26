import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import "../pages/Result.css"
import picture from '../assets/result.png'
import {Link} from 'react-router-dom'
// import ResultCategory from './ResultCategory'
import {
  // increment_1,
  // increment_2,
  // increment_3,
  // increment_4,
  // increment_5,
  increment_skor,
} from "../redux/reducer/SkorReducer"
import ResultCategory from './ResultCategory'

const soal = [
   "1. Dalam satu minggu terakhir, seberapa sering Kamu merasa bahwa Kamu tidak dapat mengendalikan hal-hal yang penting dalam hidup Kamu?",
   "2. Dalam satu minggu terakhir, seberapa sering Kamu menemukan bahwa Kamu tidak dapat mengatasi segala hal yang harus dilakukan?",
   "3. Dalam satu minggu terakhir, seberapa sering Kamu merasa gelisah dan stres?",
   "4. Dalam satu minggu terakhir, seberapa sering Kamu mampu mengendalikan hal-hal yang mengganggu dalam hidup Kamu?",
   "5. Dalam satu minggu terakhir, seberapa sering Kamu merasa kesal karena sesuatu yang terjadi secara tidak terduga?",
   "6. Dalam satu minggu terakhir, seberapa sering Kamu merasa ada berbagai kesulitan yang menumpuk begitu banyak sehingga Kamu tidak dapat mengatasinya?",
   "7. Dalam satu minggu terakhir, seberapa sering Kamu merasa yakin terhadap kemampuan Kamu dalam menangani masalah pribadi?",
   "8. Dalam satu minggu terakhir, seberapa sering Kamu merasa bahwa Kamu dapat mengendalikan hal-hal dalam hidup Kamu?",
   "9. Dalam satu minggu terakhir, seberapa sering Kamu merasa marah karena hal-hal yang terjadi di luar kendali Kamu?",
   "10. Dalam satu minggu terakhir, seberapa sering Kamu merasa bahwa segala sesuatu berjalan sesuai keinginan Kamu?"
  ]

function Soal() {
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

  // const Increment_1 = () => {
  //   dispatch(increment_1())
  //   setSkor(skor + 1)
  // }
  // const Increment_2 = () => {
  //   dispatch(increment_2())
  //   setSkor(skor + 2)
  // }
  // const Increment_3 = () => {
  //   dispatch(increment_3())
  //   setSkor(skor + 3)
  // }
  // const Increment_4 = () => {
  //   dispatch(increment_4())
  //   setSkor(skor + 4)
  // }
  // const Increment_5 = () => {
  //   dispatch(increment_5())
  //   setSkor(skor + 5)
  // }

  return (
    <>
      {changeDisplay ? <div className="" style={{margin : '3rem'}}>
        <h2 className="italic font-bold text-2xl text-white ">SapaSikolog.com</h2>
        <h5 className="text-xl">{soal[index]}</h5>
              <div className="jawaban mt-10 font white">
                  <button id="1" onClick={() => setSkor(1)}>Tidak Pernah</button>
                  <button id="2" onClick={() => setSkor(2)}>Jarang</button>
                  <button id="3" onClick={() => setSkor(3)}>Kadang-kadang</button>
                  <button id="4" onClick={() => setSkor(4)}>Cukup Sering</button>
                  <button id="5" onClick={() => setSkor(5)}>Sering</button>
              </div>
        <div className="tombol">
              {changeButton ? 
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl" onClick={handleDisplay}>Selesai</button> : 
              <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl" onClick={handleClick}>Selanjutnya</button>}
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
      <ResultCategory/>
    </div>}
    </>
  )
}

export default Soal