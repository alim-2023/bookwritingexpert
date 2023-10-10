import React from 'react'
import styles from '@/styles/Aspiringseo.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Signupseo from './Signupseo'

const Aspiringseo = (props) => {
    return (
        <>

            <div className={styles.aspiring}>

                <Container>
                    <Row className={`${styles.middle} gy-4`}>
                        <Col md={7}>

                            <h2 className="fw700 font50 colortextgrey font-f mb-4">{props.title}</h2>
                            <p className='color-lightgray font14 fw400 font-f mt-3'>{props.text}</p>
                            <p className='color-lightgray font14 fw400 font-f mt-3'>{props.subtext}</p>


                            <div className='mt-5'>
                         
                                <Link className={styles.btn1} href="#">Get A Free Proposal</Link>
                                <Link className={styles.btn2} href="tel:(213) 289 3888"> {props.number}</Link>

                            </div>

                        </Col>
                        <Col md={5}>
                            {props.img ?
                                <Image loading="lazy" alt="Book Writing Experts" src={props.img} className='img-fluid mt-3' />


                                :

                                <Signupseo
                                    bannershome='signup'
                                    contacttext='contacttextblack'
                                />

                            }

                        </Col>
                    </Row>
                </Container>




            </div>

        </>
    )
}

export default Aspiringseo