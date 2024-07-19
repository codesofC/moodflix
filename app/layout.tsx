import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/theme/ThemeProvider";
import { cn } from "@/lib/utils";
import GloabalContextProvider from "@/context/globalContext/GlobalContextProvider";
import Footer from "@/components/Footer";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moodflix",
  description: "Movies, series, anime's recommandations based on your mood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={cn(
            poppins.className,
            "relative min-h-screen flex flex-col justify-between bg-background overflow-x-hidden"
          )}
        >
          <GloabalContextProvider>{children}</GloabalContextProvider>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
