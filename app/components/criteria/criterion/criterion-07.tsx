import React from 'react';
import Circle from "~/components/icons/circle";
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion07() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if <Circle /> is even or odd</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <Circle /> is even 
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Circle /> is odd
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
