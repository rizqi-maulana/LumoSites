// RootLayout.tsx
import React from "react";
import { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/assets/fonts/poppins";
import "animate.css";
import { Header } from "@/components/patterns/header";
import { Footer } from "@/components/patterns/footer";
export const metadata: Metadata = {
  title: {
    default: "LumoSites",
    template: "%s | LumoSites",
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.className} container mx-auto`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
