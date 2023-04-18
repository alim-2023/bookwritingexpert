import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'

// images
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'

import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import bookwritingcanbe from '/public/images/bookwritingcanbe/bookwritingcanbe.png'
import together from '/public/images/together/together.png'
import whychooseourbookeditingservices1 from '/public/images/whychooseourbookeditingservices/1.png'
import whychooseourbookeditingservices2 from '/public/images/whychooseourbookeditingservices/2.png'
import whychooseourbookeditingservices3 from '/public/images/whychooseourbookeditingservices/3.png'
import whychooseourbookeditingservices4 from '/public/images/whychooseourbookeditingservices/4.png'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'
import drivethebook1 from '/public/images/whychoosebooks/bookeditingprocess.png'

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
import Stillonthefence from '../../components/Stillonthefence'
import Lululogos from '../../components/Lululogos'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Selfpublishing from '../../components/Selfpublishing'
import Whychoosebook from '../../components/Whychoosebook'
import Formattingservices from '../../components/Formattingservices'
import Tablelayout from '../../components/Tablelayout'
// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {
  const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

  const text = <span>This type of <Link className='textdocationnone color-blue hover' href="/book-editing-services"> ebook editing service </Link>  is also called Mechanical Editing and sometimes referred to as Line Editing. The editor's singular job is to make sure the story has a more "professional" approach and fill any gaps in the original plot.</span>;

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className='d-block'>  Professional and unmatched</span> <Link className='textdocationnone color-blue hover' href="/book-editing-services"> Book Editing Services </Link>  <span className='d-block'>for all the Idealists within their reach</span> </h1>;



  
    const bannertext=[
        {
          title: newSpan,
          pra: 'Putting your ideas on a piece of paper is never enough! You always need an editing expert who can turn your ideas into Perfection!',
          discuss:'LET S DISCUSS',
          homebannernum:'(213) 289 3888',
          banlogo:homebannerlogos,
          banners:'bookeditingservices',
    
         
           
    
        }
      ]




    
   
      
      
      const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone' href="/book-editing-services">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>
      
      
      const whybookpublishingdata = [

        {
          title: 'The predetermined prerequisite:',
          text:  'Once your novel is completed, thorough read and content assessment are of crucial importance. From fixing grammar errors to pinpointing the structural improvements, our online book editor ensures the manuscript is finalized to perfection.',
          col6: '6',
        },
        {
          title: 'The much-needed assistance:',
          text: 'Reading and re-reading every line and pondering over each comma and semi-colon are surely mind-numbing aspects of book writing. The professional book editors have the right skills and prowess to correct, improve, and fine-tune the content.',
          col6: '6',
        },
        {
        title:'The must-have consultation:',
        text:'We know you take great pride in your work; we respect and value that. However, an expert’s advice does make all the difference. Our book writing editor helps you figure out the why’s and how’s of giving your work a professional touch.',
        col6: '6',
        },
        {
        title:'The proven technique:',
        text: 'Editing requires constant work. Hiring book editing and formatting services can save you the hassle of time and effort investment. Besides, when you know the best-in-town has your manuscript taken care of, you can give up worrying about if it would be a bestseller—because that’s one thing we don’t get wrong!',
        col6: '6',
        },
        
        ]
        




const  geta = <span>Reliable <Link className='color-blue textdocationnone hover fw700' href='/book-editing-services'> Editing Solutions <br></br> </Link> For All!</span>





const posdata = <span>How About A Group Of Professionals <Link className='textdocationnone color-blue fw700 hover' href='/book-editing-services'>Edit Your Book </Link> Before Publishing?</span>



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


