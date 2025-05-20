import React from 'react';
import Square from "~/components/icons/square";
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion04() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the <Square /> number compared to 4</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-04-a">
                <Square /> &lt; 4
              </CriteriaExample>
            </div>
            <div>
              <CriteriaExample id="criterion-04-b">
                <Square /> = 4
              </CriteriaExample>
            </div>
            <div>
              <CriteriaExample id="criterion-04-c">
                <Square /> &gt; 4
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
