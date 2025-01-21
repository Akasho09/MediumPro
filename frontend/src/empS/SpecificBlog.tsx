import { useBlogs } from "../hooks"
import Subs from '../components/Subs'

export const BlogHai = ()=>{
    const {postss} = useBlogs();
    return <div>
         <div className=''><Subs></Subs></div>
        <div>{postss[0].title}</div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}