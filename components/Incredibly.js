import React from 'react'
import styles from '@/styles/Incredibly.module.css'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import aroow from '/public/aroow.png'
// images
import partnerslogo1 from '../public/images/partnerslogo/partnerslogo1.png'

const Incredibly = () => {



    return (
        <>
            <section className={styles.process}>
                <Container>
                    <Row className={styles.book}>
                        <Col lg={12}>

                            <h2>How Does Our Incredibly Crafted Book Publishing <br></br> Journey Unfold?</h2>
                            <p>Join us on a streamlined journey from manuscript to masterpiece. Our process includes refining narratives, crafting compelling visuals, meticulous book preparation, and handling distribution, marketing, and copyright tasks. Discover the elegance of our efficient book publishing process, designed to make your literary vision a global reality.</p>

                        </Col>
                    </Row>
                    <Row className='mt-5 g-2'>
                        <Col lg={8}>
                            <Row className='g-2'>
                                <Col lg={6}>

                                    <div className={styles.tiger}>
                                        <h5>01</h5>
                                        <h3>Manuscript Assessment</h3>
                                        <p>Your journey begins with us diving into your raw manuscript. Our dedicated team diligently assesses your work, identifying its strengths and areas for improvement.</p>
                                        <Link href='#'>READ MORE  <Image src={aroow} className='img-fluid' />   </Link>
                                    </div>

                                </Col>
                                <Col lg={6}>

                                    <div className={styles.tiger}>
                                        <h5>02</h5>
                                        <h3>Editing and Refinement</h3>
                                        <p>Your words are then entrusted to our skilled book editors, who meticulously refine your narrative, ensuring optimal clarity, coherence, and compelling storytelling.</p>
                                        <Link href='#'>READ MORE  <Image src={aroow} className='img-fluid' />   </Link>
                                    </div>

                                </Col>

                                <Col lg={6}>

                                    <div className={styles.tiger}>
                                        <h5>03</h5>
                                        <h3>Design and Layout</h3>
                                        <p>Once the editing phase is complete, our talented designers step in. They artistically bring your book to life, creating an engaging layout and an impactful cover that echoes your unique voice.</p>
                                        <Link href='#'>READ MORE  <Image src={aroow} className='img-fluid' />   </Link>
                                    </div>

                                </Col>

                                <Col lg={6}>

                                    <div className={styles.tiger}>
                                        <h5>04</h5>
                                        <h3>Book Preparation</h3>
                                        <p>We then prepare your book for publishing. Every detail is scrutinized to align with industry standards, maintaining the highest level of quality.</p>
                                        <Link href='#'>READ MORE  <Image src={aroow} className='img-fluid' />   </Link>
                                    </div>

                                </Col>

                            </Row>

                        </Col>
                        <Col lg={4}>

                            <div className={styles.tiger1}>
                                <h5>05</h5>
                                <h3>Distribution, Marketing, and Copyright</h3>
                                <p>Your journey begins with us diving into your raw manuscript. Our dedicated team diligently assesses your work, identifying its strengths and areas for improvement Here comes the moment you wait for the most! Your masterpiece is finally ready to reach the masses. We navigate the complexities of distribution, craft strategic marketing plans, and register the copyright, ensuring your book makes its mark in the literary world.</p>
                                <Link href='#'>READ MORE  <Image src={aroow} className='img-fluid' />   </Link>
                            </div>

                        </Col>
                        <Col lg={12}>
                           <div className={styles.allview}>
                           <Link href='#' className={styles.view}>VIEW ALL</Link>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Incredibly