import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex size-7 items-center justify-center rounded-[8px] bg-brand/15 ring-1 ring-brand/30",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-4 text-brand"
        aria-hidden="true"
      >
        {/* nexus: connected nodes */}
        <path
          d="M12 5.5 6 9v6l6 3.5L18 15V9l-6-3.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          opacity="0.5"
        />
        <circle cx="12" cy="12" r="2.1" fill="currentColor" />
        <circle cx="12" cy="5.5" r="1.4" fill="currentColor" />
        <circle cx="18" cy="15" r="1.4" fill="currentColor" />
        <circle cx="6" cy="15" r="1.4" fill="currentColor" />
        <path
          d="M12 12 12 5.5M12 12 18 15M12 12 6 15"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-90",
        className,
      )}
    >
      <LogoMark />
      <span className="text-[15px] font-semibold tracking-tight">Nexus</span>
    </a>
  );
}
