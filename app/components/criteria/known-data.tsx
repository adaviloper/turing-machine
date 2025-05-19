import CriteriaBlock from "./criteria-block";

export default function KnownData() {
  return (
    <div className="flex flex-col items-center gap-16 min-h-0 border-1 rounded w-full">
      <h1>Knowledge</h1>
      <div className="flex flex-col items-center gap-16 min-h-0 rounded w-full">
        <div className="rounded w-full flex">
          <div className="rounded w-full p-4">
            <CriteriaBlock />
          </div>

          <div className="rounded w-full p-4">
            <CriteriaBlock />
          </div>
        </div>

        <div className="rounded w-full flex">
          <div className="rounded w-full p-4">
            <CriteriaBlock />
          </div>

          <div className="rounded w-full p-4">
            <CriteriaBlock />
          </div>
        </div>

        <div className="rounded w-full flex">
          <div className="rounded w-full p-4">
            <CriteriaBlock />
          </div>

          <div className="rounded w-full p-4">
            <CriteriaBlock />
          </div>
        </div>
      </div>
    </div>
  );
}
