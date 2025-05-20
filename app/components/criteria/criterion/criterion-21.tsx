import React from 'react';
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion21() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if there is a number present exactly twice</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <p>
                  No pairs
                </p>

                <p>
                  134 | 222
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <p>
                  A pair
                </p>

                <p>
                  131
                </p>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
