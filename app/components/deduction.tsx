import { useState } from "react";

type Props = {
  value: number;
};

export default function Deduction({ value }: Props) {
  const [evaluation, setEvaluation] = useState(`${value}`)
  const [step, setStep] = useState(0);
  const onClick = () => {
    if (step % 2 === 0) {
      setEvaluation('X');
    } else if (step % 2 === 1) {
      setEvaluation(`${value}`)
    } else {
      setStep(0);
    }
    setStep(step + 1);
  };

  return (
    <div
      className="w-full text-center cursor-pointer"
      onClick={onClick}
    >
      {evaluation}
    </div>
  );
}
