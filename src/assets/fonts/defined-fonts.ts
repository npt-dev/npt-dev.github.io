// Use this file to keep the fonts that will be used throughout application.
import localFont from "next/font/local";
import { Inter, Lusitana, Ubuntu_Mono } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const ubuntu = Ubuntu_Mono({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  weight: "400",
});

export const geistSans = localFont({
  src: "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
