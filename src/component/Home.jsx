
import React, { useEffect, useState } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import Navbar from '../component/Navbar';
import cityImg from "../assets/city.jpg"; 
import travelerImg from "../assets/traveler.jpg";
import travelImg from "../assets/traveler1.jpg";
import Footer from './Footer';

const images = [img1, img2, img3];


const destinations = [
  {
    id: 1,
    name: "Switzerland",
    trips: "6+ Trips",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 2,
    name: "Beach Sunset",
    trips: "4+ Trips",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 3,
    name: "Romania",
    trips: "5+ Trips",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: 4,
    name: "Paris",
    trips: "3+ Trips",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
];


const features = [
  { icon: "📅", title: "Set Travel Plan" },
  { icon: "🧍‍♂️", title: "Best Guide" },
  { icon: "🏨", title: "Luxury Hotel" },
  { icon: "🌍", title: "Explore Around" },
  { icon: "🎧", title: "Support 24/7" },
  { icon: "📄", title: "Easy Booking" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModal, setActiveModal] = useState(null); // 'flights' | 'hotels' | null

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="relative h-150 w-full bg-cover bg-center brightness-90 transition-all duration-1000 overflow-y-auto"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-200/80 to-cyan-100/70 z-0"></div>

        {/* Content & Modals */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <p className="text-lg sm:text-xl text-green-800 font-semibold">Relax & Enjoy</p>
          <h1 className="text-5xl xl:text-5xl md:text-5xl font-bold text-gray-800 mb-4">
            Start Your Travel <br className="hidden sm:block" /> With Travon
          </h1>
          <p className="max-w-xl text-gray-700 mb-6 text-base sm:text-lg">
            Fine Hotel And Ticket With Best Experience.
          </p>

          {/* Buttons */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold shadow-md mb-4">
            Learn More
          </button>
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveModal('hotels')}
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
            >
              Hotels
            </button>
            <button
              onClick={() => setActiveModal('flights')}
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            >
              Flights
            </button>
          </div>

          {/* Modal */}
          {activeModal === 'flights' && (
            <div className="w-full max-w-5xl bg-blue-700 p-6 rounded-md text-white">
              <div className="flex justify-between mb-4">
                <h2 className="text-lg font-bold">FLIGHTS</h2>
                <button onClick={() => setActiveModal(null)} className="text-white text-xl">&times;</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm mb-1">Flying From</label>
                  <input type="text" className="w-full px-3 py-2 rounded text-black" placeholder="e.g. Nasik" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Flying To</label>
                  <input type="text" className="w-full px-3 py-2 rounded text-black" placeholder="e.g. Delhi" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Depart</label>
                  <input type="date" className="w-full px-3 py-2 rounded text-black" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Return</label>
                  <input type="date" className="w-full px-3 py-2 rounded text-black" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Travelers</label>
                  <select className="w-full px-3 py-2 rounded text-black">
                    <option>1 Passenger</option>
                    <option>2 Passengers</option>
                    <option>3 Passengers</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeModal === 'hotels' && (
            <div className="w-full max-w-5xl bg-green-600 p-6 rounded-md text-white">
              <div className="flex justify-between mb-4">
                <h2 className="text-lg font-bold">HOTELS</h2>
                <button onClick={() => setActiveModal(null)} className="text-white text-xl">&times;</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm mb-1">Hotel or City</label>
                  <input type="text" className="w-full px-3 py-2 rounded text-black" placeholder="e.g. Mumbai" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Check-In</label>
                  <input type="date" className="w-full px-3 py-2 rounded text-black" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Check-Out</label>
                  <input type="date" className="w-full px-3 py-2 rounded text-black" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Travelers</label>
                  <select className="w-full px-3 py-2 rounded text-black">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800">Search</button>
                </div>
              </div>
            </div>
          )}
        </div>

   

      </div>
       {/* new desgin */}

    <div>
       <section className="flex flex-col md:flex-row items-center gap-10 px-8 py-16 max-w-7xl mx-auto pl-35">
      {/* Left Images */}
      <div className="relative flex-shrink-0">
        <img
          src={cityImg}
          alt="City"
          className="rounded-lg shadow-lg w-100 h-100 object-cover"
        />
        <img
          src={travelerImg}
          alt="Traveler"
          className="absolute -bottom-8 -right-8 rounded-lg shadow-lg w-56 h-64 object-cover border-4 border-white"
        />
      </div>

      {/* Right Text */}
      <div className="flex flex-col gap-6 pl-20">
        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
          We Create Journeys Worth <br />
          Taking For The Traveler
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-lg">
          Progressively impact multidisciplinary leadership skills via
          e-business leadership skills. Holistically repurpose multifunctional
          data before turnkey information. Globally restore client-focused
          potentialities before scalable core competencies.
        </p>

        {/* Features */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <span className="text-green-500">✔</span> 24 Years Experience
            </h3>
            <p className="text-gray-500 text-sm">
              Holisticly procrastinate real-time solutions for services.
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <span className="text-green-500">✔</span> Best Travel Agents
            </h3>
            <p className="text-gray-500 text-sm">
              Holisticly procrastinate real-time solutions for services.
            </p>
          </div>
        </div>

        {/* Discover Button */}
        <div className="flex items-center gap-4 mt-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
            DISCOVER MORE
          </button>
          <div className="flex items-center -space-x-3">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="user"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="user"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
          <span className="text-green-600 font-semibold">500k+ Happy Customer</span>
        </div>
      </div>
    </section>
    </div>

    {/* card section  */}

     <section className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Popular Destinations
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-10 max-w-7xl mx-auto">
        {/* Left Text */}
        <div className="lg:w-1/3 space-y-4">
          <p className="text-green-600 uppercase tracking-wide font-semibold">
            Locations
          </p>
          <h3 className="text-2xl font-bold text-gray-900">Switzerland</h3>
          <p className="text-gray-600">
            Globally drive pandemic e-business via functionalized e-business.
            Rapidiously simplify covalent leadership whereas distributed
            results.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="w-10 h-10 rounded-full border border-green-500 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition">
              ←
            </button>
            <button className="w-10 h-10 rounded-full border border-green-500 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition">
              →
            </button>
          </div>
        </div>

        {/* Right Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="relative rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                <span className="text-sm">{dest.name}</span>
                <span className="text-xs mb-4">{dest.trips}</span>
                <button className="px-4 py-2 border border-white rounded-lg text-sm hover:bg-white hover:text-black transition">
                  EXPLORE ALL
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* new section */}
    <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <p className="text-green-600 italic font-medium mb-2">Why Choose Us</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Get The Best Travel Experience
          </h2>
          <p className="text-gray-600 mb-8 text-8ml">
            Professionally engineer world-class leadership skills after
            end-to-end growth strategies. Assertively create innovative schemas
            through installed base potentialities.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-green-500 text-2xl text-green-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-sm">
                    Distinctively impact client-centered ideas via future-proof
                    paradigms.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={travelImg}
            alt="Travel Experience"
            className="max-w-md rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>

    <Footer/>
    </>

  );
};

export default Home;
