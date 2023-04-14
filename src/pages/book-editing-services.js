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

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className='d-block'>  Professional and unmatched</span> <Link className='textdocationnone color-blue hover' href="/book-publishing-services"> Book Editing Services </Link>  <span className='d-block'>for all the Idealists within their reach</span> </h1>;



  
    const bannertext=[
        {
          title: newSpan,
          pra: 'Putting your ideas on a piece of paper is never enough! You always need an editing expert who can turn your ideas into Perfection!',
          discuss:'LET S DISCUSS',
          homebannernum:'(302) 883-8877',
          banlogo:homebannerlogos,
          banners:'bookeditingservices',
    
         
           
    
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





const  geta = <span>Reliable <Link className='color-blue textdocationnone hover' href='/book-editing-services'> Editing Solutions <br></br> </Link> For All!</span>





const posdata = <span>How About A Group Of Professionals <Link className='textdocationnone color-white hover' href='/book-editing-services'>Edit Your Book </Link> Before Publishing?</span>



const fine = [

  {
    img: mission1,
    title:'Professional Editing Experts',
    text: 'Our clients put all their trust in our book writing services. We maintain that with our professional editing experts who have got command of several industries and genres.',
    class: 'fintop',
  

  },

  {
    img: mission2,
    title:'Authorized Tools',
    text:'After human editing, we make sure to pass your content through authorized tools that can re-assure perfection.',
    class: 'fintop',
    

  },

  {
    img: mission3,
    title:'Uniqueness and Customization',
    text:'With an in-depth study of your draft, we make unique edits that are customized as per your ideas and concepts of the final document.',
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
   

   {/* partners components */}
<Partners/>





{/* Dowecome */}
<Dowecome
 title = {geta}
 text= 'Errors are inevitable! But the solutions are not! The professional editing experts at Book Writing Experts leave no gaps in assisting your writing drafts with top-notch, unique, and customized editing solutions. We further take complete guarantee of what we deliver and keep client satisfaction above everything.'
Dowecome= "publishmybook"

/>

<Stopworrying 
 title = 'Struggling To Sell More Books?'
 subtitle = {posdata}
 btn1 = 'Get a free Proposal'
 btn2 = 'Talk to an expert'
/>



<div className={`${styles.finetoothedbook} customizedbook`}>
<Container>
<Row >
<h2 className='color-lightgray   font48   t-center font-f mb-2'>Our Approach</h2>  

<p className='font50 font-f fw500 color-black t-center pb-2'>We Want You To Get The Most Out Of Your <Link className='textdocationnone color-blue hover' href='/book-editing-services'> <br></br>Online Book Editing!</Link></p>

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
title= 'Our Process'

heading1 = 'Initial Submission'
para1 = 'We ask for the initial submission of the draft and asks the client for a detailed understanding of the'
num1 = '01'

heading2 = 'Initial Edits'
para2 = 'We then go through the draft, point out our editing suggestions, and without making any changes, forward it to the client for their feedback.'
num2 = '02'

heading3 = 'Final Edits'
para3 = 'Once the client approves our suggestions, we start editing the document on common grounds. The editing experts revise the changes twice for fewer errors.'
num3 = '03'

heading4 = 'Review and Proofreading'
para4 = 'The editors then forward the document to our expert proofreading professionals who give their reviews and run a final check before finalizing.'
num4 = '04'

heading5 = 'Final Checking and Delivery'
para5 = 'The proofread content is further forwarded to the clients for their final take on the edits. Once they are satisfied, we align it with the publishing department.'
num5 = '05'


/>


{/* Aspiring */}
<Aspiring
 title= {dateset} 
 text= 'Connect with us, and avail our best Editing Services at one go. We know the right formula for errorless content.'
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