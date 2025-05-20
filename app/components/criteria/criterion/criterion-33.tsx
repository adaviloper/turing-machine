import React from 'react';
import Criterion from "../criterion";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";
import Square from "~/components/icons/square";
import Circle from "~/components/icons/circle";

export default function Criterion33() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... that a specific colour is even or odd</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <Triangle /> is even
              </CriteriaExample>

              <CriteriaExample>
                <Triangle /> is odd
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> is even
              </CriteriaExample>

              <CriteriaExample>
                <Square /> is odd
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Circle /> is even
              </CriteriaExample>

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
