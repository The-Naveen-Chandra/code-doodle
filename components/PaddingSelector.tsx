"use client";

import React from "react";

interface PaddingSelectorProps {
  paddings: string[];
  currentPadding: string;
  setCurrentPadding: (padding: string) => void;
}

function PaddingSelector({
  paddings,
  currentPadding,
  setCurrentPadding,
}: PaddingSelectorProps) {
  // handle padding change
  const handleChangePadding = (newPadding: string) => {
    setCurrentPadding(newPadding);
  };

  return (
    <div>
      <p className="py-[5px] text-sm font-medium">Padding Selector</p>
      <div className="flex gap-3">
        {paddings.map((padding, index) => {
          return (
            <div key={index} className="padding-items">
              <button
                onClick={() => handleChangePadding(padding)}
                className={`h-[37px] flex items-center justify-center text-sm px-2
                ${currentPadding === padding && "padding-selected"}`}
              >
                {padding}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PaddingSelector;
