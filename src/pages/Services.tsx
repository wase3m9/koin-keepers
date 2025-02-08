
import { Helmet } from 'react-helmet-async';
import { Calculator, Shield, Clock, DollarSign, Receipt, ShieldCheck, LineChart, HeadphonesIcon, FileText, Wallet, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Tax Preparation",
      description: "Comprehensive cryptocurrency tax preparation services tailored to your portfolio.",
      icon: Receipt
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning to optimize your crypto investments and minimize liabilities.",
      icon: Calculator
    },
    {
      title: "Compliance Services",
      description: "Stay compliant with all cryptocurrency tax regulations and requirements.",
      icon: ShieldCheck
    },
    {
      title: "Transaction Analysis",
      description: "Detailed analysis of your cryptocurrency transactions for accurate reporting.",
      icon: LineChart
    },
    {
      title: "Payment Solutions",
      description: "Flexible payment options for all our cryptocurrency tax services.",
      icon: DollarSign
    },
    {
      title: "Technical Support",
      description: "Expert technical support for all your cryptocurrency tax needs.",
      icon: HeadphonesIcon
    }
  ];

  const features = [
    {
      title: "Real-Time Updates",
      description: "Get instant updates on your crypto tax calculations as market values change.",
      icon: <Clock className="h-6 w-6 text-primary" />
    },
    {
      title: "Audit Support",
      description: "Full documentation and support in case of tax authority audits.",
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      title: "Multi-Wallet Support",
      description: "Connect and track multiple crypto wallets for comprehensive reporting.",
      icon: <Wallet className="h-6 w-6 text-primary" />
    },
    {
      title: "Expert Consultation",
      description: "One-on-one sessions with crypto tax experts for personalized advice.",
      icon: <Users className="h-6 w-6 text-primary" />
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "£299",
      description: "Perfect for beginners",
      features: [
        "Up to 100 transactions",
        "Basic tax reports",
        "Email support",
        "Annual filing"
      ]
    },
    {
      name: "Professional",
      price: "£399",
      description: "For active traders",
      features: [
        "Up to 1000 transactions",
        "Advanced tax reports",
        "Priority support",
        "Quarterly filing",
        "Audit assistance"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For institutions",
      features: [
        "Unlimited transactions",
        "Custom reports",
        "24/7 support",
        "Monthly filing",
        "Full audit support",
        "Dedicated manager"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - CoinKeepers Tax Services</title>
        <meta name="description" content="Comprehensive cryptocurrency tax services including tax preparation, planning, and consultation." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <div className="py-20 bg-[#FEF7CD]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions for all your cryptocurrency tax needs
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="hover-jiggle"
                >
                  <Card className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <CardHeader className="space-y-4">
                      <div className="mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                          <service.icon className="h-7 w-7 text-black transform rotate-6 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    index === 1 ? 'border-2 border-primary' : 'border border-gray-200'
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-center my-4">{plan.price}</div>
                    <CardDescription className="text-center mb-4">{plan.description}</CardDescription>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <ShieldCheck className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps Section */}
        <ProcessSteps />

        {/* Features Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="hover-jiggle"
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-center text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
            <p className="text-gray-600 mb-8">Check out our frequently asked questions or contact our support team.</p>
            <div className="flex justify-center space-x-4">
              <a href="/faq" className="bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                View FAQ
              </a>
              <a href="/contact" className="bg-black text-primary px-6 py-2 rounded-md hover:bg-black/90 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

