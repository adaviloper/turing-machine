import React from 'react';
import Criterion from "../criterion";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";
import Square from "~/components/icons/square";
import Circle from "~/components/icons/circle";

export default function Criterion28() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... that a specific colour is equal to 1</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <Triangle /> = 1
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> = 1
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Circle /> = 1
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
