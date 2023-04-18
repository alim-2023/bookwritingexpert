import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'

// images
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'

import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'

import together from '/public/images/together/together.png'


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
import Lululogos from '../../components/Lululogos'
import Stillonthefence from '../../components/Stillonthefence'
import drivethebook1 from '/public/images/drivethebook/1.png'
import Whychoosebook from '../../components/Whychoosebook'
// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <Link className='textdocationnone color-blue hover' href="/book-promotion-services/"> Book Promotion Services  </Link> <span className=''>That Connects You To The Reader’s Fraternity!</span>   </h1>;



  
    const bannertext=[
        {
          title: newSpan,
          pra: 'Are you struggling with reaching your target audience? Your book is all ready to be read, but there is no one to read it?',
          discuss:'LET S DISCUSS',
          homebannernum:'(213) 289 3888',
          banlogo:homebannerlogos,
          banners:'bookpromotionservices',
 
         
           
    
        }
      ]




    
   
      
      
      const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone color-blue hover' href="/book-publishing-services">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>
      
      
      const whybookpublishingdata = [

        {
          title: 'Why Do I Need Book Promotion Services?',
          text:  'There are a lot of reasons why you might need book promotion services. Perhaps you are self-publishing and want to make sure your book gets seen by as many people as possible. Or maybe you have got a traditional publisher, but they are not doing much to promote your book. In either case, working with a book promotion company can help you get your book in front of more readers.',
          col6: '6',
        },
        {
          title: 'What Kind of Services Do Book Promotion Companies Offer?',
          text: 'Book promotion companies offer a wide range of services, from helping you create a social media campaign to organizing a book tour. They can also provide more general marketing and publicity assistance, such as drafting press releases, working with book reviewers, or kindle book promotion services for authors.',
          col6: '6',
        },
        {
        title:'How Much Do Book Promotion Services Cost?',
        text:'The cost of book promotion services varies depending on the company you work with and the scope of the project. In general, you can expect to pay several hundred dollars for basic services and upwards of a few thousand for more comprehensive campaigns.',
        col6: '6',
        },
        {
        title:'How Does Book Promotion Help Businesses?',
        text: 'Book promotion can help businesses in many ways. It can generate awareness for a companys products or services, help create or increase brand recognition, and even drive sales. Promotions can be targeted to specific audiences and can take many forms, from online ads and social media campaigns to in-person events and personal interactions. When done correctly, book promotion can be an extremely effective marketing tool. It can reach a wide audience, build interest and excitement, and ultimately help boost a companys bottom line. With so much potential, it is no wonder that businesses of all sizes are turning to book promotion to help them grow and succeed.',
        col6: '6',
        },
        
        ]





const  geta = <span><Link className='color-blue textdocationnone hover fw700' href='/book-promotion-services/'>Book Promotion Services</Link> Helping You Be A Cut Above The Rest!</span>



const  work = <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='colortextgrey textdocationnone hover' href='/book-publishing-services'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>


const posdata = <span>It’s Time You Let The Marketing Experts Take Charge Of Your  <Link className='textdocationnone color-blue hover fw700' href='/book-promotion-services/'>Book Promotions!</Link> </span>



const fine = [

  {
    img: mission1,
    title:'Creative Promotion Runs',
    text: 'Book Writing Expert’s marketing experts have a knack for promotions, and they know how to attract the audience through their creative marketing campaigns. The purpose of each campaign is to get your target audience to read your book; it is as simple as that!',
    class: 'fintop',
  

  },

  {
    img: mission2,
    title:'Right People at Right Time',
    text:'Our experts aim to champion the authors they represent, help them create a sustained media presence, and present them as the go-to experts in their field. We promise to market you better!',
    class: 'fintop',
    

  },

  {
    img: mission3,
    title:'Tailored made Services',
    text:'Book Writing Expert’s experienced and award-winning team will get you reviews and market your book through their bespoke and personalized services. We boost up the potential of every book campaign regardless of the campaign size or genre. Each client matters to us!',
    class: 'fintop',


  },


]

const dateset = <span className='fw500'>Need An Expert For Your <br></br><Link className='textdocationnone color-blue hover fw700' href='/book-promotion-services/'> Book Promotions? </Link>  </span>



