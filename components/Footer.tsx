"use client";

import Link from "next/link";
import React from "react";
import { ExternalLink, Linkedin } from "lucide-react";

function Footer() {
  return (
    <div className="flex items-center gap-20 py-16">
      <Link
        className="flex items-center justify-center gap-2 text-xs font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href={"https://www.linkedin.com/in/the-naveen-chandra/"}
      >
        <Linkedin className="h-3 w-3" />
        The-Naveen-Chandra
      </Link>
      <div className="flex items-center justify-center gap-2 text-xs font-medium hover:text-slate-200 ease-in-out transition-all duration-500">
        Made by
        <span className="font-bold hover:text-rose-500 text-sm">
          Naveen Chandra 🕹️
        </span>
      </div>
      <Link
        className="flex items-center justify-center gap-2 text-xs font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href={"https://github.com/The-Naveen-Chandra/code-doodle"}
      >
        GitHub Repo
        <ExternalLink className="h-3 w-3" />
      </Link>
    </div>
  );
}

export default Footer;
