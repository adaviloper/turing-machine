import React from 'react';
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion25() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if there is a sequence of ascending or descending numbers</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-25-a">
                <p>
                  No sequence of numbers in ascending or descending order
                </p>

                <p>
                  135 | 531
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-25-b">
                <p>
                  2 numbers in ascending or descending order
                </p>

                <p>
                  <u>23</u>5 | 5<u>32</u>
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-25-c">
                <p>
                  3 numbers in ascending or descending order
                </p>

                <p>
                  <u>234</u> | <u>432</u>
                </p>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
