import { Link } from "react-router-dom"

interface cooky {
    "r1" : string
    "r2" : string
    "r3" : string
}
export default function Hashes ({r1 ,  r2 , r3 }: cooky ){
    return (
        <div className="flex justify-around font-bold">
            <Link to="" >For You</Link>
            <Link to="">Following</Link>
            <Link to="">{r1}</Link>
            <Link to="">{r2}</Link>
            <Link to="">{r3}</Link>
        </div>
    )
}