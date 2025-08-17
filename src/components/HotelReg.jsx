// import { useState } from "react";
// import { useAppContext } from "../context/AppContext";
// import toast from "react-hot-toast";
// import { assets, cities } from "../assets/assets";

// const HotelReg = () => {
//     const { setShowHotelReg, axios, getToken, setIsOwner } = useAppContext();

//     const [OwnerName, setOwnerName] = useState("");
//     const [address, setAddress] = useState("");
//     const [contact, setContact] = useState("");
//     const [city, setCity] = useState("");

//     const onSubmitHandler = async (event) => {
//         try {
//             event.preventDefault();

//             const { data } = await axios.post(`/api/hotels/`, { OwnerName, contact, address, city }, { headers: { Authorization: `Bearer ${await getToken()}` } });

//             if (data.success) {
//                 toast.success(data.message);
//                 setIsOwner(true);
//                 setShowHotelReg(false);
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };


//     return (
//         <div onClick={() => setShowHotelReg(false)} className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70">
//             <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="flex bg-white rounded-xl max-w-4xl max-md:mx-2" >
//                 <img src={assets.regImage} alt="reg-image" className='w-1/2 rounded-xl hidden md:block' />
//                 <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
//                     <img src={assets.closeIcon} alt="close-icon" className='absolute top-4 right-4 h-4 w-4 cursor-pointer' onClick={() => setShowHotelReg(false)} />
//                     <p className="text-2xl font-semibold mt-6">Register Your Hotel</p>
//                     <div className="w-full mt-4">
//                         <label htmlFor="name" className="font-medium text-gray-500"> Owner Name</label>
//                         <input onChange={(e) => setOwnerName(e.target.value)} value={OwnerName} placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" type="text" required />
//                     </div>

//                     <div className="w-full mt-4">
//                         <label htmlFor="contact" className="font-medium text-gray-500">Phone</label>
//                         <input id="contact" onChange={(e) => setContact(e.target.value)} value={contact} placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" type="text" required />
//                     </div>

//                     <div className="w-full mt-4">
//                         <label htmlFor="address" className="font-medium text-gray-500">Address</label>
//                         <textarea id="address" rows="2" onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light resize-none" type="text" required />
//                     </div>

//                     {/* Drop Down City */}
//                     <div className="w-full mt-4 max-w-60 mr-auto">
//                         <label htmlFor="city" className="font-medium text-gray-500">City</label>
//                         <select id="city" onChange={(e) => setCity(e.target.value)} value={city} className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" required>
//                             <option value="">Select City</option>
//                             {cities.map((city) => (
//                                 <option key={city} value={city}>{city}</option>
//                             ))}
//                         </select>
//                     </div>

//                     <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6">
//                         Register
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default HotelReg;









// import { useState } from "react";
// import { useAppContext } from "../context/AppContext";
// import toast from "react-hot-toast";
// import { assets, cities } from "../assets/assets";
// import { Link } from "react-router-dom";

// const HotelReg = () => {
//     const { setShowHotelReg, axios, getToken, setIsOwner, } = useAppContext();
//     const [VendorType, setVendorType] = useState(""); // vendor type
//     const [OwnerName, setOwnerName] = useState("");
//     const [businessName, setbusinessName] = useState("");
//     const [address, setAddress] = useState("");
//     const [contact, setContact] = useState("");
//     const [city, setCity] = useState("");
//     const [Type, setType] = useState(""); // vendor type
//     const [agreed, setAgreed] = useState(false); // terms checkbox

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();

//         if (!agreed) {
//             toast.error("You must agree to the Terms & Conditions");
//             return;
//         }

//         try {
//             const { data } = await axios.post(
//                 `/api/hotels/`,
//                 { OwnerName, contact, address, city, Type, businessName, VendorType },
//                 { headers: { Authorization: `Bearer ${await getToken()}` } }
//             );

