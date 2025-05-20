import React from 'react';
import CriteriaExample from "../criteria-example";
import Criterion from "../criterion";

export default function Criterion47() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... how many 1s OR how many 4s there are in the code</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-47-a">
                <p>
                  252 Zero 1s
                </p>
              </CriteriaExample>

              <CriteriaExample id="criterion-47-b">
                <p>
                  512 Zero 4s
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-47-c">
                <p>
                  33<u>1</u> One 1
                </p>
              </CriteriaExample>

              <CriteriaExample id="criterion-47-d">
                <p>
                  <u>4</u>51 One 4
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-47-e">
                <p>
                  <u>1</u>5<u>1</u> Two 1s
                </p>
              </CriteriaExample>

              <CriteriaExample id="criterion-47-f">
                <p>
                  5<u>44</u> Two 4s
                </p>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
