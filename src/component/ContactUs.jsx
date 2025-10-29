
import { Phone, Mail, MapPin, User, MessageSquare } from "lucide-react";
import Navbar from "../component/Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset(); // clear form after submit
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-56 bg-gray-900">
        <img
          src="https://picsum.photos/id/1022/1200/400"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-3xl font-bold">Contact us</h1>
          <p className="mt-2 text-gray-200">
            <span className="hover:underline cursor-pointer">Home</span> / Tours
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="text-green-500" size={18} />
                <span>+1 (465) 48596-5799, +1 (465) 48596-5799</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="text-green-500" size={18} />
                <span>info@travon.com, info.travon@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="text-green-500" size={18} />
                <span>Burnside, MN 55337 Street, United States</span>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 md:h-full rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6046089.395551654!2d68.17664565000001!3d22.351114799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff6c07a7c0d%3A0x4b9d0d3f0bfb0b6!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Make An Appointment
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name */}
              {/* <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div> */}

              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z\s]+$/, // validation
                      message: "Name can only contain letters and spaces",
                    },
                  })}
                  onInput={(e) => {
                    // remove everything except letters & spaces
                    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                  }}
                  className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>


              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  })}
                  className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              {/* <div className="relative">
                <input
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                  className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div> */}

              <div className="relative">
                <input
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/, // ✅ must be exactly 10 digits
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                  onInput={(e) => {
                    // ✅ allow only digits (0–9)
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                  maxLength={10} // ✅ prevents more than 10 digits
                  className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Phone
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>


              {/* Query Topic */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Query Topic"
                  {...register("topic", { required: "Topic is required" })}
                  className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                {errors.topic && (
                  <p className="text-red-500 text-sm mt-1">{errors.topic.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="md:col-span-2 relative">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  className="w-full border rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                <MessageSquare className="absolute left-3 top-6 text-gray-400" size={18} />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
                >
                  SEND MESSAGE NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