//             if (data.success) {
//                 toast.success(data.message);
//                 setIsOwner(true);
//                 setShowHotelReg(false);
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     return (
//         <div onClick={() => setShowHotelReg(false)} className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70">
//             <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="flex bg-white rounded-xl max-w-4xl max-md:mx-2">
//                 <img src={assets.regImage} alt="reg-image" className='w-1/2 rounded-xl hidden md:block' />
//                 <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
//                     <img src={assets.closeIcon} alt="close-icon" className='absolute top-4 right-4 h-4 w-4 cursor-pointer' onClick={() => setShowHotelReg(false)} />
//                     <p className="text-2xl font-semibold mt-6"> Sign Up to access your Dashboard </p>

//                     <div className="w-full mt-4">
//                         <label htmlFor="name" className="font-medium text-gray-500">Owner Name</label>
//                         <input onChange={(e) => setOwnerName(e.target.value)} value={OwnerName} placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" type="text" required />
//                     </div>

//                     <div className="w-full mt-4">
//                         <label htmlFor="name" className="font-medium text-gray-500">business Name</label>
//                         <input onChange={(e) => setbusinessName(e.target.value)} value={businessName} placeholder="Type here business" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" type="text" required />
//                     </div>



//                     <div className="w-full mt-4 max-w-60 mr-auto">
//                         <label htmlFor="Type" className="font-medium text-gray-500"> Select Vendor Type </label>
//                         <select id="Type" onChange={(e) => setType(e.target.value)} value={Type} className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" required>
//                             <option value="">Select  type</option>
//                             <option value="Venue">Venue</option>
//                             <option value="Vendor"> Vendor </option>
//                         </select>
//                     </div>

//                     <div className="w-full mt-4 max-w-60 mr-auto">
//                         <label htmlFor="Type" className="font-medium text-gray-500"> Select Vendor Type </label>
//                         <select id="Type" onChange={(e) => setVendorType(e.target.value)} value={VendorType} className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" required>
//                             <option value="">Select   Vendor type</option>
//                             <option value="Banquet Hall"> Banquet Hall </option>
//                             <option value="Marriage Garden">  Marriage Garden</option>
//                             <option value="Wedding Resorts"> Wedding Resorts </option>
//                             <option value="Farmhouse"> Farmhouse </option>
//                             <option value="Party Halls"> Small Function / Party Halls </option>
//                             <option value="Destination Wedding Venues"> Destination Wedding Venues </option>
//                             <option value="4 Star & Above Wedding Hotels"> 4 Star & Above Wedding Hotels </option>
//                             <option value="Beach Venue">  Beach Venue</option>
//                             Vendor Categories
//                             <option value="Photographers"> Photographers </option>
//                             <option value="Photographer & Videographer"> Photographer & Videographer </option>
//                             <option value="Makeup Artist">  Makeup Artist</option>
//                             <option value="Caterer"> Caterer </option>
//                             <option value="Mehendi Artist">  Mehendi Artist</option>
//                             <option value="DJ & Music"> DJ & Music </option>
//                             <option value="Wedding Planner"> Wedding Planner </option>
//                             <option value="Invitation & Printing"> Invitation & Printing </option>
//                             <option value="Transport / Car Rental"> Transport / Car Rental </option>
//                             <option value="Pandit / Priest Services"> Pandit / Priest Services </option>
//                             <option value="Florist"> Florist </option>
//                             <option value="Cake & Dessert Specialist"> Cake & Dessert Specialist </option>

//                         </select>
//                     </div>

//                     <div className="w-full mt-4">
//                         <label htmlFor="contact" className="font-medium text-gray-500">Phone</label>
//                         <input id="contact" onChange={(e) => setContact(e.target.value)} value={contact} placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" type="number" required />
//                     </div>




//                     <div className="w-full mt-4">
//                         <label htmlFor="address" className="font-medium text-gray-500">Address</label>
//                         <textarea id="address" rows="2" onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light resize-none" required />
//                     </div>

//                     <div className="w-full mt-4 max-w-60 mr-auto">
//                         <label htmlFor="city" className="font-medium text-gray-500">City</label>
//                         <select id="city" onChange={(e) => setCity(e.target.value)} value={city} className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" required>
//                             <option value="">Select City</option>
//                             {cities.map((city) => (
//                                 <option key={city} value={city}>{city}</option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* ✅ Terms & Conditions Checkbox */}
//                     <div className="w-full mt-4 flex items-start gap-2 text-sm">
//                         <input
//                             type="checkbox"
//                             id="terms"
//                             checked={agreed}
//                             onChange={(e) => setAgreed(e.target.checked)}
//                             className="mt-1"
//                             required
//                         />
//                         <label htmlFor="terms">
//                             I agree to the{" "}
//                             <Link to="/terms" target="_blank" className="text-blue-600 underline">
//                                 Terms & Conditions
//                             </Link>
//                         </label>
//                     </div>

//                     <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6">
//                         Register
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default HotelReg;






import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { assets, cities } from "../assets/assets";
import { Link } from "react-router-dom";
import Select from "react-select";

const HotelReg = () => {
    const { setShowHotelReg, axios, getToken, setIsOwner } = useAppContext();

    const [OwnerName, setOwnerName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [city, setCity] = useState("");
    const [Type, setType] = useState("");
    const [VendorType, setVendorType] = useState([]); // multiple vendor types
    const [agreed, setAgreed] = useState(false);

    const venueOptions = [
        { value: "Banquet Hall", label: "Banquet Hall" },
        { value: "Marriage Garden", label: "Marriage Garden" },
        { value: "Wedding Resorts", label: "Wedding Resorts" },
        { value: "Farmhouse", label: "Farmhouse" },
        { value: "Party Halls", label: "Small Function / Party Halls" },
        { value: "Destination Wedding Venues", label: "Destination Wedding Venues" },
        { value: "4 Star & Above Wedding Hotels", label: "4 Star & Above Wedding Hotels" },
        { value: "Beach Venue", label: "Beach Venue" },
        { value: "Photographers", label: "Photographers" },
        { value: "Photographer & Videographer", label: "Photographer & Videographer" },
        { value: "Makeup Artist", label: "Makeup Artist" },
        { value: "Caterer", label: "Caterer" },
        { value: "Mehendi Artist", label: "Mehendi Artist" },
        { value: "DJ & Music", label: "DJ & Music" },
        { value: "Wedding Planner", label: "Wedding Planner" },
        { value: "Invitation & Printing", label: "Invitation & Printing" },
        { value: "Transport / Car Rental", label: "Transport / Car Rental" },
        { value: "Pandit / Priest Services", label: "Pandit / Priest Services" },
        { value: "Florist", label: "Florist" },
        { value: "Cake & Dessert Specialist", label: "Cake & Dessert Specialist" },
    ];

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!agreed) {
            toast.error("You must agree to the Terms & Conditions");
            return;
        }

        try {
            const { data } = await axios.post(
                `/api/hotels/`,
                {
                    OwnerName,
                    contact,
                    address,
                    city,
                    Type,
                    businessName,
                    VendorType: VendorType.map(v => v.value), // send array of selected values
                },
                { headers: { Authorization: `Bearer ${await getToken()}` } }
            );

            if (data.success) {
                toast.success(data.message);
                setIsOwner(true);
                setShowHotelReg(false);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div onClick={() => setShowHotelReg(false)} className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70">
            <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="flex bg-white rounded-xl max-w-4xl max-md:mx-2">
                <img src={assets.regImage} alt="reg-image" className='w-1/2 rounded-xl hidden md:block' />
                <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
                    <img src={assets.closeIcon} alt="close-icon" className='absolute top-4 right-4 h-4 w-4 cursor-pointer' onClick={() => setShowHotelReg(false)} />
                    <p className="text-2xl font-semibold mt-6"> Sign Up to access your Dashboard </p>

                    {/* Owner Name */}
                    <div className="w-full mt-4">
                        <label className="font-medium text-gray-500">Owner Name</label>
                        <input onChange={(e) => setOwnerName(e.target.value)} value={OwnerName} placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" type="text" required />
                    </div>

                    {/* Business Name */}
                    <div className="w-full mt-4">
                        <label className="font-medium text-gray-500">Business Name</label>
                        <input onChange={(e) => setBusinessName(e.target.value)} value={businessName} placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" type="text" required />
                    </div>
                    <div className="w-full mt-4">
                        <label className="font-medium text-gray-500">City</label>
                        <Select
                            options={cities.map(c => ({ value: c, label: c }))}
                            value={city ? { value: city, label: city } : null}
                            onChange={(selected) => setCity(selected.value)}
                            placeholder="Search or select city..."
                            isClearable
                        />
                    </div>
                    {/* Main Type */}
                    <div className="w-full mt-4">
                        <label className="font-medium text-gray-500">Select Type</label>
                        <select onChange={(e) => setType(e.target.value)} value={Type} className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" required>
                            <option value="">Select type</option>
                            <option value="Venue">Venue</option>
                            <option value="Vendor">Vendor</option>
                        </select>
                    </div>

                    {/* Vendor Type - react-select */}
                    <div className="w-full mt-4">
                        <label className="font-medium text-gray-500">Select Vendor Type</label>
                        <Select
                            options={venueOptions}
                            isMulti
                            value={VendorType}
                            onChange={setVendorType}
                            className="mt-1"
                            placeholder="Search or select..."
                        />
                    </div>

                    {/* Phone */}
                    <div className="w-full mt-4">
                        <label className="font-medium text-gray-500">Phone</label>
                        <input onChange={(e) => setContact(e.target.value)} value={contact} placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" type="number" required />
                    </div>

                    {/* Address */}
                    <div className="w-full mt-4">
                        <label className="font-medium text-gray-500">Address</label>
                        <textarea rows="2" onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light resize-none" required />
                    </div>

                    {/* City */}
                    {/* <div className="w-full mt-4">
                        <label className="font-medium text-gray-500">City</label>
                        <select onChange={(e) => setCity(e.target.value)} value={city} className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" required>
                            <option value="">Select City</option>
                            {cities.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div> */}


                    {/* City */}



                    {/* Terms */}
                    <div className="w-full mt-4 flex items-start gap-2 text-sm">
                        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1" required />
                        <label>
                            I agree to the{" "}
                            <Link to="/terms" target="_blank" className="text-blue-600 underline">
                                Terms & Conditions
                            </Link>
                        </label>
                    </div>

                    <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HotelReg;
