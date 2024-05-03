// RootLayout.tsx
import React from "react";
import { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/assets/fonts/poppins";
import "animate.css";

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
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
