import Square from "~/components/icons/square";
import Criterion from "../criterion";
import Circle from "~/components/icons/circle";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";

export default function Criterion43() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the <Triangle /> number compared to the number of another specific colour</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-43-a">
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

              <CriteriaExample id="criterion-43-b">
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
            </div>

            <div>
              <CriteriaExample id="criterion-43-c">
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

              <CriteriaExample id="criterion-43-d">
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
            </div>

            <div>
              <CriteriaExample id="criterion-43-e">
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

              <CriteriaExample id="criterion-43-f">
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
          </>
        }
      />
    </div>
  );
}
