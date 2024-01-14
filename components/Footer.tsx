"use client";

import Link from "next/link";
import React from "react";
import { ExternalLink, Linkedin } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex items-center gap-20 py-16">
      <Link
        className="flex items-center justify-center gap-1 text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href={"https://www.linkedin.com/in/the-naveen-chandra/"}
      >
        <Image
          src={"/icons/linkedin.svg"}
          alt="linkedin logo"
          height={20}
          width={20}
          color="#848484"
        />
        The-Naveen-Chandra
        <ExternalLink className="h-3 w-3" />
      </Link>
      <div className="flex items-center justify-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500">
        Made by
        <span className="pl-1 font-medium text-slate-200">
          Naveen Chandra 🕹️
        </span>
      </div>
      <Link
        className="flex items-center justify-center gap-1 text-sm  font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href={"https://github.com/The-Naveen-Chandra/code-doodle"}
      >
        <Image
          src={"/icons/github.svg"}
          alt="linkedin logo"
          height={20}
          width={20}
        />
        GitHub Repo
        <ExternalLink className="h-3 w-3" />
      </Link>
    </div>
  );
}

export default Footer;
