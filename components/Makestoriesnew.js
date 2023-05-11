import React from 'react'
import styles from '@/styles/Makestories.module.css'
import { Container } from 'react-bootstrap'
import Image from 'next/image'


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



// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Makestoriesnew = (props) => {


  const makestoriesimg =
    [

      { storiesimg: cover1 },
      { storiesimg: cover2 },
      { storiesimg: cover3 },
      { storiesimg: cover4 },
      { storiesimg: cover5 },
      { storiesimg: cover6 },
      { storiesimg: cover7 },
      { storiesimg: cover8 },

    ];

  const makestoriesimg2 =
    [

      { storiesimg: cover9 },
      { storiesimg: cover10 },
      { storiesimg: cover11 },
      { storiesimg: cover12 },
      { storiesimg: cover13 },
      { storiesimg: cover14 },
      { storiesimg: cover15 },
      { storiesimg: cover16 },
      { storiesimg: cover17 },
      { storiesimg: cover18 },

    ];

  var makestories = {
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  var makestories2 = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    rtl: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <>

      <div className={styles.makestories}>

        <Container>
          <h2 className="fw700 font50 color-blue font-f t-center">{props.title} </h2>
          <h2 className="font18  font-f t-center mt-3 mb-5 textcolor"> {props.para}</h2>

          <Slider {...makestories}>

            {makestoriesimg.map((item, i) => {
              return (
                <div key={i}>
                  <Image loading="lazy" className='pt-3 img-fluid' src={item.storiesimg} alt='book_writing_cube'></Image>
                </div>
              )
            })}

          </Slider>
          <Slider {...makestories2}>

            {makestoriesimg2.map((item, i) => {
              return (
                <div key={i}>
                  <Image loading="lazy" className='pt-3 img-fluid' src={item.storiesimg} alt='book_writing_cube'></Image>
                </div>
              )
            })}

          </Slider>


        </Container>





      </div>


    </>
  )
}

export default Makestoriesnew