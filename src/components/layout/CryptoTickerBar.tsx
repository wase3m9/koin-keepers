import { useQuery } from "@tanstack/react-query";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface CryptoData {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const fetchCryptoData = async (): Promise<CryptoData[]> => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const CryptoTickerBar = () => {
  const { data: cryptoData, isLoading } = useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoData,
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  if (isLoading) {
    return (
      <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 py-3 overflow-hidden border-y border-gray-800">
        <div className="text-center text-primary/80">Loading crypto prices...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 py-3 overflow-hidden border-y border-gray-800">
      <div className="animate-scroll flex space-x-12 whitespace-nowrap">
        {cryptoData?.map((crypto) => (
          <div
            key={crypto.id}
            className="flex items-center space-x-3 px-4 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-gray-800"
          >
            <span className="text-primary font-medium uppercase">{crypto.symbol}:</span>
            <span className="text-white font-medium">
              ${crypto.current_price.toLocaleString()}
            </span>
            <span
              className={`flex items-center font-medium ${
                crypto.price_change_percentage_24h >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {crypto.price_change_percentage_24h >= 0 ? (
                <ArrowUpIcon className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDownIcon className="h-3 w-3 mr-1" />
              )}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};