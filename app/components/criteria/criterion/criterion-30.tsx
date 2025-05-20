import React from 'react';
import Criterion from "../criterion";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";
import Square from "~/components/icons/square";
import Circle from "~/components/icons/circle";

export default function Criterion30() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... that a specific colour is equal to 4</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <Triangle /> = 4
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> = 4
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Circle /> = 4
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
