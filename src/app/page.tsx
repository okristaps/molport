"use client";
import SupplierForm from "./components/forms/supplierForm";
import CatalogUpload from "./components/forms/catalogUpload";
import { useSupplierContext } from "./contexts/supplierContext";

export default function SupplierRegistration() {
  const { suppliers, selectedSupplier, catalogData, setSelectedSupplier, addSupplier, uploadCatalog } =
    useSupplierContext();

  return (
    <div className="max-w-4xl mx-auto py-10">
      <SupplierForm handleNewSupplierSubmit={(supplier) => addSupplier(supplier)} />
      <CatalogUpload
        suppliers={suppliers}
        selectedSupplier={selectedSupplier}
        setSelectedSupplier={setSelectedSupplier}
        catalogData={catalogData}
        setCatalogData={uploadCatalog}
      />
    </div>
  );
}
