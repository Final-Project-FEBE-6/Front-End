import React from 'react'
import Navbar from '../Navbar'
import './Landing.css'
import boy from './boy.svg'
import girl from './girl.svg'
import doctor from "./doctor.svg"

const AboutUs = () => {
    const about = [
        {
          gambar : `${boy}`,
          nama : "Diego Alfiandro",
          title : "Front-End Dev",
          pesan : "Not Bad"
        },
        {
            gambar : `${boy}`,
            nama : "Diego Alfiandro",
            title : "Front-End Dev & Leader",
            pesan : "Not Bad"
          },
          {
            gambar : `${boy}`,
            nama : "Diego Alfiandro",
            title : "Front-End Dev",
            pesan : "Not Bad"
          },
          {
            gambar : `${boy}`,
            nama : "Diego Alfiandro",
            title : "Front-End Dev",
            pesan : "Not Bad"
          },
          {
            gambar : `${girl}`,
            nama : "Diego Alfiandro",
            title : "Front-End Dev",
            pesan : "Not Bad"
          },
          {
            gambar : `${boy}`,
            nama : "Diego Alfiandro",
            title : "Front-End Dev",
            pesan : "Not Bad"
          },
      ]

    const fitur = [
      {
        fitur : "Tes Kesehatan Mental",
        deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis explicabo nesciunt quae aspernatur iure minima reiciendis quibusdam totam repellendus porro. Ipsum hic delectus quibusdam facilis cum sint! Tenetur, quidem quos?",
        kategori : "Ringan, Sedang, Berat"
      },
      {
        fitur : "Tes Tingkat Kesepian",
        deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis explicabo nesciunt quae aspernatur iure minima reiciendis quibusdam totam repellendus porro. Ipsum hic delectus quibusdam facilis cum sint! Tenetur, quidem quos?",
        kategori : "Ringan, Sedang, Berat"
      },
      {
        fitur : "Tes Tingkat Overthinking",
        deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis explicabo nesciunt quae aspernatur iure minima reiciendis quibusdam totam repellendus porro. Ipsum hic delectus quibusdam facilis cum sint! Tenetur, quidem quos?",
        kategori : "Ringan, Sedang, Berat"
      },
      {
        fitur : "Informasi Articel",
        deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis explicabo nesciunt quae aspernatur iure minima reiciendis quibusdam totam repellendus porro. Ipsum hic delectus quibusdam facilis cum sint! Tenetur, quidem quos?",
        kategori : ""
      },
      {
        fitur : "Daftar Psikolog",
        deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis explicabo nesciunt quae aspernatur iure minima reiciendis quibusdam totam repellendus porro. Ipsum hic delectus quibusdam facilis cum sint! Tenetur, quidem quos?",
        kategori : ""
      },
    ]
    return (
        <>
            <Navbar/>
            <div className="pt-6 pb-16 bg-sky-100 mt-10 w-14/12 ml-16 mr-14 rounded-lg ">
              <div className="flex lg:flex-row mt-20 gap-20 items-center md : flex-col">
                  <div className='basis-auto ml-20 mr-20'>
                      <h1 className='text-4xl font-extrabold text-base' style={{color : '#1B97CC'}}>Sapasikolog</h1><br />
                      <p className='font-normal text-lg'> <b className='text-2xl' style={{color : '#1B97CC'}}> Sapasikolog </b> merupakan sebuah platform yang menyediakan layanan tes kesehatan mental. Kami berfokus pada tes kesehatan mental bagi remaja dengan rentang usia 18 - 20 tahun</p><br />
                  </div>
                  
                  <div className='basis-auto object-center ml-10 mr-10'>
                      <img src={doctor} alt="Image Not Found"/>
                  </div>
              </div>
            </div>
            <div className="pt-6 pb-16 bg-sky-100 w-14/12 mt-10 ml-16 mr-14 rounded-lg">
              <h1 className='text-center font-extrabold text-5xl' style={{color : '#1B97CC'}}>Fitur</h1>
              <div className="grid gap-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 ml-20 mr-20 mt-10 mb-20">
                      {fitur.map((items, key) => (
                          <div className="w-full rounded-lg bg-sky-200 hover:bg-sky-400 hover:shadow-lg mt-10" key={key} style={{}}>
                              <div className="p-4">
                                  <h3 className="text-xl text-center font-bold text-sky-600 mt-5">{items.fitur}</h3>
                                  <p className="mb-2 text-center leading-normal text-black-700 text-base mb-2 mt-10">
                                     {items.deskripsi}</p>
                                  <h2 className="text-2xl text-sky-600 text-center mt-3">{items.kategori}</h2>
                              </div>
                          </div>
                      ))}
              </div>
        </div>
            <div className="pt-6 pb-16 bg-sky-100 mt-10 w-14/12 ml-16 mr-14 rounded-lg mb-5 ">
            <h1 className='text-4xl font-extrabold text-center' style={{color : '#1B97CC'}}>TEAM</h1><br />
              <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 ml-20 mr-20 mt-10 mb-20">
                      {about.map((items, key) => (
                          <div className="w-4/5 rounded-lg bg-sky-200 lg:max-w-sm hover:bg-sky-400 hover:shadow-lg mt-10" key={key} style={{}}>
                              <div className="p-4">
                                <img className=' w-11/12 hover:w-full' src={items.gambar} alt="belom ada" />
                                  <h3 className="text-xl text-center font-bold text-sky-600 mt-5">{items.nama}</h3>
                                  <h2 className="text-2xl text-sky-600 text-center mt-3">{items.title}</h2>
                                  <p className="mb-2 text-center leading-normal text-black-700 text-base mb-2 mt-10">
                                     " {items.pesan} "</p>
                              </div>
                          </div>
                      ))}
              </div>
            </div>
        </>
    )
}

export default AboutUs