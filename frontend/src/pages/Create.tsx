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
        {
          title,
          content: totalContent,
        },
        {
          headers: {
            Authorization: localStorage.getItem("jwt"),
          },
        }
      );
      Navigate("/blogs");
      console.log(res);
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  return (
    <div className="min-h-screen text-gray-800">
      <TopBar />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create a New Blog Post
        </h2>

        <div className="max-w-5xl mx-auto p-6">
          <form onSubmit={handleClick} className="space-y-6">
            <div>
              <input
                type="text"
                id="title"
                className="border-l-2 text-4xl tracking-wider capitalize p-4 outline-none w-full"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {formattingOptions.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  className={`px-2 py-1 transition ${
                    activeFormats.includes(opt.className)
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  } ${opt.className}`}
                  onClick={() => toggleFormat(opt.className, opt.tagType)}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div>
              <textarea
                id="description"
                rows={4}
                className="indent-8 border-l-2 text-md w-full p-4 outline-none whitespace-pre-wrap"
                onChange={(e) =>
                  setInputDetails({
                    ...inputDetails,
                    children: e.target.value,
                  })
                }
                // important 
                value={inputDetails.children}
                placeholder="Enter Text Type and Text "
                required
              ></textarea>
            </div>

            <div className="flex flex-col gap-1 ">
              <p className="font-bold underline mb-4">PREVIEW : </p>
              <div className="flex justify-between ">
          <h1 className="text-3xl font-bold text-gray-800 capitalize">{title}</h1>
          <p className="text-sm text-gray-500">📅 Date: 28/01/2024</p>
          </div>
              <div className="flex whitespace-pre-wrap">
              {totalContent.map((t, i) => (
                <div key={i}>
                  <DynamicText tag={t.tag} className={` ${t.className}`}>
                    {t.children}
                  </DynamicText>
                </div>
              ))}
              {/* live preview of current input */}
              {inputDetails.children && (
                <DynamicText tag={inputDetails.tag} className={inputDetails.className}>
                  {inputDetails.children}
                </DynamicText>
              )}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
              >
                Post To Internet
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