import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Stillonthefence from '../../components/Stillonthefence'
import Major from '../../components/Major'
// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <Link className='textdocationnone color-blue hover' href="/book-proofreading-services"> Book Proofreading Services </Link> <span className=''>That Make Your Book Flawless To The Level Of Finesse!</span>   </h1>;

  const discuss = <span>LET'S DISCUSS</span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'At Book Writing Experts, we have a team of professional and skilled proofreaders that have years’ worth of experience working on countless.',
      discuss: discuss,
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'offeringyoubook',




    }
  ]



  const reasons = [

    {
      title: 'The Best Proofreading Services',
      text: 'Our proofreading specialists go above and beyond to ensure that no error goes uncorrected in order to assist you in improving the readability of your book.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'High-caliber proofreaders',
      text: 'Our team of proofreaders is composed of professionals with a wealth of knowledge and expertise who work carefully to guarantee that your document is error-free.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Guaranteed Satisfaction',
      text: 'In order for you to be confident that you will be pleased with the outcomes of our proofreading services, we provide a money-back satisfaction guarantee.',
      col: '6',
      classnum: 'number',
    },

    {
      title: 'Always-on Service',
      text: 'You may receive your work returned as quickly as possible by utilizing our proofreading services, which are available to you around the clock.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Reasonable Pricing',
      text: 'We provide several reasonable pricing alternatives to meet your goals and financial constraints. You need our reasonably priced proofreading services to turn your work into a best-selling book.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Around-The-Clock Availability',
      text: ' With lightning-fast responses, we gladly accept inquiries from our esteemed clients and make sure their concerns are taken care of as soon as possible.',
      col: '6',
      classnum: 'number',
    },


  ]


  const geta = <span> <Link className='color-blue textdocationnone hover fw700' href='/book-proofreading-services'>Professional Proofreading Services</Link> to Turn Your Words into a Masterpiece!</span>

  const posdata = <span>Adding Value To Your Masterpiece With Our Exceptional  <Link className='textdocationnone color-blue fw700 hover' href='/book-proofreading-services'>Proofreading Services!</Link> </span>



  const fine = [

    {
      img: mission1,
      title: 'Experienced Proofreaders',
      text: 'Book Writing Experts has a team of proofreading experts who check every book before it goes to print. This ensures that there are no errors in the text and that the book meets all publishing standards. Proofreading is an essential part of the publishing process, and Book Writing Experts takes it very seriously.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Fast Delivery',
      text: 'We offer fast delivery times so you can get your book into readers’ hands as soon as possible. We understand the importance of meeting deadlines, so we’ll work hard to get your book ready for publication in a timely manner.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Quality Work',
      text: 'Book Writing Experts is the perfect partner for self-publishing authors who want to make sure their work is polished and ready for readers. We know how important it is to get your book just right, and we’re here to help.',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>Need An Expert For Your <br></br><Link className='textdocationnone color-blue hover fw700' href='/book-proofreading-services'> Book Promotions? </Link>  </span>



  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bookwritingexperts.com/proofreading-services/"
    },
    "headline": "Proofreading Services",
    "description": "Offering You The Impeccable Proofreading Services To Help You Earn Your Readers’ Trust!",
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
    "url": "https://bookwritingexperts.com/book-proofreading-services/",
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
    "url": "https://bookwritingexperts.com/book-proofreading-services/",
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
  const schema3 = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "bookwritingexperts",
    "url": "https://bookwritingexperts.com/book-proofreading-services/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bookwritingexperts.com/proofreading-services/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
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
        <title>Best Book Proofreading Services - Book Writing Experts</title>
        <meta name="description" content="Book Proofreading services make your manuscript flawless. Avail the services today from the experts who are adept at keeping an eagle eye on errors." />
        <link rel="canonical" href="/book-proofreading-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Best Book Proofreading Services - Book Writing Experts" />
        <meta property="og:description" content="Book Proofreading services make your manuscript flawless. Avail the services today from the experts who are adept at keeping an eagle eye on errors." />
        <meta property="og:url" content="/book-proofreading-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:03:57+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minutes" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}
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


      {/* partners components */}






      {/* Dowecome */}
      <Dowecome
        title={geta}
        text='Or aim is to provide our clients with quality feedback and a holistic solution. Our proofreaders are minesweepers who ensure your manuscript free from inconsistencies, errors and formatting mistakes. This will in turn greatly enhance your final product for the reader to praise and enjoy!'

        Dowecome="publishmybook"

      />

      {/* Major */}
      <Major />

      <Stopworrying
        title='Best Online Proofreading Service'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Our <Link className='textdocationnone fw700 color-blue hover' href='/book-proofreading-services'>Proofreading Services</Link> Are Designed to Polish Your Work to Perfection</p>

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



      <Ourprocess
        title='Our Book Proofreading Process Makes Us A One Stop Solution. Top Notch Editorials And Publications Tailor-Made, As Per Your Needs.'

        heading1='The Procedure Begins!'
        para1='The manuscript or book is given to our proofreaders to begin the proofreading process.'
        num1='01'

        heading2='Our Editors Get on With It!'
        para2='Once every mistake has been identified, it is corrected in the manuscript.'
        num2='02'

        heading3='Oh, Your Book Just Became Error-Free!'
        para3='This process involves sending you a flawlessly written book that is devoid of errors.'
        num3='03'

        heading4='Onto the Canvas Go the Final Touches!'
        para4='Our expert proofreaders go over the entire book, looking for any mistakes or omissions.'
        num4='04'

        heading5='The Text Is Reviewed for Final Consistency!'
        para5='Our proofreaders will go over the book one last time to look for any last-minute mistakes or inconsistencies. When they`re done, they`ll send you a proof copy of the book so you can review all the changes they made.'
        num5='05'


      />





      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          subtitle3='It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>




      {/* Talk To Our Whatourclients! */}
      <Whatourclients />































      {/* Stillonthefence component */}

      <Container fluid className='still'>


        <Row >
          <h2 className='font50 fw700 color-blue t-center font-f mb-5'>Why Should You Spend Time On Our Expert Proofreading Services?</h2>
        </Row>

        <Row className='gy-5'>
          {reasons.map((item, i) =>
            <Stillonthefence key={i}
              title={item.title}
              text={item.text}
              col6={item.col}
              classnumber={item.classnum}
            />
          )}

        </Row>
      </Container>





      {/* Aspiring */}

      <div className='datacloud'>
        <Aspiring
          title='Have Someone There to Help You When Things Get Tough!'
          text="Contact us to hire qualified editors to review your paper and fix any mistakes. Our team will ensure it's fixed before you submit your work, whether it's an oversight or a significant grammatical error."
          number="(213) 289 3888"
          discuss="LET'S DISCUSS"
        />

      </div>








    </>
  )
}

export default Bookpublishingservices