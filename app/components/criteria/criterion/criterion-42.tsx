import React from 'react';
import Square from "~/components/icons/square";
import Criterion from "../criterion";
import Circle from "~/components/icons/circle";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";

export default function Criterion42() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... which colour is the smallest or the largest</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-42-a">
                <div className="flex gap-4 items-center">
                  <div>
                    <Triangle />
                  </div>
                  <div>
                    &lt;
                  </div>
                  <div>
                    <div className="mb-4">
                      <Circle />
                    </div>
                    <div>
                      <Square />
                    </div>
                  </div>
                </div>
              </CriteriaExample>

              <CriteriaExample id="criterion-42-b">
                <div className="flex gap-4 items-center">
                  <div>
                    <Triangle />
                  </div>
                  <div>
                    &gt;
                  </div>
                  <div>
                    <div className="mb-4">
                      <Circle />
                    </div>
                    <div>
                      <Square />
                    </div>
                  </div>
                </div>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-42-c">
                <div className="flex gap-4 items-center">
                  <div>
                    <Square />
                  </div>
                  <div>
                    &lt;
                  </div>
                  <div>
                    <div className="mb-4">
                      <Triangle />
                    </div>
                    <div>
                      <Square />
                    </div>
                  </div>
                </div>
              </CriteriaExample>

              <CriteriaExample id="criterion-42-d">
                <div className="flex gap-4 items-center">
                  <div>
                    <Square />
                  </div>
                  <div>
                    &gt;
                  </div>
                  <div>
                    <div className="mb-4">
                      <Triangle />
                    </div>
                    <div>
                      <Circle />
                    </div>
                  </div>
                </div>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-42-e">
                <div className="flex gap-4 items-center">
                  <div>
                    <Circle />
                  </div>
                  <div>
                    &lt;
                  </div>
                  <div>
                    <div className="mb-4">
                      <Square />
                    </div>
                    <div>
                      <Triangle />
                    </div>
                  </div>
                </div>
              </CriteriaExample>

              <CriteriaExample id="criterion-42-f">
                <div className="flex gap-4 items-center">
                  <div>
                    <Circle />
                  </div>
                  <div>
                    &gt;
                  </div>
                  <div>
                    <div className="mb-4">
                      <Square />
                    </div>
                    <div>
                      <Triangle />
                    </div>
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
