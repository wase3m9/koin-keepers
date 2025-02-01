import { X } from "lucide-react";
import { useState } from "react";

export const AnnouncementPill = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-black/95 text-primary border border-primary/20">
      <div className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium">
            <span>🚨 UK Tax Return deadline: January 31st - Don't leave it too late!</span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="flex rounded-md p-2 hover:bg-primary/10 focus:outline-none"
            onClick={() => setIsVisible(false)}
          >
            <span className="sr-only">Dismiss</span>
            <X className="h-5 w-5 text-primary" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};