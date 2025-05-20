import React from 'react';
import Square from "~/components/icons/square";
import Criterion from "../criterion";
import Circle from "~/components/icons/circle";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";

export default function Criterion37() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the sum of 2 specific colours is equal to 4</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <div className="gap-4 items-center">
                  <div>
                    <Triangle /> + <Square /> = 4
                  </div>
                </div>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <div className="gap-4 items-center">
                  <div>
                    <Triangle /> + <Circle /> = 4
                  </div>
                </div>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <div className="gap-4 items-center">
                  <div>
                    <Square /> + <Circle /> = 4
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
