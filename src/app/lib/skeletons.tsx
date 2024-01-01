import React from "react";

// Lazy load this component
const SkeletonText: React.FC = () => {
  return (
    <div className="max-w-sm md:max-w-[920px] mt-12 w-full">
      <div className="animate-pulse flex space-x-4 mx-12">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2 mb-12"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1 mb-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1 mb-12"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2 mb-2"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
          <div className="space-y-7">
            <div className="h-2 bg-slate-200 rounded col-span-1 mt-12 mb-8"></div>
            <div className="h-2 bg-slate-200 rounded col-span-1 mb-12"></div>
            <div className="h-2 bg-slate-200 rounded col-span-2 mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonText;
