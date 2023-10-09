import React from 'react'
import styles from '@/styles/Customizes.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import together from '/public/images/customized/cus.png'


const Customized = (props) => {
    return (
        <>
            <section className={styles.customized}>
                <Container>
                    <Row className={ ` ${styles.rename} gy-4 ` }>
                        <Col lg={7}>
                            <h2>Get A Customized Solution By <br></br>
                                Best Publishing Services</h2>
                            <p>Your work is over after creating a masterpiece. Let us take the lead from here. Our Amazon publishing services include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</p>
                            <div className={styles.book}>
                                <Link className={styles.real} href="#"> get started </Link>
                                <Link className={styles.real1} href="#">  live chat </Link>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className={styles.take}>
                                <Image src={together} className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Customized