import React from 'react';
import CriteriaExample from "../criteria-example";
import Criterion from "../criterion";

export default function Criterion09() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the number of 3s in the code</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-17-a">
              <p>
                Zero 3s
              </p>
              <p>
                222
              </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-17-b">
              <p>
                One 3
              </p>
              <p>
                135
              </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-17-c">
              <p>
                Two 3s
              </p>
              <p>
                331
              </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-17-d">
                <p>
                  Three 3s
                </p>
                <p>
                  333
                </p>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
