import React from 'react';
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion24() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if there is a sequence of ascending numbers</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <p>
                  3 numbers in ascending order
                </p>

                <p>
                  234
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  2 numbers in ascending order
                </p>

                <p>
                  233
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  No numbers in ascending order
                </p>

                <p>
                  135
                </p>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
