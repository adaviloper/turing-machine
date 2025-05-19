import Deductions from "./deductions";
import GameInfo from "./game-info"
import { Guesses } from "./guesses/guesses"
import KnownData from "./criteria/known-data";

export function GameSheet() {
  return (
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0 border-1 rounded">
      <div className="round-guesses top-half border-1 rounded flex w-full">
        <div className="rounded flex-4">
          <Guesses />
        </div>

        <div className="rounded flex-1">
          <GameInfo />

          <Deductions />
        </div>
      </div>

      <KnownData />
    </div>
  );
}

