import React from 'react'


function ResultKesepian() {
  const kategori = [
    {
      testResult : "Berat",
      skor : "33 < POIN",
      deskripsi : <>
                    Hasil tes kamu menunjukkan kamu memiliki persepsi tingkat stres yang <b>Berat</b>. Saat ini kamu cenderung merasa memiliki banyak beban dalam hidupmu.<br/><br />
                    Mungkin kamu merasa tidak berdaya untuk menyelesaikan berbagai permasalahan yang kamu alami. Banyak hal tidak terduga yang terjadi dan kamu mulai merasa kehilangan kontrol atas hidupmu
                  </>
    },
    {
      testResult : "Sedang",
      skor : "17 s/d 32",
      deskripsi : <>
                  Hasil tes kamu menunjukkan persepsi tingkat stres yang <b>Sedang</b>. Saat ini kamu cenderung merasa tidak nyaman dengan kehidupanmu.<br/><br />
                  Mungkin kamu merasa ada hal-hal tidak terduga yang terjadi dalam hidupmu. Kamu juga mungkin mengalami kesulitan untuk mengatasi masalah-masalah yang sedang dihadapi.
      </>
    },
    {
      testResult : "Ringan",
      skor : "POIN < 16",
      deskripsi : <>
                    Hasil tes kamu menunjukkan persepsi tingkat stres yang <b>Ringan</b> Saat ini kamu cenderung merasa tidak nyaman dengan kehidupanmu. <br /><br />
                    Mungkin kamu merasa ada hal-hal tidak terduga yang terjadi dalam hidupmu. Kamu juga mungkin mengalami kesulitan untuk mengatasi masalah-masalah yang sedang dihadapi.
                  </>
  }
  ]
  
  return (
    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 ml-20 mr-20 mt-10 mb-20">
                  {kategori.map((items, key) => (
                      <div className="w-full rounded-lg bg-sky-200 shadow-md lg:max-w-md hover:bg-white" key={key}>
                          <div className="p-4">
                              <h1 className="text-center text-3xl font-extrabold text-sky-600"> 
                                {items.testResult}
                              </h1> <br />
                              <h3 className="text-xl text-sky-600"> 
                                Kesepian skor :
                              </h3><h3 className="text-xl font-bold text-sky-600">{items.skor}</h3>
                              <p className="mb-2 leading-normal text-black-700 text-base mb-2 mt-10">
                                {items.deskripsi}</p>
                          </div>
                      </div>
                  ))}
        </div>
  )
}

export default ResultKesepian