"use client";

import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

// languages for ace editor
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";

// themes for ace editor
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-tomorrow";

import Image from "next/image";
import { initialCode } from "@/utils/utilities";

interface CodeEditorProps {
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string;
}

function CodeEditor({
  language,
  theme,
  icon,
  background,
  currentPadding,
}: CodeEditorProps) {
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState<number | null>(500);
  const [title, setTile] = useState("Untitled-1");
  const [code, setCode] = useState(initialCode);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  // @ts-ignore
  const handleResize = (event, direction, ref, pos) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Resizable
      minHeight={466}
      minWidth={510}
      maxWidth={1000}
      defaultSize={{
        width: width,
        height: height || 500,
      }}
      onResize={handleResize}
      className="resize-container relative"
      style={{
        background: background,
        borderRadius: "4px",
      }}
    >
      <div>
        <div
          className="code-block"
          style={{
            padding: currentPadding,
          }}
        >
          <div className="code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80">
            {/* three dots */}
            <div className="dots flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbc6a]"></div>
              <div className="w-3 h-3 rounded-full bg-[#67f772]"></div>
            </div>

            {/* input */}
            <div className="input-control w-full">
              <input
                value={title}
                onChange={(e) => setTile(e.target.value)}
                type="text"
                className="w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium text-sm text-center bg-transparent"
              />
            </div>

            {/* language icon */}
            <div className="icon flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm ">
              <Image src={icon} alt="language icon" width={20} height={20} />
            </div>
          </div>
          <AceEditor
            value={code}
            name="UNIQUE_ID_OF_DIV"
            fontSize={14}
            theme={theme.toLowerCase()}
            mode={language.toLowerCase()}
            wrapEnabled={true}
            showGutter={false}
            // height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`}
            showPrintMargin={false}
            highlightActiveLine={false}
            editorProps={{ $blockScrolling: true }}
            className="ace-editor-container"
            style={{
              transition: "height 0.3s ease",
              height: `calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`,
            }}
          />
        </div>
      </div>
    </Resizable>
  );
}

export default CodeEditor;
