import { Inter } from "next/font/google";
import "@/styles/globals.scss";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
