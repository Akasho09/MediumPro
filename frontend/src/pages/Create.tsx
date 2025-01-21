import { useState } from "react"
import { Button } from "../components/button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
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
    return <div>    
        Enter Title <input type="text" className="" onChange={(e)=>{
            setInputDetails({
                ...inputDetails ,
            "title" :  e.target.value
            })
        }}/>
        Details <input type="text"  onChange={(e)=>{
            setInputDetails({
                ...inputDetails ,
            "content" :  e.target.value
            })}}
            />  
            <Button onClick={handleClick} children="Post to Internet"></Button>  
    </div>
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