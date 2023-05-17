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