import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import whychooseourbookeditingservices1 from '/public/images/whychooseourbookeditingservices/1.png'
import whychooseourbookeditingservices2 from '/public/images/whychooseourbookeditingservices/2.png'
import whychooseourbookeditingservices3 from '/public/images/whychooseourbookeditingservices/3.png'
import whychooseourbookeditingservices4 from '/public/images/whychooseourbookeditingservices/4.png'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Selfpublishing from '../../components/Selfpublishing'
// css
import styles from '@/styles/Whybookpublishing.module.css'

const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>  Professional and unmatched</span> <Link className='textdocationnone color-blue hover' href="/book-editing-services"> Book Editing Services </Link>  <span className=''>for all the Idealists within their reach</span> </h1>;

  const bannertext = [
    {
      title: newSpan,
      pra: 'Putting your ideas on a piece of paper is never enough! You always need an editing expert who can turn your ideas into Perfection!',
      discuss: 'LET S DISCUSS',
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'bookeditingservices',




    }
  ]

  const geta = <span>Reliable <Link className='color-blue textdocationnone hover fw700' href='/book-editing-services'> Editing Solutions <br></br> </Link> For All!</span>

  const posdata = <span>How About A Group Of Professionals <Link className='textdocationnone color-blue fw700 hover' href='/book-editing-services'>Edit Your Book </Link> Before Publishing?</span>



  const fine = [

    {
      img: mission1,
      title: 'Professional Editing Experts',
      text: 'Our clients put all their trust in our book writing services. We maintain that with our professional editing experts who have got command of several industries and genres.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Authorized Tools',
      text: 'After human editing, we make sure to pass your content through authorized tools that can re-assure perfection.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Uniqueness and Customization',
      text: 'With an in-depth study of your draft, we make unique edits that are customized as per your ideas and concepts of the final document.',
      class: 'fintop',


    },


  ]

  const dateset = <span>  Tired Of Making Edits In <br></br> Your Draft? </span>




  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
    
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Professional Book Editing Services - Book Writing Experts</title>
        <meta name="description" content="Book editing services that fixes the writing flaws and make your book a flawless piece of content. Hire us today to get them at affordable pricing." />
        <link rel="canonical" href="/book-editing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Professional Book Editing Services - Book Writing Experts" />
        <meta property="og:description" content="Book editing services that fixes the writing flaws and make your book a flawless piece of content. Hire us today to get them at affordable pricing." />
        <meta property="og:url" content="/book-editing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:01:27+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minutes" />
        <link rel="icon" href="/favicon.svg" />
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
        text='Errors are inevitable! But the solutions are not! The professional editing experts at Book Writing Experts leave no gaps in assisting your writing drafts with top-notch, unique, and customized editing solutions. We further take complete guarantee of what we deliver and keep client satisfaction above everything.'
        Dowecome="publishmybook"

      />

      {/* Makestories */}
      <div className='dataSetCo sliderImg'>
        <Makestoriesnew
          title='Our Book Editing Projects'
          para='Let Our Book Editing Team Help You.'
        />
      </div>


      {/* Stopworrying */}
      <Stopworrying
        title='Struggling To Sell More Books?'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font50 font-f fw500  colortextgrey t-center pb-2'>We Want You To Get The Most Out Of Your <Link className='textdocationnone color-blue hover fw700' href='/book-editing-services'> Online Book Editing!</Link></p>

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
        title2='Our Book Editing Process'
        heading1='Initial Submission'
        para1='We ask for the initial submission of the draft and asks the client for a detailed understanding of the'
        num1='01'

        heading2='Initial Edits'
        para2='We then go through the draft, point out our editing suggestions, and without making any changes, forward it to the client for their feedback.'
        num2='02'

        heading3='Final Edits'
        para3='Once the client approves our suggestions, we start editing the document on common grounds. The editing experts revise the changes twice for fewer errors.'
        num3='03'

        heading4='Review and Proofreading'
        para4='The editors then forward the document to our expert proofreading professionals who give their reviews and run a final check before finalizing.'
        num4='04'

        heading5='Final Checking and Delivery'
        para5='The proofread content is further forwarded to the clients for their final take on the edits. Once they are satisfied, we align it with the publishing department.'
        num5='05'


      />


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          text='Connect with us, and avail our best Editing Services at one go. We know the right formula for errorless content.'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>






      <section className={styles.servicetitle}>
        <Container>
          <Row>
            <Col>
              <h2 className='color-blue fw700 font50 font-f t-center'>Why Choose Our Book Editing Services?</h2>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Selfpublishing */}
      <Selfpublishing
        title='Developmental Editing'
        text='Every word matters, and we`re committed to crafting engrossing tales of every length and literary genre. When people like us collaborate as part of such amazing Book Editing & formatting services, no task is too big.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={whychooseourbookeditingservices1}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Editorial Assessment'
        text='The success of any project handled by book editing service providers depends on proofreading. It is a crucial step to finalize your manuscript. Our book editors and proofreaders examine for errors before shipping or releasing books published by third parties, such as publishers, to verify that the language is accurate and error-free.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={whychooseourbookeditingservices2}
        whychooseclass="marketyourbook"
      />



      {/* Selfpublishing */}
      <Selfpublishing
        title='Structural Editing'
        text='We take advantage of the difficulties in the structuring process and turn them into profitable opportunities as part of our book editing services. Professional book editors and publishers who want to hone their craft with each word they write or print can also take advantage of this chance.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={whychooseourbookeditingservices3}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Copy Editing'
        text='Mechanical editing and, in some situations, line editing are other names for this kind of ebook editing service. The story`s "professional" approach and any plot holes must be fixed by the editor; nothing else falls under their purview.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={whychooseourbookeditingservices4}
        whychooseclass="marketyourbook"
      />


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          text='Connect with us, and avail our best Editing Services at one go. We know the right formula for errorless content.'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>



      {/* Talk To Our Whatourclients! */}
      <Whatourclients />


      {/* Lululogos components */}


      <Lululogos />



      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='At First Glance, Book Editing Appears Challenging, But We Are Here To Help!'
          text="The complexities of the book-writing process might be perplexing at times. Even the thought of editing, proofreading, and publishing all by yourself is terrifying. We understand the effort, tenacity, and difficulty involved, so why not hire a helping hand? We are merely a phone call, text message, or email away! Let's work together."
          number="(213) 289 3888"
          discuss="LET'S DISCUSS"
        />
      </div>




    </>
  )
}

export default Bookpublishingservices