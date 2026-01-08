export const CryptoTicker = () => {
  const cryptoList = [
    { image: "/lovable-uploads/81eacbf3-1cdc-4827-b97c-22fd32b879e2.png", name: "Cardano" },
    { image: "/lovable-uploads/9ec99aa3-7760-42ba-81f9-19058794a47d.png", name: "Bitcoin" },
    { image: "/lovable-uploads/50f7c216-610e-487a-a729-139aa9fc4a34.png", name: "XRP" },
    { image: "/lovable-uploads/9c3765b8-51e2-40f0-b15d-e569deb03294.png", name: "USDC" },
    { image: "/lovable-uploads/d94d194e-f7e1-49ff-bb39-17e748b9e72b.png", name: "Hedera" },
    { image: "/lovable-uploads/4eb3248a-df60-4584-a615-e370ba34ad15.png", name: "Polygon" },
    { image: "/lovable-uploads/8847619e-dce7-47ef-8329-277976fd173c.png", name: "Ethereum" },
    { image: "/lovable-uploads/3b843ca0-7b7c-4458-9c4d-49f18fdfd1a1.png", name: "Solana" }
  ];

  return (
    <section className="py-6 sm:py-8 bg-secondary relative overflow-hidden">
      {/* Gradient edge overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

      {/* Single row ticker */}
      <div className="flex gap-8 sm:gap-16 animate-scroll whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={`row-${i}`} className="flex gap-8 sm:gap-16">
            {cryptoList.map((crypto, index) => (
              <div
                key={`row-${i}-${index}`}
                className="group flex items-center gap-2 sm:gap-3 min-w-[100px] sm:min-w-[140px]"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-primary/30 transition-all duration-300">
                  <img 
                    src={crypto.image} 
                    alt={crypto.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {crypto.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
