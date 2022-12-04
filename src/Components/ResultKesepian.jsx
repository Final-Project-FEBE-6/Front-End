import React from 'react'


function ResultKesepian() {
  return (
      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-20 mr-4 mt-10 mb-20">
          <div className="w-full rounded-lg bg-sky-200 shadow-md lg:max-w-md hover:bg-white">
              <div className="p-4">
                  <h1 className="text-center text-3xl font-extrabold text-sky-600"> 
                    {items.testResult}
                  </h1> <br />
                  <h3 className="text-2xl text-sky-600"> 
                    OVT skor :
                  </h3><h3 className="text-2xl font-bold text-sky-600">{items.skor}</h3>
                  <p className="leading-normal text-xl text-base mb-2 mt-10">
                    {items.deskripsi}</p>
              </div>
          </div>
      </div>
  )
}

export default ResultKesepian