import React from 'react';
import Square from "~/components/icons/square";
import Criterion from "../criterion";
import Circle from "~/components/icons/circle";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";

export default function Criterion36() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the sum of all the numbers is a multiple of 3 or 4 or 5</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-36-a">
                <div className="gap-4 items-center">
                  <div>
                    <Triangle /> + <Square /> + <Circle />
                  </div>
                  <div className="text-center">
                    = 3x
                  </div>
                </div>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-36-b">
                <div className="gap-4 items-center">
                  <div>
                    <Triangle /> + <Square /> + <Circle />
                  </div>
                  <div className="text-center">
                    = 4x
                  </div>
                </div>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-36-c">
                <div className="gap-4 items-center">
                  <div>
                    <Triangle /> + <Square /> + <Circle />
                  </div>
                  <div className="text-center">
                    = 5x
                  </div>
                </div>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
