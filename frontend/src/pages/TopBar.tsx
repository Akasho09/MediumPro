import { SearchBox } from "../components/searchbox"
import DP from "../components/DP"
import { Link } from "react-router-dom"
import { Notifi } from "../components/notifi"
import Neww from "../components/new"
export default function TopBar (){
    return (
        <div className="max-h-15 grid grid-cols-2 flex justify-center items-center">
          <div className="col-span-1 flex justify-start items-center">
         <Link to="/">  <h1 className="text-2xl font-bold text-black-600 tracking-wide pl-3 col-span-1 max-h-2px pr-6">MediumPro</h1></Link> 
          <div className=""><SearchBox></SearchBox></div></div>  
          <div className="col-span-1 flex justify-end items-center max-h-2px">
          <Link to="/create"> <div className="pr-4"><Neww></Neww></div></Link>
          <div className="pr-4"><Notifi></Notifi></div>
          <div className="pr-4"><DP></DP></div></div>  
        </div>
    )
}