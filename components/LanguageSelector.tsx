"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { languages } from "@/utils/utilities";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (icon: string) => void;
}

function LanguageSelector({
  language,
  setLanguage,
  setActiveIcon,
}: LanguageSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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

  // handle language change and set active icon
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newActiveIcon = languages.find(
      (lang) => lang.name === newLanguage
    )?.icon;

    if (newActiveIcon) {
      setActiveIcon(newActiveIcon);
    }
  };

  return (
    <div ref={dropdownRef} onClick={toggleDropdown}>
      <p className="pb-[5px] text-xs font-semibold">Language</p>
      <div className="dropdown-title capitalize w-[120px]">
        {language}
        <div className={`chevron ${showDropdown ? "up" : "down"}`}>
          <ChevronDown />
        </div>
      </div>

      {showDropdown && (
        <div className="dropdown-menu w-[120px] top-[94px]  flex flex-col gap-1 p-1">
          {languages.map((lang, index) => {
            return (
              <div key={index}>
                <button
                  className={`dropdown-item capitalize text-left w-full px-1.5 py-0.5 ${
                    language === lang.name && "selected-item"
                  }`}
                  onClick={() => handleLanguageChange(lang.name)}
                >
                  {lang.name}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
