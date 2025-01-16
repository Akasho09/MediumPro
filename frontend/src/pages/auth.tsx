import { useState } from "react"
import { Button } from "../components/button"
import { LabelledInput } from "../components/LabelledInput"
import { signUpInput } from "@akash.09/mediumprocommon"

export const Auth = ({type} : {type: "signIn" | "signUp" })=>{
    const [inputs,setInputs] = useState<signUpInput>({
        name: "",
        email : "",
        password: ""
    }) 
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
            console.log("Button clicked!", e);
    }
    return <div className="flex items-center justify-center rounded-lg px-8 py-6 bg-white shadow-lg w-2/5">
        <div className="border border-black w-2/3 p-4 rounded-md">
        <h4>Create an Account</h4>
        <div > {type==="signIn" ? "Don't have a account! "  : "Already have a Account! " }
             <a href={type==="signIn" ? "/signup" : "signin"} className="font-bold ">{type==="signIn" ? "  Sign Up" : "  Sign in"}</a>
        </div>
        <LabelledInput label="Username" placeholder="username" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setInputs({
                ...inputs,
                name : e.target.value
            })
            // check if name is available // after 1s of not typing
        }}></LabelledInput>
        <LabelledInput label="Email" placeholder="akash@gmail.com" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                setInputs({
                    ...inputs,
                    email : e.target.value
                })
        }}></LabelledInput>
        <LabelledInput label="Password" placeholder="" onChange={(e:any)=>{
                setInputs({
                    ...inputs,
                    password : e.target.value
                })
        }}></LabelledInput>
        <Button onClick={handleClick} children="Submit">
        </Button>
        </div>
            {/* <label htmlFor="">Username</label><input type="text" classNameName="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <label htmlFor="">Email</label><input type="text" classNameName="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <label htmlFor="">Password</label><input type="text" classNameName="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/> */}
        </div>
}

