export const MainnSkeleton = () => {
  return (
    <div
      role="status"
      className="h-screen grid grid-cols-5 grid-rows-10 w-full p-4 space-y-4 divide-y divide-gray-200 rounded shadow animate-pulse"
    >
      <div 
          className={`row-span-1 bg-gray-300 rounded col-span-5`}
      ></div>
      {[1,2,3,3].map((height, index) => (
        <div
          key={index}
          className={`row-span-${height} bg-gray-300 rounded col-span-3  col-start-2  `}
        ></div>
      ))}
    </div>
  );
};
