import { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";

import { CITIES } from "./constants";

function CitySelect({ control, name, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsideClick = (event) => {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        const selectedCity = CITIES.find((city) => city.id === value);

        return (
          <div ref={containerRef} className="relative">
            <button
              type="button"
              aria-label={label}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex min-w-24 items-center justify-between gap-2  bg-white px-3 py-1.5"
            >
              <span>{selectedCity?.name ?? label}</span>
              <span
                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>

            <ul
              role="listbox"
              className={`absolute z-10 mt-1 w-full origin-top overflow-hidden rounded-md border bg-white shadow-lg transition-all duration-200 ease-out ${
                isOpen
                  ? "translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-1 scale-95 opacity-0"
              }`}
            >
              {CITIES.map((city) => (
                <li
                  key={city.id}
                  role="option"
                  aria-selected={city.id === value}
                  onClick={() => {
                    onChange(city.id);
                    setIsOpen(false);
                  }}
                  className={`cursor-pointer px-3 py-1.5 hover:bg-green-50 ${
                    city.id === value ? "bg-green-100" : ""
                  }`}
                >
                  {city.name}
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    />
  );
}

export default CitySelect;
