import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import drivethebook1 from '/public/images/drivethebook/1.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'
import youareonestepcloserto from '/public/images/youareonestepcloserto/down2.jpg'

import Whatourclients from '../../components/Whatourclients'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservicesweoffer'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'
import Buildyourownidentity from '../../components/Buildyourownidentity'
import Companypull from '../../components/Companypull'
import Buildingyour from '../../components/Buildingyour'
import Bestinclass from '../../components/Bestinclass'
import Stopworrying from '../../components/Stopworrying'

const Digitalmarketingservices = () => {


  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className='d-block'>     Stellar Digital Marketing Services Crafting Strong Branding Experiences For Your Brilliant Ideas!</span>   </h1>;

  const bannertext=[
    {
      title: newSpan,
      pra: 'Book Writing Experts is the name of creative potential that establishes an indelible name for you. Our digital marketing expertise enhances your book’s visibility',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'digitalmarketingservices',
     
       

    }
  ]

const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone' href="#">self publishing</Link> .</span>;

const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>


const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone' href="#">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>


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




  return (
   <>
   <Head>
   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Digital Marketing Services Done To Perfection - Book Writing Cube</title>
    <meta name="description"
        content="We Offer Digital Marketing Services To Give Your Manuscript The Quality Attention. Call For Book Marketing." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="tags" content="" />
    <meta name="DC.title" content="Digital Marketing Services" />
    <meta name="geo.region" content="en" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta name="DC.title" content="digital marketing services" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="55.753005;-2.857642" />
    <meta name="ICBM" content="55.753005, -2.857642" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Digital Marketing Services Done To Perfection - Book Writing Cube" />
    <meta property="og:description" content="We Offer Digital Marketing Services To Give Your Manuscript The Quality Attention. Call For Book Marketing." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Digital Marketing Services Done To Perfection - Book Writing Cube" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:label1" content="Est. reading time" />
    <meta name="twitter:data1" content="5 minutes" />

  <link rel="icon" href="/favicon.png" />

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

{/* Makestories */}
<Makestoriesnew
title='Our Latest Digital Marketing Projects'
para='Let Our Digital Marketing Team Help You'
/>








{/* Dowecome */}
<Dowecome
 title='You Are One Step Closer To Displaying Your Writing Excellence. Let Our Professional Help You Out.'
 text="Editing, proofreading, publishing--all that form the criticalities of the book writing process. We know the effort it takes, the perseverance it needs, and the struggle it brings, so why not hire a helping hand? We are only a call, message, or email away! Let’s collaborate."
 number="(302) 883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={youareonestepcloserto}


/>


{/* Lululogos components */}

<div className='mt-5'>
<Lululogos/>
</div>


<Buildyourownidentity />





{/* Aspiring */}
<Aspiring
 title= 'Whether Bookshelf or Amazon Self Publishing – Our Designs Makes You Stand Out'
 text="Design is the most important aspect when it comes to selling books. We know that might sound like an old cliché, but designing your cover will deliver layout and build intrigue for potential readers; they’ll want more after seeing what’s in store within these pages! So don’t settle on anything less than perfection – let us help make sure every manuscript looks exactly how you envisioned through Book Writing Cube."
 number="(302) 883-8877"
 discuss="LET'S DISCUSS"
/>



 



<Buildingyour />


<Lululogos/>

{/* Aspiring */}
<Aspiring
 title= 'Let Our Digital Marketing Company Pull Off The Marketing Strain From Your Shoulders!'
 text= 'Marketing, precisely book marketing, is not everyone’s cup of tea. But, for us, it’s just a piece of cake. Unequivocally, a lot goes into the advertising affair, from developing the sound pitching idea to devising the profitable social media campaigns, just to name a few. All these may seem daunting for you, but not for us. We share the incredible experience of helping authors launch and making them the internet sensation across multiple online platforms.'
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
 img= {youareonestepcloserto}
 
/>

<Companypull
 title= 'Helping Your Story Reach Nook And Corner Of The World With Gamut Of Digital Marketing Services!'
 text= 'Call Us Now To Bring Your Book Under The Limelight.'
 number="(213) 289 3888"
 discuss="LET'S DISCUSS"
/>


<Bestinclass />


<Stopworrying 
 title = 'Selling Books is an uphill struggle!'
 subtitle = 'One-Stop Solution For Ghostwriting, Promoting And Branding Your Digital Riches.'
 subtitle2= 'Come, get your books written by experts!'
 btn1 = 'Get a free Proposal'
 btn2 = 'Talk to an expert'
/>



  {/* Talk To Our Whatourclients! */}
  <Whatourclients />

   </>
  )
}

export default Digitalmarketingservices