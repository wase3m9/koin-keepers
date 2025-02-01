export const Partners = () => {
  const partners = [
    {
      name: "CoinTracking",
      logo: "/lovable-uploads/63cbe847-a138-490e-8d81-bec625ec428d.png"
    },
    {
      name: "Koinly",
      logo: "/lovable-uploads/2f400325-9009-4b45-b977-50ed4c5a1b44.png"
    },
    {
      name: "CoinTracker",
      logo: "/lovable-uploads/72ab391d-123f-465a-a81f-d506c774d874.png"
    },
    {
      name: "New Partner",
      logo: "/lovable-uploads/1b3a283e-9141-4e90-ab54-60896cbc1edc.png"
    }
  ];

  return (
    <section className="py-20 bg-white/80 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-primary uppercase tracking-wider font-medium mb-4">
            Partnership
          </h3>
          <h2 className="text-4xl font-bold mb-6">
            Meet our partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our company has been at the forefront of crypto tax solutions since 2020. 
            We work daily to become better and we are ready to share best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="w-48 h-24 relative flex items-center justify-center transform transition-all duration-300 hover:scale-105 filter hover:brightness-75"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};