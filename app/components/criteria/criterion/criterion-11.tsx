import React from 'react';
import Triangle from "~/components/icons/triangle";
import Criterion from "../criterion";
import Square from "~/components/icons/square";
import CriteriaExample from "../criteria-example";

export default function Criterion11() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the <Triangle /> number compared to the <Square /> number</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-11-a">
                <Triangle /> &lt; <Square />
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-11-b">
                <Triangle /> = <Square />
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-11-c">
                <Triangle /> &gt; <Square />
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
