import React from 'react';
import { type PropsWithChildren } from "react";

export default function CriteriaBody({ children }: PropsWithChildren) {
  return (
      <div className="flex justify-around pt-6">
        {children}
      </div>
  );
};
