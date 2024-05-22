import React from 'react';
import MainVid from '../assets/video/main.mp4';
import Hero from '../commponents/Hero/Hero';
import Places from '../commponents/Places/Places';
import Banner from '../commponents/Banner/Banner';
import girl from '../assets/cover-women.jpg' 
import girl2 from '../assets/travel-cover2.jpg' 
import Blogs from './Blogs';
import Benner from '../commponents/Benner/Benner';
import Testimonial from '../commponents/Testimonial/Testimonial';
import Popup from '../commponents/Popup/Popup';
 

 
 
 

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className=' h-[700px] relative'>
          <video 
          autoPlay
          loop
          muted
          className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'
          >
            <source src={MainVid}
            type='video/mp4' />
          </video>
          <Hero/>
        </div>
        <Places handleOrderPopup={handleOrderPopup}/>
        <Banner img={girl}/>
        <Blogs/>
        <Benner/>
        <Banner img={girl2}/>
        <Testimonial/>
        <Popup oderPopup={orderPopup} setoderPopup={setOrderPopup}/>
        
        
        



      </div>

    </>
  )
}

export default Home
