# Remaining Components (22-38)

These are the components that were cut off in chat. All are also in LANDING_PAGE_CODE.md

---

## 22. components/ui/accordion.tsx
```tsx
"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn("border-border dark:border-border/15 border-b", className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger data-slot="accordion-trigger" className={cn("focus-visible:border-ring focus-visible:ring-ring/50 text-md flex flex-1 items-center justify-between py-4 text-left font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className)} {...props}>
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content data-slot="accordion-content" className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" {...props}>
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
```

---

## 23. components/ui/badge.tsx
```tsx
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-border/100 dark:border-border/20 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground dark:shadow-sm dark:border-transparent",
        brand: "border-transparent bg-brand text-primary-foreground dark:shadow-sm dark:border-transparent",
        "brand-secondary": "border-transparent bg-brand-foreground/20 text-brand dark:border-transparent",
        secondary: "border-transparent bg-secondary text-secondary-foreground dark:shadow-sm dark:border-transparent",
        destructive: "border-transparent bg-destructive/30 text-destructive-foreground dark:shadow-sm dark:border-transparent",
        outline: "text-foreground",
      },
      size: { default: "px-2.5 py-1", sm: "px-1" },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

function Badge({ className, variant, size, asChild = false, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";
  return <Comp data-slot="badge" className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, badgeVariants };
```

---

## 24. components/ui/beam.tsx
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const beamVariants = cva(
  "relative after:content-[''] after:absolute after:inset-0 after:rounded-full after:scale-200",
  {
    variants: {
      tone: {
        default: "after:bg-radial after:from-foreground/30 after:from-10% after:to-foreground/0 after:to-60%",
        brand: "after:bg-radial after:from-brand/10 dark:after:from-brand/30 after:from-10% after:to-brand/0 after:to-60%",
        brandLight: "after:bg-radial dark:after:from-brand-foreground/30 after:from-brand-foreground/10 after:from-10% after:to-brand-foreground/0 after:to-60%",
      },
    },
    defaultVariants: { tone: "default" },
  }
);

export interface BeamProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof beamVariants> {}

function Beam({ className, tone, ...props }: BeamProps) {
  return <div data-slot="beam" className={cn(beamVariants({ tone, className }))} {...props} />;
}

export { Beam, beamVariants };
```

---

## 25. components/ui/button.tsx
```tsx
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-primary-foreground shadow-sm dark:hover:from-primary/80 hover:from-primary/70 dark:hover:to-primary/70 hover:to-primary/90 bg-linear-to-b from-primary/60 to-primary/100 dark:from-primary/100 dark:to-primary/70 border-t-primary",
        destructive: "bg-destructive/30 text-destructive-foreground shadow-xs hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        glow: "glass-4 hover:glass-5 shadow-md",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 rounded-md px-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-5",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

