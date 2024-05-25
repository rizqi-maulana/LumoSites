
import React from "react";
import Drift from "@/components/patterns/Drift";
import { Metadata } from "next";
import "./globals.css";
import 'react-tippys/dist/tippys.css';
import "animate.css";
import { Header } from "@/components/patterns/header";
import { Footer } from "@/components/patterns/footer";
import ThemeSetter from "@/components/atoms/ThemeSetter";
export const metadata: Metadata = {
  title: {
    default: "LumoSites",
    template: "%s | LumoSites",
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`container mx-auto dark:bg-slate-900`}>
        <ThemeSetter />
        <Header />
        {children}
        <Footer />
        {/* <Drift /> */}
      </body>
    </html>
  );
};

export default RootLayout;
