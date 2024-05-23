
import React from "react";
import Drift from "@/components/patterns/Drift";
import { Metadata } from "next";
import "./globals.css";
import 'react-tippy/dist/tippy.css';
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
  function setInitialTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const script = `(${setInitialTheme.toString()})()`;
  return (
    <html lang="en">
      <body className={`container mx-auto dark:bg-slate-900`}>
        <script dangerouslySetInnerHTML={{ __html: script }} />
        <Header />
        {children}
        <Footer />
        <Drift />
      </body>
    </html>
  );
};

export default RootLayout;
