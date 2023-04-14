import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
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
            <Row className={styles.middle}>
                <Col md={7}>

                  <div className={styles.dowemargin}> 
                     <h3 className="fw600 font48 colortextgrey font-f mb-4">{props.title}</h3>

                     { props.subheading ?
                        <h4 className={`${styles.subheading} font17 fw500 color-black font-f`}>{props.subheading}</h4>
                     :
''
}

                        <p className='font16 fw400 font-f textcolor'>{props.text}</p>

                            { props.subtext ?

                                <p  className='font16 fw400 font-f textcolor'>{props.subtext}</p>
                                :
                                    ''
                            }


                     
                        </div> 
                    
                </Col>    
                <Col md={5}>

               
  <div className={styles.image}>
  <Signup />
  </div>

                    
                </Col>    
            </Row>
        </Container>



    </div>
    
    </>
  )
}

export default Dowecome