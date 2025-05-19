import Criterion from "../criterion";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";
import Circle from "~/components/icons/circle";
import Square from "~/components/icons/square";

export default function Criterion26() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... that a specific colour is less than 3</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-26-a" >
                <Triangle /> &lt; 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-26-b" >
                <Square /> &lt; 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-26-c" >
                <Circle /> &lt; 3
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
