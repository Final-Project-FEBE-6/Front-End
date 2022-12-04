import React from 'react'
import Navbar from '../Navbar'
import './Landing.css'
import brucel from './AssetGambar/foto_brucel.jpg'
import vanya from './AssetGambar/foto_vanya.jpg'
import diego from './AssetGambar/foto_diego.jpeg'
import himawan from './AssetGambar/foto_himawan.jpeg'
import arif from './AssetGambar/foto_dino.png'
import dino from './AssetGambar/foto_arif.jpg'
import doctor from "./AssetGambar/doctor.svg"

const AboutUs = () => {
    const about = [
        {
          gambar : `${diego}`,
          nama : "Diego Alfiandro",
          title : "Front-End Dev",
          pesan : "Belajar web developer di Skilvul terutama dibidang Front-End Web Dev menyenangkan dan tidak membosankan"
        },
        {
            gambar : `${himawan}`,
            nama : "Himawan Ihza Pradana",
            title : "Front-End Dev & Leader",
            pesan : "Mendalami Front-End Web Development sangatlah seruu dan menyenangkan"
          },
          {
            gambar : `${brucel}`,
            nama : "Brucel Duta Samudera",
            title : "Front-End Dev",
            pesan : "Menuju tak terbatas dan melampauinya"
          },
          {
            gambar : `${arif}`,
            nama : "Arif Setiawan",
            title : "Back-End Dev",
            pesan : "Selama mengkuti StudiIndependen program Back-end Web Development di skilvul ini menurut saya sangat mengesankan, banyak ilmu yang saya dapatkan disini dan mentor-mentor nya sangat ramah dan membembing kita dengan baik."
          },
          {
            gambar : `${vanya}`,
            nama : "Vanya Mayazura P.",
            title : "Back-End Dev",
            pesan : "Skilvul membuat saya belajar hal baru dan semangat baru pokoknya mantap"
          },
          {
            gambar : `${dino}`,
            nama : "Zuhri Agusdino",
            title : "Front-End Dev",
            pesan : "Studi independent Back-end Web Development dari Skilvul memberi saya banyak pengetahuan dan sangat bermanfaat. Semoga kedepan nya materi pembelajaran yang dipakai skilvul lebih mendalam dan lebih baik lagi"
          },
      ]

    const fitur = [
      {
        fitur : "Tes Kesehatan Mental",
        deskripsi : "Tes kesehatan mental merupakan suatu kesehatan mental pada dasarnya adalah untuk mendeteksi lebih cepat atau menentukan risiko seseorang untuk mengalami gangguan mental, seperti gangguan kecemasan, depresi, gangguan bipolar,",
        kategori : "Ringan, Sedang, Berat"
      },
      {
        fitur : "Tes Tingkat Kesepian",
        deskripsi : "Rasa kesepian yang tinggi dikhawatirkan dapat memicu masalah terhadap kesehatan mental kamu.Rasa sepi, sedih, cemas, dan khawatir akan menghantui saat dukungan sosial yang diperlukan tak lagi bisa dirasakan oleh diri.",
        kategori : "Ringan, Sedang, Berat"
      },
      {
        fitur : "Tes Tingkat Overthinking",
        deskripsi : "Overthinking membuat seseorang terlalu banyak merenungi masa lalu, mengkhawatirkan masa depan, dan memikirkan berbagai kemungkinan yang belum tentu akan benar-benar terjadi.",
        kategori : "Ringan, Sedang, Berat"
      },
      {
        fitur : "Fitur Informasi Articel",
        deskripsi : "Pada bagian ini berfungsi untuk menampilkan beberapa articel terbaru terkait dengan pentingnya kesehatan mental dan beberapa literatur mengenai kesehatan mental yang umum dialami remaja",
        kategori : ""
      },
      {
        fitur : "Fitur Daftar Psikolog",
        deskripsi : "Pada fitur ini berisi daftar psikolog beserta data diri mulai dari Nama, Jenis kelamin, Alamat dan Kontak yang dapat dihubungi. User dapat melakukan konsultasi melalui kontak yang tersedia",
        kategori : ""
      },
    ]
    return (
        <>
            <Navbar/>
            <div className="pt-6 pb-16 bg-sky-100 mt-10 w-14/12 ml-10 mr-10 rounded-lg mt-20">
              <div className="flex lg:flex-row mt-20 gap-20 items-center md : flex-col">
                  <div className='basis-auto ml-20 mr-20'>
                      <h1 className='text-4xl font-extrabold text-base' style={{color : '#1B97CC'}}>Sapasikolog</h1><br />
                      <p className='font-normal text-lg'> <b className='text-2xl' style={{color : '#1B97CC'}}> Sapasikolog </b> merupakan sebuah platform yang menyediakan layanan tes kesehatan mental sebagai pendeteksi dini tingkat kesehatan mental yang dimiliki remaja. Kami berfokus pada kesehatan mental bagi remaja dengan rentang usia 18 - 20 tahun.</p><br />
                  </div>
                  
                  <div className='basis-auto object-center ml-10 mr-10'>
                      <img src={doctor} alt="Not Found"/>
                  </div>
              </div>
            </div>
            <div className="pt-6 pb-16 bg-sky-100 w-14/12 mt-10 ml-10 mr-10 rounded-lg">
              <h1 className='text-center font-extrabold text-5xl' style={{color : '#1B97CC'}}>Fitur</h1>
              <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols- ml-20 mr-20 mt-10 mb-20">
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
            <div className="pt-6 pb-16 bg-sky-100 mt-10 ml-10 mr-10 rounded-lg mb-5 ">
            <h1 className='text-4xl font-extrabold text-center' style={{color : '#1B97CC'}}>TEAM</h1><br />
              <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-20 mt-10 mb-20">
                      {about.map((items, key) => (
                          <div className="w-4/5 rounded-lg outline outline-3 shadow-md outline-sky-400 lg:max-w-sm hover:bg-sky-400 hover:shadow-lg mt-10" key={key} style={{}}>
                              <div className="p-4">
                                <img className='rounded-full' src={items.gambar} alt="belom ada" />
                                  <h3 className="text-xl font-bold text-center mt-5" style={{color : '#1B97CC'}}>{items.nama}</h3>
                                  <h2 className="text-xl text-sky-600 text-center mt-3">{items.title}</h2>
                                  <p className="mb-2 text-center leading-normal italic text-base mb-2 mt-10">
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