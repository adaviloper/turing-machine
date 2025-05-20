import React from 'react';
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion22() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if the 3 numbers in the code are in ascending order, descending order, or no order</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-22-a">
                <p>
                  Ascending order
                </p>

                <p>
                  135
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-22-b">
                <p>
                  Descending order
                </p>

                <p>
                  422
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-22-c">
                <p>
                  No order
                </p>

                <p>
                  231
                </p>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
