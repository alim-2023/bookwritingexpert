import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

// images
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import bookmarketingservices1 from '/public/images/bookmarketingservices/1.png'
import bookmarketingservices2 from '/public/images/bookmarketingservices/2.png'
import bookmarketingservices3 from '/public/images/bookmarketingservices/3.png'
import bookmarketingservices4 from '/public/images/bookmarketingservices/4.png'


// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Lululogos from '../../components/Lululogos'
import Selfpublishing from '../../components/Selfpublishing'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'

// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {

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

  const geta = <span>Book Promotion Has Just Become Easier With The Global <Link className='color-blue textdocationnone hover fw700' href='/book-marketing-services'>Book Marketing Services.</Link></span>


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
        title='How Will Your Book Be promoted?'
        text="The top book marketing firms have a complex procedure for ensuring communication and transparency. We accomplish this by a thorough procedure of informing our clients at each stage of the project. This aids the customer in comprehending our perspective and keeping themselves informed of the situation."

        heading1='The Basics:'
        para1='Your step-by-step plan for getting your book in front of the right readers, at the right time and place, with the correct money is your book marketing plan. Consider your strategy as a marketing campaign to help sell more copies of your book.'
        num1='01'

        heading2='Marketing on Social-Media & Additional Media Channels'
        para2='When creating content, we first consider your audience and what it will take to reach them, including where and what kind of content we will need to create. Will a book trailer be produced? Will Facebook ads be used by us? Beforehand decisions will be made and informed to you.'
        num2='02'

        heading3='Google, Search Engine, and Marketing Plan Implementation:'
        para3='It is crucial to have an SEO plan since it keeps you focused when producing content. Our strategy will make sure that your book reaches people that are searching for exactly what you offer!'
        num3='03'

        heading4='Target Audience'
        para4='You`ve just finished writing a new book, and you obviously want the entire world to read it. However, based on the subject and genre, only a certain set of people will be interested. We create a strategy to focus on the people who are most likely to be interested in your book in order to increase the number of prospective readers.'
        num4='04'

        heading5='Effective Marketing Strategy Is What Is Needed!'
        para5='Several book marketing strategies are used in a well-designed book marketing plan. An author`s website, social media, paid advertisements, or lead magnets are examples of this. To ensure that your book sells well, we`ll show you how to employ several book promotional strategies. You can sit back while we do all the work for you!'
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
        title='Our Experience Allows Us To Weave Together Enthralling Stories.'
        text='No task is too huge or tough when you have people like us working together as part of such a one-stop solution, which is why our reasonably priced book marketing services guarantee quality from start to finish.'
        subtext='All of your marketing efforts will be amplified by strong branding. But to create a trustworthy brand, professionalism, and knowledge of the sector are required. We have adopted new strategies to help our authors feel at ease with the authoring work, whether it be book writing, editing, or marketing, as we have observed that it was a demanding task for them to get their work published via traditional approaches. '
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices1}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Collaboration is the Secret to Everything!'
        text='Extensive publishing support and counseling are included in our book marketing services and packages. We will create a budget for you that takes into account the book`s demands for designing, publishing, printing, and editing. Our book marketers create online and offline tactics to increase the readership of your book. Unlike other book marketing firms, we don`t consider our work complete until you have a solid reputation as a household name in the sector.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices2}
        whychooseclass="marketyourbook"
      />



      {/* Selfpublishing */}
      <Selfpublishing
        title='Customer Service That Is Second To None!'
        text='The demands of our customers come first for us. No matter which profiles you use or how often you update and revise your website, our book promotion services are designed to elevate your writing to a new level.'
        subtext='The best book marketing service companies go above and above to ensure that the bestseller title becomes a reality, staying on top of marketing trends and updating strategy.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices3}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='An Impressive Implementation Of Strategy'
        text='Every marketing strategy, platform, and product needs a well-tailored execution plan. Our inexpensive book marketing services ensure that the wants and preferences of the target readers are addressed because every book has a different readership.'
        subtext='To ensure complete customer pleasure, our professionals offer extensive advice on the various types and marketing tactics. We incorporate social media platforms, blogging, guest posting, and email marketing in our bundles of book marketing services.'
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
          title='With Our Book Marketing Services, You Can Flip The Industry On Its Head!'
          text="You are the face of your book, but it doesn't imply it is a single project. It is a dynamic, challenging, and, to be honest, commercially competitive industry. The correct book marketing strategy, measured milestones, and extensive exposure are all musts for making your work a chart-topper! Let's work together!"
          number="(213) 289 3888"
          discuss="LET'S DISCUSS"
        />

      </div>























    </>
  )
}

export default Bookpublishingservices