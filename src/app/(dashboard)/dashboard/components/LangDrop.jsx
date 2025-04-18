"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

const languageOptions = [
  {
    value: "en",
    label: (
      <div className="flex items-center gap-2">
        <img src="/images/uk.png" alt="EN" className="w-8 h-8 rounded-full" />
        English
      </div>
    ),
  },
  {
    value: "fr",
    label: (
      <div className="flex items-center gap-2">
        <img
          src="/images/france.png"
          alt="FR"
          className="w-8 h-8 rounded-full font-bold"
        />
        French
      </div>
    ),
  },
  {
    value: "de",
    label: (
      <div className="flex items-center gap-2">
        <img src="/images/de.png" alt="DE" className="w-8 h-8 rounded-full" />
        German
      </div>
    ),
  },
  {
    value: "ur",
    label: (
      <div className="flex items-center gap-2">
        <img src="/images/pak.png" alt="PK" className="w-8 h-8 rounded-full" />
        Urdu
      </div>
    ),
  },
];

export default function LanguageDropdown() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent SSR mismatch

  return (
    <div className="w-40">
      <Select
        options={languageOptions}
        defaultValue={languageOptions[0]}
        isSearchable={false}
        className="text-sm font-semibold text-[#173C36]"
        styles={{
          control: (base) => ({
            ...base,

            padding: "2px",
            backgroundColor: "transparent",

            border: "none",
          }),
        }}
      />
    </div>
  );
}
