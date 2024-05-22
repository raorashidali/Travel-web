import React from 'react'
import TravelImg from '../../assets/travelbox.png'
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaHospital } from 'react-icons/fa';
function Benner() {
  return (
        <div className='min-h-[500px] bg-gray-100'>
        <div className='minh-[500px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    
                     {/*img section  */}
                      <div>
                        <img src={TravelImg} alt="this is img" className='max-w-[450px] h-[350px] w-full mx-auto  drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7 )]' />
                      </div>
                    
                   
                    {/*text section  */}
                    <div>
                        <h1 data-aos="fade-up" className='text-4xl font-bold  sm:text-4xl text-cyan-900' > 
                            Explore the all corner of the World with Us....
                        </h1>
                        <p data-aos="zoom-in" className="text-sm text-gray-500 tracking-wide leading-8">
                            Discover amazing destinations, experience diverse cultures, and create unforgettable memories with our curated travel experiences. Whether you're looking for adventure, relaxation, or a bit of both, we have something for everyone.
                        </p>
                        <br />
                        <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                      <p>Flight</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                      <p>Hotel</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                      <p>Wi-fi</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                      <p>Foods</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <FaHospital color="red" className=" text-4xl h-12 w-12 shadow-sm p-4 rounded-full  bg-green-200" />
                      <p>Hospital</p>
                    </div>
                  </div>
                </div>
                    </div>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Benner
