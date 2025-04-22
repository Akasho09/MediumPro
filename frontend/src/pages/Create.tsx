import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";

export interface DynamicTextProps {
  tag: keyof JSX.IntrinsicElements;
  children: string;
  className?: string;
}

export const DynamicText = ({ tag, children, className }: DynamicTextProps) => {
  const Tag = tag;
  return <Tag className={`${className || ""}`}>{children}</Tag>;
};

type FormattingOption = {
  label: string;
  className: string;
  tagType: keyof JSX.IntrinsicElements;
};

const formattingOptions: FormattingOption[] = [
  { label: "M", className: "", tagType: "p" },
  { label: "B", className: "font-bold", tagType: "b" },
  { label: "I", className: "italic", tagType: "i" },
  { label: "U", className: "underline", tagType: "u" },
  { label: "S", className: "line-through", tagType: "s" },
  { label: "UP", className: "uppercase", tagType: "span" },
  { label: "lo", className: "lowercase", tagType: "span" },
];

export const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [activeFormats, setActiveFormats] = useState<string[]>([]);

  const [inputDetails, setInputDetails] = useState<DynamicTextProps>({
    tag: "p",
    children: "",
    className: "",
  });

  const [totalContent, setTC] = useState<DynamicTextProps[]>([]);
  const Navigate = useNavigate();

  const toggleFormat = (formatClass: string, tagType: keyof JSX.IntrinsicElements) => {
    setTC((prev) => [...prev, inputDetails]);
    setActiveFormats((prev) =>
      prev.includes(formatClass)
        ? prev.filter((cls) => cls !== formatClass)
        : [...prev, formatClass]
    );
    setInputDetails({
      tag: tagType,
      className: formatClass,
      children: "",
    });
  };

  async function handleClick(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content: totalContent },
        { headers: { Authorization: localStorage.getItem("jwt") } }
      );
      Navigate("/blogs");
      console.log(res);
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  return (
    <div className="min-h-screen text-gray-800 bg-gray-50">
      <TopBar />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-8">Create a New Blog Post</h2>

        <div className="max-w-5xl mx-auto bg-slate-250 p-8 shadow-lg rounded-lg space-y-8">
          <form onSubmit={handleClick} className="space-y-6">
            {/* Title Input */}
            <input
              type="text"
              id="title"
              className="text-3xl border-l-2 border-blue-300 w-full p-2 focus:outline-none focus:border-blue-600 transition"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Blog Title"
              required
            />

            {/* Format Buttons */}
            <div className="flex flex-wrap gap-3">
              {formattingOptions.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  className={`px-3 py-1 rounded transition border text-sm ${
                    activeFormats.includes(opt.className)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                  } ${opt.className}`}
                  onClick={() => toggleFormat(opt.className, opt.tagType)}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Text Area */}
            <textarea
              id="description"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-4 text-base outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              onChange={(e) =>
                setInputDetails({
                  ...inputDetails,
                  children: e.target.value,
                })
              }
              value={inputDetails.children}
              placeholder="Write your content here..."
            ></textarea>

            {/* Live Preview */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-lg font-semibold mb-2 text-gray-700">📄 Preview</p>
              <div className="bg-gray-100 p-4 rounded-md space-y-2">
                <h1 className="text-2xl font-bold text-blue-800 capitalize">{title}</h1>
                <p className="text-sm text-gray-500 mb-3">📅 Date: 28/01/2024</p>
                <div className="flex flex-wrap gap-2 whitespace-pre-wrap">
                  {totalContent.map((t, i) => (
                    <DynamicText key={i} tag={t.tag} className={`${t.className}`}>
                      {t.children}
                    </DynamicText>
                  ))}
                  {inputDetails.children && (
                    <DynamicText tag={inputDetails.tag} className={inputDetails.className}>
                      {inputDetails.children}
                    </DynamicText>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition font-semibold"
              >
                ✨ Post to Internet
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};


/*

blogRouter.post("/" , async (c)=>{
    try {
        const body = await c.req.json();
        const zodH = blogPost.safeParse(body);
        if(!zodH.success){ return c.json({ message: zodH.error }) }
        const akash = new PrismaClient({
            datasourceUrl : c.env.DATABASE_URL
        })
        await akash.posts.create({
            data: {
                title :body.title, 
                content : body.content,
                authorId : c.get("userId")
            }
        })
        return c.text('Created Blog!');
    } catch(e){
        c.status(411)
      return c.json("error")  
    }
  })
  

*/