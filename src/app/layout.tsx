
import React from "react";
import Drift from "@/components/patterns/Drift";
import { Metadata } from "next";
import "./globals.css";
import 'react-tippys/dist/tippys.css';
import "animate.css";
import { Header } from "@/components/patterns/header";
import { Footer } from "@/components/patterns/footer";
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
      <body className={`dark:bg-slate-900`}>
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
