import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Wayfind — Europe Trip",
  description: "Design & Jazz tour: London · Frankfurt · Berlin · Copenhagen",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Wayfind",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-base flex justify-center min-h-svh">
        <div className="relative w-full max-w-[430px] min-h-svh bg-base">
          <main className="pb-20">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
