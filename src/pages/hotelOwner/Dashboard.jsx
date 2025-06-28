// import React, { useEffect, useState } from 'react'
// import { assets } from '../../assets/assets'
// import Title from '../../components/Title';
// import { useAppContext } from '../../context/AppContext';

// const Dashboard = () => {

//     const { currency, user, getToken, toast, axios } = useAppContext();

//     const [dashboardData, setDashboardData] = useState({
//         bookings: [],
//         totalBookings: 0,
//         totalRevenue: 0,
//     });

//     const fetchDashboardData = async () => {
//         try {
//             const { data } = await axios.get('/api/bookings/hotel', { headers: { Authorization: `Bearer ${await getToken()}` } })
//             if (data.success) {
//                 setDashboardData(data.dashboardData)
//             } else {
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }



//     useEffect(() => {
//         if (user) {
//             fetchDashboardData();
//         }
//     }, [user]);

//     return (
//         <div>
//             <Title align='left' font='outfit' title='Dashboard' subTitle='Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations.' />
//             <div className='flex gap-4 my-8'>
//                 <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
//                     <img className='max-sm:hidden h-10' src={assets.totalBookingIcon} alt="" />
//                     <div className='flex flex-col sm:ml-4 font-medium'>
//                         <p className='text-blue-500 text-lg'>Total Bookings</p>
//                         <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
//                     </div>
//                 </div>
//                 <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
//                     <img className='max-sm:hidden h-10' src={assets.totalRevenueIcon} alt="" />
//                     <div className='flex flex-col sm:ml-4 font-medium'>
//                         <p className='text-blue-500 text-lg'>Total Revenue</p>
//                         <p className='text-neutral-400 text-base'>{currency} {dashboardData.totalRevenue}</p>
//                     </div>
//                 </div>
//             </div>

//             <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
//             {/* Table with heads User Name, Room Name, Amount Paid, Payment Status */}
//             <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
//                 <table className='w-full' >
//                     <thead className='bg-gray-50'>
//                         <tr>
//                             <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>

//                         </tr>
//                     </thead>
//                     <tbody className='text-sm'>
//                         {
//                             dashboardData.bookings.map((item, index) => (
//                                 <tr key={index}>
//                                     <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.username}</td>
//                                     <td className='py-3 px-4 text-gray-400 border-t border-gray-300 max-sm:hidden'>{item.room.roomType}</td>
//                                     <td className='py-3 px-4 text-gray-400 border-t border-gray-300 text-center'>{currency} {item.totalPrice}</td>
//                                     <td className='py-3 px-4  border-t border-gray-300 flex'>
//                                         <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? "bg-green-200 text-green-600" : "bg-amber-200 text-yellow-600"}`}>
//                                             {item.isPaid ? "Completed" : "Pending"}
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))
//                         }
//                     </tbody>
//                 </table>


//             </div>

//         </div>
//     )
// }

// export default Dashboard




// import React, { useEffect, useState } from 'react'
// import { assets } from '../../assets/assets'
// import Title from '../../components/Title';
// import { useAppContext } from '../../context/AppContext';

// const Dashboard = () => {

//     const { currency, user, getToken, toast, axios } = useAppContext();

//     const [dashboardData, setDashboardData] = useState({
//         bookings: [],
//         totalBookings: 0,
//         totalRevenue: 0,
//     });

//     const fetchDashboardData = async () => {
//         try {
//             const { data } = await axios.get('/api/bookings/hotel', { headers: { Authorization: `Bearer ${await getToken()}` } })
//             if (data.success) {
//                 setDashboardData(data.dashboardData)
//             } else {
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

// const updateStatus = async (bookingId, newStatus) => {
//     try {
//         const { data } = await axios.put(`/api/bookings/status/${bookingId}`, { status: newStatus }, {
//             headers: {
//                 Authorization: `Bearer ${await getToken()}`
//             }
//         });
//         if (data.success) {
//             toast.success("Booking status updated");

//             // ✅ Immediately update local state to reflect UI changes
//             setDashboardData(prev => ({
//                 ...prev,
//                 bookings: prev.bookings.map(b => 
//                     b._id === bookingId ? { ...b, status: newStatus } : b
//                 )
//             }));

//             // Optional: re-fetch fresh data in background after a second
//             // setTimeout(fetchDashboardData, 1000);
//         } else {
//             toast.error(data.message);
//         }
//     } catch (error) {
//         toast.error("Failed to update booking status");
//     }
// };


//     useEffect(() => {
//         if (user) {
//             fetchDashboardData();
//         }
//     }, [user]);

