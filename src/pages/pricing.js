import React from 'react'
import Head from 'next/head'
import Banner from '../../components/Banner'
import Experts from '../../components/Experts'
import Dowecome from '../../components/Dowecome'
import howdoimg from '/public/images/professional/professional.png'
import BookPublishing from '../../components/Bookpublishing'
import BookPromotion from '../../components/Bookpromotion'
import BookWriting from '../../components/Bookwriting'
import BookEditing from '../../components/Bookediting'
import BookMarketing from '../../components/Bookmarketing'
import BookProofRead from '../../components/Bookproofread'
import BookGhostWriting from '../../components/Bookghostwriting'
import BookChildrenPublish from '../../components/Bookchildrenpublish'
import BookChildrenIllus from '../../components/Bookchildrenillus'
import BookDigitalMarket from '../../components/Bookdigitalmarket'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'

const Pricing = () => {

  const priceHead = <h1 className='font50 fw700 color-blue'>The World Awaits Your Masterpiece!</h1>

  const exprtSpan = <span className='fw500 font50 color-white font-f t-center font-f mb-4'><span className='color-blue fw700'>Book Writing Experts</span> Is waiting for you to Ask for a <span className='color-blue fw700'>Professional Ghostwriter</span></span>;

  const bannertext = [
    {
      title: priceHead,
      pra: 'Do you wish to see your published work ranked among the best sellers? Want to earn the stellar reputation of a published author? Dream of having a well-written book to your name?',
      discuss: 'LET S DISCUSS',
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'pricing',
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
        <link rel="icon" href="/favicon.svg" />



      </Head>




      {/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          subtext={item.subtext}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.banners}
        />
      )}

      {/* Bookbadges */}
      <BookPublishing />

      <BookPromotion />

      <BookWriting />

      <BookEditing />

      <BookMarketing />

      <BookProofRead />

      <BookGhostWriting />

      <BookChildrenPublish />

      <BookChildrenIllus />
<div className='datacloud'>
      <BookDigitalMarket />
      </div>
      {/* Talk To Our Experts! */}
      <Experts
        title={exprtSpan}
        text="Hit us a message, or give us a call, and make the most of our Professional Ghostwriters."
        number="+1-302-883-8877"
        discuss="LET'S DISCUSS"
      />

      {/* Dowecome */}
      <Dowecome
        title='Struggling To Sell More Books?'
        text="Why Not Hire Expert Book Marketing Professionals To Promote Your Book!"
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={howdoimg}
        Dowecome="Dowecome"
      />

    </>

  )
}

export default Pricing