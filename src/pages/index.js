import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import whychoose from '/public/images/whychoosebooks/bg-img.png'




// import components

import Homebanner from '../../components/Homebanner'
import Partners from '../../components/Partners'
import Whychoosebook from '../../components/Whychoosebook'
import Gotastory from '../../components/Gotastory'
import Experts from '../../components/Experts'
import Whatourclients from '../../components/Whatourclients'
import Requestafreequote from '../../components/Requestafreequote'
import Stopworrying from '../../components/Stopworrying'
import Customersatisfaction from '../../components/Customersatisfaction'
import Comprehensive from '../../components/Comprehensive'
import Strugglingtogive from '../../components/Strugglingtogive'
import Strugglingwriters from '../../components/Strugglingwriters'
import Onestepsolutions from '../../components/Onestepsolutions'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const exprtSpan = <span className='fw500 font50 color-white font-f t-center font-f mb-4'><span className='color-blue fw700'><Link className='dblockmobile color-blue hover textdocationnone' href="/">Book Writing Experts</Link></span> Is waiting for you to Ask for a <span className='color-blue fw700'><Link className='dblockmobile color-blue hover textdocationnone' href="/">Professional Ghostwriter</Link></span></span>;

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>Your ONE-STOP</span> <Link className='dblockmobile textdocationnone color-blue hover' href="/"> Ghostwriting, Editing And Publishing Service </Link>  <span className=''>Provider!</span> </h1>;

  const posdata = <span>Let Our Best <Link className='dblockmobile textdocationnone color-blue hover fw700' href='/book-publishing-services'>Amazon Kindle Direct Publishing (KDP)</Link> Service Providers Handle All Your Publishing Troubles!</span>

  const bannertext = [
    {
      title: newSpan,
      pra: 'We understand being an author is a challenging yet respectable profession, but not everybody is lucky enough to become one.',
      discuss: 'LET S DISCUSS',
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'banner',



    }
  ]
  return (
    <>
      <Head>
        <title>Professional Book Writing Services Company</title>
        <link rel="icon" href="/favicon.svg" />


      </Head>
      <main>

        {/* banner components */}

        {bannertext.map((item, i) =>
          <Homebanner key={i}
            title={item.title}
            text={item.pra}
            discuss={item.discuss}
            homebannernum={item.homebannernum}
            homebanlogos={item.banlogo}
            bannershome={item.banners}
          />
        )}



        {/* partners components */}
        <Partners />

        <Strugglingtogive
          title=""
          text="You may be a victim of the following nuisances"
          list1="Slow Productivity"
          list2="Lack of Resources"
          list3="Mismanaged Time Schedules"
          list4="Financial Constraints"
          list5="Demotivation"
          list6="Delayed Creativity Process"
          list7="Delayed Writing Process"
          list8="Continuous Revisions"
          btn1="Get a free Proposal"
          btn2="Talk to an expert"
          btn3="(213) 289 3888"
        />

        {/* Talk To Our Experts! */}
        <Experts
          title={exprtSpan}
          text="Hit us a message, or give us a call, and make the most of our Professional Ghostwriters."
          number="+1-302-883-8877"
          discuss="LET'S DISCUSS"
        />

        <div className='sliderImg'>
          <Strugglingwriters />
        </div>

        <Stopworrying
          title='Stop worrying about publishing books!'
          subtitle={posdata}
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />


        {/*  Comprehensive */}
        <div className='datacloudco'>
          <Comprehensive />
        </div>
        {/* Customersatisfaction */}
        <Customersatisfaction />

        {/* Why Choose Book Writing Cube? */}
        <Whychoosebook
          title="Why Choose Book Writing Expert?"
          text="We have devised an elaborate workflow process to maximize transparency while also making sure that the final product's quality does not suffer. We do this through an extensive process of asking for approvals and updating our customers at every project stage. This helps a customer understand where we're coming from and be aware of what's going on."
          whychoose={whychoose}
        />

        {/* Talk To Our Experts! */}
        <Experts
          title={exprtSpan}
          text="Hit us a message, or give us a call, and make the most of our Professional Ghostwriters."
          number="+1-302-883-8877"
          discuss="LET'S DISCUSS"
        />

        
        <div className='sliderImg2'>
        <Onestepsolutions />
        </div>


        {/* Stopworrying */}
        <div className='dataSetCo'>
          <Stopworrying
            title='Stop worrying about publishing books!'
            subtitle={posdata}
            btn1='Get a free Proposal'
            btn2='Talk to an expert'
          />
        </div>


        {/* <Professionalghostwriter /> */}

        {/* Talk To Our Whatourclients! */}
        <Whatourclients />

        {/* Got a Story */}
        <Gotastory />

        {/* Talk To Our Requestafreequote! */}
        <Requestafreequote />

      </main>
    </>
  )
}
