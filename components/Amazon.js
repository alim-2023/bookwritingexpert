import React from 'react'
import styles from '@/styles/Amazon.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Signup from './Signup'
import dwell1 from '/public/images/amazon/1.png'
import dwell2 from '/public/images/amazon/2.png'
import dwell3 from '/public/images/amazon/3.png'
import aroow from '/public/aroow.png'

const Amazon = () => {
    return (
        <>

            <section className={styles.amaservices}>
                <Container>
                    <Row className={styles.service}>
                        <Col>
                            <h2>Why Choose Our Amazon Publishing Services?</h2>
                        </Col>
                    </Row>
                    <Row className={` ${styles.prime}  mt-1 gy-5`}>
                        <Col lg={8} className={styles.expertise}>

                            <h3>Prime-Quality and Expertise</h3>
                            <p className={styles.team}>Our Amazon Publishing Services are backed by a team of experienced professionals who have in-depth knowledge and expertise in the publishing industry. We are committed to delivering high-quality content that meets industry standards and exceeds your expectations. With our services, you can trust that your books will be handled with care and precision Our Amazon Publishing Services are backed by a team of experienced professionals who have in-depth knowledge and expertise in the publishing industry. We are committed to delivering high-quality content that meets industry standards and exceeds your expectations. With our services, you can trust that your books will be handled with care and precision.</p>
                            <h4>Prime-Quality and Expertise</h4>
                            <p>Our Amazon Publishing Services are backed by a team of experienced professionals who have in-depth knowledge and expertise in the publishing industry. We are committed to delivering high-quality,</p>
                            <Link href='#'>READ MORE <Image src={aroow} className='img-fluid' /> </Link>
                            <div className={styles.book}>
                                <Link className={styles.real} href="#"> Consult With Our Expert Team Now! </Link>
                                <Link className={styles.real1} href="tel: (213) 289 3888">   (213) 289 3888 </Link>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <Image src={dwell1} className='img-fluid' />
                        </Col>

                        <Col lg={4}>
                            <Image src={dwell2} className='img-fluid' />
                        </Col>
                        <Col lg={8} className={styles.expertise}>

                            <h3>Enhanced Visibility and Reach</h3>
                            <p className={styles.team}>Our Amazon Publishing Services are backed by a team of experienced professionals who have in-depth knowledge and expertise in the publishing industry. We are committed to delivering high-quality content that meets industry standards and exceeds your expectations. With our services, you can trust that your books will be handled with care and precision Our Amazon Publishing Services are backed by a team of experienced professionals who have in-depth knowledge and expertise in the publishing industry. We are committed to delivering high-quality content that meets industry standards and exceeds your expectations. With our services, you can trust that your books will be handled with care and precision.</p>
                            <h4>Enhanced Visibility and Reach</h4>
                            <p>Our Amazon Publishing Services are backed by a team of experienced professionals who have in-depth knowledge and expertise in the publishing industry. We are committed to delivering high-quality,</p>
                            <Link href='#'>READ MORE <Image src={aroow} className='img-fluid' /> </Link>
                            <div className={styles.book}>
                                <Link className={styles.real2} href="#"> Consult With Our Expert Team Now! </Link>
                                <Link className={styles.real1} href="tel: (213) 289 3888">   (213) 289 3888 </Link>
                            </div>
                        </Col>
                        <Col lg={8} className={styles.expertise}>

                            <h3>Prime-Quality and Expertise</h3>
                            <p className={styles.team}>Our Amazon Publishing Services are backed by a team of experienced professionals who have in-depth knowledge and expertise in the publishing industry. We are committed to delivering high-quality content that meets industry standards and exceeds your expectations. With our services, you can trust that your books will be handled with care and precision Our Amazon Publishing Services are backed by a team of experienced professionals who have in-depth knowledge and expertise in the publishing industry. We are committed to delivering high-quality content that meets industry standards and exceeds your expectations. With our services, you can trust that your books will be handled with care and precision.</p>
                            <h4>Prime-Quality and Expertise</h4>
                            <p>Our Amazon Publishing Services are backed by a team of experienced professionals who have in-depth knowledge and expertise in the publishing industry. We are committed to delivering high-quality,</p>
                            <Link href='#'>READ MORE <Image src={aroow} className='img-fluid' /> </Link>
                            <div className={styles.book}>
                                <Link className={styles.real2} href="#"> Consult With Our Expert Team Now! </Link>
                                <Link className={styles.real1} href="tel: (213) 289 3888">   (213) 289 3888 </Link>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <Image src={dwell3} className='img-fluid' />
                        </Col>

                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Amazon