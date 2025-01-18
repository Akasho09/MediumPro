import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

export function useBlogs (){
    const [postss, setPosts] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
      async ()=>{
          const res = await axios.get(`BACKEND_URL/api/v1/bulk`, {
            headers : {
                Authorization : localStorage.getItem('jwt')
            }
          })
        setPosts(res.data.blog)
        setLoading(false)
       }
  })

  return {postss,loading}
}