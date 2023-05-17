import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import uurefficientauthorwebsitedesignprocess from '/public/images/whychoosebooks/uurefficientauthorwebsitedesignprocess.png'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'
import Stillonthefence from '../../components/Stillonthefence'
import Ourcaptivatingauthor from '../../components/Ourcaptivatingauthor'
import designprojects1 from '/public/images/designprojects/1.png'
import designprojects2 from '/public/images/designprojects/2.png'
import designprojects3 from '/public/images/designprojects/3.png'



const Authorwebsitedesignservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>    <Link className='fw700 textdocationnone color-blue hover' href="/author-website-design-services">Author Website Design Services </Link> Helping You Up Your Branding Game! </span>   </h1>;

  const bannertext = [
    {
      title: newSpan,
      pra: 'Do you want the world to know you? Read your book and relate to your story? What is better than getting a professional website then.',
      discuss: 'LET S DISCUSS',
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'empoweringauthorswith',



    }
  ]




  const whybookpublishingdata = [

    {
      title: 'How can an author website design service help me?',
      text: 'An author website design service can help you create a professional and engaging website that will help you promote your books and connect with your readers. A good website design service will work with you to understand your goals and create a custom website that meets your needs.',
      col6: '6',
    },
    {
      title: 'What should I look for in an author website design service?',
      text: 'When choosing author website design services, it is important to find one that has experience designing websites for authors. You should also look for a service that offers a range of features and services, such as custom book covers, social media integration, and eCommerce capabilities.',
      col6: '6',
    },
    {
      title: 'How much does an author website design service cost?',
      text: 'The cost of an author website design service will vary depending on the scope of the project and the size of your website. Generally, you can expect to pay a few hundred dollars for a basic website design and several thousand dollars for a more complex website.',
      col6: '6',
    },
    {
      title: 'What are the benefits of having a well-designed author website?',
      text: 'A well-designed author website can be a powerful platform to build your brand, connect with readers, and sell your books. A well-designed author website can help you expand your reach with readers from around the world and promote your work for greater success.',
      col6: '6',
    },

  ]






  const reasons = [

    {
      title: 'Experienced Designers',
      text: 'We have a team of experienced professionals who are passionate about helping authors create beautiful and effective websites.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Captivating Designs',
      text: 'We offer a wide range of design options to choose from, so you can find the perfect look for your site.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Marketing Efforts',
      text: 'We can help you promote yourself and your book through social media and other online channels.',
      col: '6',
      classnum: 'number',
    },

    {
      title: 'Affordable Packages',
      text: 'We offer affordable rates that fit within your budget.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Fast Delivery',
      text: 'We provide fast turnaround times so you can get your site up and running quickly.',
      col: '6',
      classnum: 'number',
    },
    {
      title: '24/7 Customer Service',
      text: 'As a leading website design company, we offer excellent customer service and are always available to answer any questions you may have.',
      col: '6',
      classnum: 'number',
    },


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



      <Ourcaptivatingauthor
        title="A Quick Look At Our Captivating Author Website Design Projects"
        text="Our team of experienced and skilled website designers stays one step ahead of the latest trends to keep you satisfied!"
        img1={designprojects1}
        img2={designprojects2}
        img3={designprojects3}


      />

      {/* Whybookpublishing */}
      <div className={styles.whybookpublishing}>
        <Container>

          <Row>
            <h2 className='font48 fw900 color-blue t-center'>Powerful Websites Designed By The Best In The Game!</h2>
            <p className='font15 fw500 colortextgrey t-center pb-5'>
              As a professional author, it is important to have a website that represents you and your work well. At Book Writing Cube, a leading website designing company, we help you with that. A professional author's website design will help you stand out from the competition and make a great first impression on potential readers and clients. Professional website design services can help you create a website that is perfect for your needs.
            </p>

          </Row>

          <Row>
            {whybookpublishingdata.map((item, i) =>
              <Whybookpublishing key={i}
                title={item.title}
                text={item.text}
                col6={item.col6}
              />
            )}
          </Row>
        </Container>
      </div>

      {/* Lululogos components */}
      <Lululogos />







      {/* Stillonthefence component */}

      <Container className='still'>


        <Row >
          <h2 className='font48 fw900 color-blue t-center font-f mb-5'>Why Our Author Website Design Services Are Ideal For You</h2>
        </Row>

        <Row className='gy-5'>
          {reasons.map((item, i) =>
            <Stillonthefence key={i}
              title={item.title}
              text={item.text}
              col6={item.col}
              classnumber={item.classnum}
            />
          )}

        </Row>
      </Container>






      {/* Why Choose Book Writing Cube? */}
      <Whychoosebook
        title="Our Efficient Author Website Design Process"
        text="Our team of industry experts collaborates with our valued clients to create high-quality websites! Here is a quick look at our process:"
        whychoose={uurefficientauthorwebsitedesignprocess}
      />


      {/* Aspiring */}
      <Aspiring
        title='Create Memorable Digital Experiences for Your Readers with Book Writing Cube’s Author Website Design Services!'
        text="Get in touch with one of our industry experts for more information about our online blog writing services and pricing details by leaving your email or phone number below!"
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
      />








    </>
  )
}

export default Authorwebsitedesignservices