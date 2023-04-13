import React from 'react'
import styles from '@/styles/Signup.module.css'

import Image from 'next/image'

import signup from '/public/images/signup/signup.webp'

const Signup = () => {
  return (
    <div className={styles.signup}>


                    <form>
                      
                <Image className={` ${styles.signsimg} img-fluid`} src={signup} />
                    <h4 className={styles.getup}>Signup to get up to <span className={styles.offfree}>50%</span> off</h4>

                        <input type="text" className={styles.nametext} required  name="first" placeholder="Full Name..." />

                       
                        <input type="email" className={styles.nametext} required name="last" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Enter your Email Address" />

                       
                        <input type="number" className={styles.nametext} required name="Phone Number" placeholder="Phone Number" /> 


                        <select className={styles.nametext}>
                            <option> Please select Service(s) </option>
                            <option>Ghost Writing</option>
                            <option>Editing</option>
                            <option>Publishing</option>
                            <option>Proofreading</option>
                            <option>Audio Book</option>
                            <option>Blog Writing</option>
                            <option>Website Content Writing</option>
                            <option>Book Cover</option>
                            <option>Book Promotion</option>
                            <option>Formatting</option>
                            <option>e-Book Writing</option>
                            <option>Book Video Trailer</option>
                            <option>Author Website</option>
                            <option>Article Writing</option>
                        </select>
                       
                        <textarea required className={styles.textareanew} name="message" cols="40"  rows="10" placeholder="Enter a brief description about your project"></textarea>
                        <button className={styles.freebtn} type="submit">Submit </button>
                    </form>


    </div>
  )
}

export default Signup