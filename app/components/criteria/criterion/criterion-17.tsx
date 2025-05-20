import React from 'react';
import CriteriaExample from "../criteria-example";
import Criterion from "../criterion";

export default function Criterion17() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the number of even numbers in the code</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <p>
                  Zero even numbers
                </p>
                <p>
                  135
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  One even number
                </p>
                <p>
                  323
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  Two even numbers
                </p>
                <p>
                  432
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  Three even numbers
                </p>
                <p>
                  242
                </p>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
