import Triangle from "~/components/icons/triangle";
import CriterionCheckBox from "~/components/forms/CriterionCheckBox";
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion01() {
  return (
    <Criterion
      header={
        <h2>This verifier verifies... the <Triangle /> number compared to 1</h2>
      }
      body={
        <>
        <div>
          <CriteriaExample id="criterion-01-a">
            <Triangle /> = 1
          </CriteriaExample>
        </div>

        <div>
          <CriteriaExample id="criterion-01-b">
            <Triangle /> &gt; 1
          </CriteriaExample>
        </div>
        </>
      }
    />
  );
}
