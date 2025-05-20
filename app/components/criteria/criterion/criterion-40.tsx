import React from 'react';
import Criterion from "../criterion";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";
import Square from "~/components/icons/square";
import Circle from "~/components/icons/circle";

export default function Criterion40() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the number of one specific colour compared to 3</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-40-a" >
                <Triangle /> is &lt; 3
              </CriteriaExample>

              <CriteriaExample id="criterion-40-b" >
                <Triangle /> is = 3
              </CriteriaExample>

              <CriteriaExample id="criterion-40-c" >
                <Triangle /> is &gt; 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-40-d" >
                <Square /> is &lt; 3
              </CriteriaExample>

              <CriteriaExample id="criterion-40-e" >
                <Triangle /> is = 3
              </CriteriaExample>

              <CriteriaExample id="criterion-40-f" >
                <Square /> is &gt; 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-40-g" >
                <Circle /> is &lt; 3
              </CriteriaExample>

              <CriteriaExample id="criterion-40-h" >
                <Triangle /> is = 3
              </CriteriaExample>

              <CriteriaExample id="criterion-40-i" >
                <Circle /> is &gt; 3
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
