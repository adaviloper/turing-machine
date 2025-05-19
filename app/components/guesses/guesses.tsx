import Guess from "./guess";

export function Guesses() {
  return (
    <div className="rounded flex-1">
      <h2>Guesses</h2>
      <div className="max-w-7xl w-full space-y-6 px-4 rounded">
        <div className="flex justify-around flex-1 rounded border-1">
          <div className="flex flex-3 justify-around">
            <div className="text-center">
              <img src="https://turingmachine.info/static/media/ico_bluetriangle.46d683ce64d22d400a27.svg" />
            </div>
            <div className="text-center">
              <img src="https://turingmachine.info/static/media/ico_yellowsquare.f4b8c974306c5dd27378.svg" />
            </div>
            <div className="text-center">
              <img src="https://turingmachine.info/static/media/ico_purplecircle.0eb3434d30e2005802ee.svg" />
            </div>
          </div>

          <div className="flex flex-6 justify-around">
            <div className="text-center">A</div>
            <div className="text-center">B</div>
            <div className="text-center">C</div>
            <div className="text-center">D</div>
            <div className="text-center">E</div>
            <div className="text-center">F</div>
          </div>
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
