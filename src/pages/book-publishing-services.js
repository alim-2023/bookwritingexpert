import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

// images
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'


import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'

import drivethebook1 from '/public/images/whychoosebooks/bookeditingprocess.png'

import together from '/public/images/together/together.png'
import typeofbooks from '/public/images/selfpublishingservices/1.jpg'
import copy from '/public/images/selfpublishingservices/2.jpg'
import marketyourbook from '/public/images/selfpublishingservices/3.jpg'
import publishmybook from '/public/images/selfpublishingservices/4.jpg'
// import marketyourbook from '/public/images/selfpublishingservices/marketyourbook.jpg'
// import marketyourbook from '/public/images/selfpublishingservices/marketyourbook.jpg'

// components
import Banner from '../../components/Banner'
import Whybookpublishing from '../../components/Whybookpublishing'
import Partners from '../../components/Partners'
import Dowecome from '../../components/Dowecome'
import Signup from '../../components/Signup'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Makestoriesnew from '../../components/Makestoriesnew'
import Whychoosebook from '../../components/Whychoosebook'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Selfpublishing from '../../components/Selfpublishing'
import Lululogos from '../../components/Lululogos'
import Customersatisfaction from '../../components/Customersatisfaction'
import Bookpublishingservicesweoffer from '../../components/Bookpublishingservicesweoffer'
// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {
  const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone color-blue hover' href="/book-publishing-services">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone color-blue hover' href="/book-publishing-services">self publishing</Link> .</span>;
  const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

  const kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="/book-publishing-services" className='textdocationnone color-blue hover'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>Providing Full Fledged</span> <Link className='textdocationnone color-blue hover' href="/book-publishing-services"> Book Publishing Services  </Link>  <span className=''>To Our Struggling Authors</span> </h1>;


  const bannertext = [
    {
      title: newSpan,
      pra: 'Is your talent getting unnoticed due to problems in publishing? Not anymore! We have solutions to your problems! Publishing.',
      discuss: 'LET S DISCUSS',
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'bookpublishingservices',
      process: 'OUR PROCESS, IN A MINUTE',



    }
  ]








  const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone color-blue hover' href="/book-publishing-services">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>


  const whybookpublishingdata = [

    {
      title: 'How can I publish my book?',
      text: 'The first thing you need to do after making up your mind about publishing a book is to find a publishing house. There are several types of publications including online publication, paperback or hardcopy publishing as well as self Publication. You need to select the kind of publication you want and then work with the publisher company to assist you with the process.',
      col6: '6',
    },
    {
      title: 'What’s different about Self Publishing?',
      text: 'By self publishing a book, you get full authority of your work including the management and other processes of publishing like editing, cover design and even marketing strategies. You have to pay a certain amount as fee and you get to call the shots! At Book Writing Cube, different teams designated for different kinds of publications.',
      col6: '6',
    },
    {
      title: 'How much does it cost to have a book published?',
      text: 'If you’re worried about the initial investment you have to put in order to get your book published, don’t fret too much! There are various packages available from which you can select the one that works for you. We work with every kind of budget to give your clients the best experience and help them publish their work for the world to read!',
      col6: '6',
    },
    {
      title: 'Can I publish on different publishing platforms?',
      text: datapost,
      col6: '6',
    },

  ]





  const geta = <span>Get A Customized Solution By <Link className='color-blue fw700 hover textdocationnone' href='/book-publishing-services'> Best Publishing Services </Link></span>


  const work = <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='colortextgrey textdocationnone hover' href='/book-publishing-services'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>


  const posdata = <span>Let Our Best <Link className='textdocationnone color-blue hover fw700' href='/book-publishing-services'>Amazon Kindle Direct Publishing (KDP)</Link> Service Providers Handle All Your Publishing Troubles!</span>



  const fine = [

    {
      img: mission1,
      title: 'Outstanding Marketing Campaigns',
      text: 'Our team has the expertise, experience and know-how to run excellent book marketing campaigns. We are familiar with the best strategies to target the right prospects to sell your books.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Outstanding Marketing Campaigns',
      text: 'Our team has the expertise, experience and know-how to run excellent book marketing campaigns. We are familiar with the best strategies to target the right prospects to sell your books.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Outstanding Marketing Campaigns',
      text: 'Our team has the expertise, experience and know-how to run excellent book marketing campaigns. We are familiar with the best strategies to target the right prospects to sell your books.',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>Let’s <Link className='textdocationnone fw700 color-blue hover' href='/book-publishing-services'> Publish Your <br></br> Masterpiece</Link>  Together! </span>


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://bookwritingexperts.com/xmlrpc.php" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

        <title>Get Your Book on Amazon KDP with Top-Rated Book Publishing Services</title>
        <meta name="description" content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!" />
        <link rel="canonical" href="/book-publishing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Get Your Book on Amazon KDP with Top-Rated Book Publishing Services" />
        <meta property="og:description" content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!" />
        <meta property="og:url" content="/book-publishing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:04:48+00:00" />
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
        text={work}
        Dowecome="publishmybook"

      />

      {/* <Stopworrying
        title='Stop worrying about publishing books!'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      /> */}

      {/* Makestories */}
      <div className='dataset sliderImg'>
        <Makestoriesnew
          title='Our Latest Book Publishing Projects'
          para='Let Our Book Publishing Team Help You'
        />
      </div>

      {/* Bookpublishingservicesweoffer */}
      <Bookpublishingservicesweoffer />

      <Ourprocess
        title='What Is Our Book Publishing Process?'
        text='We have devised an elaborate workflow process to maximize transparency while also making sure that the final product`s quality does not suffer. We do this through an extensive process of asking for approvals and updating our customers at every project stage. This helps a customer understand where we`re coming from and be aware of what`s going on. Our self publishing process follows these six stages, as listed below.'
        heading1='Manuscript Submission'
        para1='The writer contacts us for submission of their full-length manuscript, while submitting, we discuss our publishing rules and sign the contract.'
        num1='01'

        heading2='Peers Review'
        para2='Our experienced editors then review the manuscript and make the required changes with the writer’s permission.'
        num2='02'

        heading3='Formatting and Typesetting'
        para3='After the manuscript is reviewed by editors, our experts do the formatting and add images.'
        num3='03'

        heading4='Book Production'
        para4='We design the first copy of the book and take reviews from the writer. The rest of the books are produced on the same pattern while keeping all the important aspects into consideration.'
        num4='04'

        heading5='Marketing, Publishing, and Distribution'
        para5='Before publishing, we spread awareness about the book to create demand. And Voila! The book is published now!'
        num5='05'
      />


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          subtitle3='It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
          subtitle4='Trust the marketing professionals for it, do not risk it!'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>



      {/* Aspiring */}
      {/* <div className='dataset'>
      <Aspiring
        title={dateset}
        text='It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
        subtext='Trust the marketing professionals for it, do not risk it!'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        img={together}
      />
</div> */}



      <section className={styles.publicservices}>
        <Container>
          <Row>
            <Col>
              <h2 className='color-blue fw700 font50 font-f t-center'>Why Choose Our Amazon Publishing Services?</h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Selfpublishing */}
      <Selfpublishing
        title='How Do "I Publish My Book?"'
        text='Our experience enables us to craft captivating stories. Short or long – your manuscript gets the attention it deserves! Every word we polish is prepared for the impact on the readers and infused with care. From beginning to end, our book publishers and book editing experts take on every project, because no task is too big or difficult when you have people like us working together as part of such a one-stop solution.'
        subtext='We ensure everything from page-turners to nail-biting finishes feels masterfully controlled so each reader can find a perfect read. Our book editing team eagerly waits for their next project to be proofread and edited.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={publishmybook}
        whychooseclass="marketyourbook"
      />

      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='What Type Of Books Do We Publish?'
        text={text}
        subtext={subtext}
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={typeofbooks}
        whychooseclass="marketyourbook"
      />

      {/* Selfpublishing */}
      <Selfpublishing
        title='How Many Copies Of Your Book Will Be Published?'
        text='We publish/print books on demand. We set up your account with Amazon and other places, which allows us to have no set values for the minimum amount of copies that can be published/printed. We will print as many and as little as you want.'
        subtext={kindledirectpublishing}
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={copy}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='How Will We Help You Market Your Book?'
        text='Our team of marketing experts are willing to provide their services to you. If you choose us for marketing, we ensure that you and your book gets maximum exposure. Our marketing professionals will assist your book and brand in reaching the success it deserves.'
        subtext='Our book marketing professionals will help your book and brand reach the success it deserves.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={marketyourbook}
        whychooseclass="marketyourbook"
      />


      {/* Customersatisfaction */}
      <Customersatisfaction />


      {/* Talk To Our Whatourclients! */}
      <Whatourclients />

      {/* Lululogos components */}
      <div>
        <Lululogos />
      </div>


      {/* Aspiring */}

      <div className='datacloud'>
        <Aspiring
          title='Whether Bookshelf or Amazon Self Publishing – Our Designs Makes You Stand Out'
          text='Design is the most important aspect when it comes to selling books. We know that might sound like an old cliché, but designing your cover will deliver layout and build intrigue for potential readers; they’ll want more after seeing what’s in store within these pages! So don’t settle on anything less than perfection – let us help make sure every manuscript looks exactly how you envisioned through Book Writing Cube.'

          number="(213) 289 3888"
          discuss="LET'S DISCUSS"

        />

      </div>




















    </>
  )
}

export default Bookpublishingservices