import * as React from "react";
import { cn } from "@/lib/utils";

function HorizontalFallingLine() {
  return (
    <div className="absolute bottom-0 left-0 h-px w-full overflow-hidden">
      <div className="falling-line-horizontal absolute h-px w-24 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
    </div>
  );
}

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section data-slot="section" className={cn("line-b relative px-4 py-12 sm:py-24 md:py-32", className)} {...props}>
      {props.children}
      <HorizontalFallingLine />
    </section>
  );
}

export { Section };
