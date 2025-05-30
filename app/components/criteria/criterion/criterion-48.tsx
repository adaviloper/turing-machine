import React from 'react';
import Square from "~/components/icons/square";
import Criterion from "../criterion";
import Circle from "~/components/icons/circle";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";

export default function Criterion48() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... which colour is the smallest or the largest</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <div className="flex gap-4 items-center">
                  <div>
                    <Triangle />
                  </div>
                  <div>
                    &lt;
                  </div>
                  <div>
                    <Square />
                  </div>
                </div>
              </CriteriaExample>

              <CriteriaExample>
                <div className="flex gap-4 items-center">
                  <div>
                    <Triangle />
                  </div>
                  <div>
                    =
                  </div>
                  <div>
                    <Square />
                  </div>
                </div>
              </CriteriaExample>

              <CriteriaExample>
                <div className="flex gap-4 items-center">
                  <div>
                    <Triangle />
                  </div>
                  <div>
                    &gt;
                  </div>
                  <div>
                    <Square />
                  </div>
                </div>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <div className="flex gap-4 items-center">
                  <div>
                    <Triangle />
                  </div>
                  <div>
                    &lt;
                  </div>
                  <div>
                    <Circle />
                  </div>
                </div>
              </CriteriaExample>

              <CriteriaExample>
                <div className="flex gap-4 items-center">
                  <div>
                    <Triangle />
                  </div>
                  <div>
                    =
                  </div>
                  <div>
                    <Circle />
                  </div>
                </div>
              </CriteriaExample>

              <CriteriaExample>
                <div className="flex gap-4 items-center">
                  <div>
                    <Triangle />
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

            <div>
              <CriteriaExample>
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

              <CriteriaExample>
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

              <CriteriaExample>
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
