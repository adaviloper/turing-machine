import React from 'react';
import Square from "~/components/icons/square";
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion03() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the <Square /> number compared to 3</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <Square /> &lt; 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> = 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> &gt; 3
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
