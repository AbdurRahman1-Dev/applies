import Navbar from "@/components/shared/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Applies",
  description: "Keep your applied jobs records here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className="wrapper">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
