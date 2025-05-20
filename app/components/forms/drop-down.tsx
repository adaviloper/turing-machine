import React from 'react';
import { Select } from "radix-ui";

type Option = {
  label: string;
  value: string;
};

type Props = {
  defaultOption?: string;
  disabled?: boolean;
  onSelectHandler?: (value: string) => void;
  options: Option[];
};

export default function DropDown({ defaultOption, disabled, onSelectHandler, options }: Props) {
  return (
	  <Select.Root
      defaultValue={defaultOption}
      onValueChange={onSelectHandler}
      disabled={disabled}
    >
		  <Select.Trigger className={"w-16 border rounded " + (disabled ? 'border-gray-400 text-gray-400 hover:cursor-not-allowed ' : 'hover:cursor-pointer border-green-700 text-green-700')}>
			  <Select.Value />
		  </Select.Trigger>

		  <Select.Portal>
			  <Select.Content className="bg-white p-2 rounded-xl">
				  <Select.ScrollUpButton />
				  <Select.Viewport className="w-full">
				    {options.map(option => (
					    <Select.Item value={option.value} className="text-center w-full" key={`option-${option.value}`}>
						    <Select.ItemText>
                  {option.label}
                </Select.ItemText>
					    </Select.Item>
				    ))}
				  </Select.Viewport>
				  <Select.ScrollDownButton />
			  </Select.Content>
		  </Select.Portal>
	  </Select.Root>
  );
}