//     return (
//         <div>
//             <Title align='left' font='outfit' title='Dashboard' subTitle='Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations.' />

//             <div className='flex gap-4 my-8 flex-wrap'>
//                 <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 min-w-[200px]'>
//                     <img className='max-sm:hidden h-10' src={assets.totalBookingIcon} alt="" />
//                     <div className='flex flex-col sm:ml-4 font-medium'>
//                         <p className='text-blue-500 text-lg'>Total Bookings</p>
//                         <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
//                     </div>
//                 </div>
//                 <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 min-w-[200px]'>
//                     <img className='max-sm:hidden h-10' src={assets.totalRevenueIcon} alt="" />
//                     <div className='flex flex-col sm:ml-4 font-medium'>
//                         <p className='text-blue-500 text-lg'>Total Revenue</p>
//                         <p className='text-neutral-400 text-base'>{currency} {dashboardData.totalRevenue}</p>
//                     </div>
//                 </div>
//             </div>

//             <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
//             <div className='w-full overflow-x-auto max-w-full text-left border border-gray-300 rounded-lg max-h-[400px] overflow-y-auto'>
//                 <table className='w-full min-w-[700px]'>
//                     <thead className='bg-gray-50'>
//                         <tr>
//                             <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium'>Room</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium text-center'>Amount</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium text-center'>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody className='text-sm'>
//                         {
//                             dashboardData.bookings.map((item, index) => (
//                                 <tr key={index}>
//                                     <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.username}</td>
//                                     <td className='py-3 px-4 text-gray-500 border-t border-gray-300'>{item.room.roomType}</td>
//                                     <td className='py-3 px-4 text-center border-t border-gray-300 text-gray-500'>{currency} {item.totalPrice}</td>
//                                     <td className='py-3 px-4 text-center border-t border-gray-300'>
//                                         <button className={`py-1 px-3 text-xs rounded-full ${item.isPaid ? "bg-green-200 text-green-600" : "bg-yellow-200 text-yellow-700"}`}>
//                                             {item.isPaid ? "Paid" : "Unpaid"}
//                                         </button>
//                                     </td>
//                                     <td className='py-3 px-4 text-center border-t border-gray-300'>
//                                         <select
//                                             value={item.status}
//                                             onChange={(e) => updateStatus(item._id, e.target.value)}
//                                             className='border rounded px-2 py-1 text-sm'
//                                         >
//                                             <option value="pending">Pending</option>
//                                             <option value="confirmed">Confirmed</option>
//                                             <option value="cancelled">Cancelled</option>
//                                         </select>
//                                     </td>
//                                 </tr>
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default Dashboard;









// import React, { useEffect, useState } from 'react';
// import { assets } from '../../assets/assets';
// import Title from '../../components/Title';
// import { useAppContext } from '../../context/AppContext';

// const Dashboard = () => {
//     const { currency, user, getToken, toast, axios } = useAppContext();

//     const [dashboardData, setDashboardData] = useState({
//         bookings: [],
//         totalBookings: 0,
//         totalRevenue: 0,
//     });

//     const fetchDashboardData = async () => {
//         try {
//             const { data } = await axios.get('/api/bookings/hotel', {
//                 headers: { Authorization: `Bearer ${await getToken()}` },
//             });

//             if (data.success) {
//                 setDashboardData(data.dashboardData);
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     };

//     const updateStatus = async (bookingId, newStatus) => {
//         try {
//             const { data } = await axios.put(`/api/bookings/status/${bookingId}`, { status: newStatus }, {
//                 headers: { Authorization: `Bearer ${await getToken()}` },
//             });

//             if (data.success) {
//                 toast.success("Booking status updated");

//                 // ✅ Force re-fetch updated data
//                 await fetcupdateStatus(); // <-- Wait for this to complete before UI updates
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error("Failed to update booking status");
//         }
//     };


//     useEffect(() => {
//         if (user) {
//             fetchDashboardData();
//         }
//     }, [user]);

//     return (
//         <div>
//             <Title
//                 align='left'
//                 font='outfit'
//                 title='Dashboard'
//                 subTitle='Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations.'
//             />

