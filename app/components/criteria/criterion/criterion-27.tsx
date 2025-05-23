import React from 'react';
import Criterion from "../criterion";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";
import Square from "~/components/icons/square";
import Circle from "~/components/icons/circle";

export default function Criterion27() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... that a specific colour is less than 4</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <Triangle /> &lt; 4
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> &lt; 4
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Circle /> &lt; 4
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
