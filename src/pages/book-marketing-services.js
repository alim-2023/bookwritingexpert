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

// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <Link className='textdocationnone color-blue hover' href="/book-marketing-services"> Book Marketing Services </Link> <span className='d-block'>That Saves You From Getting Lost In The Mix!</span>   </h1>;



  
    const bannertext=[
        {
          title: newSpan,
          pra: 'Are you struggling with reaching your target audience? Your book is all ready to be read, but there is no one to read it.',
          discuss:'LET S DISCUSS',
          homebannernum:'(302) 883-8877',
          banlogo:homebannerlogos,
          banners:'bookpromotionservices',
 
         
           
    
        }
      ]




    
   
      
      
      const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone' href="/book-publishing-services">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>
      
      
      const whybookpublishingdata = [
      
      {
        title: 'How can I publish my book?',
        text:  'The first thing you need to do after making up your mind about publishing a book is to find a publishing house. There are several types of publications including online publication, paperback or hardcopy publishing as well as self Publication. You need to select the kind of publication you want and then work with the publisher company to assist you with the process.',
        col6: '6',
      },
      {
        title: 'What’s different about Self Publishing?',
        text: 'By self publishing a book, you get full authority of your work including the management and other processes of publishing like editing, cover design and even marketing strategies. You have to pay a certain amount as fee and you get to call the shots! At Book Writing Cube, different teams designated for different kinds of publications.',
        col6: '6',
      },
      {
      title:'How much does it cost to have a book published?',
      text:'If you’re worried about the initial investment you have to put in order to get your book published, don’t fret too much! There are various packages available from which you can select the one that works for you. We work with every kind of budget to give your clients the best experience and help them publish their work for the world to read!',
      col6: '6',
      },
      {
      title:'Can I publish on different publishing platforms?',
      text: datapost,
      col6: '6',
      },
      
      ]





const  geta = <span>Book Promotion Has Just Become Easier With The Global <Link className='colortextgrey textdocationnone hover' href='/book-marketing-services'>Book Marketing Services.</Link></span>



const  work = <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='colortextgrey textdocationnone hover' href='https://bookwritingexperts.com/book-publishing-services/'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>


const posdata = <span>It’s Time You Let The <Link className='textdocationnone color-white hover' href='/book-marketing-services'>Marketing Experts</Link> Take Charge Of Your  <Link className='textdocationnone color-white hover' href='/book-marketing-services'>Book Promotions!</Link> </span>



const fine = [

  {
    img: mission1,
    title:'Creative Marketing Runs',
    text: 'Book Writing Experts marketing experts have a knack for promotions, and they know how to attract the audience through their creative marketing campaigns. The purpose of each campaign is to get your target audience to read your book; it is as simple as that!',
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
    text:'Book Writing Experts experienced and award-winning team will get you reviews and market your book through their bespoke and personalized services. We boost up the potential of every book campaign regardless of the campaign size or genre. Each client matters to us!',
    class: 'fintop',


  },


]

const dateset = <span>Need An Expert For Your <br></br><Link className='textdocationnone colortextgrey hover' href='/book-marketing-services'> Book Promotions? </Link>  </span>




  return (
   <>
   <Head>
   <meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
	<meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="https://bookwritingexperts.com/xmlrpc.php" />

	<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

  <title>Get Your Book on Amazon KDP with Top-Rated Book Publishing Services</title>
	<meta name="description" content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!" />
	<link rel="canonical" href="https://bookwritingexperts.com/book-publishing-services/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Get Your Book on Amazon KDP with Top-Rated Book Publishing Services" />
	<meta property="og:description" content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!" />
	<meta property="og:url" content="https://bookwritingexperts.com/book-publishing-services/" />
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
<h2 className='color-lightgray   font14   t-center font-f mb-2'>Our Approach</h2>  

<p className='font17 font-f fw500 color-black t-center pb-2'>Get More Readers On-Board With Our <Link className='textdocationnone color-black hover' href='/book-marketing-services'> <br></br> Online Book Marketing Services</Link></p>

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


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>Why Book Publishing?</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
       Oftentimes, we find ourselves indulging in thoughts that others might fascinating. Most of them remain limited to the abyss inside our heads. However, some ideas/stories and visions are meant for the world to read and study. The ideas develop once you write, but the important aspect is to let the world to see your work and change mindsets!
    </p>

  </Row>

    <Row>
      {whybookpublishingdata.map((item, i) =>
        <Whybookpublishing  key={i}
          title={item.title}
          text={item.text}
          col6={item.col6}
        />
      )}
    </Row>            
  </Container>   
</div>
















   {/* Talk To Our Whatourclients! */}
   <Whatourclients />



























   </>
  )
}

export default Bookpublishingservices