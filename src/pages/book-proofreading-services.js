import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container,Row } from 'react-bootstrap'

// images
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'

// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Stillonthefence from '../../components/Stillonthefence'

// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <Link className='textdocationnone color-blue hover' href="/book-proofreading-services"> Book Proofreading Services </Link> <span className=''>That Make Your Book Flawless To The Level Of Finesse!</span>   </h1>;



  
    const bannertext=[
        {
          title: newSpan,
          pra: 'At Book Writing Experts, we have a team of professional and skilled proofreaders that have years’ worth of experience working on countless.',
          discuss:'LET S DISCUSS',
          homebannernum:'(213) 289 3888',
          banlogo:homebannerlogos,
          banners:'offeringyoubook',
 
         
           
    
        }
      ]



      const reasons = [

        {
          title:'Second-to-none Proofreading Services',
          text:'To help you improve the readability of your book, our proofreading experts go the extra mile and ensure not a single flaw remains unattended. The rendered online proofreading services are of the highest quality, which means you can rest assured of being in good hands.',
          col:'6',
          classnum: 'number',
        },
        {
          title:'Highly Experienced Proofreaders',
          text:'We have a team of highly experienced and skilled proofreaders who are experts in their field and work diligently to ensure that your document is error-free.',
          col:'6',
          classnum: 'number',
        },
        {
          title:'Money-back Satisfaction Guaranteed',
          text:'We offer a money-back satisfaction guarantee so that you can be confident that you will be happy with the results of our proofreading services.',
          col:'6',
          classnum: 'number',
        },
      
        {
          title:'24/7 Operational',
          text:'We are available 24/7 to provide you with our proofreading services so that you can get your document back as soon as possible.',
          col:'6',
          classnum: 'number',
        },
        {
          title:'Pricing That Makes Sense',
          text:'We offer a range of affordable pricing options to suit your needs and budgets. Our affordable proofreading services are what you need to make your book covert into a best-selling publication.',
          col:'6',
          classnum: 'number',
        },
        {
          title:'All Ears to You',
          text:'Sun never sets on Book Writing Cube. We welcome queries of our valued clients with the laser-speedy response and ensure their concerns are addressed at the earliest possible.',
          col:'6',
          classnum: 'number',
        },
      
      
      ]


const  geta = <span> <Link className='color-blue textdocationnone hover fw700' href='/book-proofreading-services'>Professional Proofreading Services</Link> To Turn Your Words Into Masterpieces</span>

const posdata = <span>Adding Value To Your Masterpiece With Our Exceptional  <Link className='textdocationnone color-blue fw700 hover' href='/book-proofreading-services'>Proofreading Services!</Link> </span>



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

const dateset = <span className='fw500'>Need An Expert For Your <br></br><Link className='textdocationnone color-blue hover fw700' href='/book-proofreading-services'> Book Promotions? </Link>  </span>




  return (
   <>
   <Head>
   <meta charSet="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	<meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
	<meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
	<link rel="profile" href="http://gmpg.org/xfn/11"/>
	<link rel="pingback" href="https://bookwritingexperts.com/xmlrpc.php"/>
	<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
	<title>Best Book Proofreading Services - Book Writing Experts</title>
	<meta name="description" content="Book Proofreading services make your manuscript flawless. Avail the services today from the experts who are adept at keeping an eagle eye on errors." />
	<link rel="canonical" href="https://bookwritingexperts.com/book-proofreading-services/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Best Book Proofreading Services - Book Writing Experts" />
	<meta property="og:description" content="Book Proofreading services make your manuscript flawless. Avail the services today from the experts who are adept at keeping an eagle eye on errors." />
	<meta property="og:url" content="https://bookwritingexperts.com/book-proofreading-services/" />
	<meta property="og:site_name" content="Book Writing" />
	<meta property="article:modified_time" content="2023-03-31T12:03:57+00:00" />
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
<h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

<p className='font50 font-f fw500 colortextgrey t-center pb-2'>Our <Link className='textdocationnone fw700 color-blue hover' href='/book-proofreading-services'>Proofreading Services</Link> Are Designed to Polish Your Work to Perfection</p>

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
title= 'This Is How You Get A Fresh Pair Of Eyes On Your Manuscript.'

heading1 = 'We Receive Your Book'
para1 = 'Our proofreaders receive the manuscript/book to get the process of proofreading started.'
num1 = '01'

heading2 = 'We Start Scrutinizing Your Manuscript'
para2 = 'Our professional proofreading personas read throught the entire book,looking for errors or typos'
num2 = '02'

heading3 = 'Rectification Starts!'
para3 = 'Once all the errors have been found, they are corrected in the manuscript. '
num3 = '03'

heading4 = 'Consistency Checked'
para4 = 'Our proofreaders will read through the book one last time tp catch any final errors or typos.Once they have finished, they will send you proof of the book so that you can see all the changes that they have made.'
num4 = '04'

heading5 = 'Your Book Is Now Error-free'
para5 = 'An error-free and flawlessly written book is sent off to you in this step.'
num5 = '05'


/>





  {/* Stopworrying */}
  <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          subtitle3='It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>




   {/* Talk To Our Whatourclients! */}
   <Whatourclients />


   




























{/* Stillonthefence component */}

<Container fluid className='still'>


<Row >
<h2 className='font50 fw700 color-blue t-center font-f mb-5'>Why Do You Need To Invest In Our Professional Proofreading Services?</h2>  
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





 {/* Aspiring */}

 <div className='datacloud'>
<Aspiring
 title= 'Have A Second Set Of Eyes To Catch The Errors That You Have Missed!'
 text="Call us to get professional editors who will comb through your work and correct any errors. Whether it's a typo or a more serious grammatical error, we'll make sure it's fixed before you submit your work."
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
/>

</div>








   </>
  )
}

export default Bookpublishingservices