import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Student's Gymkhana - NIT Durgapur",
  description: "Official website of Student's Gymkhana, National Institute of Technology Durgapur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
