"use client";

import "./globals.css";
import { SupplierProvider } from "./contexts/supplierContext";
import Header from "./components/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SupplierProvider>
          <main>{children}</main>
        </SupplierProvider>
      </body>
    </html>
  );
}
