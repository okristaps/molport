import React, { createContext, useContext, useState, useEffect } from "react";
import { initialSuppliers, Supplier } from "@/app/types";
import * as XLSX from "xlsx";

interface SupplierContextType {
  suppliers: Supplier[];
  selectedSupplier: Supplier | null;
  catalogData: any[];
  setSelectedSupplier: (supplier: Supplier | null) => void;
  addSupplier: (supplier: Supplier) => void;
  uploadCatalog: (catalog: any[]) => void;
}

const SupplierContext = createContext<SupplierContextType | undefined>(undefined);

export const SupplierProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [suppliers, setSuppliers] = useState<Supplier[]>(initialSuppliers);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [catalogData, setCatalogData] = useState<any[]>([]);

  useEffect(() => {
    const loadCatalogs = async () => {
      const updatedSuppliers = await Promise.all(
        suppliers.map(async (supplier) => {
          const catalogFile = `/assets/catalogs/${supplier.name}.xlsx`.replace(/\s+/g, "%20");
          try {
            const catalog = await fetchCatalogData(catalogFile);
            return { ...supplier, catalog };
          } catch (error) {
            console.log(`Failed to load catalog for ${supplier.name}:`, error);
            return supplier;
          }
        })
      );
      setSuppliers(updatedSuppliers);
    };

    loadCatalogs();
  }, []);

  const fetchCatalogData = async (filePath: string) => {
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
  };

  const addSupplier = (supplier: Supplier) => {
    setSuppliers([...suppliers, { ...supplier, catalog: [] }]);
  };

  const uploadCatalog = (uploadedCatalog: any[]) => {
    if (selectedSupplier) {
      const updatedSuppliers = suppliers.map((supplier) =>
        supplier.name === selectedSupplier.name ? { ...supplier, catalog: uploadedCatalog } : supplier
      );
      setSuppliers(updatedSuppliers);
      setCatalogData(uploadedCatalog);
    }
  };

  return (
    <SupplierContext.Provider
      value={{
        suppliers,
        selectedSupplier,
        catalogData,
        setSelectedSupplier,
        addSupplier,
        uploadCatalog,
      }}
    >
      {children}
    </SupplierContext.Provider>
  );
};

export const useSupplierContext = () => {
  const context = useContext(SupplierContext);
  if (!context) {
    throw new Error("useSupplierContext must be used within a SupplierProvider");
  }
  return context;
};
