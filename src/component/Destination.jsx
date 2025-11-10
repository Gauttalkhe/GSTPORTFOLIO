import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // <-- added
import Navbar from '../component/Navbar';
import Footer from "./Footer";

export default function DestinationPage() {
  const [destinations, setDestinations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;
  const totalPages = Math.ceil(destinations.length / perPage);
  const navigate = useNavigate(); // <-- added

  // Pagination
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentDestinations = destinations.slice(startIndex, endIndex);

  useEffect(() => {
    const apidemo = async () => {
      try {
        const res = await axios.get("https://mocki.io/v1/d9ec216a-8e6b-48b4-8ffd-b23b76035e40")
        setDestinations(res.data.travelers || []);
      } catch (error) {
        console.log(error);
      }
    }
    apidemo();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-64 bg-gray-800">
          <img
            src="https://picsum.photos/id/1018/1200/400"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl font-bold">Destination</h1>
            <p className="mt-2 text-gray-200">
              <span className="hover:underline cursor-pointer">Home</span> / Destination
            </p>
          </div>
        </div>

        {/* Destination Grid */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing {startIndex + 1}–{Math.min(endIndex, destinations.length)} of {destinations.length} destinations
            </p>
            <select className="border rounded-lg px-3 py-2">
              <option>Default Sorting</option>
              <option>Most Popular</option>
              <option>Newest</option>
            </select>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentDestinations.map((traveler) =>
              traveler.trips.map((trip) => (
                <div
                  key={trip.tripId}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/destination/${trip.tripId}`, { state: { trip, traveler } })} // <-- added
                >
                  <img
                    src={`https://picsum.photos/seed/${trip.tripId}/400/300`}
                    alt={trip.destination}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{trip.destination}</h3>
                    <p className="text-gray-500 text-sm">{traveler.name} ({traveler.country})</p>
                    <p className="text-gray-400 text-sm">{trip.startDate} - {trip.endDate}</p>
                    <p className="text-green-600 text-sm">
                      Activities: {trip.activities.join(", ")}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="px-3 py-1 border rounded hover:bg-gray-100"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-green-500 text-white" : "hover:bg-gray-100"}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="px-3 py-1 border rounded hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}



