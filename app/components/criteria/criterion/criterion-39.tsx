import React from 'react';
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
              <CriteriaExample>
                <Triangle /> is = 1
              </CriteriaExample>

              <CriteriaExample>
                <Triangle /> is &gt; 1
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Square /> is = 1
              </CriteriaExample>

              <CriteriaExample>
                <Square /> is &gt; 1
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Circle /> is = 1
              </CriteriaExample>

              <CriteriaExample>
                <Circle /> is &gt; 1
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
