import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Trophy, Clock, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageBreadcrumbs } from "@/components/shared/PageBreadcrumbs";
import { Partners } from "@/components/home/Partners";
import { motion } from "framer-motion";

const About = () => {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About KoinKeepers",
    "description": "Learn about KoinKeepers's journey, our expert team, and our mission to simplify cryptocurrency tax compliance for traders and investors worldwide.",
    "url": "https://koin-keepers.co.uk/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "KoinKeepers",
      "foundingDate": "2020",
      "description": "Leading cryptocurrency tax specialists providing expert consultation, tax preparation, and HMRC compliance services across the UK",
      "numberOfEmployees": "10-50",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "124 City Road",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "EC1V 2NX",
        "addressCountry": "United Kingdom"
      },
      "founder": {
        "@type": "Person",
        "name": "KoinKeepers Founding Team"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://koin-keepers.co.uk"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://koin-keepers.co.uk/about"
    }]
  };

  const stats = [
    { icon: Users, value: "150+", label: "Happy Clients" },
    { icon: Trophy, value: "98%", label: "Success Rate" },
    { icon: Clock, value: "4+ Years", label: "Experience" },
    { icon: Building, value: "UK", label: "Based & Focused" }
  ];

  const team = [
    {
      name: "Waseem",
      role: "Crypto Tax Director",
      bio: "Certified tax specialist with focus on DeFi and NFTs",
      image: "/lovable-uploads/c5b6d5a2-8b1a-4265-a584-fe5fba4c2067.png"
    },
    {
      name: "Michael",
      role: "Chief Technology Officer",
      bio: "Blockchain developer and cryptocurrency expert",
      image: "/lovable-uploads/2391ca69-3322-4648-a703-f3f530939d91.png"
    },
    {
      name: "Emma",
      role: "Head of Tax Advisory",
      bio: "Certified tax specialist with focus on DeFi and NFTs",
      image: "/lovable-uploads/df9ae568-0265-4307-ac47-b9028e215441.png"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About KoinKeepers - Your Trusted Cryptocurrency Tax Partner</title>
        <meta name="description" content="Learn about KoinKeepers's journey, our expert team, and our mission to simplify cryptocurrency tax compliance for traders and investors worldwide." />
        <meta name="keywords" content="crypto tax experts, cryptocurrency accounting, blockchain tax specialists, crypto tax company, about koinkeepers" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://koin-keepers.co.uk/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koin-keepers.co.uk/about" />
        <meta property="og:title" content="About KoinKeepers - Your Trusted Cryptocurrency Tax Partner" />
        <meta property="og:description" content="Learn about KoinKeepers's journey, our expert team, and our mission to simplify cryptocurrency tax compliance for traders and investors worldwide." />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://koin-keepers.co.uk/about" />
        <meta property="twitter:title" content="About KoinKeepers - Your Trusted Cryptocurrency Tax Partner" />
        <meta property="twitter:description" content="Learn about KoinKeepers's journey, our expert team, and our mission to simplify cryptocurrency tax compliance for traders and investors worldwide." />
        <meta property="twitter:image" content="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <PageBreadcrumbs items={[{ label: "About" }]} />
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 bg-secondary overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-primary rounded-full mb-4">
                About Us
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                About KoinKeepers
              </h1>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                Since 2022, we've been helping UK traders and investors navigate the complex world of cryptocurrency taxation from our London headquarters.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-secondary border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
                >
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</h2>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Mission</span>
                <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-6">
                  Simplifying Crypto Tax for Everyone
                </h2>
                <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                  At KoinKeepers, operating from our London office, we believe that cryptocurrency taxation shouldn't be a barrier to investment and innovation. Our mission is to make crypto tax compliance simple, accurate, and stress-free for UK investors and traders.
                </p>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  We combine deep expertise in both UK cryptocurrency regulations and taxation with cutting-edge technology to provide solutions that save you time, money, and peace of mind.
                </p>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "UK Expertise", desc: "Certified UK tax professionals with deep crypto knowledge" },
                  { title: "Technology", desc: "Advanced software for accurate calculations" },
                  { title: "Support", desc: "Dedicated team for personalized assistance" },
                  { title: "London Based", desc: "UK-focused expertise with international reach" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-2xl hover:border-primary/20 transition-colors"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-24 bg-secondary border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Team</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
                Meet Our Crypto Experts
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                Meet our London-based team of experts who are revolutionising UK cryptocurrency tax compliance
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {team.map((member, index) => (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group text-center bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-colors"
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-5 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-primary/30 transition-colors">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <Partners />

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
                Ready to Simplify Your Crypto Taxes?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Join thousands of satisfied UK clients who trust our London-based team with their cryptocurrency tax compliance
              </p>
              <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90 rounded-full px-8 py-6 font-semibold shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
