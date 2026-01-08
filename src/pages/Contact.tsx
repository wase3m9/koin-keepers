import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageBreadcrumbs } from "@/components/shared/PageBreadcrumbs";
import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact KoinKeepers",
    "description": "Get in touch with KoinKeepers for cryptocurrency tax consultation and services. We're here to help with all your crypto tax needs.",
    "url": "https://koin-keepers.co.uk/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "KoinKeepers",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44 20 7118 9799",
        "email": "info@koin-keepers.co.uk",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "English"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://koin-keepers.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://koin-keepers.co.uk/contact"
      }
    ]
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@cloud-keepers.co.uk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });
      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    { icon: Clock, title: "Office Hours", lines: ["Monday - Friday: 9:00 AM - 6:00 PM GMT", "Saturday: 10:00 AM - 2:00 PM GMT"] },
    { icon: Mail, title: "Email", lines: ["info@cloud-keepers.co.uk"] },
    { icon: Phone, title: "Phone", lines: ["+44 207 118 9799"] },
    { icon: MapPin, title: "Location", lines: ["124 City Road", "London, EC1V 2NX"] }
  ];

  const benefits = [
    "Expert crypto tax consultants",
    "Quick response time",
    "Personalized service",
    "Competitive pricing"
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - KoinKeepers Crypto Tax Experts</title>
        <meta name="description" content="Get in touch with our crypto tax experts. We're here to help you with all your cryptocurrency tax needs." />
        <meta name="keywords" content="crypto tax contact, cryptocurrency tax help, crypto tax consultation, crypto tax support" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://koin-keepers.co.uk/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koin-keepers.co.uk/contact" />
        <meta property="og:title" content="Contact Us - KoinKeepers Crypto Tax Experts" />
        <meta property="og:description" content="Get in touch with our crypto tax experts. We're here to help you with all your cryptocurrency tax needs." />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://koin-keepers.co.uk/contact" />
        <meta name="twitter:title" content="Contact Us - KoinKeepers Crypto Tax Experts" />
        <meta name="twitter:description" content="Get in touch with our crypto tax experts. We're here to help you with all your cryptocurrency tax needs." />
        <meta name="twitter:image" content="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <PageBreadcrumbs items={[{ label: "Contact" }]} />
      <div className="min-h-screen bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-primary rounded-full mb-4">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Have questions about your crypto taxes? We're here to help! Fill out the form below and our team will get back to you shortly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Your name" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20" 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
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
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20" 
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    placeholder="How can we help?" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20" 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="Tell us more about your needs..." 
                    className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20" 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-secondary hover:bg-primary/90 font-semibold py-6" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-white mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white text-sm">{info.title}</h3>
                        {info.lines.map((line, i) => (
                          <p key={i} className="text-gray-400 text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
