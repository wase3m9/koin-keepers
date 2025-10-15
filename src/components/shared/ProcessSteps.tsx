import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ProcessSteps = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Easy <span className="text-primary">3 Step</span> Process
          </h2>
          <p className="text-gray-600 mb-8">
            Don't let the complexities of cryptocurrency taxation overwhelm you
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Let us be your trusted partner in navigating the crypto tax landscape. Schedule your free consultation today and take the first step towards stress-free crypto tax compliance.
          </p>
        </motion.div>

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
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative w-24 h-24 rounded-full bg-black flex items-center justify-center border-4 border-primary"
                >
                  <div className="text-primary font-bold">
                    <div className="text-sm">STEP</div>
                    <div className="text-xl">{item.step}</div>
                  </div>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-block bg-primary text-black px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            GET STARTED TODAY TO STAY COMPLIANT AND SAFE →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};