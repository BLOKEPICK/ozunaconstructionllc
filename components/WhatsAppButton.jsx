import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/16149840351"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-300"
    >
      <FaWhatsapp className="text-xl" />
      Chat on WhatsApp
    </a>
  );
}
