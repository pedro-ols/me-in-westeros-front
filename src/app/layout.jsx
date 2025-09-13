import { Geist, Geist_Mono, Metamorphous } from "next/font/google";
import "./globals.css";

import Header from "../components/header";
import Footer from "../components/footer";

import localFont from "next/font/local";

const metamorphous = localFont({
    src: [
        {
            path: "../../public/fonts/Metamorphous/Metamorphous-Regular.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-metamorphous",
    display: "swap",
});

export const metadata = {
  title: "Me in Westeros - Uma viagem gelo e fogo",
  description: "Projeto full-stack individual com temática inspirada no universo de Game of Thrones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${metamorphous.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
