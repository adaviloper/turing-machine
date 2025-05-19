import Triangle from "~/components/icons/triangle";
import CriterionCheckBox from "~/components/forms/CriterionCheckBox";
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion05() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if <Triangle /> is even or odd</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-05-a">
                <Triangle /> is even
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-05-b">
                <Triangle /> is odd
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
