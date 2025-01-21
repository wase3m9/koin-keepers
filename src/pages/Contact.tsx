import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - CoinKeepers Tax Services</title>
        <meta name="description" content="Get in touch with our crypto tax experts. We're here to help you with all your cryptocurrency tax needs." />
        <meta name="keywords" content="crypto tax contact, cryptocurrency tax help, crypto tax consultation, crypto tax support" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-gray-600">
                Have questions about your crypto taxes? We're here to help! Fill out the form below and our team will get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your needs..."
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM GMT</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Email</h3>
                  <p className="text-gray-600">hello@coin-keepers.co.uk</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Phone</h3>
                  <p className="text-gray-600">+44 207 118 9799</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Location</h3>
                  <p className="text-gray-600">124 City Road</p>
                  <p className="text-gray-600">London, EC1V 2NX</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
              <ul className="space-y-4 text-gray-600">
                <li>✓ Expert crypto tax consultants</li>
                <li>✓ Quick response time</li>
                <li>✓ Personalized service</li>
                <li>✓ Competitive pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;