import React from 'react';
import Deductions from "./deductions";
import GameInfo from "./game-info"
import { Guesses } from "./guesses/guesses"
import KnownData from "./criteria/known-data";

export function GameSheet() {
  return (
    <div className="flex-1 flex flex-col items-center min-h-0">
      <div className="round-guesses top-half flex w-full gap-8">
        <div className="flex-4">
          <Guesses />
        </div>

        <div className="flex-1">
          <GameInfo />

          <Deductions />
        </div>
      </div>

      <KnownData />
    </div>
  );
}

