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
              <CriteriaExample>
                <Square /> &lt; 4
              </CriteriaExample>
            </div>
            <div>
              <CriteriaExample>
                <Square /> = 4
              </CriteriaExample>
            </div>
            <div>
              <CriteriaExample>
                <Square /> &gt; 4
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
