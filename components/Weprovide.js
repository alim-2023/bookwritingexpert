import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Weprovide.module.css'
import book1 from '/public/images/weprovide/book.png'
import aroow from '/public/aroow.png'
import Link from 'next/link'
import Image from 'next/image'


const Weprovide = () => {
    return (
        <>

            <section className={styles.stop}>
                <Container>
                    <Row className={styles.ship}>
                        <Col lg={12}>
                            <h2>The Book Publishing Services We Provide!</h2>
                            <p>Book Writing Experts proudly provides a comprehensive range of book publishing services. From the initial manuscript evaluation to final proofreading, and including steps such as detailed editing, layout design, and cover art creation, we've got you covered. We also offer guidance through the often complex world of distribution, marketing, and copyright registration. Our commitment is to deliver a professional, seamless service that allows your unique voice to reach readers worldwide. Entrust your literary journey to our expert team.</p>
                        </Col>
                    </Row>
                    <Row className='mt-3 g-2'>
                        <Col lg={6}>
                            <div className={styles.tiger}>
                                <Image src={book1} className="img-fluid" />
                                <h3>Amazon KDP</h3>
                                <p>Dreaming of becoming an Amazon KDP published author? We're here to turn that dream into a reality! This service is ideal for creators seeking to publish their work with full autonomy. Utilize our professional advice and help to fulfill your ambition of becoming an Amazon KDP author. While benefiting from expert marketing and distribution tactics, keep control over your work. Accept the thrill of self-publication and let your tale shine with our support.</p>
                            <Link href='#'>READ MORE <Image  src={aroow} className={` ${styles.author}  img-fluid`} /> </Link>
                            </div>

                        </Col>
                        <Col lg={6}>
                        <div className={styles.tiger}>
                                <Image src={book1} className="img-fluid" />
                                <h3>Amazon KDP</h3>
                                <p>Dreaming of becoming an Amazon KDP published author? We're here to turn that dream into a reality! This service is ideal for creators seeking to publish their work with full autonomy. Utilize our professional advice and help to fulfill your ambition of becoming an Amazon KDP author. While benefiting from expert marketing and distribution tactics, keep control over your work. Accept the thrill of self-publication and let your tale shine with our support.</p>
                               <Link href='#'>READ MORE <Image  src={aroow} className={` ${styles.author}  img-fluid`} /> </Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.tiger}>
                                <Image src={book1} className="img-fluid" />
                                <h3>Amazon KDP</h3>
                                <p>Dreaming of becoming an Amazon KDP published author? We're here to turn that dream into a reality! This service is ideal for creators seeking to publish their work with full autonomy. Utilize our professional advice and help to fulfill your ambition of becoming an Amazon KDP author. While benefiting from expert marketing and distribution tactics, keep control over your work. Accept the thrill of self-publication and let your tale shine with our support.</p>
                               <Link href='#'>READ MORE <Image  src={aroow} className={` ${styles.author}  img-fluid`} /> </Link>
                            </div>

                        </Col>
                        <Col lg={6}>
                        <div className={styles.tiger}>
                                <Image src={book1} className="img-fluid" />
                                <h3>Amazon KDP</h3>
                                <p>Dreaming of becoming an Amazon KDP published author? We're here to turn that dream into a reality! This service is ideal for creators seeking to publish their work with full autonomy. Utilize our professional advice and help to fulfill your ambition of becoming an Amazon KDP author. While benefiting from expert marketing and distribution tactics, keep control over your work. Accept the thrill of self-publication and let your tale shine with our support.</p>
                               <Link href='#'>READ MORE <Image  src={aroow} className={` ${styles.author}  img-fluid`} /> </Link>
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

export default Weprovide