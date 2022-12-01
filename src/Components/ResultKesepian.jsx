import React from 'react'


function ResultKesepian() {
  const kategori = [
    {
      testResult : "Tinggi",
      skor : "33 < POIN",
      deskripsi : <>
      <p><b>Tingkat Kesepian Tinggi</b> Kamu memikirkan hal negatif secara berulang. Kamu juga tidak dapat mengendalikan hal tersebut. Kamu terlalu fokus pada kejadian dan perasaan negatif yang pernah kamu alami. Hal ini yang terkadang membuatmu sulit beraktivitas sehari-hari, seperti berkonsentrasi.</p> 
                  </>
    },
    {
      testResult : "Sedang",
      skor : "17 s/d 32",
      deskripsi : <>
                  <p><b>Tingkat Kesepian Sedang </b>
                  Kamu terkadang memikirkan hal negatif secara berulang. Tetapi Kamu masih dapat mengendalikan hal tersebut. Kamu terkadang fokus pada kejadian dan perasaan negatif yang pernah kamu alami. Hal ini yang terkadang membuatmu sulit berkonsentrasi.</p>
      </>
    },
    {
      testResult : "Rendah",
      skor : "POIN < 16",
      deskripsi : <>
                    <p> <b>Tingkat Kesepian Rendah</b> Kamu dapat mengendalikan pikiran-pikiran negatifmu dengan baik.<br/></p>
                    <p> Kamu tidak terlalu fokus pada kejadian dan perasaan negatif yang pernah kamu alami. Untuk terus bisa mengendalikan pikiranmu</p>
                  </>
  }
  ]
  
  return (
      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-20 mr-4 mt-10 mb-20">
      {kategori.map((items, key) => (
          <div className="w-full rounded-lg bg-sky-200 shadow-md lg:max-w-md hover:bg-white" key={key}>
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
      ))}
      </div>
  )
}

export default ResultKesepian