import React from 'react'
import './card.css'

const CardArt = () => {
    const Art = [
        {
            title: "Kesehatan Mental dan Kesejahteraan Hidup",
            url: "https://www.unicef.org/indonesia/id/kesehatan-mental?gclid=CjwKCAiAjs2bBhACEiwALTBWZQcHIOBC35mNqBa8VvTdBigYm7vrp9OfbIOIFCNMMewezOUsy_SB4BoC1nMQAvD_BwE",
            content: "Kesehatan mental adalah bagian yang sangat penting bagi kesehatan dan kesejahteraan seseorang secara menyeluruh. Orang tua punya peran penting dalam mendukung kesehatan mental buah hatinya."
        },
        {
            title: "Mengenal Pentingnya Kesehatan Mental pada Remaja",
            url: "https://yankes.kemkes.go.id/view_artikel/362/mengenal-pentingnya-kesehatan-mental-pada-remaja",
            content: "Kesehatan mental dipengaruhi oleh peristiwa dalam kehidupan yang meninggalkan dampak yang besar pada kepribadian dan perilaku seseorang.dapat berupa kekerasan dalam rumah tangga, pelecehan anak, atau stres berat."
        },
        {
            title: "Darurat Kesehatan Mental bagi Remaja",
            url: "https://egsa.geo.ugm.ac.id/2020/11/27/darurat-kesehatan-mental-bagi-remaja/",
            content: "ada usia remaja (15-24 tahun) memiliki persentase depresi sebesar 6,2%. Depresi berat akan mengalami kecenderungan untuk menyakiti diri sendiri (self harm) hingga bunuh diri. Sebesar 80 – 90% kasus bunuh diri merupakan akibat dari depresi dan kecemasan."
        },
        {
            title: "Pentingnya Kesehatan Mental bagi Remaja yang Perlu Diketahui",
            url: "https://www.merdeka.com/jatim/pentingnya-kesehatan-mental-bagi-remaja-yang-perlu-diketahui-baca-selengkapnya-kln.html",
            content: "Masalah kesehatan mental telah mempengaruhi anak-anak dan remaja termasuk depresi, kecemasan dan gangguan perilaku, yang seringkali merupakan respons langsung terhadap apa yang terjadi dalam hidup mereka."
        },
        {
            title: "Perhatikan Kesehatan Mental Remaja Saat Pandemi COVID-19",
            url: "https://indonesiabaik.id/infografis/perhatikan-kesehatan-mental-remaja-saat-pandemi-covid-19",
            content: "Para remaja menghadapi situasi baru ini bukan tidak hanya dengan kecewa, namun juga kecemasan dan perasaan terisolasi yang membebani, terhadap perubahan hidup akibat wabah yang secara cepat."
        },
        {
            title: "Survei : Satu dari Tiga Remaja Indonesia Memilliki Masalah Kesehatan Mental",
            url: "https://www.merdeka.com/jatim/pentingnya-kesehatan-mental-bagi-remaja-yang-perlu-diketahui-baca-selengkapnya-kln.html",
            content: "Satu dari tiga remaja Indonesia memiliki masalah kesehatan mental, sedangkan satu dari 20 orang memiliki gangguan mental dalam 12 bulan terakhir. Angka ini setara dengan 15,5 juta dan 2,45 juta remaja."
        },
        {
            title:"Benarkah Remaja Indonesia Rentan Alami Gangguan Mental",
            url:"https://www.halodoc.com/artikel/benarkah-remaja-indonesia-rentan-alami-gangguan-mental",
            content:"Generasi muda Indonesia ternyata tengah berada dalam darurat kesehatan mental. Ini terutama terjadi pada remaja dengan rentang usia 10-17 tahun. Temuan ini merupakan hasil penelitian yang dilakukan oleh The Conversation, University of Queensland."
        },
        {
            title:"Pentingnya Kesehatan Mental bagi Remaja Indonesia",
            url:"https://geotimes.id/opini/pentingnya-kesehatan-mental-bagi-remaja-indonesia/",
            content:"Berdasarkan Riset Kesehatan Dasar (Riskesdas) 2018, menjelaskan lebih dari 19 juta penduduk berusia lebih dari 15 tahun mengalami gangguan mental emosional, dan lebih dari 12 juta penduduk berusia lebih dari 15 tahun mengalami depresi. "
        },
    ];

  return (
    <div>
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ml-10 mr-10">
                  {Art.map((items, key) => (
                      <div className="w-full rounded-lg bg-sky-200 shadow-md lg:max-w-md hover:bg-white" key={key}>
                          <div className="p-4">
                              <h3 className="text-xl font-bold text-sky-600"> 
                                {items.title}
                              </h3> <br />
                              <p className="mb-2 leading-normal">
                                {items.content} <a href={items.url} className="inline-block text-blue font-medium text-md hover:uppercase transition duration-150 ease-in-out">Read more...</a>
                              </p>
                          </div>
                      </div>
                  ))}
        </div>
    </div>
  )
}

export default CardArt