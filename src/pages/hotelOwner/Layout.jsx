// import React, { useEffect } from 'react'
// import Navbar from '../../components/hotelOwner/Navbar'
// import Sidebar from '../../components/hotelOwner/Sidebar'
// import { Outlet } from 'react-router-dom'
// import { useAppContext } from '../../context/AppContext'

// const Layout = () => {

//     const { isOwner, navigate } = useAppContext()

//     useEffect(() => {
//         if (!isOwner) {
//             navigate('/')
//         }
//     }, [isOwner])

//     return (
//         <div className='flex flex-col h-screen'>
//             <Navbar />
//             <div className='flex h-full'>
//                 <Sidebar />
//                 <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Layout






import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../components/hotelOwner/Navbar';
import Sidebar from '../../components/hotelOwner/Sidebar';
import { useAppContext } from '../../context/AppContext';

const Layout = () => {
  const { isOwner } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOwner === false) {
      navigate('/');
    }
  }, [isOwner, navigate]);

  // Wait until isOwner is defined (true or false)
//   if (isOwner === undefined) {
//     return <div className="text-center p-10 text-xl">Loading...</div>;
//   }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-4 pt-10 md:px-10 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
