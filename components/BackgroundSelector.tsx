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
      <p className="py-[5px] text-sm font-medium">Theme</p>

      <div className="dropdown-title w-[62px]">
        <div
          className="rounded-full w-5 h-5"
          style={{
            background: background,
          }}
        ></div>
        <div className={`chevron ${showDropdown ? "up" : "down"}`}>
          <ChevronDown />
        </div>
      </div>

      {showDropdown && (
        <div className="dropdown-menu top-[74px] w-[62px] rounded-full flex flex-col gap-2 p-2 justify-center items-center">
          {backgrounds.map((bg, index) => {
            return (
              <div
                key={index}
                className="theme-selector-dropdown-item rounded-full h-5 w-5"
                style={{
                  background: bg.color,
                }}
                onClick={() => handleBackgroundChange(bg.color)}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default BackgroundSelector;
