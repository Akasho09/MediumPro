import { useBlog } from "../hooks";
import Subs from '../components/Subs';
import { useParams } from "react-router-dom";
import TopBar from "../pages/TopBar";
import DP from "../components/DP";
import { BlogSkelton } from "./blogSkelton";
import { DynamicText } from "../pages/Create";
import { DynamicTextProps } from "../pages/Create";

function isDynamicTextArray(data: any): data is DynamicTextProps[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === 'object' &&
        typeof item.tag === 'string' &&
        typeof item.children === 'string'
    )
  );
}

export const BlogHai = () => {
  const { id } = useParams();
  const { blog, loading } = useBlog({
    id: id || "94e6eb22-8244-43e9-a6b1-abad738e55b3"
  });

  if (loading) {
    return <div><BlogSkelton /></div>;
  }

  const content = isDynamicTextArray(blog?.content) ? blog.content : [];

  return (
    <div className="">
      <div className=""><TopBar /></div>
      <div className='flex justify-center'><Subs /></div>

      <div className="grid grid-rows-3 grid-cols-3">
        <div className="row-span-3 col-span-2 p-4">
          <div className="text-2xl font-bold mb-2">{blog?.title}</div>
          <div className="text-gray-500 mb-4">Dated: 28/01/2024</div>

          <div className="space-y-2">
            {content.map((c, index) => (
              <DynamicText key={index} tag={c.tag} className={c.className}>
                {c.children}
              </DynamicText>
            ))}
          </div>
        </div>

        <div className="col-span-1 row-span-2 pl-8 pt-8">
          <div><DP /></div>
          <div className="mt-2 font-medium text-lg">{blog?.author?.name || "Akash"}</div>
        </div>
      </div>
    </div>
  );
};
