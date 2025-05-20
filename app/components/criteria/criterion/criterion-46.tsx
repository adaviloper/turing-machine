import React from 'react';
import CriteriaExample from "../criteria-example";
import Criterion from "../criterion";

export default function Criterion46() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... how many 3s OR how many 4s there are in the code</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-46-a">
                <p>
                  252 Zero 3s
                </p>
              </CriteriaExample>

              <CriteriaExample id="criterion-46-b">
                <p>
                  512 Zero 4s
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-46-c">
                <p>
                  11<u>3</u> One 3
                </p>
              </CriteriaExample>

              <CriteriaExample id="criterion-46-d">
                <p>
                  <u>4</u>51 One 4
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-46-e">
                <p>
                  <u>3</u>5<u>3</u> Two 3s
                </p>
              </CriteriaExample>

              <CriteriaExample id="criterion-46-f">
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
