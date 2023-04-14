import React from 'react'
import styles from '@/styles/Whatourclients.module.css'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import { GrFormPrevious } from 'react-icons/gr'
import { GrFormNext } from 'react-icons/gr'





// footer icons
import { AiFillStar } from 'react-icons/ai';

// images
import whatour from '../public/images/whatourclients/whatour.png'


// slick css

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const Whatourclients = () => {



 

        var whatourclients = {
            dots: false,
            arrows:true,
            autoplay:true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
      
            nextArrow: <GrFormNext className='privious' />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
    <div className={styles.ourclients}>
      <Container className='testtimonials'>
      



       <Slider {...whatourclients}>
                     
                   
                     <div >
                        
                       <div className={styles.whatclientlogo}> 

                     
                        </div> 
                                <h3 className='font18 color-blue mb-4'>GRATITUDE FROM GLOBAL FOLLOWERS </h3>

                                <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
                         <p className={` ${styles.canva} font15 fw100 font-f`}>
                          
                         Since I was short on money and couldn’t afford an expensive proofreader for the book, I was legit quite worried because having a second opinion is always better? My friend recommended Book Writing Experts’ affordable proofreading services, and wow! They were very accommodating and got my work done in 3 days only. So happy!
                                    
                                    </p>

                                    <p className='font18 color-blue mb-4'><b>Dyuti Hai	</b></p>
                                   



                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>

                      

                                  
                     </div>
                     <div >
                           
                       <div className={styles.whatclientlogo}>    </div> 
                             <h3 className='font18 color-blue mb-4'>GRATITUDE FROM GLOBAL FOLLOWERS </h3>
                             <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
                       <p className={` ${styles.canva} font15 fw100 font-f`}>This was my first book to be 	My sister was struggling with her book sales; I recommended Book Writing Experts book promotion services. Since then the sales have skyrocketed. I have never seen such great results in a short time.	
                                </p>
                                    <p className='font18 color-blue mb-4'><b>James Moris	</b></p>
                                   

                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>
                     </div>

                     <div >
                            
                       <div className={styles.whatclientlogo}>    </div> 
                             <h3 className='font18 color-blue mb-4'>GRATITUDE FROM GLOBAL FOLLOWERS </h3>
                             <h2 className={styles.value}>Rave Reviews from Our <br></br> Valued Clients</h2>
                       <p className={` ${styles.canva} font15 fw100 font-f`}>I worked with Sam Jordan for a few months preparing my first book. Sam was very helpful and courteous. We connected on the phone several times a week. I am not the most patient person, but I found Sam to be capable and professional. He helped me overcome any fears I had about the process. I had some difficulty understanding the formatting process for chapters and their titles. Sam walked me through it with very few problems. I now think of Sam as a friend. I have already written several chapters for a new book, and when it’s ready, Sam will be the one I look for to help me.				</p>
                                    <p className='font18 color-blue mb-4'><b>Ron		</b></p>
                                   

                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>
                     </div>

                 

              
                    

               

                 
                    
         </Slider> 


      </Container>

    </div>
   </>
  )
}

export default Whatourclients