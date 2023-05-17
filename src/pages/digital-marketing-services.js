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