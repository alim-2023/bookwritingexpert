import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

// images
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'

import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'

import together from '/public/images/together/together.png'
import bookmarketingservices1 from '/public/images/bookmarketingservices/1.png'
import bookmarketingservices2 from '/public/images/bookmarketingservices/2.png'
import bookmarketingservices3 from '/public/images/bookmarketingservices/3.png'
import bookmarketingservices4 from '/public/images/bookmarketingservices/4.png'
import bookmarketingprocess from '/public/images/whychoosebooks/bookmarketingprocess.png'

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
import Bookmarketingprojects from '../../components/Bookmarketingprojects'
import Lululogos from '../../components/Lululogos'
import Selfpublishing from '../../components/Selfpublishing'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Whychoosebook from '../../components/Whychoosebook'
// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {


  const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone color-blue hover' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone color-blue hover' href="#">self publishing</Link> .</span>;

  const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

  const kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone color-blue hover'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>
  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <Link className='textdocationnone color-blue hover' href="/book-marketing-services"> Book Marketing Services </Link> <span className=''>That Saves You From Getting Lost In The Mix!</span>   </h1>;




  const bannertext = [
    {
      title: newSpan,
      pra: 'Are you struggling with reaching your target audience? Your book is all ready to be read, but there is no one to read it.',
      discuss: 'LET S DISCUSS',
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'bookpromotionservices',




    }
  ]








  const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone color-blue hover' href="/book-publishing-services">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>


  const whybookpublishingdata = [

    {
      title: 'The awareness & trust capture:',
      text: 'The key is to make your work known before you make it available. We keep them eager to earn their trust, all while making sure your marketing content aligns with what they seek.',
      col6: '6',
    },
    {
      title: 'The socially responsive bond',
      text: 'There’s nothing more value-adding in book marketing than social media engagement. The seal-the-deal tip here is to know what they expect. The readers are on the constant quest for good literature; keep them hooked on your work with posts, comments, and tags.',
      col6: '6',
    },
    {
      title: 'The authenticity deal',
      text: 'Of course, it doesn’t mean your book should have a distinctive idea, just the marketing strategy. The trick here is to utilize the digital marketing strategies effectively for reputation building—audience-focused and platform-oriented content.',
      col6: '6',
    },
    {
      title: 'The profit-generating finale',
      text: 'Readers are quick and harsh assessors; they want to know why your work is worthy. Creating a focused book promotion plan is fundamental to a book’s success. Make the traction of your work the trump card for sales and profits amplification.',
      col6: '6',
    },

  ]




  const geta = <span>Book Promotion Has Just Become Easier With The Global <Link className='color-blue textdocationnone hover fw700' href='/book-marketing-services'>Book Marketing Services.</Link></span>



  const work = <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='colortextgrey textdocationnone hover' href='https://bookwritingexperts.com/book-publishing-services/'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>


  const posdata = <span>It’s Time You Let The <Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'>Marketing Experts</Link> Take Charge Of Your  <Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'>Book Promotions!</Link> </span>



  const fine = [

    {
      img: mission1,
      title: 'Creative Marketing Runs',
      text: 'Book Writing Experts marketing experts have a knack for promotions, and they know how to attract the audience through their creative marketing campaigns. The purpose of each campaign is to get your target audience to read your book; it is as simple as that!',
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
      text: 'Book Writing Experts experienced and award-winning team will get you reviews and market your book through their bespoke and personalized services. We boost up the potential of every book campaign regardless of the campaign size or genre. Each client matters to us!',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>Need An Expert For Your <br></br><Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'> Book Promotions? </Link>  </span>




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


        <title>Professional Book Marketing Services - Book Writing Experts</title>
        <meta name="description" content="Book Marketing Services that makes you your readers&#039; most sought-after choice. Count on us to be counted worldwide. Hire us to get the job done." />
        <link rel="canonical" href="https://bookwritingexperts.com/book-marketing-services/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Professional Book Marketing Services - Book Writing Experts" />
        <meta property="og:description" content="Book Marketing Services that makes you your readers&#039; most sought-after choice. Count on us to be counted worldwide. Hire us to get the job done." />
        <meta property="og:url" content="https://bookwritingexperts.com/book-marketing-services/" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T11:37:31+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="7 minutes" />
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
        text='Book Writing Experts now markets your book with successful Global marketing support; our professionals help the author promote their books and reach their audience even at the far corners of the world. Internet gives us a platform to create bespoke ads for the readers and attract them to buy your book. Our book marketing experts are dedicated to getting you as much revenue as they can as soon we publish your book. Be at ease and trust Book Writing Experts with your marketing and publishing jobs.'
        subtext='We promise to enhance your book visibility with Global exclusive marketing tactics.'
        Dowecome="publishmybook"

      />

      <Stopworrying
        title='Tired of waiting for people to read your book?'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Get More Readers On-Board With Our <Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'>  Online Book Marketing Services</Link></p>

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
        title='What Is Our Book Marketing Process?'
        text="The best book marketing services come with an elaborate process of guaranteeing transparency and communication. We do this through an extensive process of updating our customers at every project stage. This helps the customer understand where we're coming from and be aware of what's going on."
        heading1='Research'
        para1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque ipsum, accumsan ac aliquet ut, sollicitudin maximus dolor.'
        num1='01'

        heading2='Target Audience'
        para2='Sed est ligula, suscipit ac lectus in, semper bibendum diam. Nunc interdum velit in turpis sagittis pulvinar.'
        num2='02'

        heading3='Social Media Marketing & Other Media Channels'
        para3='Vestibulum tristique in dui in blandit. Nam commodo purus eget orci pharetra, a lorem facilisis.'
        num3='03'

        heading4='Marketing Plan & Design'
        para4='Aenean fringilla accumsan est, quis vestibulum purus imperdiet at. Vestibulum ac pretium risus. Fusce of to tristique massa a fringilla aliquet. Nullam facilisis vel finibus lorem sodales.'
        num4='04'

        heading5='Google, Search Engine & Deployment Of Marketing Plan'
        para5='Donec gravida sollicitudin nisl pellentesque vulputate. Nam egestas, urna vel fringilla euismod, sapien quam posuere felis.'
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



      {/* <Bookmarketingprojects /> */}



      {/* Whybookpublishing */}
      {/* <div className={styles.whybookpublishing}>
        <Container>

          <Row>
            <h2 className='font50 fw700 color-blue t-center'>Why Book Marketing?</h2>
            <p className='font15  textcolor t-center pb-5 mt-3'>
              It is a toolset tailored to your requirements and approaches. Adjusting it to your budget, fine-tuning it to fit your audience preferences, and preparing it for maximized exposure. Unlike other book marketing companies, we capitalize on commercialization, ensuring the highest book sales & profits.
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



      <section className={styles.servicetitle}>
        <Container>
          <Row>
            <Col>
              <h2 className='color-blue fw700 font50 font-f t-center'>Why Choose Our Book Marketing Services?</h2>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Selfpublishing */}
      <Selfpublishing
        title='We Appreciate Our Clients Who Put Their Faith In Us.'
        text='Our experience enables us to craft captivating stories. Short or long – your manuscript gets the attention it deserves! Every word we polish is prepared for the impact on the readers and infused with care. From beginning to end, our affordable book marketing services guarantee excellence-- because no task is too big or difficult when you have people like us working together as part of such a one-stop solution.'
        subtext='Good branding will amplify all your marketing efforts. But it takes professionalism and industry insight to make a trustworthy brand. To add to that, it takes much effort to find experienced professionals to get this job done—something only the best book marketing services can offer!'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices1}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Through Collaboration'
        text='Our book marketing services and packages include comprehensive publishing assistance and guidance. We will design a budget for you, covering the designing, publishing, printing, and editing needs of the book.'
        subtext='Our book marketers formulate online and offline strategies to make your work a recognized read. Unlike other book marketing companies, our job isn’t done till your reputation is established as a renowned name in the industry.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices2}
        whychooseclass="marketyourbook"
      />



      {/* Selfpublishing */}
      <Selfpublishing
        title='Impeccable Customer Support'
        text='For us, our customer’s needs are the top priority. Regardless of the different profiles or the website updates and revisions, our book marketing services aim to make your work a stellar addition to the literature world.'
        subtext='From keeping up with marketing trends to revamping the strategies, the best book marketing services providers go the extra mile to make the bestselling title a reality.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices3}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Impressive Strategic Implementation'
        text='Every marketing approach, platform, and product requires a well-tailored strategy and plan of execution. Since every book has a different audience, our affordable book marketing services make sure the needs and preferences of the target readers are met.'
        subtext='Our experts provide thorough guidance about different types and strategies of marketing to gain complete customer satisfaction. The packages we offer regarding book marketing services include social media platforms, blogging, guest posting, and email marketing.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices4}
        whychooseclass="marketyourbook"
      />


      {/* Talk To Our Whatourclients! */}
      <Whatourclients />


      {/* Lululogos components */}
      <Lululogos />


      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='Ready To Make It Big With Our Book Marketing Services?'
          text="You are the ambassador of your own book—but that doesn’t mean it is a singly endeavor. It is an ever-changing, seriously challenging, and quite honestly, commercially competitive industry. The right book marketing plan, calculated milestones, and extended exposure—the all’s and must-haves of making your work a chart-topper! Let’s collaborate!"
          number="(213) 289 3888"
          discuss="LET'S DISCUSS"
        />

      </div>























    </>
  )
}

export default Bookpublishingservices