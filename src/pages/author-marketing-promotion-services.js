import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import ourefficientauthor from '/public/images/whychoosebooks/ourefficientauthor.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'
import typeofbooks from '/public/images/selfpublishingservices/typeofbooks.png'
import marketyourbook from '/public/images/selfpublishingservices/marketyourbook.jpg'
import copy from '/public/images/selfpublishingservices/copy.png'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservicesweoffer'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'
import Stillonthefence from '../../components/Stillonthefence'

const Authormarketingpromotionservices = () => {


  const bannertext=[
    {
      title: 'Capitalize On Your Visibility and Online Presence with Finest Author Marketing Promotion Services',
      pra: 'Reach a broader audience with author marketing promotion services. Our author book marketing services guarantee you an improved reputation and sales.',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'authormarketingpromotionservices',
     
       

    }
  ]

const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone' href="#">self publishing</Link> .</span>;

const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>


const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone' href="#">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>


const whybookpublishingdata = [

{
  title: 'What is author marketing?',
  text:  'Author marketing is the process of promoting and selling books or other written works by an author. This can include activities such as arranging book signings, conducting media interviews, or organizing promotional events.',
  col6: '6',
},
{
  title: 'What are some common author marketing strategies?',
  text: 'There are many different ways to market a book or author, but some common strategies include using social media, running ads in print or online publications, and partnering with bookstores or libraries for promotional events.',
  col6: '6',
},
{
title:'How can author marketing services help me sell more books?',
text:'Author marketing services can provide valuable assistance with tasks such as creating a media list, developing a publicity plan, or crafting press releases. These services can help to increase exposure for your book and make it more likely to sell.',
col6: '6',
},
{
title:'What are some things I should avoid when marketing my book?',
text: 'There are a few things to avoid when marketing a book, such as spamming potential customers or over-hyping your book. It’s also important to remember that not everyone will be interested in your book, so don’t take rejections personally. Instead, focus on finding the readers who will appreciate your work. Book Writing Cube’s team of author marketing experts creates engaging ads for authors and helps expand their reach.',
col6: '6',
},

]





const reasons = [

  {
    title:'Industry Experts',
    text:'We have a team of experienced professionals who know how to promote your book.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Range of Services',
    text:'We have a variety of services to choose from, so you can find the perfect package for your needs.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Cost-Effective',
    text:'We offer great value for money, with prices that are competitive and affordable.',
    col:'6',
    classnum: 'number',
  },

  {
    title:'Stellar Portfolio',
    text:'We have a track record of success, with many clients achieving bestseller status.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Passion & Dedication',
    text:'We are passionate about helping authors reach their goals and achieve success.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'24/7 Customer Service',
    text:'Our team is dedicated to providing excellent customer service and support every step of the way.',
    col:'6',
    classnum: 'number',
  },


]



  return (
   <>
   <Head>

   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Author Marketing Promotion Services - Book Writing Cube</title>
    <meta name="description"
        content="Looking for a comprehensive author marketing service? Book Writing Cube offers a wide range of services to help you promote your work and connect with new readers." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />
    <meta name="DC.title" content="Book Writing Services" />
    <meta name="geo.region" content="en" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta name="DC.title" content="book writing services" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="55.753005;-2.857642" />
    <meta name="ICBM" content="55.753005, -2.857642" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Author Marketing Promotion Services - Book Writing Cube" />
    <meta property="og:description"
        content="Looking for a comprehensive author marketing service? Book Writing Cube offers a wide range of services to help you promote your work and connect with new readers." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Author Marketing Promotion Services - Book Writing Cube" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:label1" content="Est. reading time" />
    <meta name="twitter:data1" content="5 minutes" />
    <meta name="facebook-domain-verification" content="s4ocl50k325dpk61h3frbd8aajeybv" />

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
title='A Quick Look At Our Spectacular Author Marketing Projects'
para='With extensive knowledge and creativity, our marketing experts transform your career and set it up for success!'
/>


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>Combining The Elements Of Author Marketing And Public Relations</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    In general, the purpose of the author is to entertain the readers with the story, inform them of reality, and persuade them of the truth. But with digital marketing on the rise, this purpose has an additional aspect—to market themselves for readership. The author's skill is reflected in the narrative and style they write in, but their readership is built when they are marketed well. With Book Writing Cube's author promotion services, we create captivation ads for authors. Whether they are Facebook ads for authors or Amazon ads for authors, we deliver!
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
<Lululogos/>



{/* Stillonthefence component */}

<Container className='still'>


<Row >
<h2 className='font48 fw900 color-blue t-center font-f mb-5'>Why Our Author Marketing Services Are Ideal For You</h2>  
</Row>  

<Row className='gy-5'>
{ reasons.map((item, i) =>
<Stillonthefence key={i}
title =  {item.title}
text =   {item.text}
col6 = { item.col }
classnumber = { item.classnum }
/>
  )}

</Row>  
</Container>






{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="Our Efficient Author Marketing Process"
  text="The Book Writing Cube's 5-step author marketing process is designed to help authors connect with their audience, build a platform, and sell more books."
  whychoose= {ourefficientauthor}
 />


{/* Aspiring */}
<Aspiring
 title= 'Create the right buzz for every title you pen down with our Author Marketing Promotion Services!'
 text="From amateur author to a brilliant success story, our author marketing services transform your name into a recognized brand."
 number="(302) 883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Authormarketingpromotionservices