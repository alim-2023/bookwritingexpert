import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Professionalaudiobook.module.css'
import Image from 'next/image'
import banslider12 from '/public/images/professionalaudiobook/high.png'
import Link from 'next/link'

const Professionalaudiobook = () => {
    return (
        <>
            <section className={styles.professionalaudiobook}>

                <Container>
                    <Row className='gy-5'>
                        <Col lg={3}>
                            <Image src={banslider12} className="img-fluid" />
                        </Col>
                        <Col lg={9}>

                            <h3 className='color-white font-f font14 fw400'>Continue Reading</h3>
                            <h2 className='color-white font-f linh mt-3'> <Link href="#" className='color-black font-f fw700 textdocationnone hover1'>Book Writing Experts</Link> Is waiting for you to Ask <br className="d-none d-xl-block" /> for a <Link href="#" className='color-black font-f fw700 textdocationnone hover1'> Professional Audio Book Production</Link></h2>

                      

                            <audio id="myAudio" controls controlsList="nodownload">
                            <source src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" type="audio/mpeg" />
                                 
                            </audio>

                     


                        </Col>
                    </Row>
                </Container>



            </section>

        </>
    )
}

export default Professionalaudiobook