import Square from "~/components/icons/square";
import Criterion from "../criterion";
import Circle from "~/components/icons/circle";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";

export default function Criterion38() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the sum of 2 specific colours is equal to 6</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-38-a">
                <div className="gap-4 items-center">
                  <div>
                    <Triangle /> + <Square /> = 6
                  </div>
                </div>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-38-b">
                <div className="gap-4 items-center">
                  <div>
                    <Triangle /> + <Circle /> = 6
                  </div>
                </div>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-38-c">
                <div className="gap-4 items-center">
                  <div>
                    <Square /> + <Circle /> = 6
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
