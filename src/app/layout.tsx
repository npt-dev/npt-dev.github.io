import type { Metadata } from "next";
import "@/styles/globals.css";
import { fonts } from "@/assets";
import { ChildrenProps } from "@/type/common";
import { ThemeProvider } from "@/components/theme-provider";

const { geistSans, geistMono } = fonts;
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
