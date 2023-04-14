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

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <Link className='textdocationnone color-blue hover' href="/book-proofreading-services"> Book Proofreading Services </Link> <span className='d-block'>That Make Your Book Flawless To The Level Of Finesse!</span>   </h1>;



  
    const bannertext=[
        {
          title: newSpan,
          pra: 'At Book Writing Experts, we have a team of professional and skilled proofreaders that have years’ worth of experience working on countless.',
          discuss:'LET S DISCUSS',
          homebannernum:'(302) 883-8877',
          banlogo:homebannerlogos,
          banners:'offeringyoubook',
 
         
           
    
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





const  geta = <span> <Link className='colortextgrey textdocationnone hover' href='/book-proofreading-services'>Professional Proofreading Services</Link> To Turn Your Words Into Masterpieces</span>



const  work = <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='colortextgrey textdocationnone hover' href='https://bookwritingexperts.com/book-publishing-services/'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>


const posdata = <span>Adding Value To Your Masterpiece With Our Exceptional  <Link className='textdocationnone color-white hover' href='/book-proofreading-services'>Proofreading Services!</Link> </span>



const fine = [

  {
    img: mission1,
    title:'Experienced Proofreaders',
    text: 'Book Writing Experts has a team of proofreading experts who check every book before it goes to print. This ensures that there are no errors in the text and that the book meets all publishing standards. Proofreading is an essential part of the publishing process, and Book Writing Experts takes it very seriously.',
    class: 'fintop',
  

  },

  {
    img: mission2,
    title:'Fast Delivery',
    text:'We offer fast delivery times so you can get your book into readers’ hands as soon as possible. We understand the importance of meeting deadlines, so we’ll work hard to get your book ready for publication in a timely manner.',
    class: 'fintop',
    

  },

  {
    img: mission3,
    title:'Quality Work',
    text:'Book Writing Experts is the perfect partner for self-publishing authors who want to make sure their work is polished and ready for readers. We know how important it is to get your book just right, and we’re here to help.',
    class: 'fintop',


  },


]

const dateset = <span>Need An Expert For Your <br></br><Link className='textdocationnone colortextgrey hover' href='/book-proofreading-services'> Book Promotions? </Link>  </span>


const proofreading = <Link className='textdocationnone colortextgrey hover' href='/book-proofreading-services'>Proofreading</Link>

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
 text='Our aim is to provide our clients with above satisfactory work. Our team of brilliant proofreaders ensures your draft is free of minor errors, inconsistencies, and formatting mistakes. This greatly improves the quality of your work before the publication process begins. '

Dowecome= "publishmybook"

/>

<Stopworrying 
 title = 'Best Online Proofreading Service'
 subtitle = {posdata}
 btn1 = 'Get a free Proposal'
 btn2 = 'Talk to an expert'
/>



<div className={`${styles.finetoothedbook} customizedbook`}>
<Container>
<Row >
<h2 className='color-lightgray   font14   t-center font-f mb-2'>Our Approach</h2>  

<p className='font17 font-f fw500 color-black t-center pb-2'>Our <Link className='textdocationnone colortextgrey hover' href='/book-proofreading-services'>Proofreading Services</Link> Are Designed to Polish Your Work to Perfection</p>

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



<Ourprocess 
title= 'Our Streamlined Proofreading Process'

heading1 = 'Submit Your Document'
para1 = 'After getting in touch with our client, we receive the document that needs to be proofread'
num1 = '01'

heading2 = 'Read & Analyze'
para2 = 'Our team of professional proofreaders reads and analyzes the document for grammatical and formatting errors. '
num2 = '02'

heading3 = {proofreading}
para3 = 'Once the errors are identified and highlighted, our skilled proofreaders begin the proofreading process, making necessary changes to improve the quality of the document. '
num3 = '03'

heading4 = 'Editing Tools'
para4 = 'Our proofreaders use the latest editing tools to scan the document for any remaining errors that might have missed their eyes.'
num4 = '04'

heading5 = 'Final Approval & Delivery'
para5 = 'After the approved changes are incorporated into the document, we deliver a polished document, free of any errors. '
num5 = '05'


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



























   </>
  )
}

export default Bookpublishingservices