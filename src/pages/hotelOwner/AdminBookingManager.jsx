import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
const AdminBookingManager = () => {
  const { axios, getToken } = useAppContext();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/admin/bookings/all", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) setBookings(data.dashboardData.bookings);
    } catch (error) {
      toast.error("Failed to fetch your bookings");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (bookingId, newStatus) => {
    try {
      const { data } = await axios.put(
        `/api/admin/status/${bookingId}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );
      if (data.success) {
        toast.success("Booking status updated");
        fetchBookings(); // refresh after update
      }
    } catch (error) {
      toast.error("Status update failed");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) return <p className="p-6 text-lg font-semibold text-center">Loading your bookings...</p>;

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">🏨 My Room Bookings</h2>

      <div className="w-full overflow-x-auto rounded-xl shadow ring-1 ring-gray-200 bg-white">
        {bookings.length === 0 ? (
          <p className="text-center p-6 text-gray-500">No bookings found for your hotel rooms.</p>
        ) : (
          <table className="min-w-[1200px] w-full table-auto border-collapse text-sm">
            <thead className="bg-gray-50 text-left text-gray-700 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-5 py-3 border-b">User</th>
                <th className="px-5 py-3 border-b">Room</th>
                <th className="px-5 py-3 border-b">Guests</th>
                <th className="px-5 py-3 border-b">Check-In</th>
                <th className="px-5 py-3 border-b">Check-Out</th>
                <th className="px-5 py-3 border-b">Price</th>
                <th className="px-5 py-3 border-b">Payment</th>
                <th className="px-5 py-3 border-b">Status</th>
                <th className="px-5 py-3 border-b">Update</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {bookings.map((b, i) => (
                <tr key={b._id} className={`hover:bg-gray-50 ${i % 2 === 1 ? 'bg-gray-50' : ''}`}>
                  <td className="px-5 py-4 border-b">
                    <div className="font-medium">{b.user?.username}</div>
                    <div className="text-xs text-gray-500">{b.user?.email}</div>
                  </td>
                  <td className="px-5 py-4 border-b">{b.room?.roomType || "N/A"}</td>
                  <td className="px-5 py-4 border-b text-center">{b.guests}</td>
                  <td className="px-5 py-4 border-b">{new Date(b.checkInDate).toLocaleDateString()}</td>
                  <td className="px-5 py-4 border-b">{new Date(b.checkOutDate).toLocaleDateString()}</td>
                  <td className="px-5 py-4 border-b">₹{b.totalPrice}</td>
                  <td className="px-5 py-4 border-b">{b.paymentMethod}</td>
                  <td className="px-5 py-4 border-b">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${b.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : b.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"}`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 border-b">
                    <select
                      value={b.status}
                      onChange={(e) => updateStatus(b._id, e.target.value)}
                      className="px-2 py-1.5 text-sm border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirm</option>
                      <option value="cancelled">Cancel</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminBookingManager;
