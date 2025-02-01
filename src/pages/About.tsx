import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - KoinKeepers</title>
        <meta name="description" content="Learn about our expert team and mission in cryptocurrency tax services." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At KoinKeepers, we're dedicated to simplifying cryptocurrency tax compliance. Our mission is to provide expert guidance and innovative solutions that make crypto tax reporting accessible and stress-free for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Crypto Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the experts who are revolutionising cryptocurrency tax compliance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="/lovable-uploads/2391ca69-3322-4648-a703-f3f530939d91.png"
                  alt="Waseem Choudhary"
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Waseem Choudhary</h3>
                <p className="text-primary font-medium mb-2">Crypto Tax Director</p>
                <p className="text-gray-600">Specialising in DeFi and NFT taxation</p>
              </div>
              <div className="text-center">
                <img
                  src="/lovable-uploads/2767dcee-eac0-446e-8d21-f4fd14a728d7.png"
                  alt="Michael Chen"
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
                <p className="text-primary font-medium mb-2">Tax Strategy Lead</p>
                <p className="text-gray-600">Expert in crypto portfolio optimisation</p>
              </div>
              <div className="text-center">
                <img
                  src="/lovable-uploads/2ac69fff-6946-4ab1-8910-40c3a47e06b2.png"
                  alt="Emma Williams"
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Emma Williams</h3>
                <p className="text-primary font-medium mb-2">Compliance Director</p>
                <p className="text-gray-600">International tax compliance expertise</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and commitment to your success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service, ensuring the highest quality tax solutions for our clients.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We embrace innovative technologies and approaches to provide cutting-edge crypto tax solutions.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of integrity and transparency in all our client relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to simplify your crypto taxes?</h2>
            <Button 
              asChild 
              size="lg"
              className="bg-black text-yellow-400 hover:bg-black/90 rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <Link to="/contact">
                GET STARTED TODAY <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;