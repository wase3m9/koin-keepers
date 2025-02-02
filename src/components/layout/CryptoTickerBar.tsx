import { useQuery } from "@tanstack/react-query";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface CryptoData {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
}

const CRYPTO_SYMBOLS = ["BTCUSDT", "ETHUSDT", "BNBUSDT", "XRPUSDT", "ADAUSDT", "DOGEUSDT", "MATICUSDT", "SOLUSDT"];

const fetchCryptoData = async (): Promise<CryptoData[]> => {
  const response = await fetch(
    "https://api.binance.com/api/v3/ticker/24hr"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: CryptoData[] = await response.json();
  // Filter for our wanted symbols and sort them in the same order as our CRYPTO_SYMBOLS array
  return data
    .filter(crypto => CRYPTO_SYMBOLS.includes(crypto.symbol))
    .sort((a, b) => 
      CRYPTO_SYMBOLS.indexOf(a.symbol) - CRYPTO_SYMBOLS.indexOf(b.symbol)
    );
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
            key={crypto.symbol}
            className="flex items-center space-x-3 px-4 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-gray-800"
          >
            <span className="text-primary font-medium uppercase">
              {crypto.symbol.replace('USDT', '')}:
            </span>
            <span className="text-white font-medium">
              ${parseFloat(crypto.lastPrice).toLocaleString(undefined, { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </span>
            <span
              className={`flex items-center font-medium ${
                parseFloat(crypto.priceChangePercent) >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {parseFloat(crypto.priceChangePercent) >= 0 ? (
                <ArrowUpIcon className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDownIcon className="h-3 w-3 mr-1" />
              )}
              {Math.abs(parseFloat(crypto.priceChangePercent)).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};