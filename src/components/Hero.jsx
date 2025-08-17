





// import React from "react";
// import { useAppContext } from "../context/AppContext";
// import { assets } from "../assets/assets";

// const Hero = () => {
//   const { user, isOwner, setShowHotelReg, navigate } = useAppContext();

//   const handleClick = () => {
//     if (!user) return; // Login not handled here
//     if (isOwner) {
//       navigate("/owner");
//     } else {
//       setShowHotelReg(true);
//     }
//   };

//   return (
//     <section className="w-full min-h-[90vh] bg-gradient-to-br from-pink-100 to-white flex items-center justify-center px-4 md:px-16">
//       <div className="max-w-4xl text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
//           List Your Venue & <br className="hidden md:block" /> Get More Bookings
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 mb-8">
//           Join 500+ venue partners across India. Promote your space and grow your business.
//         </p>

//         {user && (
//           <button
//             onClick={handleClick}
//             className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
//           >
//             <img src={assets.regicon} alt="register" className="h-7 w-7" />
//             {isOwner ? "Go to Dashboard" : "Register Now"}
//           </button>
//         )}

//         {!user && (
//           <p className="text-sm text-gray-500 mt-4">Please login to register your venue.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Hero;





import React from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Hero = () => {
  const { user, isOwner, isPendingOwner, setShowHotelReg, navigate } = useAppContext();

  const handleClick = () => {
    if (!user) return;
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
          <>
            {isPendingOwner ? (
              <button
                disabled
                className="inline-flex items-center gap-3 bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md opacity-80 cursor-not-allowed"
              >
                <img src={assets.regicon} alt="under review" className="h-7 w-7" />
                Under Review
              </button>
            ) : (
              <button
                onClick={handleClick}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <img src={assets.regicon} alt="register" className="h-7 w-7" />
                {isOwner ? "Go to Dashboard" : "Register Now"}
              </button>
            )}
          </>
        )}

        {!user && (
          <p className="text-sm text-gray-500 mt-4">
            Please login to register your venue.
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
