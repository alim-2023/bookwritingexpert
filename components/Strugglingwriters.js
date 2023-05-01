import React from 'react'
import styles from '@/styles/Strugglingwriters.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Slider from 'react-slick'

// images
import cover1 from '../public/images/thousandsofstruggling/Book-Mockup.png'
import cover2 from '../public/images/thousandsofstruggling/Book-Mockup2.png'
import cover3 from '../public/images/thousandsofstruggling/Book-Mockup3.png'
import cover4 from '../public/images/thousandsofstruggling/Book-Mockup4.png'
import cover5 from '../public/images/thousandsofstruggling/Book-Mockup5.png'
import cover6 from '../public/images/thousandsofstruggling/Book-Mockup6.png'
import cover7 from '../public/images/thousandsofstruggling/Book-Mockup7.png'
import cover8 from '../public/images/thousandsofstruggling/Book-Mockup8.png'
import cover9 from '../public/images/thousandsofstruggling/book-mockup-1.png'
import cover10 from '../public/images/thousandsofstruggling/book-mockup-2.png'
import cover11 from '../public/images/thousandsofstruggling/book-mockup-3.png'
import cover12 from '../public/images/thousandsofstruggling/book-mockup-4.png'
import cover13 from '../public/images/thousandsofstruggling/book-mockup-5.png'
import cover14 from '../public/images/thousandsofstruggling/book-mockup-6.png'
import cover15 from '../public/images/thousandsofstruggling/book-mockup-7.png'
import cover16 from '../public/images/thousandsofstruggling/book-mockup-8.png'
import cover17 from '../public/images/thousandsofstruggling/book-mockup-9.png'
import cover18 from '../public/images/thousandsofstruggling/book-mockup-10.png'

const Strugglingwriters = () => {

    var mockupslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    var mockupslider2 = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        rtl: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div className={styles.strugglingwriters}>
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className='font-f font50 fw700 t-center color-blue'>Our Experts Have Helped Thousands Of Struggling Writers Come And Join The League!</h2>
                        <p className='font15 font-f t-center textcolor mt-3'>Our experienced publishing service providers remove the hurdles of publishing books. From printing and publishing to distribution and marketing books on a global level, we take the writers through all.</p>
                    </Col>
                </Row>


                <Row className={`${styles.aligncenter}`}>
                    <Col md={12}>
                        <Slider {...mockupslider} className='mt-5 mockupslider'>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover1} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover2} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover3} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover4} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover5} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover6} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover7} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover8} className='img-fluid' />
                            </div>
                        </Slider>
                        <Slider {...mockupslider2} className='mt-3 mockupslider'>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover9} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover10} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover11} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover12} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover13} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover14} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover15} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover16} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover17} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Book Writing Experts" src={cover18} className='img-fluid' />
                            </div>
                        </Slider>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Strugglingwriters