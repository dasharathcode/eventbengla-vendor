import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/Title'
import toast from 'react-hot-toast'
import { useAppContext } from '../../context/AppContext'

const AddVendor = () => {


  const { axios, getToken } = useAppContext()

  const [images, setImages] = useState({ 1: null, 2: null, 3: null, 4: null })
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    roomType: '',
    type: 'vendor', // ✅ Automatically set type as venue
    name: '',
    selectCity: '',
    district: '',
    landmark: '',
    locality: '',
    pincode: '',
    googleMapLink: '',
    experience: 0,
    travelChargesApplicable: '',
    travelChargesAmount: 0,
    serviceArea: '',
    vendorType: '', // Optional field for vendor type
    
    pricePerNight: 0,
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

      formData.append('selectCity', inputs.selectCity)
      formData.append('name', inputs.name)
      formData.append('type', 'vendor'); // ✅ Automatically set type as venue
      formData.append('pricePerNight', inputs.pricePerNight)
      formData.append('vendorType', inputs.vendorType || ''); // Optional field for vendor type
      formData.append('district', inputs.district || '');
      formData.append('landmark', inputs.landmark || '');
      formData.append('locality', inputs.locality || '');
      formData.append('pincode', inputs.pincode || '');
      formData.append('googleMapLink', inputs.googleMapLink || '');
      formData.append('experience', inputs.experience || 0)
      formData.append('travelChargesApplicable', inputs.travelChargesApplicable || 'No')
      formData.append('travelChargesAmount', inputs.travelChargesAmount || 0)
      formData.append('serviceArea', inputs.serviceArea || '')
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
          roomType: '',
          type: 'vendor',
          name: '',
          pricePerNight: 0,
          selectCity: '',
          district: '',
          landmark: '',
          locality: '',
          pincode: '',
          googleMapLink: '',
          experience: 0,
          travelChargesApplicable: '',
          travelChargesAmount: 0,
          serviceArea: '',


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
      <Title align='left' font='outfit' title='Add vendor ' subTitle='Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience.' />
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
          <p className="text-gray-800">Name</p>
          <input
            type="text"
            placeholder="Venue name"
            className="border border-gray-300 mt-1 rounded p-2 w-full"
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
        </div>
        {/* vendor type  */}
        <div>
          <p className="text-gray-800">Vendor Type</p>
          <select
            className="border border-gray-300 mt-1 rounded p-2 w-full"
            value={inputs.vendorType}
            onChange={(e) => setInputs({ ...inputs, vendorType: e.target.value })}
          >
            <option value="">Select Vendor Type</option>
            <option value="Photographer">Photographer</option>
            <option value="DJ">DJ</option>
            <option value="Decorator">Decorator</option>
            <option value="Makeup Artist">Makeup Artist</option>
            <option value="Catering">Catering</option>
            <option value="Band Baja">Band Baja</option>
            <option value="Wedding Planner">Wedding Planner</option>
          </select>
        </div>

        {/* Select City */}
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

        {/* Vendor Type */}
    

        {/* Years of Experience */}
        <div>
          <p className="text-gray-800">Years of Experience</p>
          <input
            type="number"
            placeholder="e.g. 5"
            className="border border-gray-300 mt-1 rounded p-2 w-full"
            value={inputs.experience}
            onChange={(e) => setInputs({ ...inputs, experience: e.target.value })}
          />
        </div>

        {/* Travel Charges */}
        <div>
          <p className="text-gray-800">Travel Charges</p>
          <select
            className="border border-gray-300 mt-1 rounded p-2 w-full mb-2"
            value={inputs.travelChargesApplicable}
            onChange={(e) => setInputs({ ...inputs, travelChargesApplicable: e.target.value })}
          >
            <option value="">Applicable?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {inputs.travelChargesApplicable === "Yes" && (
            <input
              type="number"
              placeholder="₹ Travel Charges"
              className="border border-gray-300 rounded p-2 w-full"
              value={inputs.travelChargesAmount}
              onChange={(e) => setInputs({ ...inputs, travelChargesAmount: e.target.value })}
            />
          )}
        </div>

        {/* Service Area (Multi-City) */}
        <div className="sm:col-span-2 lg:col-span-3">
          <p className="text-gray-800">Service Area (Cities Covered)</p>
          <input
            type="text"
            placeholder="e.g. Kolkata, Bankura, Durgapur"
            className="border border-gray-300 mt-1 rounded p-2 w-full"
            value={inputs.serviceArea}
            onChange={(e) => setInputs({ ...inputs, serviceArea: e.target.value })}
          />
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
export default AddVendor