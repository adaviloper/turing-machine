import Circle from "~/components/icons/circle";
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion07() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if <Circle /> is even or odd</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-07-a">
                <Circle /> is even 
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-07-b">
                <Circle /> is odd
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
