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
    <section className="py-6 bg-[#F1F0FB] relative overflow-hidden">
      {/* First row - Original direction */}
      <div className="flex gap-12 animate-scroll whitespace-nowrap mb-8">
        {[...Array(2)].map((_, i) => (
          <div key={`row1-${i}`} className="flex gap-12">
            {cryptoList.map((crypto, index) => (
              <div
                key={`row1-${i}-${index}`}
                className="flex items-center gap-3 min-w-[160px] hover:scale-110 transition-transform duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img 
                    src={crypto.image} 
                    alt={crypto.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {crypto.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Second row - Reverse direction */}
      <div className="flex gap-12 animate-scroll-reverse whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={`row2-${i}`} className="flex gap-12">
            {[...cryptoList].reverse().map((crypto, index) => (
              <div
                key={`row2-${i}-${index}`}
                className="flex items-center gap-3 min-w-[160px] hover:scale-110 transition-transform duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img 
                    src={crypto.image} 
                    alt={crypto.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-800">
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