import Square from "~/components/icons/square";
import CriterionCheckBox from "~/components/forms/CriterionCheckBox";
import Criterion from "../criterion";
import CriteriaBody from "../criteria-body";
import CriteriaExample from "../criteria-example";

export default function Criterion03() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the <Square /> number compared to 3</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-03-a">
                <Square /> &lt; 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-03-b">
                <Square /> = 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-03-c">
                <Square /> &gt; 3
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
