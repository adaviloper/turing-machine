import Guess from "./guess";

export function Guesses() {
  return (
    <div className="rounded flex-1">
      <h2>Guesses</h2>
      <div className="max-w-7xl w-full space-y-6 px-4 rounded">
        <div className="flex justify-around flex-1 rounded border-1">
          <div className="text-center">T</div>
          <div className="text-center">S</div>
          <div className="text-center">C</div>
          <div className="text-center">A</div>
          <div className="text-center">B</div>
          <div className="text-center">C</div>
          <div className="text-center">D</div>
          <div className="text-center">E</div>
          <div className="text-center">F</div>
        </div>

        <Guess />
        <Guess />
        <Guess />
        <Guess />
        <Guess />
        <Guess />
      </div>
    </div>
  );
}
