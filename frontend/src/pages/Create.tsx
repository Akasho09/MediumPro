import { useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
export const Create = ()=>{
    const [inputDetails , setInputDetails  ] = useState({
        "title"  : "",
        "content" : ""
    });
    const Navigate = useNavigate();
       async function handleClick(){
        try {
            const res  = await axios.post(`${BACKEND_URL}/api/v1/blog`,inputDetails , { 
                headers : {
        Authorization : localStorage.getItem('jwt')
            },
        });
            Navigate("/blogs")
            console.log(res)
        }catch(e){
            console.log("Error : " , e);
        }
        }
        return (
            <div className="bg-gray-50 min-h-screen text-gray-800">
              {/* Header */}
            <TopBar></TopBar>
        
              {/* Blog Creation Section */}
              <main className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-6">Create a New Blog Post</h2>
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
     
                    <form onSubmit={handleClick} className="space-y-6">
                      {/* Blog Title Input */}
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-lg font-medium text-gray-700"
                        >
                          Blog Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          
                          onChange={(e) => {
                          setInputDetails({
                            ...inputDetails,  
                            "title" :  e.target.value
                          }
                          )  
                          }}
                        />
                      </div>
                      {/* Blog Description Input */}
                      <div>
                        <label
                          htmlFor="description"
                          className="block text-lg font-medium text-gray-700"
                        >
                          Blog Description
                        </label>
                        <textarea
                          id="description"
                          rows={10}
                          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onChange={(e) =>{
                           setInputDetails({
                            ...inputDetails ,
                            "content" : e.target.value
                           }) 
                          }
                          }
                          required
                        ></textarea>
                      </div>
                      {/* Submit Button */}
                      <div className="text-center">
                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                        >
                          Post To Internet
                        </button>
                      </div>
                    </form>
                </div>
              </main>
            </div>
        )
    }

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