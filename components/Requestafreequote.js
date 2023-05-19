import React from 'react'
import styles from '@/styles/Requestafreequote.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { useState } from "react";
// footer icons
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Router from 'next/router';


const Requestafreequote = () => {


  const [score, setScore] = useState('Submit');
  const [first, setName] = useState('');
  const [last, setEmail] = useState('');
  const [phone, setPhone] = useState('');




  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let bodyContent = JSON.stringify({
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    });


    setScore('Wating For Sending Data');
    let response = await fetch("/api/submit", {
      method: "POST",
      body: bodyContent
    });

    let data = await response.text();
    console.log(data);




    e.target.reset();
    setScore('Thank You');
    const { pathname } = Router
    if (pathname == pathname) {
      Router.push('/thank-you')
    }
  }

  return (
    <>
      <div className={styles.freequote}>
        <Container>
          <h2 className="fw700 font50 color-blue font-f t-center mb-3 pt-5 mt-5">Request A Free Quote</h2>
          <form className={styles.formalign} onSubmit={handleSubmit}>
            <Row>
              <Col md={4}> <input type="text" className={styles.formfree} required name="name" placeholder='Name' onChange={e => setName(e.target.value)} /></Col>

              <Col md={4}>  <input type="email" className={styles.formfree} required name="email" placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={e => setEmail(e.target.value)} /></Col>

              <Col md={4}>   <input type="number" className={styles.formfree} required name="phone" placeholder='Phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={e => setPhone(e.target.value)} /> </Col>
            </Row>
            <button className={styles.freebtn} type="submit"> {score} </button>
          </form>
          <Row className={styles.leftemail}>
            <Col md={4}>    <h3 className="fw700 font48 colorexpertgrey font-f t-left">Email Us</h3></Col>
            <Col md={4}>
              <div>
                <h4 className='fw700 font17 colorexpertgrey font-f'> For project inquiries only: </h4>
                <p className={styles.bookemail}><MdEmail size={16} />

                  <Link className={`${styles.emailhref} hover`} href="mailto:support@bookwritingexperts.com">  support@bookwritingexperts.com </Link> </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4 className='fw700 font17 colorexpertgrey font-f'> For other inquiries only: </h4>
                <p className={styles.bookemail}><BsFillTelephoneFill size={12} />

                  <Link className={`${styles.emailhref} hover`} href="tel:213-289-3888"> 213-289-3888 </Link> </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Requestafreequote