import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Head from 'next/head'
import stepstoour from '/public/images/whychoosebooks/stepstoour.png'

import Banner from '../../components/Banner'
import Partners from '../../components/Partners'

import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'

import Childrenbook from '../../components/Childrenbook'

import ipublishmybook from '/public/images/ipublishmybook/ipublishmybook.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'

import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Ourprocess from '../../components/Ourprocess'
import together from '/public/images/together/together.png'
import Whatourclients from '../../components/Whatourclients'
import Selfpublishing from '../../components/Selfpublishing'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'

import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservicesweoffer'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'

const Childrenbookillustrationsservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>Providing Full Fledged</span> <Link className='textdocationnone color-blue hover' href="/book-publishing-services"> Book Publishing Services  </Link>  <span className=''>To Our Struggling Authors</span> </h1>;

  const bannertext=[
    {
      title: newSpan,
      pra: 'While the words elaborate the story, illustrations in a book help your imagination grasp the picture that the author wanted to paint with his words for the world to see.',
      discuss:'LET S DISCUSS',
      homebannernum:'(213) 289 3888',
      banlogo:homebannerlogos,
      banners:'bookpublishingservices',
     
       

    }
  ]

const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone color-blue hover' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone color-blue hover' href="#">self publishing</Link> .</span>;

const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>


const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone' href="#">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>



const reasons = [

  {
    title:'Spot Illustration:',
    text:'Spot illustration is the tiny pieces or single piece of illustration drawn on the first or the title pages of each chapter to help breathe some life into the text or provide a little more context. It could be basic line art like or a small caricature drawn right above the title of the chapter, which takes up a quarter or lesser portion of the page. They are less expressive and have more to do with just intriguing the reader or enticing their imagination enough to carry on reading.',
    classnum: 'number1',
    
  },
 
  {
    title:'Half-page illustrations:',
    text:'As the name suggests, half-page illustrations are the illustrations that cover more than a quarter or at maximum half of the page of the book. This kind of illustration usually accompanies words by expressing one of the most intriguing aspects of the story and is not usually confined to the chapter`s title page. It can be a scene, a small introduction to a new character, a minor altercation between the characters that need to be highlighted, etc.',
    classnum: 'number1',
   
  },

  {
    title:'Single page illustrations:',
    text:'IThese kinds of illustrations typically cover the whole page and are far more detailed and expressive than the formerly explained ones. These are in great detail, and the text usually becomes optional, as the illustration speaks for itself.',
    classnum: 'number1',
  
  },
 
  {
    title:'Spread illustrations:',
    text:'These specific kinds of illustrations are usually spread on both the book`s pages and are usually more expressive and in greater detail than the text at this point is mostly optional. You could say they are like comic books, but rather, an image takes up the whole page than just a small part of the strip.',
    classnum: 'number1',
   
  },


]



const  geta = <span>Get A Customized Solution By <Link className='fw700 color-blue hover textdocationnone' href='/book-publishing-services'> Best Publishing Services </Link></span>


const  work = <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='colortextgrey textdocationnone hover' href='/book-publishing-services'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>


const posdata = <span>Let Our Best <Link className='textdocationnone color-blue hover fw700' href='/book-publishing-services'>Amazon Kindle Direct Publishing (KDP)</Link> Service Providers Handle All Your Publishing Troubles!</span>



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

