import { useState } from "react";
import { Supplier } from "@/app/types";

interface SupplierFormProps {
  handleNewSupplierSubmit: (supplier: Supplier) => void;
}

export default function SupplierForm({ handleNewSupplierSubmit }: SupplierFormProps) {
  const [newSupplier, setNewSupplier] = useState<Supplier>({ name: "", country: "", website: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNewSupplierSubmit(newSupplier);
    setNewSupplier({ name: "", country: "", website: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Register New Supplier</h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Supplier Name"
          value={newSupplier.name}
          onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
          className="border border-gray-300 rounded p-2"
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={newSupplier.country}
          onChange={(e) => setNewSupplier({ ...newSupplier, country: e.target.value })}
          className="border border-gray-300 rounded p-2"
          required
        />
        <input
          type="url"
          placeholder="Website URL"
          value={newSupplier.website}
          onChange={(e) => setNewSupplier({ ...newSupplier, website: e.target.value })}
          className="border border-gray-300 rounded p-2"
          required
        />
        <button type="submit" className="bg-purple1 text-white px-4 py-2 rounded hover:bg-purple2">
          Add Supplier
        </button>
      </div>
    </form>
  );
}
