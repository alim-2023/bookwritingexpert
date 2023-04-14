import React from 'react'

// css
import styles from '@/styles/Ourprocess.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Image from 'next/image'
import line from '/public/images/line/line.png'


const Ourprocess = (props) => {
  return (
    <div className={styles.ourprocess}>
        <Container>
            <Row>
                <Col md={12}>
                    <h2 className='font50 fw500 t-center mb-5 color-black'> {props.title} </h2>
                </Col>
            </Row>
            <Row className={styles.borderpost}>
                <Col md={5}>
                    <div className={styles.dataslot}>
                        <h3>{props.heading1}</h3>
                        <p className='color-lightgray font14 fw400 font-f t-center mt-3'> {props.para1} </p>
                    </div>
                    
                    <div className={styles.dataslot2}>
                    <h3>    {props.num2}</h3>
                    </div>


                    <div className={styles.dataslot}>
                        <h3>{props.heading3}</h3>
                        <p className='color-lightgray font14 fw400 font-f t-center mt-3'> {props.para3} </p>
                    </div>
                    <div className={styles.dataslot2}>
                    <h3> {props.num4} </h3>
                    </div>

                    <div className={styles.dataslot}>
                        <h3>{props.heading5}</h3>
                        <p className='color-lightgray font14 fw400 font-f t-center mt-3'> {props.para5} </p>
                    </div>
                </Col>
                <Col md={2} className={styles.sideline}>
                 
<Image src={line} className='img-fluid h-100' />

                </Col>
                <Col md={5}>
                   <div className={styles.dataslot1}>
                     <h3> {props.num1} </h3>
                   </div>

                   <div className={styles.dataslot}>
                        <h3>{props.heading2}</h3>
                        <p className='color-lightgray font14 fw400 font-f t-center mt-3'> {props.para2} </p> 
                   </div>

                   <div className={styles.dataslot1}>
                     <h3> {props.num3} </h3>
                   </div>

                   <div className={styles.dataslot}>
                  

                     <h3>{props.heading4}</h3>
                        <p className='color-lightgray font14 fw400 font-f t-center mt-3'> {props.para4} </p>
                   </div>

                   <div className={styles.dataslot1}>
                     <h3> {props.num5} </h3>
                   </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Ourprocess