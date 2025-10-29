import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-12 pb-6 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-500 p-2 rounded-full"></div>
            <h2 className="text-2xl font-bold">
              Trav<span className="text-green-500">on</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-6 mb-4">
            Globally communicate adaptive e-markets & timely manufactured
            product. Objectively exploit collaborative relationships vis-a-vis
            competitive manufactured.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1e293b] hover:bg-green-500">
              <FaFacebookF />
            </a>
            <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1e293b] hover:bg-green-500">
              <FaTwitter />
            </a>
            <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1e293b] hover:bg-green-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1e293b] hover:bg-green-500">
              <FaInstagram />
            </a>
            <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1e293b] hover:bg-green-500">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 relative">
            Quick Links
            <span className="absolute left-0 bottom-[-6px] w-10 h-[2px] bg-green-500"></span>
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-green-500">About Us</a></li>
            <li><a href="#" className="hover:text-green-500">Tour</a></li>
            <li><a href="#" className="hover:text-green-500">Destinations</a></li>
            <li><a href="#" className="hover:text-green-500">Blog</a></li>
            <li><a href="#" className="hover:text-green-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 relative">
            Contact Us
            <span className="absolute left-0 bottom-[-6px] w-10 h-[2px] bg-green-500"></span>
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <FaLocationDot className="text-green-500 mt-1" />
              5807 W 63rd St, Chicago, IL 60638, United States
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-green-500" /> +1 123 456 7890
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-green-500" /> +1 098 765 4321
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" /> info@travon.com
            </li>
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-lg font-semibold mb-4 relative">
            Gallery Showcase
            <span className="absolute left-0 bottom-[-6px] w-10 h-[2px] bg-green-500"></span>
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <img src="https://picsum.photos/80/80?1" alt="gallery" className="rounded-md" />
            <img src="https://picsum.photos/80/80?2" alt="gallery" className="rounded-md" />
            <img src="https://picsum.photos/80/80?3" alt="gallery" className="rounded-md" />
            <img src="https://picsum.photos/80/80?4" alt="gallery" className="rounded-md" />
            <img src="https://picsum.photos/80/80?5" alt="gallery" className="rounded-md" />
            <img src="https://picsum.photos/80/80?6" alt="gallery" className="rounded-md" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>Copyright © 2023 <span className="text-green-500">Travon</span>. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-green-500">Terms of Use</a>
          <a href="#" className="hover:text-green-500">Privacy Environmental Policy</a>
        </div>
      </div>
    </footer>
  );
}
