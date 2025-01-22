export const BlogSkelton = ()=>{
    return   <div role="status" className="w-full p-4 space-y-4 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
    <div className="">
      {/* TopBar Skeleton */}
      <div className="">
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-48"></div> {/* Replace TopBar with placeholder */}
      </div>

      {/* Subs Skeleton */}
      <div className="flex justify-center">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-32 mb-4"></div> {/* Placeholder for Subs */}
      </div>

      {/* Blog Content Skeleton */}
      <div className="grid grid-rows-3 grid-cols-3 gap-6">
        <div className="row-span-3 col-span-2 space-y-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-64"></div> {/* Blog Title */}
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-40"></div> {/* Date */}
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div> {/* Blog Content */}
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div> {/* More Blog Content */}
        </div>

        {/* Author Profile Skeleton */}
        <div className="col-span-1 row-span-2 pl-8 pt-8 space-y-4">
          <div className="h-16 w-16 rounded-full bg-gray-300 dark:bg-gray-600"></div> {/* Profile DP */}
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div> {/* Author Name */}
        </div>
      </div>
    </div>
</div>
}