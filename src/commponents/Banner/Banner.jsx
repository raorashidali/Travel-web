import React from 'react'

function Banner( { img}) {
    const bgImage = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
      };
    
  return (
    
    <div data-aos="zoom-in" style={bgImage} className="h-[400px] w-full  ">
      {/* Additional content can go here */}
    </div>
  );
}

export default Banner
