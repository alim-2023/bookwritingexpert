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

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'>  <span className='d-block'>Bring Your Ideas to Life With Our Expert</span> <Link className='textdocationnone color-blue hover' href="/book-proofreading-services"> Ghostwriting Services! </Link>   </h1>;



  
    const bannertext=[
        {
          title: newSpan,
          pra: 'Let our experts fire the imagination of your readers with their killer writing techniques. Your story needs to be heard, and Book Writing Experts',
          discuss:'LET S DISCUSS',
          homebannernum:'(302) 883-8877',
          banlogo:homebannerlogos,
          banners:'ghostwriting',
 
         
           
    
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





const  geta = <span>Our <Link className='colortextgrey textdocationnone hover' href='/book-proofreading-services'> Ghostwriting </Link>Team Has A Knack For Telling Stories</span>



const  work = <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='colortextgrey textdocationnone hover' href='https://bookwritingexperts.com/book-publishing-services/'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>


const posdata = <span>Get The <Link className='textdocationnone color-white hover' href='/book-proofreading-services'>Top Ghostwriting Services</Link> From The Writers Who Best Understands The Readers?</span>



const fine = [

  {
    img: mission1,
    title:'Well versed writers',
    text: 'To provide high-quality work, we have a team of native speakers who have years of content writing experience.',
    class: 'fintop',
  

  },

  {
    img: mission2,
    title:'Refund Policy',
    text:'We offer a refund if the client is not satisfied with our overall work. After all, client satisfaction comes first!',
    class: 'fintop',
    

  },

  {
    img: mission3,
    title:'Customized Offers',
    text:'Different clients have different needs. We take care of their requirements with customized packages',
    class: 'fintop',


  },


]

const dateset = <span>A Complete Solution To Your  <br></br><Link className='textdocationnone colortextgrey hover' href='/book-proofreading-services'>Ghost Writing </Link> Essentials Is Here! </span>


const proofreading =  <span> Our <Link className='textdocationnone colortextgrey hover' href='/book-proofreading-services'> Ghostwriting Service</Link> Process </span>




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
 text='The Ghost Writers at Book Writing Experts deliver compelling stories that persuade their audience to read more. We have a scattered team of experts that provide excellent ghostwriting services for all genres, fiction to nonfiction, from mystery to horror, history to humor, magic to romance, you name it, and we will get it written for you. We understand your requirements, draft the manuscript, utilize the best resources, make edits, and deliver your mere idea as a Powerful Book.'

Dowecome= "publishmybook"

/>

<Stopworrying 
 title = 'Transform Your Ideas Into Words That Matters!'
 subtitle = {posdata}
 btn1 = 'Get a free Proposal'
 btn2 = 'Talk to an expert'
/>



<div className={`${styles.finetoothedbook} customizedbook`}>
<Container>
<Row >
<h2 className='color-lightgray   font14   t-center font-f mb-2'>Our Approach</h2>  

<p className='font17 font-f fw500 color-black t-center pb-2'>Our Mission Is To Maximize Value For Our Authors With Online <Link className='textdocationnone colortextgrey hover' href='/book-proofreading-services'>Book Marketing</Link></p>

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
title= {proofreading}

heading1 = 'Studying, Researching, and Drafting'
para1 = 'Our Ghost Writing team leaves no stones unturned when they start the research. Upon that, we draft an outline as per your idea, get it approved, and start working accordingly.'
num1 = '01'

heading2 = 'The Initial Writing Begins'
para2 = 'As per the outline, our expert ghostwriters start writing the initial content that reflects your ideology behind book writing.'
num2 = '02'

heading3 = 'Critics, Edits, and Proofreading'
para3 = 'We make the Book writing content firm through critical reviews, which leads to required edits by the professionals. After making changes, our proofreaders double-check the content and leave no lapse behind.'
num3 = '03'

heading4 = ''
para4 = 'In this step, we determine what looks best where. The Formatting and Designing team critically looks into the finalized content and presents it with the best graphical details.'
num4 = '04'

heading5 = 'Market And Promote The Book'
para5 = 'With the completion of your book, we design strategies. And take complete responsibility to market, distribute, and promote your work through effective channels.'
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
 text= 'Book Writing Experts has got you covered with the Best-Ghostwriting services. You are just one click away!'

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