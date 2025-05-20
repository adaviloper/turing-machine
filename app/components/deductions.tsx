import Deduction from "./deduction";
import NumberInput from "./guesses/NumberInput";

export default function Deductions() {
  return (
    <div className="deduced-information rounded-xl bg-green-100">
      <div className="max-w-7xl w-full space-y-6 p-4">
        <div className="flex justify-around">
          <div>
            <img src="https://turingmachine.info/static/media/ico_bluetriangle.46d683ce64d22d400a27.svg" />
          </div>
          <div>
            <img src="https://turingmachine.info/static/media/ico_yellowsquare.f4b8c974306c5dd27378.svg" />
          </div>
          <div>
            <img src="https://turingmachine.info/static/media/ico_purplecircle.0eb3434d30e2005802ee.svg" />
          </div>
        </div>

        <div className="flex justify-between">
          <NumberInput />
          <NumberInput />
          <NumberInput />
        </div>

        {[5, 4, 3, 2, 1].map((i, idx) => (
          <div
            key={`deduction-row-${i}-${idx}`}
            className="flex justify-around"
          >
            {Array(3).fill(i).map((j, jdx) => (
              <Deduction
                key={`deduction-${i}-${j}-${jdx}`}
                value={j}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
