"use client";

import { backgrounds } from "@/utils/utilities";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface BackgroundSelectorProps {
  background: string;
  setBackground: (background: string) => void;
}

function BackgroundSelector({
  background,
  setBackground,
}: BackgroundSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // handle background change
  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground);
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
    <div
      ref={dropdownRef}
      onClick={toggleDropdown}
      className="bg-selector relative"
    >
      <p className="pb-[5px] text-xs font-semibold">Theme</p>

      <div className="dropdown-title w-[60px]">
        <div
          className="rounded-full w-4 h-4"
          style={{
            background: background,
          }}
        ></div>
        <div className={`chevron ${showDropdown ? "up" : "down"}`}>
          <ChevronDown />
        </div>
      </div>

      {showDropdown && (
        <div className="dropdown-menu top-[74px] w-[124px] rounded-full flex flex-col gap-1 p-1">
          {backgrounds.map((bg, index) => {
            return (
              <div
                key={index}
                className={`dropdown-item flex items-center justify-start gap-2 px-1.5 py-0.5 ${
                  background === bg.color && "selected-item"
                }`}
                onClick={() => handleBackgroundChange(bg.color)}
              >
                <div
                  className="theme-selector-dropdown-item rounded-full h-4 w-4"
                  style={{
                    background: bg.color,
                  }}
                ></div>
                <button>{bg.name}</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default BackgroundSelector;
