import { useBlog } from "../hooks"
import Subs from '../components/Subs'
import { useParams } from "react-router-dom"
import TopBar from "../pages/TopBar"
import DP from "../components/DP"
import { BlogSkelton } from "./blogSkelton"

export const BlogHai = ()=>{
    const {id}  = useParams();
    const {blog,loading} = useBlog({
        id : id || "94e6eb22-8244-43e9-a6b1-abad738e55b3"
    })
   if(loading){
    return <div><BlogSkelton></BlogSkelton></div>
      }
    return <div className="">
        <div className=""><TopBar ></TopBar></div>
        <div className='flex justify-center'><Subs></Subs></div>
           <div className="grid grid-rows-3 grid-cols-3">
        <div className="row-span-3 col-span-2 ">   <div className="font-bold">{blog?.title}</div>
            <div>Dateed : 28/01/2024 </div>
            <div>{blog?.content}</div>
            </div>
            <div className="col-span-1 row-span-2 pl-8 pt-8">   <div><DP></DP></div>
                <div>{blog?.author.name ||  "akash"}</div></div>
                </div> 
        </div>
}