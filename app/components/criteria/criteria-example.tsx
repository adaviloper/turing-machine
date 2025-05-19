import type { PropsWithChildren } from "react";
import CriterionCheckBox from "../forms/CriterionCheckBox";

type Props = {
  id: string;
}

export default function CriteriaExample({ id, children }: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col mb-6 cursor-pointer">
      <label htmlFor={id} className="inline cursor-pointer">
        {children}
      </label>
      <div className="grid justify-items-center mt-4">
        <CriterionCheckBox checkBoxId={id} />
      </div>
    </div>
  );
};
