import React from "react";
import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/Dashobard/Sidebar";

const inter = Inter({ subsets: ["latin"] });

const layout = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className="flex h-screen bg-slate-200">
          <div className="w-1/5">
            <Sidebar></Sidebar>
          </div>
          <div className="w-4/5 wrapper">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default layout;
