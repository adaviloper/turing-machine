import { type PropsWithChildren } from "react";

type Props = {
};

export default function CriteriaBody({ children }: PropsWithChildren<Props>) {
  return (
      <div className="flex justify-around pt-6">
        {children}
      </div>
  );
};
