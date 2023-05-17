import React from 'react'
import Banner from '../../components/Banner'
import Head from 'next/head'

const Thankyou = () => {

  const thankuHead = <h1 className='font50 fw700 color-blue'>Thank You</h1>


  const bannertext = [
    {
      title: thankuHead,
      pra: 'For filling out the contact form. Our representative will contact you shortly.',
      banners: 'bookpublishingservices',
      thankyou: 'thankyou',



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
          bannershome={item.banners}
          thankyou={item.thankyou}
        />
      )}

    </>
  )
}

export default Thankyou