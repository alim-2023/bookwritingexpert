import React from 'react'
import styles from '@/styles/Pricing.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Experts from '../../components/Experts'
import Dowecome from '../../components/Dowecome'
import howdoimg from '/public/images/professional/professional.png'
import BookPublishing from '../../components/Bookpublishing'
import BookPromotion from '../../components/Bookpromotion'



const Pricing = () => {

  const priceHead = <h1 className='font50 fw700 color-blue'>The World Awaits Your Masterpiece!</h1>


  const bannertext = [
    {
      title: priceHead,
      pra: 'Do you wish to see your published work ranked among the best sellers? Want to earn the stellar reputation of a published author? Dream of having a well-written book to your name?',
      banners: 'pricing',
      alignclass: 'alignclass',
      classpost: 'classpost',
    }
  ]





  return (

    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Book Writing Services Company - Book Writing Cube</title>
        <meta name="description"
          content="Book Writing Services Company to help you pen down your thoughts effortlessly onto paper. Connect to get started." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="tags" content="" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Book Writing Services Company - Book Writing Cube" />
        <meta property="og:description"
          content="Book Writing Services Company to help you pen down your thoughts effortlessly onto paper. Connect to get started." />
        <meta property="og:url" content="https://www.bookwritingcube.com/" />
        <meta property="og:site_name" content="Book Writing Services Company - Book Writing Cube" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="5 minutes" />
        <link rel="icon" href="/favicon.png" />



      </Head>




      {/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          subtext={item.subtext}
          publishers={item.publishers}
          bannershome={item.banners}
          alignclass={item.alignclass}


        />
      )}

      {/* Bookbadges */}
      <BookPublishing />

      {/* Bookbadges */}
      <BookPromotion />



      {/* Dowecome */}
      <Dowecome
        title='Struggling To Sell More Books?'
        text="Why Not Hire Expert Book Marketing Professionals To Promote Your Book!"
        number="(302) 883-8877"
        discuss="LET'S DISCUSS"
        image={howdoimg}
        Dowecome="Dowecome"
      />


      {/* Talk To Our Experts! */}
      <Experts
        title="Talk To Our Experts!"
        text="Call and get a free consultation, sample, & a price quote."
        number="+1-302-883-8877"
        discuss="LET'S DISCUSS"
      />
    </>

  )
}

export default Pricing