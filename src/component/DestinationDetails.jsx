import { useLocation, useNavigate } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from "./Footer";

export default function DestinationDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { trip, traveler } = location.state || {}; // get data from navigate

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Trip not found.</p>
        <button onClick={() => navigate(-1)} className="ml-4 px-3 py-1 bg-green-500 text-white rounded">Go Back</button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="relative h-64 bg-gray-800">
          <img
            src="https://picsum.photos/id/1018/1200/400"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl font-bold">Destination Details</h1>
            <p className="mt-2 text-gray-200">
              <span className="hover:underline cursor-pointer">Home</span> / Destination
            </p>
          </div>
        </div>
      <div className="min-h-screen bg-white p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{trip.destination}</h1>
        <p className="text-gray-600 mb-2">By {traveler.name} ({traveler.country})</p>
        <p className="text-gray-500 mb-2">{trip.startDate} - {trip.endDate}</p>
        <p className="text-gray-700 mb-2">Activities: {trip.activities.join(", ")}</p>
        <img
          src={`https://picsum.photos/seed/${trip.tripId}/800/400`}
          alt={trip.destination}
          className="w-full h-64 object-cover rounded-lg"
        />
        <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Go Back</button>
      </div>
      <Footer />
    </>
  );
}
