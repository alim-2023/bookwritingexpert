import React from 'react'
import styles from '@/styles/Strugglingtogive.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import { TiTick } from 'react-icons/ti'

import newview from '../public/images/strugglingtogive/new-image-one.webp'
import Image from 'next/image'
import Signup from './Signup'

const Strugglingtogive = (props) => {
  return (
    <div className={styles.strugglingtogive}>

    <Container>
        <Row className={styles.forent}> 
            <Col md={7}>
            <h2 className='colortextgrey font48 fw700 font-f mb-4'>{props.title}</h2>
            <p className='textcolor font-f mb-4 font14'>You may be a victim of the following nuisances</p>
            <div className={styles.slow}>
                <ul> 
                    <li className='textcolor font-f mb-2 font14'><TiTick size={25}  className={styles.rightcolor} /> {props.list1}</li>
                    <li className='textcolor font-f mb-2 font14'><TiTick size={25}  className={styles.rightcolor} /> {props.list2}</li>
                    <li className='textcolor font-f mb-2 font14'><TiTick size={25}  className={styles.rightcolor} />{ props.list3}</li>
                    <li className='textcolor font-f mb-2 font14'><TiTick size={25}  className={styles.rightcolor} />{props.list4}</li>
                </ul>

                <ul> 
                    <li className='textcolor font-f mb-2 font14'><TiTick size={25}  className={styles.rightcolor} /> {props.list5}</li>
                    <li className='textcolor font-f mb-2 font14'><TiTick size={25}  className={styles.rightcolor} /> {props.list6} </li>
                    <li className='textcolor font-f mb-2 font14'><TiTick size={25}  className={styles.rightcolor} /> {props.list7}</li>
                    <li className='textcolor font-f mb-2 font14'><TiTick size={25}  className={styles.rightcolor} /> {props.list8}</li> 
                </ul>

            </div>

            <div className='mt-4'>
                <a href="#footercontact"> <button className={styles.btnget1}> {props.btn1} </button></a>
                <a href="#"><button className={styles.btnget2}> {props.btn2} </button></a>
                <a href="tel:(213) 289 3888"><button className={styles.btnget2}> {props.btn3} </button></a>
            </div>
            </Col>

            <Col md={5}>

<Signup />

        
                
            </Col>
        </Row>
    </Container>


    </div>
  )
}

export default Strugglingtogive