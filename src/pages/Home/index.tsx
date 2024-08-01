import React, { useState } from "react";
import { tv } from "tailwind-variants";
import { Content } from "./utils/content-options";

const navItems = tv({
  base: "p-2 rounded cursor-pointer transition-all",
  variants: {
    selected: {
      true: "bg-blue-600",
      false: "bg-slate-600 hover:bg-slate-700",
    },
  },
});

type NavItems = "deploy-vercel" | "merge-branch" | "rollback";

export const Home: React.FC = () => {
  const [selectedItem, setSelectedItem] =
    useState<NavItems>("deploy-vercel");

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-slate-800 rounded p-2 flex gap-4 w-8/12 h-5/6">
        <div className="flex flex-col gap-1 bg-slate-700 p-2 bg-opacity-50 rounded">
          <span
            className={navItems({
              selected: selectedItem === "deploy-vercel",
            })}
            onClick={() => setSelectedItem("deploy-vercel")}
          >
            Deploy on Vercel
          </span>
          <span
            className={navItems({ selected: selectedItem === "merge-branch" })}
            onClick={() => setSelectedItem("merge-branch")}
          >
            Merge Branch
          </span>
          <span
            className={navItems({ selected: selectedItem === "rollback" })}
            onClick={() => setSelectedItem("rollback")}
          >
            Rollback
          </span>
        </div>
        <div className="p-2 rounded overflow-auto">
          <Content fileName={selectedItem} />
        </div>
      </div>
    </div>
  );
};
