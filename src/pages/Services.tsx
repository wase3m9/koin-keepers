import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - CoinKeepers Tax Services</title>
        <meta name="description" content="Comprehensive cryptocurrency tax services including tax preparation, planning, and consultation." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
          <p className="text-gray-600 mb-6">
            At CoinKeepers, we offer a range of services to help you navigate the complexities of cryptocurrency taxation. Our team of experts is here to assist you with everything from tax preparation to strategic planning.
          </p>
          <ul className="space-y-4">
            <li className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-semibold">Tax Preparation</h2>
              <p className="text-gray-600">We provide comprehensive tax preparation services tailored to your cryptocurrency transactions.</p>
            </li>
            <li className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-semibold">Tax Consultation</h2>
              <p className="text-gray-600">Our consultants will guide you through the tax implications of your crypto investments.</p>
            </li>
            <li className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-semibold">Tax Planning</h2>
              <p className="text-gray-600">We help you develop a tax strategy that minimizes your liabilities and maximizes your returns.</p>
            </li>
            <li className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-semibold">Audit Support</h2>
              <p className="text-gray-600">In the event of an audit, our team will provide the necessary support and documentation.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;
