import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import bookmarketingservices3 from '/public/images/bookmarketingservices/3.png'
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
import Selfpublishing from '../../components/Selfpublishing'
// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {




  const reasons = [

    {
      title: 'Share Your Tale Via Professional Ghostwriters',
      text: 'Team up with the best editors, authors, and publishing strategists in the business. Your chances of success are greatest with our team-based approach. Make your goal of having a book published a reality by utilizing the skills of one of our qualified ghostwriters.',
      classnum: 'number1',

    },
    {
      title: 'Our Ghostwriters Adopt A Personable Style',
      text: 'At Book Writing Experts, we provide a personalized approach since we recognize that each project is unique. Consider using our ghostwriting services if you want to write a novel, a nonfiction book, a children`s book, an autobiography, a history book, or a business book.',
      classnum: 'number1',

    },
    {
      title: 'Explicit And Precise Approach',
      text: 'Enjoy the consistency and effectiveness of a process that is professionally managed for ghostwriting services.',
      classnum: 'number1',

    },

    {
      title: 'The Best Team of Ghostwriters',
      text: 'We acknowledge that not everyone can write at the same level as their thoughts and that some people find it difficult to put their ideas into words. And hence, we`ve assembled a great team of experienced ghostwriters who can provide all of this and more.',
      classnum: 'number1',

    },
    {
      title: 'Top-5 Publishers',
      text: 'We collaborate with the top five publishers and publishing houses in the industry. We strive the hardest to offer you well-thought-out contracts with the best in-town publishers.',
      classnum: 'number1',

    },
    {
      title: 'Both Online And Offline Formats',
      text: 'We thoroughly guide our customers through the online and offline publication processes. Our hybrid technique is our integrated publishing solution, from well-designed paperback and hardback to well-formatted eBook.',
      classnum: 'number1',

    },


  ]

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'>  <span className=''>Bring Your Ideas to Life With Our Expert</span> <Link className='textdocationnone color-blue hover' href="/ghostwriting-services"> Ghostwriting Services! </Link>   </h1>;




  const bannertext = [
    {
      title: newSpan,
      pra: 'Let our experts fire the imagination of your readers with their killer writing techniques. Your story needs to be heard, and Book Writing Experts',
      discuss: 'LET S DISCUSS',
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'ghostwriting',
    }
  ]

  const geta = <span>Our <Link className='color-blue textdocationnone hover fw700' href='/ghostwriting-services'> Ghostwriting </Link>Team Has A Knack For Telling Stories</span>

  const posdata = <span>Get The <Link className='textdocationnone color-blue hover fw700' href='/ghostwriting-services'>Top Ghostwriting Services</Link> From The Writers Who Best Understands The Readers?</span>



  const fine = [

    {
      img: mission1,
      title: 'Well versed writers',
      text: 'To provide high-quality work, we have a team of native speakers who have years of content writing experience.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Refund Policy',
      text: 'We offer a refund if the client is not satisfied with our overall work. After all, client satisfaction comes first!',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Customized Offers',
      text: 'Different clients have different needs. We take care of their requirements with customized packages',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>A Complete Solution To Your <Link className='textdocationnone color-blue hover fw700' href='/ghostwriting-services'>Ghost Writing </Link> Essentials Is Here! </span>





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
        text='The Ghost Writers at Book Writing Experts deliver compelling stories that persuade their audience to read more. We have a scattered team of experts that provide excellent ghostwriting services for all genres, fiction to nonfiction, from mystery to horror, history to humor, magic to romance, you name it, and we will get it written for you. We understand your requirements, draft the manuscript, utilize the best resources, make edits, and deliver your mere idea as a Powerful Book.'

        Dowecome="publishmybook"

      />


      {/* Makestories */}
      <div className='dataset sliderImg'>
        <Makestoriesnew
          title='Our Ghostwriting Services Projects'
          para='Become a renowned author with the help of our ghostwriters!'
        />
      </div>
      <Stopworrying
        title='Transform Your Ideas Into Words That Matters!'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Our Mission Is To Maximize Value For Our Authors With Online <Link className='textdocationnone color-blue hover fw700' href='/ghostwriting-services'>Book Marketing</Link></p>

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
        title='What Is Our Ghost Writing Process?'

        heading1='Book Writing Consultancy'
        para1='Once the draft is submitted, it entirely depends on the communication as we need your feedback to proceed.Prompt feedback would mean a prompt delivery of the next draft.'
        num1='01'

        heading2='Receive & Feedback'
        para2='As per the outline, our expert ghostwriters start writing the initial content that reflects your ideology behind book writing.'
        num2='02'

        heading3='FinalDraft & QA:'
        para3='Once we are done writing the book, we do not just abandon you.We send it to our QA team that fact-checks and scans the draft for errors that may have missed your or our team`s keen eye.'
        num3='03'

        heading4='Final Reviewing & Cover Design:'
        para4='As soon as you approve the changes, our team implements them, and then sends it back to you for a final review. Once we get your go-ahead, we schedule a meeting with our design team and get your book a cover that you want.'
        num4='04'

        heading5='Completing The Project & Reassuring Further Assistance:'
        para5='With that,our bok writing comes to an end. In case you need further assistance with editng, publishing, and/or marketing, our team will further connect you to our publishing and marketing team.'
        num5='05'


      />




      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          subtitle3='Book Writing Experts has got you covered with the Best-Ghostwriting services. You are just one click away!'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>

      {/* Talk To Our Whatourclients! */}
      <Whatourclients />

      {/* Stillonthefence component */}
      <div className={styles.stillbookwritingservices}>
        <Container >
          <Row >
            <h2 className='font50 fw700 color-white t-center font-f mb-5'>Why Us?</h2>
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

      </div>

      {/* Selfpublishing */}

      <Selfpublishing
        title='And, No, Hiring Ghostwriters Is Not Against The Law!'
        text='Since the emergence of the phenomenon of ghostwriting services, misperception has been prevalent. The role of the ghostwriter is to receive payment for his literary masterpiece. Anyone can be creative and have a fantastic idea, but that doesn`t necessarily mean they can all express it clearly. Professional ghostwriters are hard to make those goals a reality. Due to the fact that those ghostwriters are qualified to create, edit, and publish that work, spreading the concept is a legal partnership.'

        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices3}
        whychooseclass="marketyourbook"
      />


      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='When It Comes Down To It, You Need The Whole Nine Yards To Nail It!'
          text="Call us or send us an email, and our professionals will walk you through the full procedure, requirements, and packages for ghostwriting services for your book!"
          number="(213) 289 3888"
          discuss="LET'S DISCUSS"
        />
      </div>



    </>
  )
}

export default Bookpublishingservices