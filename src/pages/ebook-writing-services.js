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

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'>  <Link className='textdocationnone color-blue hover' href="/book-publishing-services">Ebook Writing Services</Link>  <span className='d-block'>That Give Meaning To Your Imagination!</span> </h1>;



  
    const bannertext=[
        {
          title: newSpan,
          pra: 'Quality eBook writing drives traffic, and our experienced writers know the tips and tricks of keeping the readers engaged with appealing word selection',
          discuss:'LET S DISCUSS',
          homebannernum:'(302) 883-8877',
          banlogo:homebannerlogos,
          banners:'ebook',
    
         
           
    
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





const  geta = <span>Get Connected To Your Readers With <Link className='color-blue textdocationnone hover' href='/book-editing-services'> Ebook Writing Experts! <br></br> </Link></span>





const posdata = <span>What Is Stopping You From Availing The Most <Link className='textdocationnone color-blue hover' href='/book-editing-services'>Affordable EBooks Writing Services? </Link> </span>



const fine = [

  {
    img: mission1,
    title:'Delivery Commitments',
    text: 'Our clients are our utmost priority! We promise to deliver your EBooks right on time.',
    class: 'fintop',
  

  },

  {
    img: mission2,
    title:'Originality',
    text:'We have a team of expert eBooks writers who dedicatedly write original and customized content every time you take our services.',
    class: 'fintop',
    

  },

  {
    img: mission3,
    title:'Well - Researched Personalization',
    text:'The professional eBooks writers at the Book Writing Experts conduct in-depth research on the topic and deliver personalized content as per your requirements.',
    class: 'fintop',


  },


]

const dateset = <span>  Waiting For Someone To <br></br> <Link href='#' className='color-blue textdocationnone hover'>Give Your Book An EBook Version?</Link> </span>


const datesettext = <span>  Get in touch with our <Link href='#' className='colortextgrey textdocationnone hover'>professional book writing</Link> specialists today. Our eBooks Writing Experts choose the most compelling words and perfect linguistics for your work. We promise original, customized, and timely delivery of your content without breaking your bank!</span>


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
 text= 'Writing an eBook is no walk in the park, and you do not have to go through this trouble. Book Writing Experts have a dedicated team of eBook Writers for you, right at your disposal. Our specialists do not just transform your words into a story but also help your book rank among the top sellers. We take your ideas to the world and help you reach out to the right readers through the right platforms.'
Dowecome= "publishmybook"

/>

<Stopworrying 
 title = 'Tired Of Trying To Write An Ebook On Your Own?'
 subtitle = {posdata}
 btn1 = 'Get a free Proposal'
 btn2 = 'Talk to an expert'
/>



<div className={`${styles.finetoothedbook} customizedbook`}>
<Container>
<Row >
<h2 className='color-lightgray   font48   t-center font-f mb-2'>Our Approach</h2>  

<p className='font50 font-f fw500 color-black t-center pb-2'>We Aim To Add Value To Your <Link className='textdocationnone color-blue hover' href='/book-editing-services'> <br></br>EBooks!</Link></p>

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
 text= {datesettext} 
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