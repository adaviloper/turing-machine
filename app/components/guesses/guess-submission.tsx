import DropDown from "../forms/drop-down";

const submissionOptions = [
  {
    value: 'unselected',
    label: '-',
  },
  {
    value: 'incorrect',
    label: 'X',
  },
  {
    value: 'correct',
    label: 'O',
  },
];

type Props = {
  disabled: boolean;
  onSelectHandler: (val: string) => void
};

export default function GuessSubmission({ disabled, onSelectHandler }: Props) {
  return (
	  <DropDown
      defaultOption="unselected"
      disabled={disabled}
      onSelectHandler={onSelectHandler}
      options={submissionOptions}
    />
  );
}
