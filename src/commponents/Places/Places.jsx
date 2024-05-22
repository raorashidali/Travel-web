import React from 'react'
import PlacesCard from './PlacesCard'
import img1 from '../../assets/places/boat.jpg'
import img2 from '../../assets/places/tajmahal.jpg'
import img3 from '../../assets/places/water.jpg'
import img4 from '../../assets/places/place4.jpg'
import img5 from '../../assets/places/place5.jpg'
import img6 from '../../assets/places/place6.jpg'


const PlacesData=[
    {
        img:img1,
        title:"Boat tour",
        lucation:"USA",
        description:"this is the best place in the word and enjoy it with friend  ",
        price:100,
        type:"Cultural Relex", 
    },
    {
        img:img2,
        title:"Taj Mahal",
        lucation:"USA",
        description:"this is the best place in the word and enjoy it with friend  ",
        price:100,
        type:"Cultural Relex", 
    },
    {
        img:img3,
        title:"Water",
        lucation:"USA",
        description:"this is the best place in the word and enjoy it with friend  ",
        price:100,
        type:"Cultural Relex", 
    },
    {
        img:img4,
        title:"Boat tour",
        lucation:"USA",
        description:"this is the best place in the word and enjoy it with friend  ",
        price:100,
        type:"Cultural Relex", 
    },
    {
        img:img5,
        title:"Boat tour",
        lucation:"USA",
        description:"this is the best place in the word and enjoy it with friend  ",
        price:100,
        type:"Cultural Relex", 
    },
    {
        img:img6,
        title:"Boat tour",
        lucation:"USA",
        description:"this is the best place in the word and enjoy it with friend  ",
        price:100,
        type:"Cultural Relex", 
    },
];

function Places({handleOrderPopup}) {
  return (
    <div className='bg-gray-50 py-10 '>
        <div className='container'>
            <h1 data-aos="fade-up"  className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Best Places to visit</h1>
            <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    PlacesData.map((item,index)=>(
                        <PlacesCard
                        handleOrderPopup={handleOrderPopup}
                         key={index}{...item}/>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Places
