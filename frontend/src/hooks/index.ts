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
    setBlog(res.data.blog)
    setLoading(false)
   })  
  },[])

return { blog,loading }
}


export const  useBlogs = ()=>{
    const [postss, setPosts] = useState<postInter[]>([])
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