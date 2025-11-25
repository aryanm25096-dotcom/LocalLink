import * as React from "react"
import { cn } from "@/lib/utils"

const BentoCard = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-xl border bg-neutral-900/50 backdrop-blur-xl border-white/10 text-slate-100 shadow-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)]",
            className
        )}
        {...props}
    />
))
BentoCard.displayName = "BentoCard"

export { BentoCard }
