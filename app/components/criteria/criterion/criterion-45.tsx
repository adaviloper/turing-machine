import React from 'react';
import CriteriaExample from "../criteria-example";
import Criterion from "../criterion";

export default function Criterion45() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... how many 1s OR how many 3s there are in the code</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <p>
                  232 Zero 1s
                </p>
              </CriteriaExample>

              <CriteriaExample>
                <p>
                  514 Zero 3s
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  33<u>1</u> One 1
                </p>
              </CriteriaExample>

              <CriteriaExample>
                <p>
                  <u>3</u>51 One 3
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  <u>1</u>5<u>1</u> Two 1s
                </p>
              </CriteriaExample>

              <CriteriaExample>
                <p>
                  5<u>33</u> Two 3s
                </p>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