const reasons = [

  {
    title:'Proven Track Record',
    text:'Our company has a proven track record of successful book promotion campaigns.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Team of Marketing Gurus',
    text:'Book Writing Cube has a team of experienced and creative professionals who can provide customized book promotion services. Every marketing approach, platform, and product requires a well-tailored strategy and plan of execution. Since every book has a different audience, our book marketing services make sure the needs and preferences of the target readers are met.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Cost-Effective Solutions',
    text:'We offer cost-effective book promotion services for authors that fit any budget. The packages we offer regarding book marketing services include social media platforms, blogging, guest posting, and email marketing.',
    col:'6',
    classnum: 'number',
  },

  {
    title:'Extensive Network',
    text:'We bear a wide range of contacts and resources to promote your book effectively. We`ve helped authors from all genres and backgrounds achieve their publishing goals, and we can do the same for you.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Deep Understanding',
    text:'We have a deep understanding of the book promotion process and know how to get results.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Result-driven Approach',
    text:'We are committed to providing the best possible online book promotion services and achieving the desired results for our clients.',
    col:'6',
    classnum: 'number',
  },


]


  return (
   <>
   <Head>

   <meta charSet="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
	<meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="/xmlrpc.php" />

	<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />


	<title>Book Promotion Services For Branding - Book Writing Experts</title>
	<meta name="description" content="Book Promotion Services to leave your competitors in the dust. We know the science of sales and art of marketing your books, hire us today." />
	<link rel="canonical" href="/book-promotion-services/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Book Promotion Services For Branding - Book Writing Experts" />
	<meta property="og:description" content="Book Promotion Services to leave your competitors in the dust. We know the science of sales and art of marketing your books, hire us today." />
	<meta property="og:url" content="/book-promotion-services/" />
	<meta property="og:site_name" content="Book Writing" />
	<meta property="article:modified_time" content="2023-03-31T11:38:52+00:00" />
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
   

   {/* partners components */}
<Partners/>





{/* Dowecome */}
<Dowecome
 title = {geta}
 text='Book Writing Experts now markets your book with successful Global marketing support; our professionals help the author promote their books and reach their audience even at the far corners of the world. Internet gives us a platform to create bespoke ads for the readers and attract them to buy your book. Our book marketing experts are dedicated to getting you as much revenue as they can as soon we publish your book. Be at ease and trust Book Writing Experts with your marketing and publishing jobs.'
 subtext = 'We promise to enhance your book visibility with Global exclusive marketing tactics.'
Dowecome= "publishmybook"

/>

<Stopworrying 
 title = 'Tired of waiting for people to read your book?'
 subtitle = {posdata}
 btn1 = 'Get a free Proposal'
 btn2 = 'Talk to an expert'
/>



<div className={`${styles.finetoothedbook} customizedbook`}>
<Container>
<Row >
<h2 className='color-lightgray   font25   t-center font-f mb-2'>Our Approach</h2>  

<p className='font50 font-f fw500 colortextgrey t-center pb-2'>Get More Readers On-Board With Our <Link className='textdocationnone color-blue hover fw700' href='/book-promotion-services/'>  Online Book Promotion Services</Link></p>

</Row>

<Row className='gy-5'>
{ fine.map((item, i) =>
<Finetoothedbook   key={i}
title =  {item.title}
text =  {item.text}
classtop =  {item.class}
img1 =  {item.img}
btn =  {item.btn}
/>
)}
</Row>
</Container>
</div>


{/* Aspiring */}
<Aspiring
 title= {dateset}
 text= 'It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
 subtext= 'Trust the marketing professionals for it, do not risk it!'
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
 img= {together}
/>





{/* Talk To Our Whatourclients! */}
   <Whatourclients />


{/* Makestories */}
<Makestoriesnew
title='Our Recent Book Promotion Projects That Made Headlines!'
para='Here`s a list of the projects we nailed with our marketing expertise.'
/>


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font50 fw700 color-blue t-center'>Untangle The Complexity Of Your Manuscript Selling With Our Book Marketing Services!</h2>
    <p className='font15 fw500 colortextgrey t-center pb-5 mt-3'>
    Book Writing Cube is a creative studio that offers book promotion services to help authors and business personas get their work noticed by potential readers. We offer various services to suit your needs, including book trailer creation, social media marketing, and more. We're here to help you get your work out there and seen by as many people as possible. Here are a few FAQs that our professional book marketers curated to add information to your knowledge bag.
                    </p>

  </Row>

    <Row>
      {whybookpublishingdata.map((item, i) =>
        <Whybookpublishing  key={i}
          title={item.title}
          text ={item.text}
          col6 ={item.col6}
        />
      )}
    </Row>            
  </Container>   
</div>

{/* Lululogos components */}
<Lululogos/>







{/* Stillonthefence component */}

<Container className='still'>


<Row >
<h2 className='font50 fw700 color-blue t-center font-f mb-5'>Still On the Fence? We Have Reasons For You To Confide In Us!</h2>  
</Row>  

<Row className='gy-5'>
{ reasons.map((item, i) =>
<Stillonthefence key={i}
title =  {item.title}
text =   {item.text}
col6 = { item.col }
classnumber = { item.classnum }
/>
  )}

</Row>  
</Container>


{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="Here’s How We Buckle up To Drive the Book Promotion Engine!"
  text="We have a team of marketing maestros who maximize the marketing channels and make your book the talk of the town. Here is a recipe of how their marketing is cooked to perfection:"
  whychoose= {drivethebook1}
 />


{/* Aspiring */}
<Aspiring
 title= 'Making Your Book a Stellar Addition to the Literature World!'
 text="If you want to watch your work take off and reach new heights, Book Writing Cube may help you do the trick. With extended years of experience in the industry, we know exactly what it takes to get your book noticed and gain maximum exposure. Call us now to take your book to the next level!"
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
/>










   </>
  )
}

export default Bookpublishingservices