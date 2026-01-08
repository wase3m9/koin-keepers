import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeroPillProps {
  href: string
  label: string
  announcement?: string
  className?: string
  isExternal?: boolean
}

export function HeroPill({ 
  href, 
  label, 
  announcement = "📣 Announcement",
  className,
  isExternal = false,
}: HeroPillProps) {
  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      className={cn(
        "flex w-fit items-center space-x-1 sm:space-x-2 rounded-full",
        "bg-white/10 backdrop-blur-sm ring-1 ring-white/20",
        "px-1.5 sm:px-2 py-0.5 sm:py-1 whitespace-nowrap mx-auto",
        "max-w-[95vw] overflow-hidden",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={cn(
        "w-fit rounded-full bg-primary px-1.5 sm:px-2 py-0.5",
        "text-[10px] sm:text-xs font-medium text-secondary",
        "text-center flex-shrink-0"
      )}>
        {announcement}
      </div>
      <p className="text-[10px] sm:text-xs font-medium text-white truncate">
        {label}
      </p>
      <svg
        width="12"
        height="12"
        className="ml-0.5 sm:ml-1 flex-shrink-0 w-2.5 h-2.5 sm:w-3 sm:h-3"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="currentColor"
          className="text-white"
        />
      </svg>
    </motion.a>
  )
}