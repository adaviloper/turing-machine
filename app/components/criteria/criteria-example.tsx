import React, { useId } from 'react';
import type { PropsWithChildren } from "react";
import CriterionCheckBox from "../forms/CriterionCheckBox";

export default function CriteriaExample({ children }: PropsWithChildren) {
  const fieldId = useId();
  return (
    <div className="flex flex-col mb-6 cursor-pointer">
      <label htmlFor={fieldId} className="inline cursor-pointer">
        {children}
      </label>
      <div className="grid justify-items-center mt-4">
        <CriterionCheckBox checkBoxId={fieldId} />
      </div>
    </div>
  );
};
