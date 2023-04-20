import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import whatisourchildren from '/public/images/whychoosebooks/whatisourchildren.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'
import Stillonthefence from '../../components/Stillonthefence'
import yourhowwhat from '/public/images/yourhowwhat/yourhowwhat.png'
import typeofbooks from '/public/images/selfpublishingservices/typeofbooks.png'
import marketyourbook from '/public/images/selfpublishingservices/marketyourbook.jpg'
import copy from '/public/images/selfpublishingservices/copy.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import together from '/public/images/together/together.png'

import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Whatourclients from '../../components/Whatourclients'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservicesweoffer'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'

import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Ourprocess from '../../components/Ourprocess'
import Selfpublishing from '../../components/Selfpublishing'

const Childrenbookpublicationservices = () => {

  const fine = [

    {
      img: mission1,
      title:'Outstanding Marketing Campaigns',
      text: 'Our team has the expertise, experience and know-how to run excellent book marketing campaigns. We are familiar with the best strategies to target the right prospects to sell your books.',
      class: 'fintop',
    
  
    },
  
    {
      img: mission2,
      title:'Outstanding Marketing Campaigns',
      text:'Our team has the expertise, experience and know-how to run excellent book marketing campaigns. We are familiar with the best strategies to target the right prospects to sell your books.',
      class: 'fintop',
      
  
    },
  
    {
      img: mission3,
      title:'Outstanding Marketing Campaigns',
      text:'Our team has the expertise, experience and know-how to run excellent book marketing campaigns. We are familiar with the best strategies to target the right prospects to sell your books.',
      class: 'fintop',
  
  
    },
  
  
  ]


  const posdata = <span>Let Our Best <Link className='textdocationnone color-blue hover fw700' href='/children-book-publication-services'>Amazon Kindle Direct Publishing (KDP)</Link> Service Providers Handle All Your Publishing Troubles!</span>


  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>Providing Full Fledged</span> <Link className='textdocationnone color-blue hover' href="/children-book-publication-services"> Book Publishing Services  </Link>  <span className=''>To Our Struggling Authors</span> </h1>;

  const bannertext=[
    {
      title: newSpan,
      pra: 'Make the most of the immense value with Children’s Book Publishing!',
      discuss:'LET S DISCUSS',
      homebannernum:'(213) 289 3888',
      banlogo:homebannerlogos,
      banners:'bookpublishingservices',
     
       

    }
  ]

const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone color-blue' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone color-blue' href="#">self publishing</Link> .</span>;

const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>


const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone' href="#">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>
const dateset = <span className='fw500'>Let’s <Link className='textdocationnone color-blue hover fw700' href='/children-book-publication-services'> Publish Your <br></br> Masterpiece</Link>  Together! </span>

const reasons = [

  {
    title:'Book reviewing',
    text:'Our dedicated teams go through every word and illustration before handing over the final draft to you. We make sure the illustrations are contextually correct while ensuring the rhythmic flow of the content. At Book Writing Cube, our proofreaders go the extra with text and illustration alignments and sizing.',
    classnum: 'number1',
    
  },
  {
    title:'Book composition',
    text:'Once the text and illustrations are checked for grammar and context, we offer the client an initial draft for further review. Our experts provide you with different options when it comes to the spread and type of illustration in order to keep your book publication cost-effective.',
    classnum: 'number1',
   
  },
  {
    title:'Book publication',
    text:'In this final stage, we help you with typesetting, page trim, length, and cover of the book. Our design and illustration professionals facilitate you in finalizing the publishing draft. Be it enhancing the color scheme or changing the typography, we offer multiple revisions to help you publish the always-wanted book under your name.',
    classnum: 'number1',
   
  },




]

const  geta = <span>Get A Customized Solution By <Link className='color-blue hover textdocationnone fw700' href='/children-book-publication-services'> Best Publishing Services </Link></span>




const  work = <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='colortextgrey textdocationnone hover' href='/children-book-publication-services'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>






  return (
   <>
   <Head>

   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Children Book Publication Services Creating Reading Trials - Book Writing Cube</title>
    <meta name="description"
        content="Book Publication Services that aim to aid aspiring authors write, publish, & sell their children's books." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="tags" content="" />

    <meta name="DC.title" content="children book publication" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />

    <meta name="DC.title" content="children book publication" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Children Book Publication Services Creating Reading Trials - Book Writing Cube" />
    <meta property="og:description" content="Book Publication Services that aim to aid aspiring authors write, publish, & sell their children's books." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Children Book Publication Services Creating Reading Trials - Book Writing Cube" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:label1" content="Est. reading time" />
    <meta name="twitter:data1" content="5 minutes" />



  <link rel="icon" href="/favicon.svg" />

   </Head>
   


   
   {/* banner components */}

   {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.banners}
       /> 
       )}
   

   {/* partners components */}
