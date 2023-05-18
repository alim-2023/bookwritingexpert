import React from 'react'
import Banner from '../../components/Banner'
import Bloglisting from '../../components/Bloglisting'
import Head from 'next/head'

const Blogs = () => {

  const blogsHead = <h1 className='font50 fw700 color-blue'>Blogs</h1>

  const bannertext = [
    {
      title: blogsHead,
      alignclass: 'blogbanclass',
      aboutbanners: 'blogsbanner',
    }
  ]

  return (
    <>

      <Head>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <title>Blogs - Book Writing</title>
        <link rel="canonical" href="/blogs" />
        <link rel="next" href="/blogs" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blogs - Book Writing" />
        <meta property="og:url" content="/blogs" />
        <meta property="og:site_name" content="Book Writing" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.svg" />

      </Head>

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          alignclass={item.alignclass}
          bannershome={item.aboutbanners}
        />
      )}


      <Bloglisting />



    </>
  )
}

export default Blogs