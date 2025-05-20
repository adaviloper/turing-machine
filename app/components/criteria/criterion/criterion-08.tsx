import React from 'react';
import CriteriaExample from "../criteria-example";
import Criterion from "../criterion";

export default function Criterion08() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the number of 1s in the code</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <p>
                  Zero 1s
                </p>
                <p>
                  222
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  One 1
                </p>
                <p>
                  125
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  Two 1s
                </p>
                <p>
                  112
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  Three 1s
                </p>
                <p>
                  111
                </p>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
