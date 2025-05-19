import Criterion from "../criterion";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";
import Square from "~/components/icons/square";
import Circle from "~/components/icons/circle";

export default function Criterion39() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the number of one specific colour compared to 1</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-39-a" >
                <Triangle /> is = 1
              </CriteriaExample>

              <CriteriaExample id="criterion-39-b" >
                <Triangle /> is &gt; 1
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-39-c" >
                <Square /> is = 1
              </CriteriaExample>

              <CriteriaExample id="criterion-39-d" >
                <Square /> is &gt; 1
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-39-e" >
                <Circle /> is = 1
              </CriteriaExample>

              <CriteriaExample id="criterion-39-f" >
                <Circle /> is &gt; 1
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
