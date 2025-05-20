import React from 'react';
import Criterion from "../criterion";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";
import Square from "~/components/icons/square";
import Circle from "~/components/icons/circle";

export default function Criterion41() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... the number of one specific colour compared to 4</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample id="criterion-41-a" >
                <Triangle /> is &lt; 4
              </CriteriaExample>

              <CriteriaExample id="criterion-41-b" >
                <Triangle /> is = 4
              </CriteriaExample>

              <CriteriaExample id="criterion-41-c" >
                <Triangle /> is &gt; 4
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-41-d" >
                <Square /> is &lt; 4
              </CriteriaExample>

              <CriteriaExample id="criterion-41-e" >
                <Triangle /> is = 4
              </CriteriaExample>

              <CriteriaExample id="criterion-41-f" >
                <Square /> is &gt; 4
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample id="criterion-41-g" >
                <Circle /> is &lt; 4
              </CriteriaExample>

              <CriteriaExample id="criterion-41-h" >
                <Triangle /> is = 4
              </CriteriaExample>

              <CriteriaExample id="criterion-41-i" >
                <Circle /> is &gt; 4
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
