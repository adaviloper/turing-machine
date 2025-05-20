import React from 'react';
import Triangle from "~/components/icons/triangle";
import Criterion from "../criterion";
import Circle from "~/components/icons/circle";
import CriteriaExample from "../criteria-example";

export default function Criterion12() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the <Triangle /> number compared to the <Circle /> number</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <Triangle /> &lt; <Circle />
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Triangle /> = <Circle />
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Triangle /> &gt; <Circle />
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
