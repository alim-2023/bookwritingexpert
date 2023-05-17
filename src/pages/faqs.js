import React from 'react'
import Head from 'next/head'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Aspiring from '../../components/Aspiring'
import Faqslist from '../../components/Faqslist'

const Faqs = () => {

  const faqsHead = <h1 className='font50 fw700 color-blue'>Create An Impact With Our Non Fiction ghostwriting Services</h1>

  const bannertext = [
    {
      title: faqsHead,
      pra: 'At highly affordable pricing, we bring our team of competent non fiction ghostwriters with their promising expertise',
      discuss: 'LET S DISCUSS',
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      faqs: 'faqs',
    }
  ]


  return (
    <>

      <Head>

        <link rel="icon" href="/favicon.svg" />


      </Head>


      {/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.faqs}
        />
      )}



    


      {/* Faqslist */}
      <Faqslist />




      {/* Aspiring */}
      <div className='datacloudco'>
      <Aspiring
        title='Allow us to dominate all the bookshelves and digital libraries, entrust our professional book writers with your book today!'
        text="Pick up the phone or email us, and book our book consultancy services today! The only thing standing in your way of being a best-selling author is not signing up for our professional book writing services! Allow us to assist you in getting there and getting the best and the most affordable book writers for hire today!"
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
      />



</div>


    </>
  )
}

export default Faqs