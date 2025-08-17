// import { useAuth, useUser } from "@clerk/clerk-react";
// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from 'react-hot-toast'
// import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";

// axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {

//     const currency = import.meta.env.VITE_CURRENCY || "$";
//     const navigate = useNavigate();
//     const { user } = useUser();
//     const { getToken } = useAuth()

//     const [isOwner, setIsOwner] = useState(false);
//     const [showHotelReg, setShowHotelReg] = useState(false);
//     const [rooms, setRooms] = useState([]);
//     const [searchedCities, setSearchedCities] = useState([]); // max 3 recent searched cities

//     const facilityIcons = {
//         "Free WiFi": assets.freeWifiIcon,
//         "Free Breakfast": assets.freeBreakfastIcon,
//         "Room Service": assets.roomServiceIcon,
//         "Mountain View": assets.mountainIcon,
//         "Pool Access": assets.poolIcon,
//     };

//     const fetchUser = async () => {
//         try {
//             const { data } = await axios.get('/api/user', { headers: { Authorization: `Bearer ${await getToken()}` } })
//             if (data.success) {
//                 setIsOwner(data.role === "hotelOwner");
//                 setSearchedCities(data.recentSearchedCities)
//             } else {
//                 // Retry Fetching User Details after 5 seconds
//                 // Useful when user creates account using email & password
//                 setTimeout(() => {
//                     fetchUser();
//                 }, 2000);
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     const fetchRooms = async () => {
//         try {
//             const { data } = await axios.get('/api/rooms')
//             if (data.success) {
//                 setRooms(data.rooms)
//             }
//             else {
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     useEffect(() => {
//         if (user) {
//             fetchUser();
//         }
//     }, [user]);

//     useEffect(() => {
//         fetchRooms();
//     }, []);

//     const value = {
//         currency, navigate,
//         user, getToken,
//         isOwner, setIsOwner,
//         axios,
//         showHotelReg, setShowHotelReg,
//         facilityIcons,
//         rooms, setRooms,
//         searchedCities, setSearchedCities
//     };

//     return (
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     );

// };

// export const useAppContext = () => useContext(AppContext);


// AppContext.js






// import { useAuth, useUser } from "@clerk/clerk-react";
// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from 'react-hot-toast'
// import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";

// axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//     const currency = import.meta.env.VITE_CURRENCY || "$";
//     const navigate = useNavigate();
//     const { user } = useUser();
//     const { getToken } = useAuth();

//     const [isOwner, setIsOwner] = useState(undefined); // ✅ Start with undefined, not false
//     const [showHotelReg, setShowHotelReg] = useState(false);
//     const [rooms, setRooms] = useState([]);
//     const [searchedCities, setSearchedCities] = useState([]);

//     const facilityIcons = {
//         "Free WiFi": assets.freeWifiIcon,
//         "Free Breakfast": assets.freeBreakfastIcon,
//         "Room Service": assets.roomServiceIcon,
//         "Mountain View": assets.mountainIcon,
//         "Pool Access": assets.poolIcon,
//     };

//     const fetchUser = async () => {
//         try {
//             const { data } = await axios.get('/api/user', {
//                 headers: { Authorization: `Bearer ${await getToken()}` }
//             });
//             if (data.success) {
//                 setIsOwner(data.role === "hotelOwner"); // ✅ Set true/false only after fetch
//                 setSearchedCities(data.recentSearchedCities);
//             } else {
//                 // Retry if needed
//                 setTimeout(() => {
//                     fetchUser();
//                 }, 2000);
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     const fetchRooms = async () => {
//         try {
//             const { data } = await axios.get('/api/rooms');
//             if (data.success) {
//                 setRooms(data.rooms);
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };// AppContext.jsx এর ভেতরে


//     useEffect(() => {
//         if (user) {
//             fetchUser();
//         } else {
//             setIsOwner(undefined); // 🔁 Reset when user logs out
//         }
//     }, [user]);

//     useEffect(() => {
//         fetchRooms();
//     }, []);

//     const value = {
//         currency,
//         navigate,
//         user,
//         getToken,
//         isOwner,
//         setIsOwner,
//         axios,
//         showHotelReg,
//         setShowHotelReg,
//         facilityIcons,
//         rooms,
//         setRooms,
//         searchedCities,
//         setSearchedCities
//     };

//     return (
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     );
// };

// export const useAppContext = () => useContext(AppContext);







// import { useAuth, useUser } from "@clerk/clerk-react";
// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from 'react-hot-toast';
// import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";

// axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//     const currency = import.meta.env.VITE_CURRENCY || "$";
//     const navigate = useNavigate();
//     const { user } = useUser();
//     const { getToken } = useAuth();

//     const [isOwner, setIsOwner] = useState(undefined);
//     const [isPendingOwner, setIsPendingOwner] = useState(undefined); // ✅ New state
//     const [showHotelReg, setShowHotelReg] = useState(false);
//     const [rooms, setRooms] = useState([]);
//     const [searchedCities, setSearchedCities] = useState([]);

//     const facilityIcons = {
//         "Free WiFi": assets.freeWifiIcon,
//         "Free Breakfast": assets.freeBreakfastIcon,
//         "Room Service": assets.roomServiceIcon,
//         "Mountain View": assets.mountainIcon,
//         "Pool Access": assets.poolIcon,
//     };

//     const fetchUser = async () => {
//         try {
//             const { data } = await axios.get('/api/user', {
//                 headers: { Authorization: `Bearer ${await getToken()}` }
//             });

//             if (data.success) {
//                 setIsOwner(data.role === "hotelOwner");
//                 setIsPendingOwner(data.role === "pendingOwner"); // ✅ Check pending
//                 setSearchedCities(data.recentSearchedCities);
//             } else {
//                 setTimeout(() => {
//                     fetchUser();
//                 }, 2000);
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     const fetchRooms = async () => {
//         try {
//             const { data } = await axios.get('/api/rooms');
//             if (data.success) {
//                 setRooms(data.rooms);
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     useEffect(() => {
//         if (user) {
//             fetchUser();
//         } else {
//             setIsOwner(undefined);
//             setIsPendingOwner(undefined); // ✅ Reset on logout
//         }
//     }, [user]);

//     useEffect(() => {
//         fetchRooms();
//     }, []);

//     const value = {
//         currency,
//         navigate,
//         user,
//         getToken,
//         isOwner,
//         setIsOwner,
//         isPendingOwner, // ✅ Export for frontend use
//         setIsPendingOwner,
//         axios,
//         showHotelReg,
//         setShowHotelReg,
//         facilityIcons,
//         rooms,
//         setRooms,
//         searchedCities,
//         setSearchedCities
//     };

//     return (
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     );
// };

// export const useAppContext = () => useContext(AppContext);




import { useAuth, useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY || "$";
    const navigate = useNavigate();
    const { user } = useUser();
    const { getToken } = useAuth();

    const [isOwner, setIsOwner] = useState(undefined);
    const [pendingOwner, setPendingOwner] = useState(false); // ⬅️ নতুন state
    const [vendorType, setVendorType] = useState([]); // ⬅️ নতুন state
    const [showHotelReg, setShowHotelReg] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [searchedCities, setSearchedCities] = useState([]);

    const facilityIcons = {
        "Free WiFi": assets.freeWifiIcon,
        "Free Breakfast": assets.freeBreakfastIcon,
        "Room Service": assets.roomServiceIcon,
        "Mountain View": assets.mountainIcon,
        "Pool Access": assets.poolIcon,
    };

    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/user', {
                headers: { Authorization: `Bearer ${await getToken()}` }
            });
            if (data.success) {
                setIsOwner(data.role === "hotelOwner");
                setPendingOwner(data.role === "pendingOwner");
                setVendorType(data.vendorType || []); // ⬅️ backend থেকে vendorType set
                setSearchedCities(data.recentSearchedCities);
            } else {
                setTimeout(fetchUser, 2000);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const fetchRooms = async () => {
        try {
            const { data } = await axios.get('/api/rooms');
            if (data.success) {
                setRooms(data.rooms);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (user) {
            fetchUser();
        } else {
            setIsOwner(undefined);
            setPendingOwner(false);
            setVendorType([]);
        }
    }, [user]);

    useEffect(() => {
        fetchRooms();
    }, []);

    const value = {
        currency,
        navigate,
        user,
        getToken,
        isOwner,
        setIsOwner,
        pendingOwner,
        vendorType, // ⬅️ এখন context থেকে পাওয়া যাবে
        axios,
        showHotelReg,
        setShowHotelReg,
        facilityIcons,
        rooms,
        setRooms,
        searchedCities,
        setSearchedCities
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);




// import { useAuth, useUser } from "@clerk/clerk-react";
// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from 'react-hot-toast';
// import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";

// axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//     const currency = import.meta.env.VITE_CURRENCY || "$";
//     const navigate = useNavigate();
//     const { user } = useUser();
//     const { getToken } = useAuth();

//     const [isOwner, setIsOwner] = useState(undefined);
//     const [pendingOwner, setPendingOwner] = useState(false);

//     // localStorage থেকে vendorType প্রথমবারে load হবে
//     const [vendorType, setVendorType] = useState(() => {
//         const saved = localStorage.getItem("vendorType");
//         return saved ? JSON.parse(saved) : [];
//     });

//     const [showHotelReg, setShowHotelReg] = useState(false);
//     const [rooms, setRooms] = useState([]);
//     const [searchedCities, setSearchedCities] = useState([]);

//     const facilityIcons = {
//         "Free WiFi": assets.freeWifiIcon,
//         "Free Breakfast": assets.freeBreakfastIcon,
//         "Room Service": assets.roomServiceIcon,
//         "Mountain View": assets.mountainIcon,
//         "Pool Access": assets.poolIcon,
//     };

//     const fetchUser = async () => {
//         try {
//             const { data } = await axios.get('/api/user', {
//                 headers: { Authorization: `Bearer ${await getToken()}` }
//             });
//             if (data.success) {
//                 setIsOwner(data.role === "hotelOwner");
//                 setPendingOwner(data.role === "pendingOwner");
//                 setVendorType(data.vendorType || []); // ⬅️ backend থেকে vendorType আসবে
//                 setSearchedCities(data.recentSearchedCities);
//             } else {
//                 setTimeout(fetchUser, 2000);
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     const fetchRooms = async () => {
//         try {
//             const { data } = await axios.get('/api/rooms');
//             if (data.success) {
//                 setRooms(data.rooms);
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     // user আসলে fetchUser কল হবে
//     useEffect(() => {
//         if (user) {
//             fetchUser();
//         } else {
//             setIsOwner(undefined);
//             setPendingOwner(false);
//             setVendorType([]);
//         }
//     }, [user]);

//     useEffect(() => {
//         fetchRooms();
//     }, []);

//     // vendorType যখনই পরিবর্তন হবে, localStorage এ save হবে
//     useEffect(() => {
//         localStorage.setItem("vendorType", JSON.stringify(vendorType));
//     }, [vendorType]);

//     const value = {
//         currency,
//         navigate,
//         user,
//         getToken,
//         isOwner,
//         setIsOwner,
//         pendingOwner,
//         vendorType,
//         setVendorType, // ⬅️ এখন যেকোনো জায়গা থেকে update করা যাবে
//         axios,
//         showHotelReg,
//         setShowHotelReg,
//         facilityIcons,
//         rooms,
//         setRooms,
//         searchedCities,
//         setSearchedCities
//     };

//     return (
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     );
// };

// export const useAppContext = () => useContext(AppContext);
