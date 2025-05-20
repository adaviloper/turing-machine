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
              <CriteriaExample id="criterion-33-a" >
                <Triangle /> is even
              </CriteriaExample>

              <CriteriaExample id="criterion-33-b" >
                <Triangle /> is odd
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-33-c" >
                <Square /> is even
              </CriteriaExample>

              <CriteriaExample id="criterion-33-d" >
                <Square /> is odd
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-33-e" >
                <Circle /> is even
              </CriteriaExample>

              <CriteriaExample id="criterion-33-f" >
                <Circle /> is odd
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
