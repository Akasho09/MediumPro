

export const MainnSkeleton = () => {
  return (
    <div
      role="status"
      className=" grid grid-rows-16 gap-4 m-40 mt-0 h-full p-4 space-y-4 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
    >
        {/* Top Rows */}
        <div className="row-span-2 bg-gray-300 dark:bg-gray-600"></div>
        <div className="row-span-2 h-2 bg-gray-300 dark:bg-gray-600"></div>
        <div className="row-span-2  h-3 bg-gray-300 dark:bg-gray-600"></div>
          <div className="row-span-12 grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-2">
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
            </div>
            <div className="col-span-1 h-full bg-gray-300 rounded dark:bg-gray-600"></div>
          </div>
          <div className="row-span-12 grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-2">
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
            </div>
            <div className="col-span-1 h-full bg-gray-300 rounded dark:bg-gray-600"></div>
          </div>
          <div className="row-span-12 grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-2">
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
            </div>
            <div className="col-span-1 h-full bg-gray-300 rounded dark:bg-gray-600"></div>
          </div>
          <div className="row-span-12 grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-2">
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
            </div>
            <div className="col-span-1 h-full bg-gray-300 rounded dark:bg-gray-600"></div>
          </div>
      </div>
  );
};
