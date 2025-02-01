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
      <div className="w-full bg-black py-1 overflow-hidden">
        <div className="text-center text-[#FFD700]">Loading crypto prices...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-black py-1 overflow-hidden">
      <div className="animate-scroll flex space-x-8 whitespace-nowrap">
        {cryptoData?.map((crypto) => (
          <div
            key={crypto.id}
            className="flex items-center space-x-2 text-sm"
          >
            <span className="text-[#FFD700] uppercase">{crypto.symbol}:</span>
            <span className="text-white">
              ${crypto.current_price.toLocaleString()}
            </span>
            <span
              className={`flex items-center ${
                crypto.price_change_percentage_24h >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {crypto.price_change_percentage_24h >= 0 ? (
                <ArrowUpIcon className="h-3 w-3" />
              ) : (
                <ArrowDownIcon className="h-3 w-3" />
              )}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};