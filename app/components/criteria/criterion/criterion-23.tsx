import React from 'react';
import Criterion from "../criterion";
import Square from "~/components/icons/square";
import Triangle from "~/components/icons/triangle";
import Circle from "~/components/icons/circle";
import CriteriaExample from "../criteria-example";

export default function Criterion23() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if the sum of all numbers compared to 6</h2>
        }
        body={
          <>
            <div className="flex flex-col gap-6">
              <div>
                <CriteriaExample id="criterion-23-a">
                  <Triangle /> + <Square /> + <Circle /> &lt; 6
                </CriteriaExample>
              </div>

              <div>
                <CriteriaExample id="criterion-23-b">
                  <Triangle /> + <Square /> + <Circle /> = 6
                </CriteriaExample>
              </div>

              <div>
                <CriteriaExample id="criterion-23-c">
                  <Triangle /> + <Square /> + <Circle /> &gt; 6
                </CriteriaExample>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}
