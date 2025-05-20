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
              <CriteriaExample>
                <Triangle /> is &lt; 3
              </CriteriaExample>

              <CriteriaExample>
                <Triangle /> is = 3
              </CriteriaExample>

              <CriteriaExample>
                <Triangle /> is &gt; 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> is &lt; 3
              </CriteriaExample>

              <CriteriaExample>
                <Triangle /> is = 3
              </CriteriaExample>

              <CriteriaExample>
                <Square /> is &gt; 3
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Circle /> is &lt; 3
              </CriteriaExample>

              <CriteriaExample>
                <Triangle /> is = 3
              </CriteriaExample>

              <CriteriaExample>
                <Circle /> is &gt; 3
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
