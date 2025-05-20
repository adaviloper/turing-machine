import React from 'react';
import DropDown from "../forms/drop-down";

type Props = {
  onSelect?: (val: string) => void;
};

export default function NumberInput({ onSelect }: Props) {
  const numericOptions = [
    { value: '-', label: '-' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ];

  return (
    <div>             
      <DropDown
        {
          ...(onSelect && { onSelectHandler: onSelect })
        }
        options={numericOptions}
        defaultOption="-"
      />
    </div>
  );
}
