import React from 'react';
import Triangle from "~/components/icons/triangle";
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion05() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if <Triangle /> is even or odd</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <Triangle /> is even
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Triangle /> is odd
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
