"use client";
import { useState } from "react";
import { useSupplierContext } from "./contexts/supplierContext";
import { Supplier } from "./types";

import { PrimaryButton, ModalWrapper, CatalogUpload, SupplierForm } from "@components";

export default function SupplierRegistration() {
  const { suppliers, selectedSupplier, catalogData, setSelectedSupplier, addSupplier, uploadCatalog } =
    useSupplierContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddSupplier = (supplier: Supplier) => {
    addSupplier(supplier);
    closeModal();
  };

  return (
    <div className="max-w-4xl mx-auto py-10 flex flex-col flex-1 items-center justify-between">
      <ModalWrapper title="Add supplier" isOpen={isModalOpen} onClose={closeModal}>
        <SupplierForm handleNewSupplierSubmit={handleAddSupplier} />
      </ModalWrapper>

      <CatalogUpload
        suppliers={suppliers}
        selectedSupplier={selectedSupplier}
        setSelectedSupplier={setSelectedSupplier}
        catalogData={catalogData}
        setCatalogData={uploadCatalog}
      />

      <PrimaryButton label="Add Supplier" className="mt-32 " onClick={openModal} />
    </div>
  );
}
