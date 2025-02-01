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
        "flex w-fit items-center space-x-2 rounded-full",
        "bg-white/10 backdrop-blur-sm ring-1 ring-white/20",
        "px-3 py-1.5 whitespace-pre mx-auto",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={cn(
        "w-fit rounded-full bg-primary px-2 py-0.5",
        "text-sm font-medium text-secondary sm:text-base md:text-lg",
        "text-center"
      )}>
        {announcement}
      </div>
      <p className="text-sm font-medium text-white sm:text-base md:text-lg">
        {label}
      </p>
      <svg
        width="16"
        height="16"
        className="ml-2"
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