//             <div className='flex gap-4 my-8 flex-wrap'>
//                 <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 min-w-[200px]'>
//                     <img className='max-sm:hidden h-10' src={assets.totalBookingIcon} alt="" />
//                     <div className='flex flex-col sm:ml-4 font-medium'>
//                         <p className='text-blue-500 text-lg'>Total Bookings</p>
//                         <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
//                     </div>
//                 </div>
//                 <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 min-w-[200px]'>
//                     <img className='max-sm:hidden h-10' src={assets.totalRevenueIcon} alt="" />
//                     <div className='flex flex-col sm:ml-4 font-medium'>
//                         <p className='text-blue-500 text-lg'>Total Revenue</p>
//                         <p className='text-neutral-400 text-base'>{currency} {dashboardData.totalRevenue}</p>
//                     </div>
//                 </div>
//             </div>

//             <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
//             <div className='w-full overflow-x-auto max-w-full text-left border border-gray-300 rounded-lg max-h-[400px] overflow-y-auto'>
//                 <table className='w-full min-w-[700px]'>
//                     <thead className='bg-gray-50'>
//                         <tr>
//                             <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium'>Room</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium text-center'>Amount</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium text-center'>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody className='text-sm'>
//                         {dashboardData.bookings.map((item, index) => (
//                             <tr key={index}>
//                                 <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.username}</td>
//                                 <td className='py-3 px-4 text-gray-500 border-t border-gray-300'>{item.room.roomType}</td>
//                                 <td className='py-3 px-4 text-center border-t border-gray-300 text-gray-500'>
//                                     {currency} {item.totalPrice}
//                                 </td>
//                                 <td className='py-3 px-4 text-center border-t border-gray-300'>
//                                     <button
//                                         className={`py-1 px-3 text-xs rounded-full ${item.isPaid
//                                             ? "bg-green-200 text-green-600"
//                                             : "bg-yellow-200 text-yellow-700"
//                                             }`}
//                                     >
//                                         {item.isPaid ? "Paid" : "Unpaid"}
//                                     </button>
//                                 </td>
//                                 <td className='py-3 px-4 text-center border-t border-gray-300'>
//                                     <select
//                                         value={item.status}
//                                         onChange={(e) => updateStatus(item._id, e.target.value)}
//                                         className='border rounded px-2 py-1 text-sm'
//                                     >
//                                         <option value="pending">Pending</option>
//                                         <option value="confirmed">Confirmed</option>
//                                         <option value="cancelled">Cancelled</option>
//                                     </select>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;



// import React, { useEffect, useState } from 'react';
// import { assets } from '../../assets/assets';
// import Title from '../../components/Title';
// import { useAppContext } from '../../context/AppContext';

// const Dashboard = () => {
//     const { currency, user, getToken, toast, axios } = useAppContext();

//     const [dashboardData, setDashboardData] = useState({
//         bookings: [],
//         totalBookings: 0,
//         totalRevenue: 0,
//     });

//     // 🔄 Fetch dashboard data
//     const fetchDashboardData = async () => {
//         try {
//             const { data } = await axios.get('/api/bookings/hotel', {
//                 headers: { Authorization: `Bearer ${await getToken()}` },
//             });

//             if (data.success) {
//                 setDashboardData(data.dashboardData);
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     };

//     // ✅ Update booking status and re-fetch data
//     const updateStatus = async (bookingId, newStatus) => {
//         try {
//             const { data } = await axios.put(
//                 `/api/bookings/status/${bookingId}`,
//                 { status: newStatus },
//                 {
//                     headers: { Authorization: `Bearer ${await getToken()}` },
//                 }
//             );

//             if (data.success) {
//                 toast.success("Booking status updated");
//                 await fetchDashboardData(); // ✅ Correct function call
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error("Failed to update booking status");
//         }
//     };

//     useEffect(() => {
//         if (user) fetchDashboardData();
//     }, [user]);

//     return (
//         <div>
//             <Title
//                 align='left'
//                 font='outfit'
//                 title='Dashboard'
//                 subTitle='Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations.'
//             />

//             <div className='flex gap-4 my-8 flex-wrap'>
//                 <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 min-w-[200px]'>
//                     <img className='max-sm:hidden h-10' src={assets.totalBookingIcon} alt="" />
//                     <div className='flex flex-col sm:ml-4 font-medium'>
//                         <p className='text-blue-500 text-lg'>Total Bookings</p>
//                         <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
//                     </div>
//                 </div>
//                 <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 min-w-[200px]'>
//                     <img className='max-sm:hidden h-10' src={assets.totalRevenueIcon} alt="" />
//                     <div className='flex flex-col sm:ml-4 font-medium'>
//                         <p className='text-blue-500 text-lg'>Total Revenue</p>
//                         <p className='text-neutral-400 text-base'>{currency} {dashboardData.totalRevenue}</p>
//                     </div>
//                 </div>
//             </div>

//             <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>

