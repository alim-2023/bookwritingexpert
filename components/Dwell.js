import React from 'react'
import styles from '@/styles/Dwell.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import dwell1 from '/public/images/dwell/1.png'
import dwell2 from '/public/images/dwell/2.png'
import dwell3 from '/public/images/dwell/3.png'
import dwell4 from '/public/images/dwell/4.png'

import dwell5 from '/public/images/dwell/5.png'
import dwell6 from '/public/images/dwell/6.png'
import dwell7 from '/public/images/dwell/7.png'
import dwell8 from '/public/images/dwell/8.png'


const Dwell = () => {
    return (
        <>

            <section className={styles.habit}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2>Dwell into Our Recent Book Publishing Projects!</h2>
                            <p>Allow our professional book publishers to assist you in your literary endeavors.</p>
                        </Col>
                    </Row>
                    <Row className='mt-5 g-2'>
                        <Col lg={3}>
                            <div className={styles.recent}>
                                <Image src={dwell1} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.recent}>
                                <Image src={dwell2} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.recent}>
                                <Image src={dwell3} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.recent}>
                                <Image src={dwell4} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.recent}>
                                <Image src={dwell5} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.recent}>
                                <Image src={dwell6} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.recent}>
                                <Image src={dwell7} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.recent}>
                                <Image src={dwell8} className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Dwell