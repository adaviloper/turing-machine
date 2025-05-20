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
              <CriteriaExample>
                <Triangle /> is &lt; 4
              </CriteriaExample>

              <CriteriaExample>
                <Triangle /> is = 4
              </CriteriaExample>

              <CriteriaExample>
                <Triangle /> is &gt; 4
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> is &lt; 4
              </CriteriaExample>

              <CriteriaExample>
                <Triangle /> is = 4
              </CriteriaExample>

              <CriteriaExample>
                <Square /> is &gt; 4
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Circle /> is &lt; 4
              </CriteriaExample>

              <CriteriaExample>
                <Triangle /> is = 4
              </CriteriaExample>

              <CriteriaExample>
                <Circle /> is &gt; 4
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
