
import React from "react";
import Drift from "@/components/patterns/Drift";
import { Metadata } from "next";
import "./globals.css";
import 'react-tippys/dist/tippys.css';
import "animate.css";
import Footer from "@/components/patterns/footer";
import Header from "@/components/patterns/header";
import { Providers } from "@/utils/NextUiProvider";
export const metadata: Metadata = {
  title: {
    default: "LumoSites",
    template: "%s | LumoSites",
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
                const theme = localStorage.getItem('theme');
                if (!theme) {
                  localStorage.setItem('theme', 'dark');
                  window.location.reload();
                }
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`dark:bg-slate-900 layout`}>
        <Drift />
        <Header />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
