import React, { useState } from 'react'
import styles from '@/styles/Featured.module.css'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'
import featured1 from '../public/images/featured/1.png'
import featured2 from '../public/images/featured/2.png'

const Featured = () => {
    return (
        <>

            <section className={styles.featured}>
                <Container>
                    <Row className={styles.process}>
                        <Col lg={12}>
                            <h2>Many Got Featured In Major Publications Just By Working With Us.</h2>
                        </Col>
                    </Row>

                    <Row className='mt-5 g-2'>
                        <Col lg={2}>
                            <div className={styles.map}>
                                <Image src={featured1} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={2}>
                           <div className={styles.map}>
                             <Image src={featured2} className='img-fluid' />
                           </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.map}>
                                <Image src={featured1} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={2}>
                           <div className={styles.map}>
                             <Image src={featured2} className='img-fluid' />
                           </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.map}>
                                <Image src={featured1} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={2}>
                           <div className={styles.map}>
                             <Image src={featured2} className='img-fluid' />
                           </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.map}>
                                <Image src={featured1} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={2}>
                           <div className={styles.map}>
                             <Image src={featured2} className='img-fluid' />
                           </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.map}>
                                <Image src={featured1} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={2}>
                           <div className={styles.map}>
                             <Image src={featured2} className='img-fluid' />
                           </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.map}>
                                <Image src={featured1} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={2}>
                           <div className={styles.map}>
                             <Image src={featured2} className='img-fluid' />
                           </div>
                        </Col>
                    </Row>
                </Container>


            </section>





        </>
    )
}

export default Featured