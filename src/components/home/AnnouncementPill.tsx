import { Bell, ArrowRight, X } from "lucide-react";
import { useState } from "react";

export const AnnouncementPill = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative flex items-center gap-2 bg-[#E5F5F5] text-[#0A7B83] px-4 py-2 rounded-full max-w-fit mx-auto mb-6">
      <Bell className="h-4 w-4" />
      <span className="font-medium">Announcement</span>
      <span className="text-[#0A7B83]/80">
        UK Tax Return deadline: January 31st - Don't leave it too late!
      </span>
      <ArrowRight className="h-4 w-4" />
      <button
        type="button"
        className="ml-2 rounded-full p-1 hover:bg-[#0A7B83]/10 focus:outline-none"
        onClick={() => setIsVisible(false)}
      >
        <span className="sr-only">Dismiss</span>
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};