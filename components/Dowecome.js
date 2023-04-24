import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Dowecome.module.css'
import Link from 'next/link'
import Image from 'next/image'
import howdoimg from '/public/images/howdowecomeintobeing/howdowecomeintobeing.png'
import Signup from './Signup'

const Dowecome = (props) => {
  return (
    <>

      <div className={styles[props.Dowecome]}>
        <Container>
          <Row className={` ${styles.middle} gy-4`}>
            <Col md={7}>

              <div className={styles.dowemargin}>
                <h3 className="fw300 font50 colortextgrey font-f mb-4">{props.title}</h3>

                {props.subheading ?
                  <h4 className={`${styles.subheading} font17 fw500 colortextgrey font-f`}>{props.subheading}</h4>
                  :
                  ''
                }

                <p className='font15 fw400 font-f textcolor pe-lg-5 pe-0'>{props.text}</p>

                {props.subtext ?

                  <p className='font15 fw400 font-f textcolor'>{props.subtext}</p>
                  :
                  ''
                }

                <div className='mt-5'>
                  <Link className={styles.btn1} href="#">Get a free Proposal</Link>
                  <Link className={styles.btn2} href="#">Talk to an expert</Link>
                  <Link className={styles.btn2} href="tel:(213) 289 3888"> (213) 289 3888</Link>

                </div>

              </div>

            </Col>
            <Col md={5}>


              <div className={styles.image}>
                <Signup
                bannershome = 'signup1'
                contacttext = 'concolor'
                />
              </div>


            </Col>
          </Row>
        </Container>



      </div>

    </>
  )
}

export default Dowecome