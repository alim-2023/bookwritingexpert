import React from 'react'
import styles from '@/styles/Signup.module.css'
import Image from 'next/image'
import signup from '/public/images/signup/signup.webp'
import { useState } from "react";
import Router from 'next/router'
import axios from "axios";

const Signup = (props) => {

  const [score, setScore] = useState('Best time to jump on a quick call:');

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

    axios.post("https://jsonplaceholder.typicode.com/posts", JSONdata)
      .then((response) => {
        console.log(response.data);
        setScore('Thank You');
      });

    const { pathname } = Router
    if (pathname == pathname) {
      Router.push('/thank-you')
    }

  }


  return (
    <div className={styles[props.bannershome]}>
      <form onSubmit={handleSubmit}>
        <h4 className={styles.getup}> <em className='color-blue font25'>Unable to reach us?</em>  </h4>
        <p className='font-f t-center'> <em>Write to us and we’ll get back to you, at our earliest!</em> </p>
        <input type="text" className={styles.nametext} required name="first" placeholder="Full Name:" />
        <input type="email" className={styles.nametext} required name="last" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email Address:" />
        <input type="number" className={styles.nametext} required name="phone" placeholder="Phone Number:" />
        <textarea required className={styles.textareanew} name="message" cols="40" rows="10" placeholder="Your project brief:"></textarea>
        <button className={styles.freebtn} type="submit">{score} </button>
      </form>
    </div>
  )


}

export default Signup