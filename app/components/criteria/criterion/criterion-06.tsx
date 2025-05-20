import React from 'react';
import Square from "~/components/icons/square";
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion06() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if <Square /> is even or odd</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-06-a">
                <Square /> is even
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-06-b">
                <Square /> is odd
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
