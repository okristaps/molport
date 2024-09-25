export interface Supplier {
  name: string;
  country: string;
  website: string;
  catalog?: any[];
}

export const initialSuppliers: Supplier[] = [
  { name: "ChemDiv, Inc.", country: "United States", website: "http://www.chemdiv.com/" },
  { name: "BIONET - Key Organics Ltd.", country: "United Kingdom", website: "http://www.keyorganics.net/" },
  {
    name: "AnalytiCon Discovery - a Division of BRAIN Biotech AG",
    country: "Germany",
    website: "http://www.ac-discovery.com/",
  },
];
