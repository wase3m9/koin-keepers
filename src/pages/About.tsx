import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Trophy, Clock, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageBreadcrumbs } from "@/components/shared/PageBreadcrumbs";
import { Partners } from "@/components/home/Partners";
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
        "addressLocality": "London",
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
  return <>
      <Helmet>
        <title>About KoinKeepers - Your Trusted Cryptocurrency Tax Partner</title>
        <meta name="description" content="Learn about KoinKeepers's journey, our expert team, and our mission to simplify cryptocurrency tax compliance for traders and investors worldwide." />
        <meta name="keywords" content="crypto tax experts, cryptocurrency accounting, blockchain tax specialists, crypto tax company, about koinkeepers" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://koin-keepers.co.uk/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koin-keepers.co.uk/about" />
        <meta property="og:title" content="About KoinKeepers - Your Trusted Cryptocurrency Tax Partner" />
        <meta property="og:description" content="Learn about KoinKeepers's journey, our expert team, and our mission to simplify cryptocurrency tax compliance for traders and investors worldwide." />
        <meta property="og:image" content="/favicon.ico" />

        {/* Twitter */}
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
        <section className="relative py-20 bg-[#FEF7CD]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                About KoinKeepers
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">Since 2022, we've been helping UK traders and investors navigate the complex world of cryptocurrency taxation from our London headquarters.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mt-4 text-3xl font-bold">1,000</h2>
                <p className="mt-2 text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mt-4 text-3xl font-bold">98%</h2>
                <p className="mt-2 text-gray-600">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mt-4 text-3xl font-bold">4+ Years</h2>
                <p className="mt-2 text-gray-600">Experience</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mt-4 text-3xl font-bold">UK</h2>
                <p className="mt-2 text-gray-600">Based & Focused</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At KoinKeepers, operating from our London office, we believe that cryptocurrency taxation shouldn't be a barrier to investment and innovation. Our mission is to make crypto tax compliance simple, accurate, and stress-free for UK investors and traders.
                </p>
                <p className="text-gray-600">
                  We combine deep expertise in both UK cryptocurrency regulations and taxation with cutting-edge technology to provide solutions that save you time, money, and peace of mind.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-xl bg-white shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">UK Expertise</h3>
                  <p className="text-gray-600">Certified UK tax professionals with deep crypto knowledge</p>
                </div>
                <div className="glass-card p-6 rounded-xl bg-white shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">Technology</h3>
                  <p className="text-gray-600">Advanced software for accurate calculations</p>
                </div>
                <div className="glass-card p-6 rounded-xl bg-white shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">Support</h3>
                  <p className="text-gray-600">Dedicated team for personalized assistance</p>
                </div>
                <div className="glass-card p-6 rounded-xl bg-white shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">London Based</h3>
                  <p className="text-gray-600">UK-focused expertise with international reach</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Crypto Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet our London-based team of experts who are revolutionising UK cryptocurrency tax compliance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
              name: "Waseem",
              role: "Crypto Tax Director",
              bio: "Certified tax specialist with focus on DeFi and NFTs",
              image: "/lovable-uploads/c5b6d5a2-8b1a-4265-a584-fe5fba4c2067.png"
            }, {
              name: "Michael",
              role: "Chief Technology Officer",
              bio: "Blockchain developer and cryptocurrency expert",
              image: "/lovable-uploads/2391ca69-3322-4648-a703-f3f530939d91.png"
            }, {
              name: "Emma",
              role: "Head of Tax Advisory",
              bio: "Certified tax specialist with focus on DeFi and NFTs",
              image: "/lovable-uploads/df9ae568-0265-4307-ac47-b9028e215441.png"
            }].map(member => <div key={member.name} className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-xl overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <Partners />

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#FEF7CD]/40" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your Crypto Taxes?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied UK clients who trust our London-based team with their cryptocurrency tax compliance
            </p>
            <Button asChild size="lg" className="bg-black text-yellow-400 hover:bg-black/90 rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>;
};
export default About;