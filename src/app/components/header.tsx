import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 min-w-max">
      <div className=" flex justify-center items-center">
        <div className="flex items-center justify-center">
          <Image src="/assets/images/molportDark.svg" alt="Logo" width={150} height={50} priority={true} />
        </div>
      </div>
    </header>
  );
}
