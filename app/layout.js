import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

import Providers from "@/components/ui/ProgressBarProvider";

import { Montserrat, Lato, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Student's Gymkhana - NIT Durgapur",
  description:
    "Official website of Student's Gymkhana, National Institute of Technology Durgapur",
};

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.className} ${lato.className} ${poppins.className}`}>
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
