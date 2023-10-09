import React, { useState } from 'react'
import styles from '@/styles/Headernew.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'
import logo from '../public/images/bannerbps/log.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaLocationArrow } from 'react-icons/fa';
import Sticky from '../components/Sticky';
import avtar1 from '../public/images/testimonial/avatar-1.png'
import avtar2 from '../public/images/testimonial/avatar-2.png'
import avtar3 from '../public/images/testimonial/avatar-3.png'
import headericon1 from '../public/images/headericon/1.png'
import headericon2 from '../public/images/headericon/2.png'
import headericon3 from '../public/images/headericon/3.png'
import headericon4 from '../public/images/headericon/4.png'
import headericon5 from '../public/images/headericon/5.png'
import headericon6 from '../public/images/headericon/6.png'
import headericon7 from '../public/images/headericon/7.png'
import headericon8 from '../public/images/headericon/8.png'
import headericon9 from '../public/images/headericon/9.png'
import headericon10 from '../public/images/headericon/10.png'
import Modal from 'react-bootstrap/Modal';
import Getstarted from './Getstarted'

import { useRouter } from "next/router";

const Headernew = () => {


    return (
        <>

            <header className={styles.header}>


                <Navbar expand="lg">
                    <Container>

                        <Link href="/"><Image loading="lazy" className={styles.logonew} src={logo} alt='logo'></Image> </Link>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className={styles.navalign}>
                            <ul className={styles.align_menu}>
                                <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Home</Link></li>
                                <li className={styles.navlinks}><Link className={styles.menulinks} href="#">About Us </Link></li>
                                <li className={styles.navlinks}><Link className={styles.menulinks} href="#"> Services</Link></li>
                                <li className={styles.navlinks}><Link className={styles.menulinks} href="#">Pricing</Link></li>
                                <li className={styles.navlinks}><Link className={styles.menulinks} href="#">Faqs</Link></li>
                                <li className={styles.navlinks}><Link className={styles.menulinks} href="#">Blogs</Link></li>
                                <li className={styles.navlinks}><Link className={styles.menulinks} href="#">Contact Us</Link></li>
                                <li className={styles.navlinks}><Link className={styles.menulinks1} href="#">(213) 289 3888</Link></li>
                                <li className={styles.navlinks}><Link className={styles.menulinks2} href="#">Get a Quote</Link></li>
                            
                            
                            </ul>

                           
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>







        </>
    )
}

export default Headernew