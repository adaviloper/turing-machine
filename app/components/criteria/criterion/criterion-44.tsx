import React from 'react';
import Square from "~/components/icons/square";
import Criterion from "../criterion";
import Circle from "~/components/icons/circle";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";

export default function Criterion44() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the <Triangle /> number compared to the number of another specific colour</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-44-a">
                <div className="flex gap-4 items-center">
                  <div>
                    <Square />
                  </div>
                  <div>
                    &lt;
                  </div>
                  <div>
                    <Triangle />
                  </div>
                </div>
              </CriteriaExample>

              <CriteriaExample id="criterion-44-b">
                <div className="flex gap-4 items-center">
                  <div>
                    <Square />
                  </div>
                  <div>
                    &lt;
                  </div>
                  <div>
                    <Circle />
                  </div>
                </div>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-44-c">
                <div className="flex gap-4 items-center">
                  <div>
                    <Square />
                  </div>
                  <div>
                    =
                  </div>
                  <div>
                    <Triangle />
                  </div>
                </div>
              </CriteriaExample>

              <CriteriaExample id="criterion-44-d">
                <div className="flex gap-4 items-center">
                  <div>
                    <Square />
                  </div>
                  <div>
                    =
                  </div>
                  <div>
                    <Circle />
                  </div>
                </div>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-44-e">
                <div className="flex gap-4 items-center">
                  <div>
                    <Square />
                  </div>
                  <div>
                    &gt;
                  </div>
                  <div>
                    <Triangle />
                  </div>
                </div>
              </CriteriaExample>

              <CriteriaExample id="criterion-44-f">
                <div className="flex gap-4 items-center">
                  <div>
                    <Square />
                  </div>
                  <div>
                    &gt;
                  </div>
                  <div>
                    <Circle />
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
