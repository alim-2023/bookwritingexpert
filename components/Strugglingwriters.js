import React from 'react'
import styles from '@/styles/Strugglingwriters.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Image from 'next/image'




// images
import cover1 from '/public/images/thousandsofstruggling/cover-1.webp'
import cover2 from '/public/images/thousandsofstruggling/cover-2.webp'
import cover3 from '/public/images/thousandsofstruggling/cover-3.webp'
import cover4 from '/public/images/thousandsofstruggling/cover-4.webp'
import cover5 from '/public/images/thousandsofstruggling/cover-5.webp'
import cover6 from '/public/images/thousandsofstruggling/cover-6.webp'
import cover7 from '/public/images/thousandsofstruggling/cover-7.webp'
import cover8 from '/public/images/thousandsofstruggling/cover-8.webp'
import Link from 'next/link'

const Strugglingwriters = () => {
  return (
    <div className={styles.strugglingwriters}>
        <Container>
            <Row>
                <Col md={12}>
                <h2 className='font-f font48 fw700 t-center colortextgrey'>Our Experts Have Helped Thousands Of Struggling Writers Come And Join The League!</h2>
                <p className='font16 font-f t-center textcolor mt-3'>Our experienced publishing service providers remove the hurdles of publishing books. From printing and publishing to distribution and marketing books on a global level, we take the writers through all.</p>
                </Col>
            </Row>


            <Row className={`${styles.aligncenter} gy-3 mt-4`}>
                <Col md={2}>
                    
                    
                <Link href='#' > 
                <Image src={cover1} className='img-fluid' /> </Link>
                     
                     </Col>
                <Col md={2}><Link href='#' > <Image alt="Book Writing Experts" src={cover2} className='img-fluid' /> </Link> </Col>
                <Col md={2}><Link href='#' > <Image alt="Book Writing Experts" src={cover3} className='img-fluid' /> </Link> </Col>
                <Col md={2}><Link href='#' > <Image alt="Book Writing Experts" src={cover4} className='img-fluid' /> </Link> </Col>
            </Row>
            <Row className={`${styles.aligncenter} gy-3 mt-2`}>
                <Col md={2}>    <Link href='#' ><Image alt="Book Writing Experts" src={cover5} className='img-fluid' /> </Link> </Col>
                <Col md={2}>    <Link href='#' ><Image alt="Book Writing Experts" src={cover6} className='img-fluid' /> </Link> </Col>
                <Col md={2}>    <Link href='#' > <Image alt="Book Writing Experts" src={cover7} className='img-fluid' /> </Link> </Col>
                <Col md={2}>    <Link href='#' > <Image alt="Book Writing Experts" src={cover8} className='img-fluid' /> </Link> </Col>
            </Row>

        </Container>
    </div>
  )
}

export default Strugglingwriters