//             <div className='w-full overflow-x-auto max-w-full text-left border border-gray-300 rounded-lg max-h-[400px] overflow-y-auto'>
//                 <table className='w-full min-w-[700px]'>
//                     <thead className='bg-gray-50'>
//                         <tr>
//                             <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium'>Room</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium text-center'>Amount</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment</th>
//                             <th className='py-3 px-4 text-gray-800 font-medium text-center'>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody className='text-sm'>
//                         {dashboardData.bookings.map((item, index) => (
//                             <tr key={index}>
//                                 <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.username}</td>
//                                 <td className='py-3 px-4 text-gray-500 border-t border-gray-300'>{item.room.roomType}</td>
//                                 <td className='py-3 px-4 text-center border-t border-gray-300 text-gray-500'>
//                                     {currency} {item.totalPrice}
//                                 </td>
//                                 <td className='py-3 px-4 text-center border-t border-gray-300'>
//                                     <button className={`py-1 px-3 text-xs rounded-full ${item.isPaid ? "bg-green-200 text-green-600" : "bg-yellow-200 text-yellow-700"}`}>
//                                         {item.isPaid ? "Paid" : "Unpaid"}
//                                     </button>
//                                 </td>
//                                 <td className='py-3 px-4 text-center border-t border-gray-300'>
//                                     <select
//                                         value={item.status}
//                                         onChange={(e) => updateStatus(item._id, e.target.value)}
//                                         className='border rounded px-2 py-1 text-sm'
//                                     >
//                                         <option value="pending">Pending</option>
//                                         <option value="confirmed">Confirmed</option>
//                                         <option value="cancelled">Cancelled</option>
//                                     </select>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;




import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import Title from '../../components/Title';
import { useAppContext } from '../../context/AppContext';

const Dashboard = () => {
  const { currency, user, getToken, toast, axios } = useAppContext();

  const [dashboardData, setDashboardData] = useState({
    bookings: [],
    totalBookings: 0,
    totalRevenue: 0,
  });

  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get('/api/bookings/hotel', {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setDashboardData(data.dashboardData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const updateStatus = async (bookingId, newStatus) => {
    try {
      const { data } = await axios.put(
        `/api/bookings/status/${bookingId}`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        }
      );

      if (data.success) {
        toast.success('Booking status updated');

        // Instant UI update
        setDashboardData((prev) => ({
          ...prev,
          bookings: prev.bookings.map((b) =>
            b._id === bookingId ? { ...b, status: newStatus } : b
          ),
        }));

        // Optional: fetch accurate values again
        await fetchDashboardData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Failed to update booking status');
    }
  };

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue—all in one place."
      />

      <div className="flex gap-4 my-8 flex-wrap">
        <div className="bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 min-w-[200px]">
          <img className="max-sm:hidden h-10" src={assets.totalBookingIcon} alt="" />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Bookings</p>
            <p className="text-neutral-400 text-base">{dashboardData.totalBookings}</p>
          </div>
        </div>
        <div className="bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 min-w-[200px]">
          <img className="max-sm:hidden h-10" src={assets.totalRevenueIcon} alt="" />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Revenue</p>
            <p className="text-neutral-400 text-base">{currency} {dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      <h2 className="text-xl text-blue-950/70 font-medium mb-5">Recent Bookings</h2>
      <div className="w-full overflow-x-auto max-w-full text-left border border-gray-300 rounded-lg max-h-[400px] overflow-y-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">User</th>
              <th className="py-3 px-4 text-gray-800 font-medium">Room</th>
              <th className="py-3 px-4 text-center text-gray-800 font-medium">Amount</th>
              <th className="py-3 px-4 text-center text-gray-800 font-medium">Payment</th>
              <th className="py-3 px-4 text-center text-gray-800 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">{item.user.username}</td>
                <td className="py-3 px-4 text-gray-500 border-t border-gray-300">{item.room.roomType}</td>
                <td className="py-3 px-4 text-center text-gray-500 border-t border-gray-300">
                  {currency} {item.totalPrice}
                </td>
                <td className="py-3 px-4 text-center border-t border-gray-300">
                  <span className={`py-1 px-3 text-xs rounded-full ${item.isPaid ? 'bg-green-200 text-green-700' : 'bg-yellow-200 text-yellow-700'}`}>
                    {item.isPaid ? 'Paid' : 'Unpaid'}
                  </span>
                </td>
                <td className="py-3 px-4 text-center border-t border-gray-300">
                  <select
                    value={item.status}
                    onChange={(e) => updateStatus(item._id, e.target.value)}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

