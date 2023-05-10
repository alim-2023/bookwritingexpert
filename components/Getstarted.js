import React from 'react'
import styles from '@/styles/Getstarted.module.css'
import Link from 'next/link'
import axios from "axios";
import { useState } from "react";
import { Row, Col } from 'react-bootstrap';

const Getstarted = (props) => {


  const [score, setScore] = useState('SUBMIT');

  const handleSubmit = async (event) => {

    event.preventDefault()


    const data = {
      first: event.target.first.value,
      email: event.target.last.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    }



    const JSONdata = JSON.stringify(data)

    setScore('Wating For Send Data');

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "https://httpbin.org/post",
        data: JSONdata,
      });

      setScore('Thank You');
      window.location = "/thank-you"

    }
    catch (error) {
      console.log(error)
    }





  }



  return (
    <>

      <div className={styles.getstart}>
        <h4 className="t-center font30 fw700 colortextgrey font-f">Let’s Get Started</h4>


        <p className="textcolor font-f mb-4 font15 t-center mt-3">Call us on: <Link className='textdocationnone colorexpertgrey hover fw600' href="tel:(213) 289 3888">(213) 289 3888</Link> or use the form below to start a conversation and show you how we can help!</p>

        <form className={styles.formalign} onSubmit={handleSubmit}>

          <Row className='start mt-3 gy-3'>
            <Col md={6}>
              <input type="text" className={styles.formfree} required name="first" placeholder="Enter Your Name" />
            </Col>
            <Col md={6}>
              <input type="text" className={styles.formfree} required name="last" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Enter Your Email" />
            </Col>



            <Col md={6}>
              <input type="number" className={styles.formfree} required name="phone" placeholder="Phone Number" />
            </Col>
            <Col md={6}>
              {/* <input type="number" className={styles.formfree} required name="phone" placeholder="Phone Number" /> */}
              <select className={`${styles.formfree} ${styles.formdrop}`}>
                <option>Please select Service(s)</option>
                <option>Ghost Writing</option>
                <option>Editing</option>
                <option>Publishing</option>
                <option>Proofreading</option>
                <option>Blog Writing</option>
                <option>Website Content Writing</option>
                <option>Book Promotion</option>
                <option>Book Writing</option>

              </select>
            </Col>

            <Col md={12}>
              <textarea className={styles.formfree} required name="message" rows="3" placeholder="Enter your Message"></textarea>
            </Col>

          </Row>











          <button className={styles.freebtn} type="submit">Submit </button>
        </form>






      </div>


    </>
  )
}

export default Getstarted