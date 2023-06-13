import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import mission1 from '/public/images/ebookWritingservices/fssf.png'
import mission2 from '/public/images/ebookWritingservices/bgdf.png'
import mission3 from '/public/images/ebookWritingservices/dfdgf.png'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'
import newimagetwoo from '/public/images/booktrailerservcies/newimagetwoo.png'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Makestoriesnew from '../../components/Makestoriesnew'
import Stillonthefence from '../../components/Stillonthefence'
import Lululogos from '../../components/Lululogos'
import Selfpublishing from '../../components/Selfpublishing'
// css
import styles from '@/styles/Whybookpublishing.module.css'




const EbookWritingservices = () => {

  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'> <Link className='color-white textdocationnone hover' href='/eebook-writing-services'>Ebook Writing Services</Link> That Give Meaning To Your Imagination! </h1>;

  const discuss = <span>LET'S DISCUSS</span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'Quality eBook writing drives traffic, and our experienced writers know the tips and tricks of keeping the readers engaged with appealing word selection. We are the right solution for custom eBook writing services. Try working with us! You will not regret it!',
      discuss: discuss,
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'ebook',




    }
  ]


  const geta = <span className='fw700 color-black'>Get Connected To Your Readers With <Link className='color-black textdocationnone hover' href='/eebook-writing-services'> Ebook Writing Experts!</Link></span>

  const titleDb = <span className=' color-blue'>Tired Of Trying To Write An Ebook On Your Own?</span>
  const posdata = <span  className='fw700'>What Is Stopping You From Availing The Most Affordable EBooks Writing Services? </span>


  const WaitingForSomeone = <span>Waiting For Someone To <Link className='color-black textdocationnone hover' href='/eebook-writing-services'> Give Your Book An EBook Version?</Link></span>

  const fine = [

    {
      img: mission1,
      title: 'Researching',
      text: 'This step involves gathering information about your industry, competitors, and target market. We understand the dynamics of your industry and what it takes to succeed in it. This research will also help us develop realistic financial projections for your business.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Planning',
      text: 'The next step is to develop a detailed business plan that includes your business model, marketing strategy, and financial projections. This planning process will help us identify your unique selling proposition and what it will take to achieve your goals.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Writing',
      text: 'Once we have completed research and planning, our experienced writers will be ready to write your business plan. This document will be the roadmap for your business, so it is important to make sure it is clear, concise, and comprehensive. Include an executive summary, company description, market analysis, product/service offering, marketing strategy, financial projections, and management team bios.',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>  Waiting For Someone To <br></br> <Link href='#' className='color-blue textdocationnone hover fw700'>Give Your Book An Book Version?</Link> </span>


  const datesettext = <span>  Get in touch with our <Link href='#' className='color-blue textdocationnone hover'>professional book writing</Link> specialists today. Our Books Writing Experts choose the most compelling words and perfect linguistics for your work. We promise original, customized, and timely delivery of your content without breaking your bank!</span>

  const reasons = [

    {
      title: 'A Top-Notch Group Of Writers',
      text: 'Work with some of the industry`s top editors, authors, and publishing strategists. Our team-based strategy will give you the best chance of success.',
      classnum: 'number1',

    },
    {
      title: 'Individualized Approach to Strategy',
      text: 'In order to ensure that we develop a strategy that will help you achieve your goals, we first hold four extensive publishing strategy meetings.',
      classnum: 'number1',

    },
    {
      title: 'Fine-Tuned Process',
      text: 'Enjoy the dependability and effectiveness of our professionally managed book-writing process.',
      classnum: 'number1',

    },

    {
      title: 'Specialists in Books Composing',
      text: 'Authors from practically every genre who have received accolades are on our team, along with #1 New York Times Book Writers.',
      classnum: 'number1',

    },
    {
      title: 'The Best of the Best Editors',
      text: 'Your proposal will be supervised and edited by a former acquisitions editor from a Big-5 publisher with a number of New York Times’ book writing titles to their credit.',
      classnum: 'number1',

    },
    {
      title: 'Publishing Process',
      text: 'Publishing Process We will walk you through the entire book publication process. We can either place your book directly with traditional publishers or assist you in choosing the best hybrid publishing solution.',
      classnum: 'number1',

    },


  ]

  const text = <span>Get in touch with our professional book writing specialists today. Our eBooks Writing Experts choose the most compelling words and perfect linguistics for your work. We promise original, customized, and timely delivery of your content without breaking your bank!
  </span>;


  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bookwritingexperts.com/ebook-writing-services/"
    },
    "headline": "Ebook Writing Services That Give Meaning To Your Imagination!",
    "description": "Ebook Writing Services",
    "image": "",
    "author": {
      "@type": "Organization",
      "name": "Mini Investments"
    },
    "publisher": {
      "@type": "Organization",
      "name": "",
      "logo": {
        "@type": "ImageObject",
        "url": ""
      }
    },
    "datePublished": "2022-03-21"
  }
  const schema1 = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "bookwritingexperts",
    "alternateName": "Book Writing Experts",
    "url": "https://bookwritingexperts.com/ebook-writing-services/",
    "logo": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    "sameAs": [
      "https://bookwritingexperts.com/",
      "https://www.facebook.com/bookwritingexperts",
      "https://twitter.com/bookwritingexp",
      "https://www.instagram.com/bookwritingexpert/",
      "https://www.linkedin.com/company/book-writing-exp/",
      "https://www.pinterest.com/bookwritingexperts/"
    ]
  }
  const schema2 = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "bookwritingexperts",
    "image": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    "@id": "",
    "url": "https://bookwritingexperts.com/ebook-writing-services/",
    "telephone": "2132893888",
    "priceRange": "$99",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "445 S Figueroa St",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90071",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0536155,
      "longitude": -118.2568651
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://bookwritingexperts.com/",
      "https://www.facebook.com/bookwritingexperts",
      "https://twitter.com/bookwritingexp",
      "https://www.instagram.com/bookwritingexpert/",
      "https://www.linkedin.com/company/book-writing-exp/",
      "https://www.pinterest.com/bookwritingexperts/"
    ] 
  }
  

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Professional Ebook Writing Services - Book Writing Experts</title>
        <meta name="description" content="Ebook Writing Services at the most honest rates by the experts. Give us a call and let them define your book success." />
        <link rel="canonical" href="/ebook-writing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Professional Ebook Writing Services - Book Writing Experts" />
        <meta property="og:description" content="Ebook Writing Services at the most honest rates by the experts. Give us a call and let them define your book success." />
        <meta property="og:url" content="/ebook-writing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:00:32+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="6 minutes" />
        <link rel="icon" href="/favicon.svg" />



        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
        />
     

      </Head>




      {/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          subtext1={item.subtext1}
          subtext2={item.subtext2}
          subtext3={item.subtext3}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.banners}
          processs={item.process}
        />
      )}








      {/* Dowecome */}
      <Dowecome
        title={geta}
        text='Writing an eBook is no walk in the park, and you do not have to go through this trouble. Book Writing Experts have a dedicated team of eBook Writers for you, right at your disposal. Our specialists do not just transform your words into a story but also help your book rank among the top sellers. We take your ideas to the world and help you reach out to the right readers through the right platforms.'
        Dowecome="publishmybook"

      />


    


      {/* Stopworrying */}
      <Stopworrying
        title={titleDb}
        title2={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />


 <div>
        <Selfpublishing
          title={WaitingForSomeone}
          text={text}
          number="(213) 289 3888"
          discuss="LET'S DISCUSS"
          image={newimagetwoo}
          whychooseclass="marketyourbook"
        />
      </div>

      <div className='pt-5 pb-5'>
        <Container>
          <Row className='pt-5 pb-5'>
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font30 font-f fw500 colortextgrey t-center pb-2'>We Aim To Add Value To Your EBooks!</p>

          </Row>

          <Row className='gy-5'>
            {fine.map((item, i) =>
              <Finetoothedbook key={i}
                title={item.title}
                text={item.text}
                classtop={item.class}
                img1={item.img}
                btn={item.btn}
              />
            )}
          </Row>
        </Container>
      </div>



    
      {/* Whybookpublishing */}
      {/* <div className={styles.whybookpublishing}>
        <Container>

          <Row>
            <h2 className='font50 fw700 color-blue t-center'>Why Does One Need Professional Book Writing Services?</h2>
            <p className='font15  textcolor t-center pb-5 mt-3'>
              Our book writing team is composed of the industry's elite who know the ins and outs of the writing industry better than any of us. If you have any more questions about signing up for the professional book writing services, we may have your answers listed below!
            </p>

          </Row>

          <Row>
            {whybookpublishingdata.map((item, i) =>
              <Whybookpublishing key={i}
                title={item.title}
                text={item.text}
                col6={item.col6}
              />
            )}
          </Row>
        </Container>
      </div> */}




      {/* Selfpublishing */}

      <div>
        <Selfpublishing
          title={WaitingForSomeone}
          text={text}
          number="(213) 289 3888"
          discuss="LET'S DISCUSS"
          image={newimagetwoo}
          whychooseclass="marketyourbook"
        />
      </div>



 

      {/* Talk To Our Whatourclients! */}
      <Whatourclients />



          {/* Lululogos components */}
          <Lululogos />




      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='Professional Ebook Writing Services We Give New Life To Your Words'
          text="Your idea is unique, and you need a company that will take it from start to finish. We are here for all the steps, so your legacy can live in words."
          number="(213) 289 3888"
          discuss="LET'S DISCUSS"
        />
      </div>


    </>
  )
}

export default EbookWritingservices