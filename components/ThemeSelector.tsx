"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { themes } from "@/utils/utilities";

interface ThemeSelectorProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  // Close dropdown when clicking outside
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // use effect
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="theme-selector" onClick={toggleDropdown}>
      <p className="pb-[5px] text-xs font-semibold">Code Theme</p>

      <div className="dropdown-title capitalize w-[140px]">
        {theme}
        <div className={`chevron ${showDropdown ? "up" : "down"}`}>
          <ChevronDown />
        </div>
      </div>

      {showDropdown && (
        <div className="dropdown-menu w-[140px] top-[94px] flex flex-col gap-1 p-1">
          {themes.map((theming, index) => {
            return (
              <div key={index}>
                <button
                  className={`dropdown-item capitalize text-left w-full px-1.5 py-0.5 ${
                    theme === theming && "selected-item"
                  }`}
                  onClick={() => handleThemeChange(theming)}
                >
                  {theming}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ThemeSelector;
