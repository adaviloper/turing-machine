import CriteriaExample from "../criteria-example";
import Criterion from "../criterion";

export default function Criterion17() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the number of even numbers in the code</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-17-a">
                <p>
                  Zero even numbers
                </p>
                <p>
                  135
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-17-b">
                <p>
                  One even number
                </p>
                <p>
                  323
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-17-c">
                <p>
                  Two even numbers
                </p>
                <p>
                  432
                </p>
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-17-c">
                <p>
                  Three even numbers
                </p>
                <p>
                  242
                </p>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
