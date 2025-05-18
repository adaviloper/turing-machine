import { Select } from "radix-ui";

type Option = {
  label: string;
  value: string;
};

type Props = {
  defaultOption?: string;
  disabled?: boolean;
  onSelectHandler: (value: string) => void;
  options: Option[];
};

export default function DropDown({ defaultOption, disabled, onSelectHandler, options }: Props) {
  return (
	  <Select.Root defaultValue={defaultOption} onValueChange={onSelectHandler} disabled={disabled}>
		  <Select.Trigger className={"w-16 border rounded " + (disabled ? 'border-gray-300 text-gray-300 hover:cursor-not-allowed ' : 'hover:cursor-pointer ')}>
			  <Select.Value />
		  </Select.Trigger>

		  <Select.Portal>
			  <Select.Content className="bg-white">
				  <Select.ScrollUpButton />
				  <Select.Viewport>
				    {options.map(option => (
					    <Select.Item value={option.value} className="text-center" key={`option-${option.value}`}>
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

