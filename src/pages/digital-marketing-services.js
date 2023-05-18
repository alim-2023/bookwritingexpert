import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Dowecome from '../../components/Dowecome'
import youareonestepcloserto from '/public/images/youareonestepcloserto/down2.jpg'
import Whatourclients from '../../components/Whatourclients'
import Buildyourownidentity from '../../components/Buildyourownidentity'
import Companypull from '../../components/Companypull'
import Buildingyour from '../../components/Buildingyour'
import Bestinclass from '../../components/Bestinclass'
import Stopworrying from '../../components/Stopworrying'


const Digitalmarketingservices = () => {


  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>     Result-focused Digital Marketing Services, Crafted to Enhance Your Book Experience for The Readers.</span>   </h1>;

  const bannertext = [
    {
      title: newSpan,
      pra: 'Amplify your book sales through our digital marketing services. Build credibility and reach out to a greater audience as you already are.',
      discuss: 'LET S DISCUSS',
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'digitalmarketingservices',



    }
  ]












  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
    
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Top Tier Digital Marketing Services - Book Writing Experts</title>
        <meta name="description" content="Digital Marketing Services that will help your business grow. We offer various services to help you achieve ultimate success. Call us to get them." />
        <link rel="canonical" href="/digital-marketing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Top Tier Digital Marketing Services - Book Writing Experts" />
        <meta property="og:description" content="Digital Marketing Services that will help your business grow. We offer various services to help you achieve ultimate success. Call us to get them." />
        <meta property="og:url" content="/digital-marketing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T11:58:56+00:00" />
        <meta property="og:image" content="/complogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="45 minutes" />
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
        title='You`re So Close to Revealing Your Writing Capability- Take Yourself a Hand from Our Experts!'
        text="The complexities of the book-writing process might be perplexing at times. Even the thought of editing, proofreading, and publishing all by yourself is terrifying. We understand the effort, tenacity, and difficulty involved, so why not hire a helping hand? We are merely a phone call, text message, or email away! Let's work together."
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        Dowecome="publishmybook"
        image={youareonestepcloserto}


      />

      {/* Makestories */}
      <div className='dataset sliderImg'>
        <Makestoriesnew
          title='Our Latest Digital Marketing Projects'
          para='Let Our Digital Marketing Team Help You'
        />
      </div>
      {/* Lululogos components */}


      <Lululogos />



      <Buildyourownidentity />





      {/* Aspiring */}
      <Aspiring
        title='Book Cover Designs That Stand Out'
        text="We are a fantastic choice for cover designs, page layouts, and book designs. We have a group of qualified graphic designers who have created dozens of book covers and page layouts. Our designers will work with you to ensure that your book and cover are supplied according to specifications using all of the information they have. To address any potential technical issues, we offer efficient maintenance for the given files."
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
      />






      <div className='dataset'>
        <Buildingyour />
      </div>

      <Lululogos />

      {/* Aspiring */}
      <div className='newdatecloud'>
        <Aspiring
          title='Let Our Digital Marketing Company Pull Off The Marketing Strain From Your Shoulders!'
          text='Marketing, precisely book marketing, is not everyone’s cup of tea. But, for us, it’s just a piece of cake. Unequivocally, a lot goes into the advertising affair, from developing the sound pitching idea to devising the profitable social media campaigns, just to name a few. All these may seem daunting for you, but not for us. We share the incredible experience of helping authors launch and making them the internet sensation across multiple online platforms.'
          number="(213) 289 3888"
          discuss="LET'S DISCUSS"
          img={youareonestepcloserto}

        />
      </div>
      <Companypull
        title='Helping Your Story Reach Nook And Corner Of The World With Gamut Of Digital Marketing Services!'
        text='Call Us Now To Bring Your Book Under The Limelight.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
      />


      <Bestinclass />


      <Stopworrying
        title='Selling Books is an uphill struggle!'
        subtitle='One-Stop Solution For Ghostwriting, Promoting And Branding Your Digital Riches.'
        subtitle2='Come, get your books written by experts!'
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      {/* Talk To Our Whatourclients! */}
      <Whatourclients />

    </>
  )
}

export default Digitalmarketingservices