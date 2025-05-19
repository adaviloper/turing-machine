import CriterionCheckBox from "~/components/forms/CriterionCheckBox";
import Criterion from "../criterion";
import Square from "~/components/icons/square";
import Circle from "~/components/icons/circle";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";

export default function Criterion18() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if the sum of all the numbers is even or odd</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-18-a">
                <Triangle /> + <Square /> + <Circle /> = Even
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-18-b">
                <Triangle /> + <Square /> + <Circle /> = Odd
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
