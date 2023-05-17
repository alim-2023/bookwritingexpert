import React from 'react'
import styles from '@/styles/Contact.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'

import axios from "axios";
import { useState } from "react";

const Contact = () => {

    const [score, setScore] = useState('Submit Form');

    const handleSubmit = async (event) => {

        event.preventDefault()


        // const name = document.querySelector('#name').value
        // const email = document.querySelector('#email').value


        // if (!name) {
        //   alert('Please Enter Your Name.')
        //   return false
        // }
        // if (!email) {
        //   alert('Please Enter Your Email.')
        //   return false
        // }


        const data = {
            first: event.target.first.value,
            email: event.target.last.value,
            phone: event.target.phone.value,
            zip: event.target.zip.value,



            checknow: event.target.checknow.value,
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

            <Head>

                <link rel="icon" href="/favicon.svg" />

            </Head>

            <div className={styles.contactbg}>

                <Container>
                    <Row className='gy-4'>
                        <Col md={5}>


                            <h2 className='color-blue font50 fw700 font-f'>
                                Elevate your book. Get published.
                            </h2>
                            <div className={`${styles.published} pt-5`}>

                                <p className='fw500 font20 color-white font-f'>
                                    Let’s talk about your book
                                </p>
                                <p className='font20 fw500 font-f color-white'>
                                    <span className=''>Phone:</span> <Link href='tel:213-289-3888' className={` ${styles.numpost} fw700 color-white textdocationnone`}> (213) 289 3888 </Link>
                                </p>
                                <p className='font20 fw500 font-f color-white'>
                                    <span className=''>Email:</span> <Link href='mailto:info(@)bookwritingcube(.)com' className={` ${styles.numpost} fw700 color-white textdocationnone`}>
                                        support@bookwritingexperts.com </Link>
                                </p>

                            </div>


                            <p className='fw500 font20 color-white font-f mt-5'>
                                …or fill out the contact <Link href='#contpost' className='textdocationnone color-white'>form below</Link>
                            </p>

                        </Col>

                        <Col md={1}></Col>
                        <Col md={6}>

                            {/* <iframe width='100%' height='252' id='gmap_canvas' src='https://maps.google.com/maps?q=651%20N%20Broad%20St,%20Suite%20206%20Middletown,%20DE%2019709&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed'></iframe> */}

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.6200791070223!2d-118.25944002448333!3d34.053615473156526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b26b2805e7%3A0x631167a0f496a896!2sUnion%20Bank%20Plaza%2C%20445%20S%20Figueroa%20St%2C%20Los%20Angeles%2C%20CA%2090071%2C%20USA!5e0!3m2!1sen!2s!4v1681986458438!5m2!1sen!2s" width='100%' height='252' ></iframe>



                            <h4 className='font-f fw400 font20 color-white t-center mt-3' >(Operations)</h4>
                            <p className='font-f fw300 mt-3 color-white t-center' >
                                445 S.Figueroa Street, Los Angeles, CA 90071
                            </p>


                        </Col>
                    </Row>
                </Container>

            </div>


            <div className={styles.contfom}>

                <Container className='contpost' id='contpost'>
                    <Row className={styles.conrow}>
                        <Col md={9}>
                            <h2 className='t-center fw700 font50 color-blue font-f mb-5'> Fill Out The Form Below We Will Contact You Promptly</h2>



                            <form className={styles.label2} onSubmit={handleSubmit}>

                                <Row className='gy-3'>
                                    <Col md={6}><input className={styles.inputfilet} required id='name' type='text' name='first' placeholder='Name' /></Col>
                                    <Col md={6}><input className={styles.inputfilet} required id='email' type='text' name='last' placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" /></Col>
                                </Row>

                                <Row className='mt-3 mb-3 gy-3'>
                                    <Col md={6}> <input className={styles.inputfilet} required id='phone' type='number' name='phone' placeholder='Phone' /> </Col>
                                    <Col md={6}> <input className={styles.inputfilet} required id='tel' type='number' name='zip' placeholder='Location/Zip Code' /></Col>
                                </Row>


                                <Row>
                                    <Col> <p className='font15 fw500 font-f colortextgrey mt-4'>Desired Service(s)* see our <b> <em> rates and services </em></b> </p> </Col>
                                </Row>


                                <Row className='gy-3'>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Ghostwriting--I want to hire a professional to write or rewrite my book' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Ghostwriting--I want to hire a professional to write or rewrite my book
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Editing--I have written a manuscript and would like a professional to review and/or edit it' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Editing--I have written a manuscript and would like a professional to review and/or edit it
                                            </label>
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Book Coaching--I want to write my book on my own, but with the help of a professional to guide me' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Book Coaching--I want to write my book on my own, but with the help of a professional to guide me
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Cultural Accuracy Reading--I would like a professional to review my manuscript and ensure it isn’t offensive, inaccurate, or perpetuating harmful stereotypes' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Cultural Accuracy Reading--I would like a professional to review my manuscript and ensure it isn’t offensive, inaccurate, or perpetuating harmful stereotypes
                                            </label>
                                        </div>
                                    </Col>
                                </Row>


                                <Row className='gy-3'>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Book Proposal' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Book Proposal
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Beta Reader Services' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Beta Reader Services
                                            </label>
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Other' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Other
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>

                                    </Col>
                                </Row>

                                <Row className='mt-4'>
                                    <Col><p className={styles.general}> General Genre Category*</p></Col>
                                </Row>

                                <Row className='gy-3'>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Business' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Business
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Memoir/Biography' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Memoir/Biography
                                            </label>
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Health' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Health
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Self-Help/Personal Development' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Self-Help/Personal Development
                                            </label>
                                        </div>
                                    </Col>
                                </Row>


                                <Row className='gy-3'>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Fiction' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Fiction
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='General Nonfiction' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                General Nonfiction
                                            </label>
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Children’s' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Children’s
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' name='checknow' value='Others' id='flexCheckDefault' />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                Others
                                            </label>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>

                                    <Col>
                                        <textarea type="text" id="message" className={styles.textarea1} name="message" placeholder="Tell Us More About Your Project and  Publishing Goals Here"></textarea>
                                    </Col>

                                </Row>

                                <Col className='mt-3 mb-5'>
                                    <em className='textcolor'>
                                        You may find our confidentiality policy <Link className='textdocationnone colortextgrey' href="/privacy-policy"><strong className={styles.numpost}>here</strong></Link> , or request a signed NDA by email: <Link className='textdocationnone colortextgrey' href="mailto:support@bookwritingexperts.com"> <strong className={styles.numpost}>support@bookwritingexperts.com</strong></Link> This site is protected by reCAPTCHA and the Google
                                        <Link className='textdocationnone colortextgrey' href="/privacy-policy"><strong className={styles.numpost}> Privacy Policy</strong></Link>  and Terms of Service <Link className='textdocationnone colortextgrey' href="/terms-of-use"> <strong className={styles.numpost}>Terms of Service</strong> </Link> apply.
                                    </em>

                                </Col>

                                <button className={styles.submitform} type='submit'>{score}</button>

                            </form>



                        </Col>
                    </Row>
                </Container>
            </div>


            <div className={styles.contactdata}>
                <Container>
                    <Row className={styles.conrow}>
                        <Col md={9}>

                            <h2 className='color-blue font50 fw700 font-f'> Everything You Need to Achieve Your Publishing Goals is Accessible Here.</h2>
                            <p className='font15  font-f colortextgrey' >Contact us, and let's talk about how we can make your book the market's next bestseller. </p>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact