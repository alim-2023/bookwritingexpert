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


  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>     Stellar Digital Marketing Services Crafting Strong Branding Experiences For Your Brilliant Ideas!</span>   </h1>;

  const bannertext = [
    {
      title: newSpan,
      pra: 'Book Writing Experts is the name of creative potential that establishes an indelible name for you. Our digital marketing expertise enhances your book’s visibility',
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
        <link rel="pingback" href="https://bookwritingexperts.com/xmlrpc.php" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />


        <title>Top Tier Digital Marketing Services - Book Writing Experts</title>
        <meta name="description" content="Digital Marketing Services that will help your business grow. We offer various services to help you achieve ultimate success. Call us to get them." />
        <link rel="canonical" href="https://bookwritingexperts.com/digital-marketing-services/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Top Tier Digital Marketing Services - Book Writing Experts" />
        <meta property="og:description" content="Digital Marketing Services that will help your business grow. We offer various services to help you achieve ultimate success. Call us to get them." />
        <meta property="og:url" content="https://bookwritingexperts.com/digital-marketing-services/" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T11:58:56+00:00" />
        <meta property="og:image" content="https://bookwritingexperts.com/wp-content/uploads/2021/05/complogo.png" />
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
        title='You Are One Step Closer To Displaying Your Writing Excellence. Let Our Professional Help You Out.'
        text="Editing, proofreading, publishing--all that form the criticalities of the book writing process. We know the effort it takes, the perseverance it needs, and the struggle it brings, so why not hire a helping hand? We are only a call, message, or email away! Let’s collaborate."
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
        title='Whether Bookshelf or Amazon Self Publishing – Our Designs Makes You Stand Out'
        text="Design is the most important aspect when it comes to selling books. We know that might sound like an old cliché, but designing your cover will deliver layout and build intrigue for potential readers; they’ll want more after seeing what’s in store within these pages! So don’t settle on anything less than perfection – let us help make sure every manuscript looks exactly how you envisioned through Book Writing Cube."
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