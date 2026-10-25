import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantStyles = {
      default:
        "bg-indigo-600 text-white shadow-md shadow-indigo-600/25 hover:bg-indigo-500 hover:shadow-indigo-600/40 active:scale-[0.98]",
      secondary:
        "bg-[#151824] text-slate-200 border border-[#1e2233] hover:bg-[#1a1e2d] hover:border-slate-600 active:scale-[0.98]",
      outline:
        "border border-[#1e2233] bg-transparent text-slate-300 hover:bg-white/5 hover:text-white active:scale-[0.98]",
      ghost: "hover:bg-white/5 text-slate-300 hover:text-white",
      link: "text-indigo-400 underline-offset-4 hover:underline",
    };

    const sizeStyles = {
      default: "h-10 px-5 py-2 text-sm rounded-xl font-medium",
      sm: "h-8 rounded-lg px-3 text-xs font-medium",
      lg: "h-12 rounded-xl px-8 text-base font-semibold",
      icon: "h-9 w-9 rounded-lg p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
