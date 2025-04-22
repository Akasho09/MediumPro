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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <TopBar />

      {/* Subscription Bar */}
      <div className="flex justify-center mt-6 mb-4">
        <Subs />
      </div>

      {/* Main Blog Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-8 pb-12">
        {/* Blog Body */}
        <div className="md:col-span-2 bg-white p-6 md:p-8 rounded-xl shadow-md space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-gray-900">
            {blog?.title}
          </h1>
          <p className="text-sm text-gray-500">📅 Posted on: 28/01/2024</p>

          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            {content.map((c, index) => (
              <DynamicText key={index} tag={c.tag} className={`whitespace-pre-wrap ${c.className}`}>
                {c.children}
              </DynamicText>
            ))}
          </div>
        </div>

        {/* Author Sidebar */}
        <div className="md:sticky md:top-24">
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center gap-2 transition hover:shadow-2xl duration-300">
            <DP />
            <div className="text-center">
              <p className="font-semibold text-xl">{blog?.author?.name || "Akash"}</p>
              <p className="text-sm text-gray-500">Author & Blogger</p>
            </div>
            <div className="mt-4 text-xs text-gray-400 italic">
              "Sharing ideas, one blog at a time."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
