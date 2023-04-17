import React from 'react'
import styles from '@/styles/Buildyourownidentity.module.css'
import { Container ,Row , Col } from 'react-bootstrap'
import buildyourownidentity from '/public/images/buildyourownidentity/dulpost.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Buildyourownidentity = () => {
  return (
   <>
    
        <div className={styles.buildyourownidentity}>
<Container>
    <Row className='mb-3'>
        <Col> 
        <h2 className="fw700 font50 color-blue font-f mb-2 t-center">Best-In-Class Digital Marketing Company</h2>
        <p className='font15 fw500 font-f t-center'>As a top-rated digital marketing service provider, we possess a knack for promotions and go above and beyond to help you steal the limelight as an aspiring author. Have us on your side to enjoy personal branding for your books!</p>

        <p className='font15 fw500 font-f t-center'>Start making informed investments and WOW profits with our eBook marketing perfection!</p>
        </Col>
    </Row>


    <Row className={` ${styles.media} gy-5 `}>

<Col md={3}>

<div>
                        <h4  className='font17 fw500 color-blue t-center font-f'>Social Media Marketing</h4>
                        <p className='font15 fw500 color-black t-center font-f'>Our digital marketing company has some world-class social media marketers who formulate sterling content and growth-focused campaigns to increase the chances of your publication’s sales.</p>
                        <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
</div>

<div className='mt-5'>
                        <h4 className='font17 fw500 color-blue t-center font-f'>AMAZON BOOK MARKETING SERVICES</h4>
                        <p className='font15 fw500 color-black t-center font-f'>Our Amazon marketing console helps emerging, and established authors promote their books like crazy. With Amazon marketing, our creatives create personalized ads for target readers who are likely to take an interest in your publication.</p>
                        <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
                    </div>


</Col>
<Col md={6}>

<Image src={buildyourownidentity} className='img-fluid' alt='book_writing_cube'></Image>

</Col>
<Col md={3}>

    <div className=''>
            <h4  className='font17 fw500 color-blue t-center font-f'>BOOK COVERS</h4>
            <p className='font15 fw500 color-black t-center font-f'>Our digital marketing services also entail designing book covers, as they act as the missing piece of the book’s popularity puzzle. People literally judge a book by its cover! Yes, indeed.</p>
             <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
    </div>

    <div className='mt-5'>
        <h4  className='font17 fw500 color-blue t-center font-f'>SEO</h4>
        <p className='font15 fw500 color-black t-center font-f'>By cashing in on the perks of Search Engine Optimization, our marketers highlights the opportunity to help your book win the search game. With search engine marketing, we tap the untapped marketing odds, helpful for your book to grasp the maximum attention.</p>
           <Link className={styles.lets} href='#'>LET'S  DISCUSS </Link> 
                                          
    </div>


</Col>
        
    </Row>
</Container>

        </div>
   
   </>
  )
}

export default Buildyourownidentity