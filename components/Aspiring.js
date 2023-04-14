import React from 'react'
import styles from '@/styles/Aspiring.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'


const Aspiring = (props) => {
  return (
    <>
    
        <div className={styles.aspiring}>

            <Container>
                <Row className={styles.middle}>
                    <Col md={7}>

                    <h2 className="fw600 font50 colortextgrey font-f mb-4">{props.title}</h2>
                     <p className='color-lightgray font14 fw400 font-f mt-3'>{props.text}</p>
                        { props.subtext ?

                            <p  className='color-lightgray font14 fw400 font-f mt-3'>{props.subtext}</p>
                            :
                                ''
                        }


                    <div className='mt-5'>
                        <Link className={styles.btn1} href="#">Get a free Proposal</Link>
                        <Link className={styles.btn2} href="#">Talk to an expert</Link>
                        <Link className={styles.btn2} href="tel:(213) 289 3888"> {props.number}</Link>
                        
                    </div>

                    </Col>
                    <Col md={5}>

<Image src={props.img} className='img-fluid mt-3' />
                          

                    </Col>
                </Row>
            </Container>




        </div>
    
    </>
  )
}

export default Aspiring