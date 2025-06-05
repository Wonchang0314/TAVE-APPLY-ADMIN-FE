export default function SkeletonAccordion() {
  return (
    <div className="w-full rounded-[20px] border border-gray-300 bg-white px-6 py-5 animate-pulse">
      <div className="flex justify-between items-center mb-5">
        <div className="h-5 w-3/4 bg-gray-200 rounded" />
      </div>
      <div className="w-full h-px bg-gray-300 mb-5" />
      <div className="space-y-3">
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
        <div className="h-4 w-2/3 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
