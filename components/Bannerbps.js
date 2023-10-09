import React, { useState } from 'react'
import styles from '@/styles/Bannerbps.module.css'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'

const Bannerbps = () => {
    return (
        <>
            <section className={styles.bannerbps}>
                <Container>
                    <Row className='gy-5'>
                        <Col lg={8} className={styles.convert}>
                            <h1>
                                It’s Time to Convert Your Literary Dreams To Reality With Our Diverse Range of <span>Book Publishing Services.</span>
                            </h1>
                            <p>Whether it be amazon self publishing or any other platform, our book publishing services give you the creative control you deserve. Discuss with our expert book publishers the creative control you deserve. Discuss with our expert book publishers.</p>


                            <div className={styles.book}>
                                <Link href='tel:(213)2893888'> (213) 289 3888</Link>
                                <Link href='#'>  OUR PROCESS</Link>
                            </div>
                            <div className={styles.reality}>
                                <Link href='#'> Hire The Best Book Publishers Today! </Link>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.dispost}>
                            <form className={styles.fomrsban}> 
                                <h3>Can't Reach Us?</h3>
                                <input type='text' placeholder='Full Name*' />
                                <input type='text' placeholder='Phone*' />
                                <input type='text' placeholder='Email Address*' />
                                <input type='submit' value="GET STARTED" />
                                
                            </form>

                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Bannerbps