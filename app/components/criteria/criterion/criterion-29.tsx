import React from 'react';
import Criterion from "../criterion";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";
import Square from "~/components/icons/square";
import Circle from "~/components/icons/circle";

export default function Criterion29() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... that a specific colour is equal to 3</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-29-a" >
                <Triangle /> = 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-29-b" >
                <Square /> = 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-29-c" >
                <Circle /> = 3
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
