import { useBlog } from "../hooks"
import Subs from '../components/Subs'
import { useParams } from "react-router-dom"

export const BlogHai = ()=>{
    const {id}  = useParams();
    console.log(useParams())
    console.log("id1 : ",id)
    const {blog,loading} = useBlog({
        id : id || "94e6eb22-8244-43e9-a6b1-abad738e55b3"
    })
    if(loading) {
        return <div>Loading....</div>
    }
    return <div>
        <div className=''><Subs></Subs></div>
        <div>{blog?.title}</div>
        <div>{blog?.author.name ||  "akash"}</div>
        <div>{blog?.content}</div>
    </div>
}