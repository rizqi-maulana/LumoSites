
import React from "react";
import Drift from "@/components/patterns/Drift";
import { Metadata } from "next";
import "./globals.css";
import 'react-tippy/dist/tippy.css';
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
        <Drift />
      </body>
    </html>
  );
};

export default RootLayout;
