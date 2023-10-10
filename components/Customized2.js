import React from 'react'
import styles from '@/styles/Customizes2.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import together from '/public/images/customized/2.png'


const Customized2 = (props) => {
    return (
        <>
            <section className={styles.customized}>
                <Container>
                    <Row className={ ` ${styles.rename} gy-4` }>
                        <Col lg={5}>

                        <div className={styles.take}>
                                <Image src={together} className='img-fluid' />
                            </div>
                           
                        </Col>
                        <Col lg={7}>
                           


                            <h2>Hire Our Book Publishing Company to Bring Your Literary Masterpiece to Life!</h2>
                            <p>Are you looking for a publishing partner? Well, Book Writing Experts will inspire you in your literary adventures. We are here to help you transform your literary dreams into reality. At our publishing company, we believe in nurturing and supporting talented authors like you, and we are dedicated to bringing your masterpiece to the bookshelves.</p>
                            <p className={styles.from}>So, what’s stopping you from reaching your goals to become an aspiring novelist?</p>
                            <div className={styles.book}>
                                <Link className={styles.real} href="#"> get started </Link>
                                <Link className={styles.real1} href="#">  live chat </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Customized2