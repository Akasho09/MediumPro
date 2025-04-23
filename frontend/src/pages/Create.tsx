import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";

export interface DynamicTextProps {
  children: string;
  className?: string;
}

export const DynamicText = ({ children, className }: DynamicTextProps) => {
  return <div className={`${className || ""}`}>{children}</div>;
};

const formattingOptions: string[] = [
  "text-md",
  "font-bold",
  "italic",
  "underline",
  "line-through",
  "uppercase text-lg",
  "text-xl",
  "italic text-right",
  "tracking-widest",
  "text-center",
  "indent-8", // Indentation
];

export const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [activeFormats, setActiveFormats] = useState<string>("");
  const [inputDetails, setInputDetails] = useState<DynamicTextProps>({
    children: "",
    className: "",
  });
  const [totalContent, setTotalContent] = useState<DynamicTextProps[]>([]);
  const navigate = useNavigate();

  const toggleFormat = (formatClass: string) => {
    setActiveFormats(formatClass);
    setInputDetails((prev) => ({
      ...prev,
      className: formatClass,
    }));
  };

  const onAdd = () => {
    setTotalContent((prev) => [
      ...prev,
      { ...inputDetails, children: inputDetails.children.trim() },
    ]);
    setInputDetails({
      children: "",
      className: "",
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
      navigate("/blogs");
      console.log(res);
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  return (
    <div className="min-h-screen text-gray-800 bg-gray-50">
      <TopBar />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-8">
          Create a New Blog Post
        </h2>

        <div className="max-w-5xl mx-auto bg-slate-250 p-8 shadow-lg rounded-lg space-y-8">
          <form className="space-y-6" onSubmit={handleClick}>
            {/* Title Input */}
            <input
              type="text"
              id="title"
              className="text-4xl border-l-2 border-blue-300 w-full p-2 focus:outline-none focus:border-blue-600 transition"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Blog Title"
              required
            />

            {/* Format Buttons */}
            <div className="flex">
              <div className="flex justify-center items-center border-r-2 mr-2 p-0">
                Available typecasts
              </div>
              <div className="w-full flex flex-col gap-3">
                {formattingOptions.map((opt) => (
                  <div
                    key={opt}
                    className={`px-3 py-1 rounded transition border text-sm bg-gray-100 text-gray-800 ${
                      activeFormats === opt
                        ? "border-4 border-blue-600"
                        : "border-gray-300 hover:bg-gray-200"
                    } ${opt}`}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent form submit
                        e.stopPropagation(); // Prevent bubbling up
                        toggleFormat(opt);
                      }}
                      className={opt}
                    >
                      {opt}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Content */}
            <div className="flex">
              <div className="flex justify-center items-center border-r-2 mr-2 p-0">
                Current content
              </div>
              <div className="w-full">
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
              </div>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="" className="text-xs ml-2">
                  Add Current content to Blog
                </label>
                <button
                  onClick={onAdd}
                  className="flex justify-center items-center w-10 h-10 bg-green-300 border rounded-full"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>

            {/* Live Preview */}
            <div className="w-full pt-4 border-t border-gray-200">
              <p className="text-lg font-semibold mb-2 text-gray-700">📄 Preview</p>
              <div className="bg-gray-100 p-4 rounded-md space-y-2">
                <h1 className="text-2xl font-bold text-blue-800 capitalize">{title}</h1>
                <p className="text-sm text-gray-500 mb-3">📅 Date: 28/01/2024</p>
                <div className="text-lg text-gray-700">
                  {totalContent.map((c, index) => (
                    <DynamicText key={index} className={c.className}>
                      {c.children}
                    </DynamicText>
                  ))}
                  {inputDetails.children && (
                    <DynamicText className={inputDetails.className}>
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