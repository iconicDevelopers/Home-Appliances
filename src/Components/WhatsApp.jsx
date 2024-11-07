import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div>
      {" "}
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/919480012696"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg transition transform hover:scale-105 z-50"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default WhatsApp;