const dateset = <span className='fw500'>Let’s <Link className='textdocationnone fw700 color-blue hover' href='/book-publishing-services'> Publish Your <br></br> Masterpiece</Link>  Together! </span>




  return (
   <>
   <Head>


   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Children Book Illustrations Services - Book Writing Cube</title>
    <meta name="description" content="Children Book Illustration Services That Hit The Chord With Kids and Hook Them To Read. Visit Our Website To Get Services For You." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="tags" content="" />
    <meta name="DC.title" content="children book illustrations" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />
    <meta name="DC.title" content="children book illustrations" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
  	<meta property="og:locale" content="en" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Children Book Illustrations Services - Book Writing Cube" />
	<meta property="og:description" content="Children Book Illustration Services That Hit The Chord With Kids and Hook Them To Read. Visit Our Website To Get Services For You." />
	<meta property="og:url" content="https://www.bookwritingcube.com/" />
	<meta property="og:site_name" content="Children Book Illustrations Services - Book Writing Cube" />
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







{/* Dowecome */}
<Dowecome
 title = {geta}
 text={work}
Dowecome= "publishmybook"

/>

{/* Makestories */}
<div className='dataset'>
<Makestoriesnew
title='Our Latest Illustrations Books Projects'
para='Let Our Book Children’s Illustration Team Help You'
/>
</div>

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

<p className='font50 font-f fw500 colortextgrey t-center pb-2'>Our Mission Is To Maximize Value For Our Authors With Online <Link className='textdocationnone color-blue hover fw700' href='/book-publishing-services'>  Book Marketing</Link></p>

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
title= '5 Steps To Our Children`s Book Illustrations Process!'

heading1 = 'Understanding The Client`s Aesthetic:'
para1 = 'Understanding what our client wants and how exactly they want
it done is essential for any project. We often ask our clients to
draw us a rough sketch or show us an inspiration of what they
want from us and how they want the project to look like. In this
part of the project, we usually coordinate with the clients and
brainstorm with them and our team to put forward ideas that
would serve both the client`s purpose and fit trends in the market.'
num1 = '01'

heading2 = 'Detailed Interviews With The Client:'
para2 = 'Before we head back to the drawing board, our illustrators
would have a detailed correspondence with the client and ask in
great detail about what attributes they would like to see in each
character and what they want in every character to stand out or
if they have anything specific that they cannot compromise on.'
num2 = '02'

heading3 = 'lllustrating Begins:'
para3 = 'Once the illustrator has the information they need, they go to
the storyboard and put together a piece that is very much in the
initial stages for the client to see. They would make sure that all
the feedback was taken into consideration before putting this
initial piece together, and it fits all the brief.'
num3 = '03'

heading4 = 'Client`s Feedback:'
para4 = 'In this step of the process, the illustrator would mail or show
what they`ve put together on their storyboard to the client and
see what they have to say. The feedback they get after
revealing the initial art, they would listen to it carefully and try to
accommodate it.'
num4 = '04'

heading5 = 'The Big Reveal:'
para5 = 'Once the client has provided ample feedback, the illustrator
would take it back to the storyboard, incorporate the requested
changes, and then when the final piece is done; it will be
revealed to the client for the final approval.'
num5 = '05'


/>

{/* Aspiring */}
{/* <div className='dataset'>
<Aspiring
 title= {dateset}
 text= 'It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
 subtext= 'Trust the marketing professionals for it, do not risk it!'
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
 img= {together}
/>
</div> */}


{/* Stopworrying */}
<div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          subtitle3='It’s time you get book marketing experts on board and take their help in marketing your book. Your story needs to be heard by everyone; make sure you are not going for the shady agency and putting your book reputation in jeopardy.'
          subtext= 'Trust the marketing professionals for it, do not risk it!'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>

  {/* Talk To Our Whatourclients! */}
  <Whatourclients />



























{/* Lululogos components */}
{/* <Lululogos/> */}



{/* Stillonthefence component */}
<div className={styles.stillbookwritingservices}>
<Container >
<Row >
<h2 className='font50 fw700 color-white t-center font-f mb-3 font-f'>You Need To Know What Type Of Children's Book Illustrations You Need For Your Book!</h2>  

<p  className='font15  color-white t-center pb-5 font-f'>Before you come to us for illustrations, you need to know that there is more than just one type of Children's Book Illustrations, and you must know which one fits your project better. Don't know what the various kinds of illustrations are? Well, allow us to educate you.</p>

</Row>  

<Row className={`${styles.childline} gy-5`}>
{ reasons.map((item, i) =>
<Childrenbook key={i}
title =  {item.title}
text =   {item.text}
classnumber = { item.classnum }
/>
  )}

</Row>  
</Container>

</div>




{/* Selfpublishing */}

<Selfpublishing
 title='What Type Of Books Do We Publish?'
 text= {text}
 subtext={subtext}
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
 image={publishmybook}
 whychooseclass= "marketyourbook"
 />





{/* Why Choose Book Writing Cube? */}
{/* <Whychoosebook
   title="5 Steps To Our Children's Book Illustrations Process!"
  text="We at Book Writing Cube have a detailed five-step process to getting your Children's Book Illustrations as good as you want them to be. This process is pretty much similar for illustrators all over the world, and we appreciate it if we educate our clients beforehand on what goes on in the entire illustration process."
  whychoose= {stepstoour}
 /> */}


{/* Aspiring */}
<div className='datacloud'>
<Aspiring
 title= 'You Are One Step Closer To Displaying Your Writing Excellence. Let Our Professional Help You Out.'
text="Editing, proofreading, publishing--all that form the criticalities of the book writing process. We know the effort it takes, the perseverance it needs, and the struggle it brings, so why not hire a helping hand? We are only a call, message, or email away! Let’s collaborate."
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
/>
</div>







   </>
  )
}

export default Childrenbookillustrationsservices