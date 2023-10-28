import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.scss";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable}`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
