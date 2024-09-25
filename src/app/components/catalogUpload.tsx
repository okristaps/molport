import * as XLSX from "xlsx";
import { useEffect } from "react";
import { Supplier } from "@/app/types";

interface CatalogUploadProps {
  suppliers: Supplier[];
  selectedSupplier: Supplier | null;
  setSelectedSupplier: (supplier: Supplier | null) => void;
  catalogData: any[];
  setCatalogData: (data: any[]) => void;
}

export default function CatalogUpload({
  suppliers,
  selectedSupplier,
  setSelectedSupplier,
  catalogData,
  setCatalogData,
}: CatalogUploadProps) {
  useEffect(() => {
    if (selectedSupplier && selectedSupplier.catalog) {
      setCatalogData(selectedSupplier.catalog);
    } else {
      setCatalogData([]);
    }
  }, [selectedSupplier]);

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setCatalogData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleSupplierChange = (event: any) => {
    const supplier = suppliers.find((s) => s.name === event.target.value);
    setSelectedSupplier(supplier || null);
  };

  return (
    <div className="flex flex-1 flex-col items-center">
      <h2 className="text-2xl font-semibold mb-8">Suppliers</h2>
      <select
        value={selectedSupplier ? selectedSupplier.name : ""}
        onChange={handleSupplierChange}
        className="border border-gray-300 rounded p-4 mb-8"
      >
        <option value="">Select a Supplier</option>
        {suppliers.map((supplier) => (
          <option key={supplier.name} value={supplier.name}>
            {supplier.name}
          </option>
        ))}
      </select>
      {selectedSupplier && <h3 className="text-xl my-8">Selected Supplier: {selectedSupplier.name}</h3>}

      {selectedSupplier && !catalogData.length && (
        <div className="flex flex-1 self-center">
          <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="mb-4" />
        </div>
      )}

      {catalogData.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Catalog Data</h2>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                {Object.keys(catalogData[0]).map((key) => (
                  <th key={key} className="border px-4 py-2 bg-gray-200">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {catalogData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx} className="border px-4 py-2">
                      {value as string}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
