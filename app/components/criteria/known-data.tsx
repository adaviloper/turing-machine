import React from 'react';
import CriteriaBlock from "./criteria-block";

export default function KnownData() {
  return (
    <div className="flex flex-col items-center gap-16 min-h-0 rounded-xl w-full my-8">
      <div className="flex flex-col items-center gap-2 min-h-0 w-full">
        <div className="w-full flex gap-2">
          <div className="rounded-tl-xl w-full bg-green-100">
            <CriteriaBlock />
          </div>

          <div className="rounded-tr-xl w-full bg-green-100">
            <CriteriaBlock />
          </div>
        </div>

        <div className="w-full flex gap-2">
          <div className="rounded w-full bg-green-100">
            <CriteriaBlock />
          </div>

          <div className="rounded w-full bg-green-100">
            <CriteriaBlock />
          </div>
        </div>

        <div className="w-full flex gap-2">
          <div className="rounded-bl-xl  w-full bg-green-100">
            <CriteriaBlock />
          </div>

          <div className="rounded-br-xl w-full bg-green-100">
            <CriteriaBlock />
          </div>
        </div>
      </div>
    </div>
  );
}
