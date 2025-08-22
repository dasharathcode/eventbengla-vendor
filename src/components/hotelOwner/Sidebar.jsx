import React from 'react'
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add  bankat ", path: "/owner/list-banquet-hall", icon: assets.addIcon },
    { name: "Add Marriage Garden", path: "/owner/marriage-garden", icon: assets.addIcon },
    { name: "Add Vendor", path: "/owner/add-vendor", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
    { name: "List Vendor", path: "/owner/list-vendor", icon: assets.listVendorIcon },
    { name: "Booking Manager", path: "/owner/booking-manager", icon: assets.bookingIcon }
  ];

  return (
    <div className="md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
      {sidebarLinks.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            `flex items-center py-3 px-4 md:px-8 gap-3 
                             ${isActive ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600" : "hover:bg-gray-100/90 border-white text-gray-700"}`
          }
        >
          <img
            className="w-5 h-5 object-contain"
            src={item.icon}
            alt={item.name}
          />
          <p className="md:block hidden text-center">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar









// import React from 'react';
// import { assets } from '../../assets/assets';
// import { NavLink } from 'react-router-dom';
// import { useAppContext } from '../../context/AppContext';

// const Sidebar = () => {
//   const { vendorType } = useAppContext(); // ⬅️ Context থেকে vendorType নিচ্ছি

//   const sidebarLinks = [
//     // Common links
//     { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon, type: "common" },
//     { name: "Booking Manager", path: "/owner/booking-manager", icon: assets.bookingIcon, type: "common" },

//     // Banquet Halls
//     { name: "Addd Banquet Hall", path: "/owner/add-room", icon: assets.addVendorIcon, type: "Banquet Halls" },
//     { name: "List Banquet Halls", path: "/owner/list-banquet-hall", icon: assets.listVendorIcon, type: "Banquet Halls" },

//     // Caterer
//     { name: "Add Caterer", path: "/owner/add-caterer", icon: assets.addVendorIcon, type: "Caterer" },
//     { name: "List Caterer", path: "/owner/list-caterer", icon: assets.listVendorIcon, type: "Caterer" },

//     // Decorator
//     { name: "Add Decorator", path: "/owner/add-decorator", icon: assets.addVendorIcon, type: "Decorator" },
//     { name: "List Decorator", path: "/owner/list-decorator", icon: assets.listVendorIcon, type: "Decorator" },
//   ];

//   // ✅ Filter vendorType অনুযায়ী
//   const filteredLinks = sidebarLinks.filter(
//     (link) => link.type === "common" || vendorType.includes(link.type)
//   );

//   return (
//     <div className="md:w-64 w-16 h-full text-base pt-4 flex flex-col transition-all duration-300">
//       {filteredLinks.map((item, index) => (
//         <NavLink
//           to={item.path}
//           key={index}
//           className={({ isActive }) =>
//             `flex items-center py-3 px-4 md:px-8 gap-3
//             ${
//               isActive
//                 ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600"
//                 : "hover:bg-gray-100/90 border-white text-gray-700"
//             }`
//           }
//         >
//           <img className="w-5 h-5 object-contain" src={item.icon} alt={item.name} />
//           <p className="md:block hidden text-center">{item.name}</p>
//         </NavLink>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;
