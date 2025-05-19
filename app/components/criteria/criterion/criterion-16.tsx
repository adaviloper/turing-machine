import CriteriaExample from "../criteria-example";
import Criterion from "../criterion";
import CriterionCheckBox from "~/components/forms/CriterionCheckBox";

export default function Criterion16() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the number of even numbers compared to the number of odd numbers</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-16-a">
                Even &gt; Odd
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-16-b">
                Even &lt; Odd
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
