import React from 'react'
import styles from '@/styles/Illustrativebook.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import banslider1 from '../public/images/illustrativebook/cartoon.svg'

const Illustrativebook = (props) => {
  return (
    <>
    <section className={styles.plust}>
        <Container>
            <Row>
                <Col lg={8}>

                    { props.title } 
                   <p className='color-white font-f hero-span font14'>{ props.para }</p> 

                   <div className='mt-4'>
                        <Link className={styles.discuss} href="telto:(213) 289 3888">(213) 289 3888</Link>
                        <Link className={styles.homenumer} href="#"> LET'S DISCUSS</Link>
                  </div>

                </Col>
                <Col lg={3}>
                    <div className={styles.cartoon}>
                          <Image src={banslider1} className="img-fluid" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    
    </>
  )
}

export default Illustrativebook