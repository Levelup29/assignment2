// components/common/Button.tsx
import { forwardRef } from "react"

import { cn } from "@/lib/utils"

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
({ className, children, disabled, ...props }, ref) => {
    return (
    <button
        className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-colors data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        "bg-primary-blue hover:bg-secondary-blue text-white font-bold py-2 px-4 rounded", // Apply given styles here
        className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
    >
        {children}
    </button>
    )
}
)
Button.displayName = "Button"

export { Button }