const reasons = [

  {
    title:'World-Class bookwriting Team',
    text:'Work with the industry’s top writers, editors, and publishing strategists. Our team approach gives you the best chance for success.',
    classnum: 'number1',
    
  },
  {
    title:'Personalized Strategic Approach',
    text:'Our process begins with 4extensive publishing strategy sessions to ensure we develop a plan to achieve your goals.',
    classnum: 'number1',
   
  },
  {
    title:'Refined Process',
    text:'Enjoy the efficiency and dependability of our professionally managed bookwriting process.',
    classnum: 'number1',
   
  },

  {
    title:'Book Writing experts',
    text:'Our team includes #1 New York Times- Book Writers and award-winning authors for almost every genre.',
    classnum: 'number1',
  
  },
  {
    title:'Big-5 Editors',
    text:'Your project will be managed and edited by a former acquisitions editor from a Big-5 publisher with numerous New York Times - Book Writing titles.',
    classnum: 'number1',
    
  },
  {
    title:'Publishing Navigation',
    text:'We guide you through every step of the book publishing process. We can place your book directly with traditional publishers or help you choose the ideal hybrid publishing solution.',
    classnum: 'number1',
   
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
	<link rel="pingback" href="https://bookwritingexperts.com/xmlrpc.php" />

	<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />


	<title>Professional Book Editing Services - Book Writing Experts</title>
	<meta name="description" content="Book editing services that fixes the writing flaws and make your book a flawless piece of content. Hire us today to get them at affordable pricing." />
	<link rel="canonical" href="https://bookwritingexperts.com/book-editing-services/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Professional Book Editing Services - Book Writing Experts" />
	<meta property="og:description" content="Book editing services that fixes the writing flaws and make your book a flawless piece of content. Hire us today to get them at affordable pricing." />
	<meta property="og:url" content="https://bookwritingexperts.com/book-editing-services/" />
	<meta property="og:site_name" content="Book Writing" />
	<meta property="article:modified_time" content="2023-03-31T12:01:27+00:00" />
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
<h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

<p className='font50 font-f fw500  colortextgrey t-center pb-2'>We Want You To Get The Most Out Of Your <Link className='textdocationnone color-blue hover fw700' href='/book-editing-services'> Online Book Editing!</Link></p>

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











   {/* Talk To Our Whatourclients! */}
   <Whatourclients />





{/* Makestories */}
<Makestoriesnew
title='Our Book Editing Projects'
para='Let Our Book Editing Team Help You.'
/>






{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font50 fw700 color-blue t-center'>Why Do You Need Professional Book Editing Services?</h2>
    <p className='font15 fw500 colortextgrey t-center pb-5 mt-3'>
    Editing is a meticulous process, one that requires severely dedicated efforts and time to accomplish. Finishing a novel is a job well done, so why not relax back and have someone take the load off.
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







{/* Lululogos components */}

<div className='mt-5'>
<Lululogos/>
</div>


<Container className='servicetitle'>
  <Row>
    <Col>
      <h2 className='color-blue fw700 font50 font-f t-center'>Why Choose Our Book Editing Services?</h2>
    </Col>
  </Row>
</Container>

{/* Dowecome */}
{/* Selfpublishing */}
<Selfpublishing
 title='Developmental Editing'
 text= 'We know that every word counts, so we`re committed to crafting captivating stories for any length and style. Our talented teams of book writing editor will take on your project from start to finish because no task is too big when you have people like us working together as part of such fantastic Book Editing & formatting services.'
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
 image={whychooseourbookeditingservices1}
 whychooseclass= "marketyourbook"
 />


{/* Whychoosebookwritingcube */}
<Whychoosebookwritingcube
 title='Editorial Assessment'
 text= 'Proofreading is essential to the success of every project taken up by book editing services. It’s an integral part of finishing your manuscript. Online book editor and proofreader look for errors, so you know that all text was correct before sending or releasing documents published by third parties like publishers.'
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
 image={whychooseourbookeditingservices2}
 whychooseclass= "marketyourbook"
 />



{/* Selfpublishing */}
<Selfpublishing
 title='Structural Editing'
 text= 'In a world where so much information is available, it`s essential to make sure what you re putting out there represents your best work. The process of our book editing services includes exploiting the complexities of this process and turning them into success possibilities. It is also an opportunity for professional book editors and publishers who want help perfecting their craftsmanship with every word they type or publish.'
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
 image={whychooseourbookeditingservices3}
 whychooseclass= "marketyourbook"
 />


{/* Whychoosebookwritingcube */}
<Whychoosebookwritingcube
 title='Copy Editing'
 text= {text}
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
image={whychooseourbookeditingservices4}
whychooseclass= "marketyourbook"
 />





{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="Our Book Editing Process"
  whychoose= {drivethebook1}
 />


<Formattingservices />


<Tablelayout />



{/* Aspiring */}
<Aspiring
 title= 'So, About That Story, Ready To Publish? Get Book Editing Done Today!'
 text="Editing, proofreading, publishing--all that form the criticalities of the book writing process. We know the effort it takes, the perseverance it needs, and the struggle it brings, so why not hire a helping hand? We are only a call, message, or email away! Let’s collaborate."
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
/>





   </>
  )
}

export default Bookpublishingservices