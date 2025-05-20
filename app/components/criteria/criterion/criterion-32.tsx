import React from 'react';
import Criterion from "../criterion";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";
import Square from "~/components/icons/square";
import Circle from "~/components/icons/circle";

export default function Criterion32() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... that a specific colour is greater than 3</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <Triangle /> &gt; 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> &gt; 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Circle /> &gt; 3
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
