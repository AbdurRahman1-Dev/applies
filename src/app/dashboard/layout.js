import React from "react";
import "./dashboard.css";
import { Inter } from "next/font/google";

import Sidebar from "@/components/Dashobard/Sidebar";

const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";
import { NextAuthProvider } from "../Provider";

const layout = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="flex justify-center bg-slate-200">
            <Toaster />
            <div className="w-1/5 hidden lg:block">
              <Sidebar></Sidebar>
            </div>
            <div className="w-4/5 wrapper">{children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default layout;
