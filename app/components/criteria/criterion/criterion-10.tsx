import React from 'react';
import CriteriaExample from "../criteria-example";
import Criterion from "../criterion";

export default function Criterion10() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the number of 4s in the code</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <p>
                  Zero 4s
                </p>
                <p>
                  123
                </p>
              </CriteriaExample>
            </div>
            <div>
              <CriteriaExample>
                <p>
                  One 4
                </p>
                <p>
                  435
                </p>
              </CriteriaExample>
            </div>
            <div>
              <CriteriaExample>
                <p>
                  Two 4s
                </p>
                <p>
                  434
                </p>
              </CriteriaExample>
            </div>
            <div>
              <CriteriaExample>
                <p>
                  Three 4s
                </p>
                <p>
                  444
                </p>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
