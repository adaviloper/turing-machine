import React from 'react';
import Criterion from "../criterion";
import Square from "~/components/icons/square";
import Circle from "~/components/icons/circle";
import Triangle from "~/components/icons/triangle";
import CriteriaExample from "../criteria-example";

export default function Criterion18() {
  return (
    <div>
      <Criterion
        header={
          <h2>This verifier verifies... if the sum of all the numbers is even or odd</h2>
        }
        body={
          <>
            <div>
              <CriteriaExample>
                <Triangle /> + <Square /> + <Circle /> = Even
              </CriteriaExample>
            </div>

            <div>
              <CriteriaExample>
                <Triangle /> + <Square /> + <Circle /> = Odd
              </CriteriaExample>
            </div>
          </>
        }
      />
    </div>
  );
}
