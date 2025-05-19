import CriteriaExample from "../criteria-example";
import Criterion from "../criterion";

export default function Criterion10() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the number of 4s in the code</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-10-a">
                <p>
                  Zero 4s
                </p>
                <p>
                  123
                </p>
              </CriteriaExample>
            </div>
            <div>
              <CriteriaExample id="criterion-10-b">
                <p>
                  One 4
                </p>
                <p>
                  435
                </p>
              </CriteriaExample>
            </div>
            <div>
              <CriteriaExample id="criterion-10-c">
                <p>
                  Two 4s
                </p>
                <p>
                  434
                </p>
              </CriteriaExample>
            </div>
            <div>
              <CriteriaExample id="criterion-10-d">
                <p>
                  Three 4s
                </p>
                <p>
                  444
                </p>
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
