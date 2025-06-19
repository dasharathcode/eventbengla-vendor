// import React, { useState } from 'react'
// import { assets, } from '../assets/assets'
// import { useAppContext } from "../context/AppContext";


// const Hero = () => {
//     const { user, setShowHotelReg, isOwner, navigate } = useAppContext()
//     const [isScrolled, setIsScrolled] = useState(false);

//     return (
//         <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>

//             <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>List Your Venue and Get More Bookings!</p>
//             <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Thousands of users are searching for venues like yours. Don’t miss out!</h1>
//             <p className='max-w-130 mt-2 text-sm md:text-base'>
//                 Register Now to get your venue listed and start receiving bookings from users looking for the perfect place for their events.
//             </p>

//             <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

//                 {
//                     user && (
//                         <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`} onClick={() => isOwner ? navigate('/owner') : setShowHotelReg(true)}>
//                             {isOwner ? 'Dashboard' : 'Register Now'}
//                         </button>
//                     )
//                 }

//                 <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
//                     <img src={assets.searchIcon} alt="searchIcon" className='h-7' />
//                     <span>Search</span>
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default Hero












import React from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Hero = () => {
  const { user, isOwner, setShowHotelReg, navigate } = useAppContext();

  const handleClick = () => {
    if (!user) return; // Login not handled here
    if (isOwner) {
      navigate("/owner");
    } else {
      setShowHotelReg(true);
    }
  };

  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-br from-pink-100 to-white flex items-center justify-center px-4 md:px-16">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
          List Your Venue & <br className="hidden md:block" /> Get More Bookings
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Join 500+ venue partners across India. Promote your space and grow your business.
        </p>

        {user && (
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <img src={assets.regicon} alt="register" className="h-7 w-7" />
            {isOwner ? "Go to Dashboard" : "Register Now"}
          </button>
        )}

        {!user && (
          <p className="text-sm text-gray-500 mt-4">Please login to register your venue.</p>
        )}
      </div>
    </section>
  );
};

export default Hero;




