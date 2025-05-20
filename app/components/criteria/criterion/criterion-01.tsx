import React from 'react';
import Triangle from "~/components/icons/triangle";
import Criterion from "../criterion";
import CriteriaExample from "../criteria-example";

export default function Criterion01() {
  return (
    <Criterion
      header={
        <h2>This verifier verifies... the <Triangle /> number compared to 1</h2>
      }
      body={
        <>
        <div>
          <CriteriaExample>
            <Triangle /> = 1
          </CriteriaExample>
        </div>

        <div>
          <CriteriaExample>
            <Triangle /> &gt; 1
          </CriteriaExample>
        </div>
        </>
      }
    />
  );
}
