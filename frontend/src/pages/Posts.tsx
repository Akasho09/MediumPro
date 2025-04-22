import { DynamicTextProps } from '../pages/Create';
import { DynamicText } from '../pages/Create';

interface PostDetails {
  desc?: DynamicTextProps[];
  title: string;
  author: string;
}

export default function Posts({ desc, title, author }: PostDetails) {
  return (
    <div className="grid grid-rows-6 pb-10 border-b-2 border-gray-200 bg-slate-200 shadow-md rounded-xl transition hover:shadow-lg p-6">
      
      {/* Author */}
      <div className="row-span-1 text-sm text-gray-700 font-medium uppercase tracking-wide">
        By {author}
      </div>

      {/* Content Section */}
      <div className="row-span-5 grid grid-rows-5 grid-cols-5 gap-4 mt-2">
        
        {/* Text content */}
        <div className="row-span-5 col-span-4 grid grid-rows-5 gap-2">
          
          {/* Title */}
          <div className="row-span-2 text-2xl font-extrabold text-gray-900 leading-tight tracking-tight">
            {title}
          </div>

          {/* Description */}
<div className="row-span-2 text-gray-800">
  <div className="line-clamp-2 overflow-hidden text-ellipsis text-base leading-relaxed space-y-1">
    {desc?.map((d, index) => (
      <DynamicText
        key={index}
        tag={d.tag}
        className={`${d.className || ''}`}
      >
        {d.children}
      </DynamicText>
    ))}
  </div>

  <p className="mt-2 font-semibold text-blue-600 cursor-pointer hover:underline">
    .... Read more
  </p>
</div>


          {/* Footer Info */}
          <div className="row-span-1 flex justify-between items-center text-sm text-gray-500 border-t pt-2">
            <div className="pl-2 flex space-x-6">
              <span className="flex items-center gap-1">📅 23-12-2024</span>
              <span className="flex items-center gap-1">👍 100</span>
              <span className="flex items-center gap-1">💬 Comments</span>
            </div>
            <div className="pr-2 flex space-x-4">
              <button className="hover:text-blue-600 transition">✓ Save</button>
              <button className="hover:text-blue-600 transition">•••• More</button>
            </div>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="row-span-4 col-span-1 bg-gray-100 border rounded-lg flex items-center justify-center text-gray-500 text-sm">
          Image
        </div>
      </div>
    </div>
  );
}
