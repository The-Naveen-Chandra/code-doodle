"use client";

import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";

import { backgrounds, languages, themes } from "@/utils/utilities";

import LanguageSelector from "@/components/LanguageSelector";
import ThemeSelector from "@/components/ThemeSelector";
import BackgroundSelector from "@/components/BackgroundSelector";
import PaddingSelector from "@/components/PaddingSelector";
import { Share } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0].color);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[2]);

  return (
    <main className="h-[100vh] flex flex-col items-center justify-between">
      <header className="mt-4 flex gap-6 w-[800px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded-[8px] border border-[#3c3c3c] shadow-md">
        {/* language selector */}
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />

        {/* Theme selector */}
        <ThemeSelector theme={theme} setTheme={setTheme} />

        {/* Background selector */}
        <BackgroundSelector
          background={background}
          setBackground={setBackground}
        />

        {/* Padding selector */}
        <PaddingSelector
          paddings={paddings}
          currentPadding={currentPadding}
          setCurrentPadding={setCurrentPadding}
        />

        {/* Export button */}
        <div className="export-btn self-center ml-auto">
          <button className="flex items-center justify-center gap-2 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-50 hover:text-slate-50 ease-in-out transition-all duration-300">
            Export
            <Share className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="code-editor-ref mt-[14rem]">
        <CodeEditor
          language={language}
          icon={activeIcon}
          theme={theme}
          background={background}
          currentPadding={currentPadding}
        />
      </div>

      <Footer />
    </main>
  );
}
