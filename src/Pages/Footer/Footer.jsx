import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col items-start  md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Contact Information Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="flex items-center mb-3">
            <a
              href="https://www.google.com/maps/place/Byanna+Garden,+Lingarajapuram,+Bengaluru,+Karnataka+560043"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaMapMarkerAlt className="text-orange-500 mr-2" size={40} />

              <span className="hover:text-orange-500">
                {" "}
                Dharani Enterprises #113, 2nd Floor, Byanna Garden,
                Lingarajapuram, St. Thomas Town post, Bangalore-560084
              </span>
            </a>
          </p>
          <p className="flex items-center mb-3">
            <a
              href="mailto:dharanienterprises.blr@gmail.com"
              className="flex items-center"
            >
              <FaEnvelope className="text-orange-500 mr-3" />
              <span className="hover:text-orange-500">
                {" "}
                dharanienterprises.blr@gmail.com
              </span>
            </a>
          </p>
          <p className="flex items-center mb-3">
            <a href="tel:+919480012696" className="flex items-center">
              <FaPhone className="text-orange-500 mr-3 " />
              <span className="hover:text-orange-500"> +91 9480012696</span>
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-orange-500 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-orange-500 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-orange-500 transition"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Additional Links or About Section (optional) */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-white mb-4">About Us</h2>
          <p className="text-gray-400 leading-relaxed">
            We specialize in home appliance repairs with certified experts. Our
            services ensure quality and satisfaction with every repair.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm">
        <p>
          Copyright © {new Date().getFullYear()} by{" "}
          <span className="text-yellow-400">DHARANI ENTERPRISES.</span> All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
