
interface postDetails {
    desc  :string ,
    title : string ,
    author : string
}

export default function Posts ({desc,title,author}: postDetails){
    return (
        <div className="grid grid-rows-6">
            <div className="row-span-1 ">{author}</div>
            <div className="row-span-5 grid grid-rows-5 grid-cols-3">
            <div className="row-span-5 col-span-2 grid grid-rows-5">
            <div className="row-span-2">{title}</div>
                <div className="row-span-2">{desc}</div>
                <div className="row-span-1 flex justify-between">
               <div className="pl-3 flex space-x-6">
                <h4>Date</h4>
                <h4>likes</h4>
                <h4>comments</h4>
                </div> 
                <div className="pr-3 flex space-x-6">
                    <h4>save</h4>
                    <h4>More</h4>
                </div>
            </div>
            </div> 
            <div className="row-span-3 col-span-1 bg-red-100">img</div>   
            </div>
        </div>
    )
}