<Partners/>





{/* Dowecome */}
<Dowecome
 title = {geta}
 text={work}
Dowecome= "publishmybook"

/>

<Stopworrying 
 title = 'Stop worrying about publishing books!'
 subtitle = {posdata}
 btn1 = 'Get a free Proposal'
 btn2 = 'Talk to an expert'
/>


<div className={`${styles.finetoothedbook} customizedbook`}>
<Container>
<Row >
<h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

<p className='font50 font-f fw500 colortextgrey t-center pb-2'>Our Mission Is To Maximize Value For Our Authors With Online <Link className='textdocationnone color-blue hover fw700' href='/children-book-publication-services'>  Book Marketing</Link></p>

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

heading1 = 'Manuscript Submission'
para1 = 'The writer contacts us for submission of their full-length manuscript, while submitting, we discuss our publishing rules and sign the contract.'
num1 = '01'

heading2 = 'Peers Review'
para2 = 'Our experienced editors then review the manuscript and make the required changes with the writer’s permission.'
num2 = '02'

heading3 = 'Formatting and Typesetting'
para3 = 'After the manuscript is reviewed by editors, our experts do the formatting and add images.'
num3 = '03'

heading4 = 'Book Production'
para4 = 'We design the first copy of the book and take reviews from the writer. The rest of the books are produced on the same pattern while keeping all the important aspects into consideration.'
num4 = '04'

heading5 = 'Marketing, Publishing, and Distribution'
para5 = 'Before publishing, we spread awareness about the book to create demand. And Voila! The book is published now!'
num5 = '05'


/>







{/* Aspiring */}
<div className='dataset'>
<Aspiring
 title= {dateset}
 text= 'It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
 subtext= 'Trust the marketing professionals for it, do not risk it!'
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
 img= {together}
/>
</div>
 {/* Talk To Our Whatourclients! */}
 <Whatourclients />





{/* Makestories */}
<Makestoriesnew
title='Our Latest Children’s Book Publishing Projects'
para='Let Our Children’s Book Publishing Team Help You'
/>






{/* Selfpublishing */}
<div className='waitdatecloud'>
<Selfpublishing
 title='What Type Of Books Do We Publish?'
 text= {text}
 subtext={subtext}
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
 image={copy}
 whychooseclass= "marketyourbook"
 />
</div>








{/* Lululogos components */}

<Lululogos/>



{/* Stillonthefence component */}
<div className={styles.stillbookwritingservices}>
<Container >
<Row >
<h2 className='font50 fw700 color-white t-center font-f mb-3'>Enticement, exposure, and expansion—acing the toughest gig!</h2>  

<p className="font15  font-f t-center color-white  mb-5">Know this: not many authors secure any deal with the publishers.
                        But at Book Writing Cube, we help you connect and collaborate with high-profile publishers and
                        Children's Book Publishing experts.
                    </p>
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

</div>





{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="What Is Our Children Book Publication Process?"
  text="Our professional book writing services is a collaborative process between our client and our team that has the following steps:"
  whychoose= {whatisourchildren}
 />


 


{/* Aspiring */}
<div className='datacloud'>
<Aspiring
 title= 'Ultimately, your success establishes our reputation'
 text="The experts at Book Writing Cube are well-aware of the amount of time and effort a singular literary composition requires. We value the work done and respect the passion for publishing the aspiring authors demonstrate. And we promise to help you finalize a composition you can take great pride in!"
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
/>
</div>







   </>
  )
}

export default Childrenbookpublicationservices