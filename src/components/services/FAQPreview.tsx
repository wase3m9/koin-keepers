
import { Link } from "react-router-dom";

export const FAQPreview = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
        <p className="text-gray-600 mb-8">Check out our frequently asked questions or contact our support team.</p>
        <div className="flex justify-center space-x-4">
          <Link to="/faq" className="bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
            View FAQ
          </Link>
          <Link to="/contact" className="bg-black text-primary px-6 py-2 rounded-md hover:bg-black/90 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
