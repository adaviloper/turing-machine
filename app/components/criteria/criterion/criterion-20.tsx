import React from 'react';
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion20() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if a number repeats itself in the code</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <p>
                  A triple number
                </p>

                <p>
                  222
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  A double number
                </p>

                <p>
                  222
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  No repetition
                </p>

                <p>
                  125
                </p>

              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
