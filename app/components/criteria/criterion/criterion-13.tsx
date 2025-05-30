import React from 'react';
import Square from "~/components/icons/square";
import Criterion from "../criterion";
import Circle from "~/components/icons/circle";
import CriteriaExample from "../criteria-example";

export default function Criterion13() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the <Square /> number compared to the <Circle /> number</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <Square /> &lt; <Circle />
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> = <Circle />
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> &gt; <Circle />
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
