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
              <CriteriaExample>
                <Square /> is even
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> is odd
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
