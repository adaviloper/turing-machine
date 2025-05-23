import React from 'react';
import { GameSheet } from "./game-sheet";
import logoDark from "../images/logo.png";
import logoLight from "../images/logo.png";

export function Game() {
  return (
    <main className="flex items-center justify-center pt-2 pb-4">
      <div className="flex-1 flex flex-col items-center gap-4 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[300px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="max-w-7xl w-full space-y-6 px-4">
          <GameSheet />
        </div>
      </div>
    </main>
  );
}

