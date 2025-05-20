import { useEffect, useState } from "react";
import GuessSubmission from "./guess-submission";
import NumberInput from "./NumberInput";
import type { Nullable } from "~/utils/types";

type ResponseKey = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'

type Responses = {
  [K in ResponseKey]?: string;
};

export default function Guess() {
  const [triangle, setTriangle] = useState<Nullable<string>>(null);
  const [square, setSquare] = useState<Nullable<string>>(null);
  const [circle, setCircle] = useState<Nullable<string>>(null);
  const [responses, setResponses] = useState<Responses>({});

  const handleDigitSelect = (shape: string, val: string) => {
    if (shape === 'triangle') {
      setTriangle(`${val}`);
    }
    if (shape === 'square') {
      setSquare(`${val}`);
    }
    if (shape === 'circle') {
      setCircle(`${val}`);
    }
  };

  const handleGuessSubmissionSelection = (criterion: ResponseKey, response: string) => {
    const nextResponses = {...responses};

    if (response === 'unselected') {
      delete nextResponses[criterion];
    } else {
      nextResponses[criterion] = response;
    }

    if (Object.keys(nextResponses).length > 3 && response !== 'unselected') {
      return;
    }


    setResponses({
      ...nextResponses,
    })
  };

  const canValidate = Boolean(!!triangle && !!square && !!circle);
  const canUpdateResponse = (key: ResponseKey): boolean => {
    return canValidate && (Object.keys(responses).length < 3 || Boolean(responses[key]));
  }

  const criteriaList: ResponseKey[] = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <div className="rounded flex">
      <div className="flex justify-between flex-1 justify-around">
        <NumberInput onSelect={(val: string) => handleDigitSelect('triangle', val)} />

        <NumberInput onSelect={(val: string) => handleDigitSelect('square', val)} />

        <NumberInput onSelect={(val: string) => handleDigitSelect('circle', val)} />

        {criteriaList.map(criterion => (
          <GuessSubmission
            key={`key-${criterion}`}
            disabled={!canUpdateResponse(criterion)}
            onSelectHandler={(response: string) => handleGuessSubmissionSelection(criterion, response)}
          />
        ))}

      </div>
    </div>
  );
}
