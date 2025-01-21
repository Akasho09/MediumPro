import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

interface postInter {
  id : string ,
  author :{
    name : string
  } , 
  title  : string , 
  content : string 
}

export const useBlog = ({id} : {id:string})=>{
  const [blog,setBlog] = useState<postInter>()
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
   axios.get(`${BACKEND_URL}/api/v1/blog/${id}` ,
    {
      headers:{
        Authorization: localStorage.getItem("jwt")
      }
    }
   )
   .then((res)=>{
    console.log("id : " , id) 
    setBlog(res.data.blog)
    console.log("data : " , res.data)
    setLoading(false)
   })  
  },[])

return { blog,loading }
}


export const  useBlogs = ()=>{
    const [postss, setPosts] = useState<postInter[]>([
        {
          id :"1",
          title: "The Future of Web Development",
          content: "Exploring the latest trends and technologies shaping the web development landscape.",
          author: {
            name : "John Doe",
          }
        },
        {
          id: "2",
          title: "Understanding JavaScript Closures",
          content: "A deep dive into how closures work in JavaScript and why they are so powerful.",
          author: {
            name : "John Doe",
          }
        },
        {
          id: "3",
          title: "Mastering React Hooks",
          content: "Learn how to use React Hooks to manage state and lifecycle events effectively.",
          
          author: {
            name : "Chris Evans",
          }
        },
        {
          id: "4",
          title: "An Introduction to Node.js",
          content: "Discover the power of Node.js for building scalable and high-performance server-side applications.",
          author: {
            name : "Emma Watso",
          }
        },
        {
          id: "5",
          title: "CSS Grid: Building Modern Layouts",
          content: "Learn how to create responsive and flexible layouts using the CSS Grid system.",
          author: {
            name : "John Johnson",
          }
        },
    ])
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
      try {
      const fn =  async ()=>{
          const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers : {
                Authorization : localStorage.getItem('jwt')
            }
          })
        setPosts(prevPosts => [...prevPosts, ...res.data.blog]);
          // author : res.data.blog.author.name ,
          // title  : res.data.blog.title , 
          // desc : res.data.blog.content)
        setLoading(false)
       }
       fn() ;
      } catch(e) {
        console.log("error")
      }
      },[])

  return { postss,loading }

}