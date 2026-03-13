import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hover && "hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
