import React from 'react';
import Criterion from "../criterion";
import Square from "~/components/icons/square";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";

export default function Criterion19() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if the sum of <Triangle /> and <Square /> compared to 6</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-19-a">
                <Triangle /> + <Square /> &lt; 6
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-19-b">
                <Triangle /> + <Square /> = 6
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-19-c">
                <Triangle /> + <Square /> &gt; 6
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
