import { useState, useEffect , useRef} from "react"
import { Button } from "../components/button"
import { LabelledInput } from "../components/LabelledInput"
import { signUpInput } from "@akash.09/mediumprocommon"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const Auth = ({type} : {type: "signIn" | "signUp" })=>{
    const navigate = useNavigate();
    const [color , setColor] = useState<"red" | "slate" >("red")
    const isFirstRender = useRef(true); // Use a ref to track first render
    const [inputs,setInputs] = useState<signUpInput>({
        name: "",
        email : "",
        password: ""
    })
    const handleClick = async ()=>{
       try{
        await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signIn" ? 'signin' : 'signup' }`,inputs)
        .then((res )=>{
            if(res.data.jwt){
                localStorage.setItem('jwt' , ( "Bearer "  +res.data.jwt ));
                navigate('/blogs')
                alert(res.data.message)
            } else {
                alert("Error : " + res.data.message)
            }
        })
       } catch (e){
        alert("Error : " + e)
       }
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
          }
        try {
        if (!inputs.email) return;
          const int = setTimeout( async ()=>{
            const userr = await axios.get(`${BACKEND_URL}/api/v1/userfind/${inputs.email}`,);
                if(userr.data=="chlo oii"){ setColor("red") }
                else setColor("slate")
        },500)
           return ()=>{
            clearTimeout(int)
           }
        } 
          catch (error) {
            console.error("Error fetching users:", error);
          }

    },[inputs.email])


    return (
        <> <div className="w-2/3 border border-black rounded-md p-10 pt-4 pb-6">
        <h4 className="font-bold text-center text-xl py-3 pt-0">{type==="signIn" ? "Login" : "Create an Account"}</h4>
        <div > {type==="signIn" ? "Don't have a account! "  : "Already have a Account! " }
             <a href={type==="signIn" ? "/signup" : "signin"} className="font-bold ">{type==="signIn" ? "  Sign Up" : "  Sign in"}</a>
        </div>
        
        {type=="signIn" ? null : <LabelledInput 
        color={"slate"} type="text" required={true} label={"Username "} placeholder="username" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setInputs({
                ...inputs,
                name : e.target.value
            })

            // check if name is available // after 1s of not typing
        }}
        ></LabelledInput>  }


        <LabelledInput
         color = { type=="signUp" ? color : "slate" } type="email" required = {true} label="Email *" placeholder="akash@gmail.com" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setInputs({
                    ...inputs,
                    email : e.target.value
                })
        }}>
        </LabelledInput>
        <LabelledInput 
        color={"slate"} type="password" required={true} label="Password *" placeholder="" onChange={(e:any)=>{
                setInputs({
                    ...inputs,
                    password : e.target.value
                })
        }}></LabelledInput>
        <Button onClick={handleClick} children="Submit">
        </Button>
        </div>
        </>)
}

