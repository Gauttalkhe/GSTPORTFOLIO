
import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from '../component/Navbar';
import Footer from "./Footer";

const tours = [
  {
    id: 1,
    name: "Boudhanath Beach Resort Tour",
    location: "6 Nights, Spain",
    price: "From $250",
    rating: 5,
    image: "https://picsum.photos/id/1018/400/300",
  },
  {
    id: 2,
    name: "Phu Chumphon Ocean Tour",
    location: "6 Days, Thailand",
    price: "From $480",
    rating: 4,
    image: "https://picsum.photos/id/1015/400/300",
  },
  {
    id: 3,
    name: "Golf Club Adventure",
    location: "6 Nights, USA",
    price: "From $310",
    rating: 4,
    image: "https://picsum.photos/id/1011/400/300",
  },
  {
    id: 4,
    name: "Heaven To Travel Vacations",
    location: "5 Nights, Spain",
    price: "From $220",
    rating: 5,
    image: "https://picsum.photos/id/1019/400/300",
  },
  {
    id: 5,
    name: "Romantic European Lights",
    location: "6 Nights, London",
    price: "From $500",
    rating: 4,
    image: "https://picsum.photos/id/1012/400/300",
  },
  {
    id: 6,
    name: "Unforgettable Island Escaping",
    location: "6 Nights, Bali",
    price: "From $360",
    rating: 5,
    image: "https://picsum.photos/id/1016/400/300",
  },
];

export default function  TourTypes() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;
  const totalPages = Math.ceil(tours.length / perPage);

  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-56 bg-gray-900">
        <img
          src="https://picsum.photos/id/1022/1200/400"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-3xl font-bold">Our Tours</h1>
          <p className="mt-2 text-gray-200">
            <span className="hover:underline cursor-pointer">Home</span> / Tours
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left: Tour Cards */}
        <div className="lg:col-span-3 space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">{tour.location}</p>
                  <h3 className="text-lg font-semibold">{tour.name}</h3>
                  <div className="flex items-center mt-2">
                    {"★".repeat(tour.rating)}
                    {"☆".repeat(5 - tour.rating)}
                  </div>
                  <p className="mt-2 text-green-600 font-semibold">{tour.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
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
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1
                    ? "bg-green-500 text-white"
                    : "hover:bg-gray-100"
                }`}
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

        {/* Right: Sidebar */}
        <div className="space-y-6">
          {/* Search */}
          <div className="bg-white p-4 rounded-xl shadow">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Enter Keyword"
                className="flex-grow px-3 py-2 outline-none"
              />
              <button className="bg-green-500 px-3 py-2 text-white">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Tour Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li>🎒 Backpacking (12)</li>
              <li>🏝️ Adventure (9)</li>
              <li>🏨 Hotel & Stay (15)</li>
              <li>🚗 Road Trips (7)</li>
              <li>✈️ Air Travel (4)</li>
            </ul>
          </div>

          {/* Last Minute Deals */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Last Minute Deals</h3>
            <ul className="space-y-3 text-sm">
              <li className="border-b pb-2">Rome City Break – $199</li>
              <li className="border-b pb-2">Phuket Beach Tour – $299</li>
              <li className="border-b pb-2">Swiss Alps Hiking – $399</li>
              <li>Paris City Lights – $250</li>
            </ul>
          </div>

          {/* Promo Banner */}
          <div className="bg-green-500 text-white p-6 rounded-xl text-center shadow">
            <h3 className="text-lg font-bold mb-2">Adventure Awaits!</h3>
            <p className="mb-4">Special discount for 2025 packages.</p>
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg shadow hover:bg-gray-200">
              Get Deals
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
