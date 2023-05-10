import React from 'react'
import styles from '@/styles/Buildyourownidentity.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import buildyourownidentity from '/public/images/buildyourownidentity/buildyour.png'
import Image from 'next/image'
import Link from 'next/link'

const Buildyourownidentity = () => {
    return (
        <>

            <div className={styles.buildyourownidentity}>
                <Container>
                    <Row className='mb-3'>
                        <Col>
                            <h2 className="fw700 font50 color-blue font-f mb-2 t-center">Create Your Unique Identity</h2>
                            <p className='font15 textcolor font-f t-center'>Marketing involves strategy and sensitivity; it isn't for everyone. A little bit of creativity and pitching are required. Developing a concept and a strategy for social media campaigns to generate buzz and launch with influencers are integral parts of marketing, which is a multidimensional job that cannot be done in isolation. Influencers and public figures are excellent resources for marketing initiatives before a brand launch. Unlike any other method of promotion, it broadens your audience and potential clients! Additionally, marketing yields greater profits!</p>
                        </Col>
                    </Row>


                    <Row className={` ${styles.media} gy-5`}>

                        <Col md={3}>

                            <div>
                                <h4 className='font17 fw500 color-blue t-center font-f'>SOCIAL MEDIA MARKETING</h4>
                                <p className='font15  textcolor t-center font-f'>Promote your brand on social media!</p>
                                <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
                            </div>

                            <div className='mt-5'>
                                <h4 className='font17 fw500 color-blue t-center font-f'>EMAIL MARKETING PLANS</h4>
                                <p className='font15  textcolor t-center font-f'>Now is the time to grow your email listings and subscriptions!</p>
                                <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
                            </div>


                        </Col>
                        <Col md={6}>

                            <Image loading="lazy" src={buildyourownidentity} className='img-fluid' alt='book_writing_cube'></Image>

                        </Col>
                        <Col md={3}>

                            <div className=''>
                                <h4 className='font17 fw500 color-blue t-center font-f'>ADVERTISING PLANS</h4>
                                <p className='font15  textcolor t-center font-f'>Advertise your brand on social media for better and wider reach.</p>
                                <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
                            </div>

                            <div className='mt-5'>
                                <h4 className='font17 fw500 color-blue t-center font-f'>SEO SERVICES</h4>
                                <p className='font15  textcolor t-center font-f'>Take advantage of our tried and tested Game-Plan for SEO success. </p>
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