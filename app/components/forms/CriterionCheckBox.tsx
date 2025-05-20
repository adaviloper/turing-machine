import React from 'react';
import { Checkbox } from "radix-ui";
import { CheckIcon, CircleIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

type Props = {
  checkBoxId: string;
};

export default function CriterionCheckBox({ checkBoxId }: Props) {
  const [checkedState, setCheckedState] = useState('-');
  const [step, setStep] = useState(0);

  const onClick = () => {
    if (step % 3 === 0) {
      setCheckedState('X');
    } else if (step % 3 === 1) {
      setCheckedState('O')
    } else {
      setCheckedState('-');
    }
    setStep(step + 1);
  };

  return (
        <Checkbox.Root onClick={onClick} checked={true} id={checkBoxId}>
          <Checkbox.Indicator>
            {checkedState === 'O' && <CheckIcon />}
            {checkedState === 'X' && <Cross1Icon />}
            {checkedState === '-' && <CircleIcon />}
          </Checkbox.Indicator>
        </Checkbox.Root>
  );
};
