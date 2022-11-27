import React from 'react'
import Navbar from '../Navbar'
import './Landing.css'
import boy from "./boy.svg"

const AboutUs = () => {
    const about = [
        {
          nama : "Diego Alfiandro",
          title : "Front-End Dev",
          pesan : "Not Bad"
        },
        {
            nama : "Diego Alfiandro",
            title : "Front-End Dev & Leader",
            pesan : "Not Bad"
          },
          {
            nama : "Diego Alfiandro",
            title : "Front-End Dev",
            pesan : "Not Bad"
          },
          {
            nama : "Diego Alfiandro",
            title : "Front-End Dev",
            pesan : "Not Bad"
          },
          {
            nama : "Diego Alfiandro",
            title : "Front-End Dev",
            pesan : "Not Bad"
          },
          {
            nama : "Diego Alfiandro",
            title : "Front-End Dev",
            pesan : "Not Bad"
          },
      ]
    return (
        <>
            <Navbar/>
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 ml-20 mr-20 mt-10 mb-20">
                    {about.map((items, key) => (
                        <div className="w-full rounded-lg bg-sky-200 shadow-md lg:max-w-md hover:bg-sky-400" key={key} style={{}}>
                            <div className="p-4">
                               <img src={boy} alt="belom ada" />
                                <h3 className="text-xl font-bold text-sky-600">{items.nama}</h3>
                                <h2 className="text-xl text-sky-600 text-center">{items.title}</h2>
                                <p className="mb-2 leading-normal text-black-700 text-base mb-2 mt-10">
                                    {items.pesan}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default AboutUs