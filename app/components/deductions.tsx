import NumberInput from "./guesses/NumberInput";

export default function Deductions() {
  return (
    <div className="deduced-information border-1 rounded">
      <h2>Deductions</h2>
      <div className="max-w-7xl w-full space-y-6 px-4">
        <div className="flex justify-between">
          <div>T</div>
          <div>S</div>
          <div>C</div>
        </div>

        <div className="flex justify-between">
          <NumberInput />
          <NumberInput />
          <NumberInput />
        </div>

        <div className="flex justify-between">
          <div>5</div>
          <div>5</div>
          <div>5</div>
        </div>
        <div className="flex justify-between">
          <div>4</div>
          <div>4</div>
          <div>4</div>
        </div>
        <div className="flex justify-between">
          <div>3</div>
          <div>3</div>
          <div>3</div>
        </div>
        <div className="flex justify-between">
          <div>2</div>
          <div>2</div>
          <div>2</div>
        </div>
        <div className="flex justify-between">
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
}
