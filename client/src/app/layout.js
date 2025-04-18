import { Inter } from "next/font/google";
import "./globals.css";
import SessionProviderAuth from "./molecules/sessionProviderAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Video playing application",
  description: "An application that plays video",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProviderAuth>
        <body className={inter.className}>{children}</body>
      </SessionProviderAuth>
    </html>
  );
}
