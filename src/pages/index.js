import Head from 'next/head'
import Link from 'next/link'
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




export default function Home() {

  const exprtSpan = <span className='fw500 font50 color-white font-f t-center font-f mb-4'><span className='color-blue fw700'><Link className='dblockmobile color-blue hover textdocationnone' href="/">Book Writing Experts</Link></span> Is waiting for you to Ask for a <span className='color-blue fw700'><Link className='dblockmobile color-blue hover textdocationnone' href="/">Professional Ghostwriter</Link></span></span>;

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>Your ONE-STOP</span> <Link className='dblockmobile textdocationnone color-blue hover' href="/"> Ghostwriting, Editing And Publishing Service </Link>  <span className=''>Provider!</span> </h1>;

  const posdata = <span>Let Our Best <Link className='dblockmobile textdocationnone color-blue hover fw700' href='/book-publishing-services'>Amazon Kindle Direct Publishing (KDP)</Link>Service Providers Handle All Your Publishing Troubles!</span>



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


  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "bookwritingexperts",
    "image": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    "@id": "",
    "url": "https://bookwritingexperts.com/",
    "telephone": "2132893888",
    "priceRange": "$99",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "445 S Figueroa St",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90071",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0536155,
      "longitude": -118.2568651
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://bookwritingexperts.com/",
      "https://www.facebook.com/bookwritingexperts",
      "https://twitter.com/bookwritingexp",
      "https://www.instagram.com/bookwritingexpert/",
      "https://www.linkedin.com/company/book-writing-exp/",
      "https://www.pinterest.com/bookwritingexperts/"
    ]
  }




  const schema1 = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bookwritingexperts.com/"
    },
    "headline": "Book Writing Company",
    "description": "Book Writing Company",
    "image": "",
    "author": {
      "@type": "Organization",
      "name": "Mini Investments"
    },
    "publisher": {
      "@type": "Organization",
      "name": "",
      "logo": {
        "@type": "ImageObject",
        "url": ""
      }
    },
    "datePublished": "2022-03-21"
  }

  const schema2 = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "bookwritingexperts",
    "alternateName": "Book Writing Experts",
    "url": "https://bookwritingexperts.com/",
    "logo": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    "sameAs": [
      "https://bookwritingexperts.com/",
      "https://www.facebook.com/bookwritingexperts",
      "https://twitter.com/bookwritingexp",
      "https://www.instagram.com/bookwritingexpert/",
      "https://www.linkedin.com/company/book-writing-exp/",
      "https://www.pinterest.com/bookwritingexperts/"
    ]
  }

  const schema3 = {
    "@context": "https://schema.org", "@type": "Service", "name": "book writing services book writing company book writers affordable book writing services", "description": "book writing services book writing company book writers affordable book writing services book writing services book writing company book writers affordable book writing services", "provider": { "@type": "Organization", "name": "book writing services book writing company book writers affordable book writing services", "url": "https://bookwritingexperts.com/" },
    "serviceType": ["book writing services book writing company book writers affordable book writing services"], "areaServed": { "@type": "country", "name": "us" }
  }

  return (
    <>


      <Head>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Professional Book Writing Services Company</title>
        <meta name="description" content="Book Writing Services that transform your ideas to the best-selling book. Call us if you need help writing a book or penning down your thoughts." />
        <link rel="canonical" href="https://bookwritingexperts.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional Book Writing Services Company" />
        <meta property="og:description" content="Book Writing Services that transform your ideas to the best-selling book. Call us if you need help writing a book or penning down your thoughts." />
        <meta property="og:url" content="https://bookwritingexperts.com/" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-01-12T00:00:46+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="13 minutes" />
        <link rel="icon" href="/favicon.svg" />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schema1)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schema2)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schema3)}
        </script>

        {/* <Schema /> */}


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
          number="(213) 289 3888"
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
          text="We are aware of the distinctiveness of the content creation needs of our customers. We take great pride in the incredibly various opinions, experiences, and knowledge that our team of authors can contribute. To ensure the greatest efficacy, we firmly believe in and work towards a transparent collaboration between you and us. For the greatest candor, we develop intricate production processes that accommodate each of our clients uniquely. The typical content around here is remarkable, genuine, and original!"
          whychoose={whychoose}
        />

        {/* Talk To Our Experts! */}
        <Experts
          title={exprtSpan}
          text="Hit us a message, or give us a call, and make the most of our Professional Ghostwriters."
          number="(213) 289 3888"
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
