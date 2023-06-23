import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

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
import Makestoriesnew from '../../components/Makestoriesnew'
import Stillonthefence from '../../components/Stillonthefence'
import Major from '../../components/Major'
import Cta from '../../components/Cta'
// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <Link className='textdocationnone color-blue hover' href="/book-promotion-services/"> Book Promotion Services  </Link> <span className=''>That Connects You To The Reader’s Fraternity!</span>   </h1>;

  const discuss = <span>LET'S DISCUSS</span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'Are you struggling with reaching your target audience? Your book is all ready to be read, but there is no one to read it?',
      discuss: discuss,
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'bookpromotionservices',




    }
  ]

  const geta = <span><Link className='color-blue textdocationnone hover fw700' href='/book-promotion-services/'>Book Promotion Services</Link> Helping You Be A Cut Above The Rest!</span>

  const posdata = <span>It’s Time You Let The Marketing Experts Take Charge Of Your  <Link className='textdocationnone color-blue hover fw700' href='/book-promotion-services/'>Book Promotions!</Link> </span>



  const fine = [

    {
      img: mission1,
      title: 'Creative Promotion Runs',
      text: 'Book Writing Expert’s marketing experts have a knack for promotions, and they know how to attract the audience through their creative marketing campaigns. The purpose of each campaign is to get your target audience to read your book; it is as simple as that!',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Right People at Right Time',
      text: 'Our experts aim to champion the authors they represent, help them create a sustained media presence, and present them as the go-to experts in their field. We promise to market you better!',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Tailored made Services',
      text: 'Book Writing Expert’s experienced and award-winning team will get you reviews and market your book through their bespoke and personalized services. We boost up the potential of every book campaign regardless of the campaign size or genre. Each client matters to us!',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>Need An Expert For Your <br></br><Link className='textdocationnone color-blue hover fw700' href='/book-promotion-services/'> Book Promotions? </Link>  </span>



  const reasons = [

    {
      title: 'Demonstrated Record of Performance',
      text: 'Our organization has a track record of executing successful book promotion strategies.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'An Expert Team in Marketing.',
      text: 'Book Writing Experts is a team of skilled and creative book promotion professionals who can give customized services. Every marketing strategy, platform, and product necessitates a well-tailored strategy and execution plan. Because each book`s audience is unique, our book marketing services ensure that the needs and preferences of the target readers are met.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Solutions At a Low Cost.',
      text: 'We provide affordable book promotion services for authors on any budget. We offer book marketing packages that cover social media platforms, blogging, guest posting, and email marketing.',
      col: '6',
      classnum: 'number',
    },

    {
      title: 'Extensive Connections!',
      text: 'We have a vast range of contacts and resources to properly advertise your book. We`ve assisted authors of many genres and backgrounds in reaching their publishing objectives, and we can do the same for you.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Complete Comprehension!',
      text: 'We have a thorough understanding of the book promotion process and know how to generate results',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Methodology Focused on Results!',
      text: 'We are dedicated to offering the best online book promotion services possible and obtaining the desired outcomes for our clients.',
      col: '6',
      classnum: 'number',
    },


  ]


  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bookwritingexperts.com/book-promotion-services/"
    },
    "headline": "Book Promotion Services That Connects You To The Reader’s Fraternity!",
    "description": "Book Promotion Services",
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
    "url": "https://bookwritingexperts.com/book-promotion-services/",
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
    "url": "https://bookwritingexperts.com/book-promotion-services/",
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
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "book promotion services book promotion company",
    "description": "book promotion services book promotion company book promotion services book promotion company book promotion services book promotion company",
    "provider": {
      "@type": "Organization",
      "name": "book promotion services book promotion company",
      "url": "https://bookwritingexperts.com/book-promotion-services/"
    },
    "serviceType": ["book promotion services book promotion company"],
    "areaServed": {
      "@type": "country",
      "name": "us"
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
        <title>Book Promotion Services For Branding - Book Writing Experts</title>
        <meta name="description" content="Book Promotion Services to leave your competitors in the dust. We know the science of sales and art of marketing your books, hire us today." />
        <link rel="canonical" href="/book-promotion-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Book Promotion Services For Branding - Book Writing Experts" />
        <meta property="og:description" content="Book Promotion Services to leave your competitors in the dust. We know the science of sales and art of marketing your books, hire us today." />
        <meta property="og:url" content="/book-promotion-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T11:38:52+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="7 minutes" />
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








      {/* Dowecome */}
      <Dowecome
        title={geta}
        text='Book Writing Experts now markets your book with successful Global marketing support; our professionals help the author promote their books and reach their audience even at the far corners of the world. Internet gives us a platform to create bespoke ads for the readers and attract them to buy your book. Our book marketing experts are dedicated to getting you as much revenue as they can as soon we publish your book. Be at ease and trust Book Writing Experts with your marketing and publishing jobs.'
        subtext='We promise to enhance your book visibility with Global exclusive marketing tactics.'
        Dowecome="publishmybook"

      />

      {/* Major */}
      <Major />

      {/* Cta */}
      <Cta />


      {/* Makestories */}
      <div className='dataSetCo sliderImg'>
        <Makestoriesnew
          title='Our Book Editing Projects'
          para='Let Our Book Editing Team Help You.'
        />
      </div>


      <Stopworrying
        title='Tired of waiting for people to read your book?'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className='color-lightgray   font25   t-center font-f mb-2'>Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Get More Readers On-Board With Our <Link className='textdocationnone color-blue hover fw700' href='/book-promotion-services/'>  Online Book Promotion Services</Link></p>

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
        title='How The Book Promotion Process Unfolds!'
        text="Our team of marketing experts uses all available resources to promote your book as widely as possible. The following is a blueprint for their successful marketing strategy:"

        heading1='Evaluation and Advancement:'
        para1='Provide your book with the attention it deserves. Author promotion services and benefits might help you expand your audience.'
        num1='01'

        heading2='Inspection and Assessment:'
        para2='Profit from one of the most effective sales tactics. Set up and manage price promotions for your books with ease.'
        num2='02'

        heading3='Coherence Verified!'
        para3='We assist you in becoming featured in thousands of our store partners. Get your book featured on book promotion websites, newsletters, and other publications.'
        num3='03'

        heading4='Delivery!'
        para4='To make it simple and effective for you to promote your independently published books, we`ve teamed up with leading book publishers. On one platform, get a variety of promotional benefits.'
        num4='04'

        heading5='Continued Execution!'
        para5='Our book promotion services assist you in expanding your audience in addition to publication and distribution assistance. Find the ideal venues for promoting your print, audio, or eBook. '
        num5='05'
      />



      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          text='It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
          subtext='Trust the marketing professionals for it, do not risk it!'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>



      {/* Whybookpublishing */}
      {/* <div className={styles.whybookpublishing}>
        <Container>

          <Row>
            <h2 className='font50 fw700 color-blue t-center'>Untangle The Complexity Of Your Manuscript Selling With Our Book Marketing Services!</h2>
            <p className='font15  textcolor t-center pb-5 mt-3'>
              Book Writing Cube is a creative studio that offers book promotion services to help authors and business personas get their work noticed by potential readers. We offer various services to suit your needs, including book trailer creation, social media marketing, and more. We're here to help you get your work out there and seen by as many people as possible. Here are a few FAQs that our professional book marketers curated to add information to your knowledge bag.
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







      {/* Talk To Our Whatourclients! */}
      <Whatourclients />



      {/* Stillonthefence component */}
      <section className='still'>
        <Container>
          <Row >
            <Col lg={10} className='mx-auto'>
              <h2 className='font50 fw700 color-blue t-center font-f mb-5'>Are You Still Unconvinced? You Can Trust Us Because of What We Can Offer You!</h2>
            </Col>
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
      </section>


      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='Making Your Book a Stellar Addition to the Literature World!'
          text="If you want to watch your work take off and reach new heights, Book Writing Cube may help you do the trick. With extended years of experience in the industry, we know exactly what it takes to get your book noticed and gain maximum exposure. Call us now to take your book to the next level!"
          number="(213) 289 3888"
          discuss="LET'S DISCUSS"
        />
      </div>

    </>
  )
}

export default Bookpublishingservices