function Button({ className, variant, size, asChild = false, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
```


---

## 26. components/ui/card.tsx
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card" className={cn("bg-card text-card-foreground rounded-xl border shadow-sm", className)} {...props} />;
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 data-slot="card-title" className={cn("leading-none font-semibold tracking-tight", className)} {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="card-description" className={cn("text-muted-foreground text-sm", className)} {...props} />;
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("p-6 pt-0", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-footer" className={cn("flex items-center p-6 pt-0", className)} {...props} />;
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
```

---

## 27. components/ui/footer.tsx
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

function Footer({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="footer" className={cn("bg-background text-foreground pt-12 pb-4", className)} {...props} />;
}

function FooterContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="footer-content" className={cn("grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5", className)} {...props} />;
}

function FooterColumn({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="footer-column" className={cn("flex flex-col gap-4", className)} {...props} />;
}

function FooterBottom({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="footer-bottom" className={cn("border-border dark:border-border/15 text-muted-foreground mt-8 flex flex-col items-center justify-between gap-4 border-t pt-4 text-xs sm:flex-row", className)} {...props} />;
}

export { Footer, FooterBottom, FooterColumn, FooterContent };
```

---

## 28. components/ui/glow.tsx
```tsx
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: { variant: "top" },
});

function Glow({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof glowVariants>) {
  return (
    <div data-slot="glow" className={cn(glowVariants({ variant }), className)} {...props}>
      <div className={cn("from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100", variant === "center" && "-translate-y-1/2")} />
      <div className={cn("from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100", variant === "center" && "-translate-y-1/2")} />
    </div>
  );
}

export default Glow;
```

---

## 29. components/ui/item.tsx
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

function Item({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="item" className={cn("text-foreground flex flex-col gap-4 p-4", className)} {...props} />;
}

function ItemTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 data-slot="item-title" className={cn("text-sm leading-none font-semibold tracking-tight sm:text-base", className)} {...props} />;
}

function ItemDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="item-description" className={cn("text-muted-foreground flex max-w-[240px] flex-col gap-2 text-sm text-balance", className)} {...props} />;
}

function ItemIcon({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="item-icon" className={cn("flex items-center self-start", className)} {...props} />;
}

export { Item, ItemDescription, ItemIcon, ItemTitle };
```

---

## 30. components/ui/layout-lines.tsx
```tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function FallingLine({ side }: { side: "left" | "right" }) {
  return (
    <div className={cn("absolute top-0 h-full w-px", side === "left" ? "left-0" : "right-0")}>
      <div className="falling-line absolute h-24 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent" />
    </div>
  );
}

function LayoutLines({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section className={cn("pointer-events-none fixed inset-0 top-0", className)} {...props}>
      <div className="max-w-container line-y line-dashed relative mx-auto flex h-full flex-col">
        <FallingLine side="left" />
        <FallingLine side="right" />
      </div>
    </section>
  );
}

export { LayoutLines };
```

---

## 31. components/ui/logo.tsx
```tsx
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  version?: string;
  width?: number;
  height?: number;
  showName?: boolean;
  badge?: string;
}

export default function Logo({ className, image: SvgImage, name, version, width = 24, height = 24, showName = true, badge, ...props }: LogoProps) {
  return (
    <div data-slot="logo" className={cn("flex items-center gap-2 text-sm font-medium", className)} {...props}>
      <SvgImage width={width} height={height} aria-hidden="true" className="max-h-full max-w-full opacity-70" />
      <span className={cn(!showName && "sr-only")}>{name}</span>
      {version && <span className="text-muted-foreground">{version}</span>}
      {badge && <Badge variant="brand" size="sm">{badge}</Badge>}
    </div>
  );
}
```

---

## 32. components/ui/mockup.tsx
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";

const mockupVariants = cva(
  "flex relative z-10 overflow-hidden shadow-2xl border border-border/70 dark:border-border/5 dark:border-t-border/15",
  {
    variants: {
      type: {
        mobile: "rounded-[48px] max-w-[350px]",
        responsive: "rounded-md",
      },
    },
    defaultVariants: { type: "responsive" },
  }
);

export interface MockupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof mockupVariants> {}

function Mockup({ className, type, ...props }: MockupProps) {
  return <div data-slot="mockup" className={cn(mockupVariants({ type, className }))} {...props} />;
}

const frameVariants = cva(
  "bg-border/50 flex relative z-10 overflow-hidden rounded-2xl dark:bg-border/10",
  {
    variants: { size: { small: "p-2", large: "p-4" } },
    defaultVariants: { size: "small" },
  }
);

export interface MockupFrameProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof frameVariants> {}

function MockupFrame({ className, size, ...props }: MockupFrameProps) {
  return <div data-slot="mockup-frame" className={cn(frameVariants({ size, className }))} {...props} />;
}

export { Mockup, MockupFrame };
```


---

## 33. components/ui/mode-toggle.tsx
```tsx
"use client";

import { ChevronsUpDownIcon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1 px-2 py-0 text-xs">
          <span className="capitalize">{theme}</span>
          <span className="inline"> theme</span>
          <ChevronsUpDownIcon className="size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

---

## 34. components/ui/navbar.tsx
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

function Navbar({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav data-slot="navbar" className={cn("flex items-center justify-between py-4", className)} {...props} />;
}

function NavbarLeft({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav data-slot="navbar-left" className={cn("flex items-center justify-start gap-4", className)} {...props} />;
}

function NavbarRight({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav data-slot="navbar-right" className={cn("flex items-center justify-end gap-4", className)} {...props} />;
}

function NavbarCenter({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav data-slot="navbar-center" className={cn("flex items-center justify-center gap-4", className)} {...props} />;
}

export { Navbar, NavbarCenter, NavbarLeft, NavbarRight };
```

---

## 35. components/ui/section.tsx
```tsx
"use client";

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
```

---

## 36. components/ui/screenshot.tsx
```tsx
"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScreenshotProps {
  srcLight: string;
  srcDark?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function Screenshot({ srcLight, srcDark, alt, width, height, className }: ScreenshotProps) {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (resolvedTheme) {
      setSrc(resolvedTheme === "light" ? srcLight : srcDark || srcLight);
    }
  }, [resolvedTheme, srcLight, srcDark]);

  if (!src) {
    return <div style={{ width, height }} className={cn("bg-muted", className)} aria-label={alt} />;
  }

  return <Image src={src} alt={alt} width={width} height={height} className={className} />;
}
```

---

## 37. components/ui/dropdown-menu.tsx
```tsx
"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuContent({ className, sideOffset = 4, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content data-slot="dropdown-menu-content" sideOffset={sideOffset} className={cn("border-border dark:border-border/15 bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className)} {...props} />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuItem({ className, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }) {
  return <DropdownMenuPrimitive.Item data-slot="dropdown-menu-item" data-inset={inset} className={cn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className)} {...props} />;
}

function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return <DropdownMenuPrimitive.Separator data-slot="dropdown-menu-separator" className={cn("bg-border -mx-1 my-1 h-px", className)} {...props} />;
}

export { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuTrigger };
```

---

## 38. components/ui/sheet.tsx
```tsx
"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return <SheetPrimitive.Overlay data-slot="sheet-overlay" className={cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", className)} {...props} />;
}

function SheetContent({ className, children, side = "right", ...props }: React.ComponentProps<typeof SheetPrimitive.Content> & { side?: "top" | "right" | "bottom" | "left" }) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content data-slot="sheet-content" className={cn("border-border dark:border-border/15 bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t", className)} {...props}>
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-6 right-6 z-[100] rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-5" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

export { Sheet, SheetClose, SheetContent, SheetTrigger };
```
