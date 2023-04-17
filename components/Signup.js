import React from 'react'
import styles from '@/styles/Signup.module.css'

import Image from 'next/image'

import signup from '/public/images/signup/signup.webp'

const Signup = () => {
  return (
    <div className={styles.signup}>


                    <form>
                      
                
                    <h4 className={styles.getup}> <span className={styles.offfree}> <span className='color-black'>Contact</span> Form</span> </h4>

                    <p className='font-f t-center'>It was popularised in the 1960s with the release of Letraset sheets</p>

                        <input type="text" className={styles.nametext} required  name="first" placeholder="Full Name..." />

                       
                        <input type="email" className={styles.nametext} required name="last" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Enter your Email Address" />

                       
                        <input type="number" className={styles.nametext} required name="Phone Number" placeholder="Phone Number" /> 


                      
                       
                        <textarea required className={styles.textareanew} name="message" cols="40"  rows="10" placeholder="Enter a brief description about your project"></textarea>
                        <button className={styles.freebtn} type="submit">Submit </button>
                    </form>


    </div>
  )
}

export default Signup