import { Link } from "react-router-dom";

export const ProcessSteps = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Easy <span className="text-primary">3 Step</span> Process
          </h2>
          <p className="text-gray-600 mb-8">
            Don't let the complexities of cryptocurrency taxation overwhelm you
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Let us be your trusted partner in navigating the crypto tax landscape. Schedule your free consultation today and take the first step towards stress-free crypto tax compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              step: "01",
              title: "CONTACT",
              description: "Contact us today to book your free Crypto Tax review consultation."
            },
            {
              step: "02",
              title: "CONFIRM",
              description: "Our tax advisors will help you to complete new client onboarding process."
            },
            {
              step: "03",
              title: "COMPLETE",
              description: "Sit back & relax. Once approved we will submit the tax return online to HMRC."
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="hover-jiggle relative w-24 h-24 rounded-full bg-black flex items-center justify-center border-4 border-primary">
                  <div className="text-primary font-bold">
                    <div className="text-sm">STEP</div>
                    <div className="text-xl">{item.step}</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact" className="animated-button dark">
            <span>GET STARTED TODAY TO STAY COMPLIANT AND SAFE →</span>
            <span></span>
          </Link>
        </div>
      </div>
    </section>
  );
};