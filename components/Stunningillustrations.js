import React from 'react'
import styles from '@/styles/Stunningillustrations.module.css'
import { Container, Row,Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
// images
import homebannerlogos1 from '/public/images/stunningillustrations/1.svg'
import homebannerlogos2 from '/public/images/stunningillustrations/2.svg'
import homebannerlogos3 from '/public/images/stunningillustrations/3.svg'
import homebannerlogos4 from '/public/images/stunningillustrations/4.svg'
import homebannerlogos5 from '/public/images/stunningillustrations/5.svg'
import homebannerlogos6 from '/public/images/stunningillustrations/6.svg'
import homebannerlogos7 from '/public/images/stunningillustrations/7.svg'
import homebannerlogos8 from '/public/images/stunningillustrations/8.svg'
import homebannerlogos9 from '/public/images/stunningillustrations/9.svg'

const Stunningillustrations = () => {
    return (
        <>

            <section className={styles.stun}>
                <Container>
                    <Row>
                        <Col lg={12}>
                

                        <h2 className="font-f fw500 colortextgrey t-center mb-5">We Provide Stunning <Link className="color-blue textdocationnone fw700" href="#">Illustrations For  <br className="d-none d-xl-block" /> Your Book</Link> </h2>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos1} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos2} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos3} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos6} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos4} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos5} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos9} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos7} className="img-fluid" ></Image>
                            </div>
                        </Col>
                        <Col lg={4} className="p-0">
                            <div className={styles.stunimage}>
                                <Image alt="Book Writing Experts" src={homebannerlogos8} className="img-fluid" ></Image>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Link className={styles.btn1} href="#">OUR PORTFOLIO</Link>
                        </Col>
                    </Row>

                </Container>

            </section>

        </>
    )
}

export default Stunningillustrations