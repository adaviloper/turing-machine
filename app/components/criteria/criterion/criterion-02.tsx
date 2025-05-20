import React from 'react';
import Triangle from "~/components/icons/triangle";
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion02() {
  return (

    <Criterion
      header={
        <h2>This verifier verifies... the <Triangle /> number compared to 3</h2>
      }
      body={
        <>
          <div>
            <CriteriaExample id="criterion-02-a">
              <Triangle /> &lt; 3
            </CriteriaExample>
          </div>

          <div>
            <CriteriaExample id="criterion-02-b">
              <Triangle /> = 3
            </CriteriaExample>
          </div>

          <div>
            <CriteriaExample id="criterion-02-c">
              <Triangle /> &gt; 3
            </CriteriaExample>
          </div>
        </>
      }
    />
  );
}
