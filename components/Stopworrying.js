import React from 'react'

// css
import styles from '@/styles/Stopworrying.module.css'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'

const Stopworrying = (props) => {
  return (
    <div className={styles.stopworrying}>

<Container>
    <Row>
        <Col md={12}>
            <h3 className='font48 font-f t-center color-blue fw500'> {props.title} </h3>
            <h2 className='font50 color-white fw500 font-f t-center mt-4'>{props.subtitle}</h2>


            <div className={styles.aligntop}>

            <Link href='#' className={styles.btn1}> {props.btn1} </Link>
            <Link href='#' className={styles.btn2}> {props.btn2} </Link>
            <Link href='tel:2132893888' className={styles.btn2}>(213) 289 3888</Link>

            </div>

        </Col>
    </Row>
</Container>


    </div>
  )
}

export default Stopworrying