import Criterion from "../criterion";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";
import Square from "~/components/icons/square";
import Circle from "~/components/icons/circle";

export default function Criterion34() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... which colour has the smallest number (or is tied for the smallest number)</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-35-a">
                <div className="flex gap-4 items-center">
                  <div>
                    <Triangle />
                  </div>
                  <div>
                    &lt;=
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
              <CriteriaExample id="criterion-35-b">
                <div className="flex gap-4 items-center">
                  <div>
                    <Square />
                  </div>
                  <div>
                    &lt;=
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
              <CriteriaExample id="criterion-35-c">
                <div className="flex gap-4 items-center">
                  <div>
                    <Circle />
                  </div>
                  <div>
                    &lt;=
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
