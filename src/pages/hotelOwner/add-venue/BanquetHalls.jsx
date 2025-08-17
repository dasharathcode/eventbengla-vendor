import React, { useState } from 'react'
import { assets } from "../../../assets/assets";
import Select from "react-select";
import Title from '../../../components/Title'
import toast from 'react-hot-toast'
import { useAppContext } from '../../../context/AppContext'

const BanquetHalls = () => {


    const cityOptions = [
        { value: "Sonamukhi", label: "Sonamukhi" },
        { value: "Bankura", label: "Bankura" },
        { value: "Kolkata", label: "Kolkata" },
        { value: "Durgapur", label: "Durgapur" },
    ];
    const { axios, getToken } = useAppContext()

    const [images, setImages] = useState({ 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null })
    const [loading, setLoading] = useState(false);

    const [inputs, setInputs] = useState({
        roomType: 'Banquet Halls',
        type: 'venue', // ✅ Automatically set type as venue
        name: '',
        city: '',
        district: '',
        landmark: '',
        locality: '',
        pincode: '',
        googleMapLink: '',


        priceveg: 0,
        NumberofHalls: '',
        pricenonveg: 0,
        pricePerNight: 0,
        seatCapacity: '',
        FloatingCapacity: '',
        pricePerDay: '',
        hourlyOption: '',
        priceType: '',
        advanceAmount: '',
        refundPolicy: '',
        paymentMethods: '',
        Stage: '',
        Parking: '',
        PowerBackup: '',
        inhouseCatering: '',
        outsideCatering: '',
        SoundSystem: '',
        ChangingRoom: '',
        Attachedwashroom: '',
        alcoholAllowed: '',
        DanceFloor: '',
        ACAvailable: '',
        DrinkingWater: '',
        Washroom: '',
        GuestRoom: '',


        amenities: {
            'Free WiFi': false,
            'Free Breakfast': false,
            'Room Service': false,
            'Mountain View': false,
            'Pool Access': false
        }
    })

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        // Check if all inputs are filled
        if (!inputs.roomType || !inputs.pricePerNight || !inputs.amenities || !Object.values(images).some(image => image)) {
            toast.error("Please fill in all the details")
            return;
        }
        setLoading(true);
        try {
            const formData = new FormData()
            formData.append('roomType', inputs.roomType)
            formData.append('district', inputs.district)
            formData.append('city', inputs.city)
            formData.append('name', inputs.name)
            formData.append('priceveg', inputs.priceveg || 0)
            formData.append('priceNonVeg', inputs.pricenonveg || 0)
            formData.append('NumberofHalls', inputs.NumberofHalls || 0)
            formData.append('type', 'venue'); // ✅ Automatically set type as venue
            formData.append('pricePerNight', inputs.pricePerNight)
            formData.append('landmark', inputs.landmark)
            formData.append('locality', inputs.locality)
            formData.append('pincode', inputs.pincode)
            formData.append('googleMapLink', inputs.googleMapLink)

            formData.append('seatCapacity', inputs.seatCapacity || 0)

            formData.append('FloatingCapacity', inputs.FloatingCapacity || 0)
            formData.append('pricePerDay', inputs.pricePerDay || 0)
            formData.append('hourlyOption', inputs.hourlyOption || 'No')
            formData.append('priceType', inputs.priceType || 'Fixed')
            formData.append('advanceAmount', inputs.advanceAmount || 0)
            formData.append('refundPolicy', inputs.refundPolicy || '')
            formData.append('paymentMethods', inputs.paymentMethods || '')
            formData.append('Stage', inputs.Stage || 'No')
            formData.append('Parking', inputs.Parking || 'No')
            formData.append('PowerBackup', inputs.PowerBackup || 'No')
            formData.append('inhouseCatering', inputs.inhouseCatering || 'No')
            formData.append('outsideCatering', inputs.outsideCatering || 'No')
            formData.append('SoundSystem', inputs.SoundSystem || 'No')
            formData.append('ChangingRoom', inputs.ChangingRoom || 'No')
            formData.append('Attachedwashroom', inputs.Attachedwashroom || 'No')
            formData.append('alcoholAllowed', inputs.alcoholAllowed || 'No')
            formData.append('DanceFloor', inputs.DanceFloor || 'No')
            formData.append('ACAvailable', inputs.ACAvailable || 'No')
            formData.append('DrinkingWater', inputs.DrinkingWater || 'No')
            formData.append('Washroom', inputs.Washroom || 'No')
            formData.append('GuestRoom', inputs.GuestRoom || 0)





            // Converting Amenities to Array & keeping only enabled Amenities
            const amenities = Object.keys(inputs.amenities).filter(key => inputs.amenities[key])
            formData.append('amenities', JSON.stringify(amenities))

            // Adding Images to FormData
            Object.keys(images).forEach((key) => {
                images[key] && formData.append('images', images[key])
            })

            const { data } = await axios.post('/api/rooms/', formData, { headers: { Authorization: `Bearer ${await getToken()}` } })

            if (data.success) {
                toast.success(data.message)
                setInputs({
                    roomType: 'Banquet Halls',
                    type: 'venue',
                    name: '',
                    NumberofHalls: '',

                    pricePerNight: 0,
                    priceveg: 0,
                    city: '',
                    district: '',
                    landmark: '',
                    locality: '',
                    pincode: '',
                    googleMapLink: '',

                    seatCapacity: '',
                    FloatingCapacity: '',

                    pricePerDay: '',
                    hourlyOption: '',
                    priceType: '',
                    advanceAmount: '',
                    refundPolicy: '',
                    paymentMethods: '',
                    Stage: '',
                    Parking: '',
                    PowerBackup: '',
                    inhouseCatering: '',
                    outsideCatering: '',
                    SoundSystem: '',
                    ChangingRoom: '',
                    Attachedwashroom: '',
                    alcoholAllowed: '',
                    DanceFloor: '',
                    ACAvailable: '',
                    DrinkingWater: '',
                    Washroom: '',
                    GuestRoom: '',
                    pricenonveg: '',




                    amenities: {
                        'Free WiFi': false,
                        'Free Breakfast': false,
                        'Room Service': false,
                        'Mountain View': false,
                        'Pool Access': false
                    }
                })
                setImages({ 1: null, 2: null, 3: null, 4: null })
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <Title align='left' font='outfit' title='Add Venue ' subTitle='Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience.' />
            {/* Upload Area For Images */}
            <p className='text-gray-800 mt-10'>Images</p>
            <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
                {Object.keys(images).map((key) => (
                    <label key={key} htmlFor={`roomImage${key}`}>
                        <img className='max-h-13 cursor-pointer opacity-80' src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" />
                        <input type="file" accept='image/*' id={`roomImage${key}`} hidden
                            onChange={e => setImages({ ...images, [key]: e.target.files[0] })} />
                    </label>
                ))}
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

                {/* Name */}
                <div>
                    <p className="text-gray-800"> Banquet Hall Name</p>
                    <input
                        type="text"
                        placeholder="Name"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.name}
                        onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                    />
                </div>

                <div>
                    <p className="text-gray-800"> Number of Halls</p>
                    <input
                        type="number"
                        placeholder=" Total Number of Halls"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.NumberofHalls}
                        onChange={(e) => setInputs({ ...inputs, NumberofHalls: e.target.value })}
                    />
                </div>



                <div>
                    <p className="text-gray-800"> Number of  Guest Room   </p>
                    <input
                        type="number"
                        placeholder=" Total Number of Guest Room"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.GuestRoom}
                        onChange={(e) => setInputs({ ...inputs, GuestRoom: e.target.value })}
                    />
                </div>

                {/* Select City
                    <div>
                        <p className="text-gray-800">Select City</p>
                        <select
                            className="border opacity-80 border-gray-300 mt-1 rounded p-2 w-full"
                            value={inputs.city}
                            onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
                        >
                            <option value="">Select City</option>
                            <option value="Sonamukhi">Sonamukhi</option>
                            <option value="Bankura">Bankura</option>
                        </select>
                    </div> */}


                <div>
                    <p className="text-gray-800 mb-1">Select City</p>
                    <Select
                        options={cityOptions}
                        value={cityOptions.find((c) => c.value === inputs.city) || null}
                        onChange={(selected) => setInputs({ ...inputs, city: selected?.value })}
                        placeholder="Type or Select City"
                        isClearable
                        isSearchable
                        className="w-full"
                    />
                </div>






                {/* Select District */}
                <div>
                    <p className="text-gray-800">Select District</p>
                    <select
                        className="border opacity-80 border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.district}
                        onChange={(e) => setInputs({ ...inputs, district: e.target.value })}
                    >
                        <option value="">Select District</option>
                        <option value="Bankura">Bankura</option>
                        <option value="Purulia">Purulia</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <p className="text-gray-800">Price <span className="text-sm text-gray-500">/night</span></p>
                    <input
                        type="number"
                        placeholder="0"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.pricePerNight}
                        onChange={(e) => setInputs({ ...inputs, pricePerNight: e.target.value })}
                    />
                </div>


                <div>
                    <p className="text-gray-800"> Veg Menu Price per plate </p>
                    <input
                        type="number"
                        placeholder=" Price per  veg plate"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.priceveg}
                        onChange={(e) => setInputs({ ...inputs, priceveg: e.target.value })}
                    />
                </div>



                <div>
                    <p className="text-gray-800">  Non-Veg Menu Price per plate</p>
                    <input
                        type="number"
                        placeholder=" Price per  non  plate"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.pricenonveg}
                        onChange={(e) => setInputs({ ...inputs, pricenonveg: e.target.value })}
                    />
                </div>




                {/* Landmark */}
                <div>
                    <p className="text-gray-800">Landmark</p>
                    <input
                        type="text"
                        placeholder="Venue Landmark"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.landmark}
                        onChange={(e) => setInputs({ ...inputs, landmark: e.target.value })}
                    />
                </div>

                {/* Locality */}
                <div>
                    <p className="text-gray-800">Locality</p>
                    <input
                        type="text"
                        placeholder="Venue Locality"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.locality}
                        onChange={(e) => setInputs({ ...inputs, locality: e.target.value })}
                    />
                </div>

                <div>
                    <p className="text-gray-800">Pincode</p>
                    <input
                        type="text"
                        placeholder="Venue Pincode"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.pincode}
                        onChange={(e) => setInputs({ ...inputs, pincode: e.target.value })}
                    />
                </div>


                {/* Custom Field Example (Optional) */}
                <div>
                    <p className="text-gray-800">Google Location Link</p>
                    <input
                        type="text"
                        placeholder="Paste Google Maps URL"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.googleMapLink}
                        onChange={(e) => setInputs({ ...inputs, googleMapLink: e.target.value })}
                    />
                </div>

            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

                {/* Min Capacity */}
                <div>
                    <p className="text-gray-800"> Seating Capacity</p>
                    <input
                        type="number"
                        placeholder="e.g. 50"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.seatCapacity}
                        onChange={(e) => setInputs({ ...inputs, seatCapacity: e.target.value })}
                    />
                </div>

                {/* Max Capacity */}
                <div>
                    <p className="text-gray-800"> Floating Capacity</p>
                    <input
                        type="number"
                        placeholder="e.g. 300"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.FloatingCapacity}
                        onChange={(e) => setInputs({ ...inputs, FloatingCapacity: e.target.value })}
                    />
                </div>

                {/* Price Per Day */}
                <div>
                    <p className="text-gray-800">Price Per Day</p>
                    <input
                        type="number"
                        placeholder="₹ per day"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.pricePerDay}
                        onChange={(e) => setInputs({ ...inputs, pricePerDay: e.target.value })}
                    />
                </div>

                {/* Hourly Option Available */}
                <div>
                    <p className="text-gray-800">Hourly Option Available?</p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.hourlyOption}
                        onChange={(e) => setInputs({ ...inputs, hourlyOption: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                {/* Price Type */}
                <div>
                    <p className="text-gray-800">Price Type</p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.priceType}
                        onChange={(e) => setInputs({ ...inputs, priceType: e.target.value })}
                    >
                        <option value="">Select Type</option>
                        <option value="Fixed">Fixed</option>
                        <option value="Negotiable">Negotiable</option>
                        <option value="Seasonal">Seasonal</option>
                    </select>
                </div>



                {/* Minimum Advance Required */}
                <div>
                    <p className="text-gray-800">Minimum Advance Required (₹)</p>
                    <input
                        type="number"
                        placeholder="e.g. 2000"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.advanceAmount}
                        onChange={(e) => setInputs({ ...inputs, advanceAmount: e.target.value })}
                    />
                </div>

                {/* Refund Policy */}
                <div className="sm:col-span-2 lg:col-span-3">
                    <p className="text-gray-800">Refund Policy / Cancellation Info</p>
                    <textarea
                        placeholder="Explain cancellation terms, refund timelines, etc."
                        className="border border-gray-300 mt-1 rounded p-2 w-full h-24 resize-none"
                        value={inputs.refundPolicy}
                        onChange={(e) => setInputs({ ...inputs, refundPolicy: e.target.value })}
                    />
                </div>

                {/* Payment Methods Accepted */}
                <div className="sm:col-span-2 lg:col-span-3">
                    <p className="text-gray-800">Payment Methods Accepted</p>
                    <input
                        type="text"
                        placeholder="e.g. Cash, UPI, Credit/Debit Card"
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.paymentMethods}
                        onChange={(e) => setInputs({ ...inputs, paymentMethods: e.target.value })}
                    />
                </div>

            </div>


            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">


                {/* Stage */}
                <div>
                    <p className="text-gray-800"> Stage Available ? </p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.Stage}
                        onChange={(e) => setInputs({ ...inputs, Stage: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                {/* Parking */}
                <div>
                    <p className="text-gray-800"> Parking Available ? </p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.Parking}
                        onChange={(e) => setInputs({ ...inputs, Parking: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>

                </div>





                <div>
                    <p className="text-gray-800"> AC / Non-AC Available ? </p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.ACAvailable}
                        onChange={(e) => setInputs({ ...inputs, ACAvailable: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Ac</option>
                        <option value="No"> non Ac</option>
                    </select>

                </div>
                {/* Generator / Power Backup */}
                <div>
                    <p className="text-gray-800"> Generator / Power Backup </p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.PowerBackup}
                        onChange={(e) => setInputs({ ...inputs, PowerBackup: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div>
                    <p className="text-gray-800"> Dance Floor </p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.DanceFloor}
                        onChange={(e) => setInputs({ ...inputs, DanceFloor: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>


                {/* In-house Catering */}
                <div>
                    <p className="text-gray-800">In-house Catering</p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.inhouseCatering}
                        onChange={(e) => setInputs({ ...inputs, inhouseCatering: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                {/* Outside Catering Allowed */}
                <div>
                    <p className="text-gray-800">Outside Catering Allowed</p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.outsideCatering}
                        onChange={(e) => setInputs({ ...inputs, outsideCatering: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div>
                    <p className="text-gray-800"> Drinking Water available </p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.DrinkingWater}
                        onChange={(e) => setInputs({ ...inputs, DrinkingWater: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>



                {/* Sound System */}
                <div>
                    <p className="text-gray-800"> Sound System </p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.SoundSystem}
                        onChange={(e) => setInputs({ ...inputs, SoundSystem: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                {/* Changing Room */}
                <div>
                    <p className="text-gray-800"> Changing room </p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.ChangingRoom}
                        onChange={(e) => setInputs({ ...inputs, ChangingRoom: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                {/* Attached Washroom */}
                <div>
                    <p className="text-gray-800">Attached Washroom</p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.Attachedwashroom}
                        onChange={(e) => setInputs({ ...inputs, Attachedwashroom: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div>
                    <p className="text-gray-800"> Washroom available</p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.Washroom}
                        onChange={(e) => setInputs({
                            ...inputs,
                            Washroom: e.target.value
                        })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>


                {/* alcohol Allowed */}
                <div>
                    <p className="text-gray-800">alcohol Allowed?</p>
                    <select
                        className="border border-gray-300 mt-1 rounded p-2 w-full"
                        value={inputs.alcoholAllowed}
                        onChange={(e) => setInputs({ ...inputs, alcoholAllowed: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

            </div>






            <p className='text-gray-800 mt-4'>Amenities</p>
            <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
                {Object.keys(inputs.amenities).map((amenity, index) => (
                    <div key={index}>
                        <input type='checkbox' id={`amenities${index + 1}`} checked={inputs.amenities[amenity]}
                            onChange={() => setInputs({ ...inputs, amenities: { ...inputs.amenities, [amenity]: !inputs.amenities[amenity] } })}
                        />
                        <label htmlFor={`amenities${index + 1}`}> {amenity} </label>
                    </div>
                ))}
            </div>

            <button className='bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer' disabled={loading}>
                {loading ? "Adding..." : "Add Room"}
            </button>
        </form>
    )
}
export default BanquetHalls;
