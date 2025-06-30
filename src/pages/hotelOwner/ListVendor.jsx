import React, { useEffect } from 'react';
import Title from '../../components/Title';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ListVendor = () => {
  const { axios, getToken, user } = useAppContext();
  const [rooms, setRooms] = React.useState([]);

  // ✅ Fetch only vendor-type rooms
  const fetchRooms = async () => {
    try {
      const { data } = await axios.get('/api/rooms/owner?type=vendor', {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setRooms(data.rooms);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ✅ Toggle availability (active/inactive)
  const toggleAvailability = async (roomId) => {
    try {
      const { data } = await axios.post(
        '/api/rooms/toggle-availability',
        { roomId },
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );
      if (data.success) {
        toast.success(data.message);
        fetchRooms(); // refresh after toggle
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchRooms();
    }
  }, [user]);

  return (
    <div className="px-6 py-10">
      <Title
        align="left"
        font="outfit"
        title="Vendor Listings"
        subTitle="View, edit, or manage all listed vendor services. Keep the vendor details up-to-date for the best customer experience."
      />

      <p className="text-gray-600 font-medium text-lg mt-8">Total Vendors: {rooms.length}</p>

      <div className="w-full max-w-6xl mt-4 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-6 py-4">Image</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4 max-sm:hidden">Facility</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4 text-center">Available</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700">
            {rooms.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition duration-200">
                <td className="px-6 py-4">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="h-16 w-24 object-cover rounded-md border border-gray-300"
                  />
                </td>
                <td className="px-6 py-4 font-medium">{item.roomType}</td>
                <td className="px-6 py-4 max-sm:hidden">
                  {item.amenities?.join(', ') || 'N/A'}
                </td>
                <td className="px-6 py-4 text-gray-600 font-semibold">
                  ₹{item.pricePerNight}
                </td>
                <td className="px-6 py-4 text-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      onChange={() => toggleAvailability(item._id)}
                      checked={item.isAvailable}
                    />
                    <div className="relative w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors duration-300">
                      <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-5"></span>
                    </div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default ListVendor;
