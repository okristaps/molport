"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SupplierProvider } from "./contexts/supplierContext";

const euclidCircularA = localFont({
  src: [
    { path: "./fonts/Euclid Circular A Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Euclid Circular A Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Euclid Circular A Bold Italic.ttf", weight: "700", style: "italic" },
    { path: "./fonts/Euclid Circular A Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Euclid Circular A Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Euclid Circular A Light Italic.ttf", weight: "300", style: "italic" },
    { path: "./fonts/Euclid Circular A Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Euclid Circular A Medium Italic.ttf", weight: "500", style: "italic" },
    { path: "./fonts/Euclid Circular A SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Euclid Circular A SemiBold Italic.ttf", weight: "600", style: "italic" },
  ],
  variable: "--font-euclid-circular-a",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SupplierProvider>{children}</SupplierProvider>
      </body>
    </html>
  );
}
