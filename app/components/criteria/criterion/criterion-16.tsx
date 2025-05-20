import React from 'react';
import CriteriaExample from "../criteria-example";
import Criterion from "../criterion";

export default function Criterion16() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the number of even numbers compared to the number of odd numbers</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                Even &gt; Odd
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                Even &lt; Odd
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
