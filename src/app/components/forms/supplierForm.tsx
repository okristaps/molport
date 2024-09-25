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
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6">
        <input
          type="text"
          placeholder="Supplier Name"
          value={newSupplier.name}
          onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
          className="border border-dark3 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:infoLight"
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={newSupplier.country}
          onChange={(e) => setNewSupplier({ ...newSupplier, country: e.target.value })}
          className="border border-dark3 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:infoLight"
          required
        />
        <input
          type="url"
          placeholder="Website URL"
          value={newSupplier.website}
          onChange={(e) => setNewSupplier({ ...newSupplier, website: e.target.value })}
          className="border border-dark3 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:infoLight"
          required
        />
        <button
          type="submit"
          className="bg-successLight text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-successDark focus:outline-none focus:ring-4  focus:ring-opacity-50 transition-all duration-200"
        >
          Add Supplier
        </button>
      </div>
    </form>
  );
}
