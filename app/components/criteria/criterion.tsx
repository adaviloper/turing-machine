import { type PropsWithChildren, type ReactNode } from "react";
import CriteriaBody from "./criteria-body";

type Props = {
  header: ReactNode;
  body: ReactNode;
};

export default function Criterion({ header, body }: PropsWithChildren<Props>) {
  return (
    <div className="p-6">
      <div>
        {header}
      </div>
      <CriteriaBody>
        {body}
      </CriteriaBody>
    </div>
  );
};
