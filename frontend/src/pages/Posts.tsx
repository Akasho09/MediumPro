import { DynamicTextProps } from '../pages/Create';
import { DynamicText } from '../pages/Create';

interface PostDetails {
  desc?: DynamicTextProps[];
  title: string;
  author: string;
}

export default function Posts({ desc, title, author }: PostDetails) {
  return (
    <div className="grid grid-rows-6 pb-10 border-b-2">
      <div className="row-span-1">{author}</div>

      <div className="row-span-5 grid grid-rows-5 grid-cols-5">
        <div className="row-span-5 col-span-4 grid grid-rows-5">
          <div className="row-span-2 text-xl font-bold">{title}</div>

          <div className="row-span-2">
            {desc?.map((d, index) => (
              <DynamicText
                key={index}
                tag={d.tag}
                className={d.className}
              >
                {d.children}
              </DynamicText>
            ))}
            <p className="font-bold">.... Read more</p>
          </div>

          <div className="row-span-1 flex justify-between text-sm text-gray-600">
            <div className="pl-3 flex space-x-6">
              <h4>23-12-2024</h4>
              <h4>100 👍</h4>
              <h4>comments ❂❂</h4>
            </div>
            <div className="pr-3 flex space-x-6">
              <h4>save ✓✓</h4>
              <h4>More ∙∙∙∙</h4>
            </div>
          </div>
        </div>

        <div className="row-span-4 col-span-1 bg-red-100 flex items-center justify-center">
          img
        </div>
      </div>
    </div>
  );
}
