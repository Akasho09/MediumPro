
import TopBar from '../pages/TopBar'
import Subs from '../components/Subs'
import Posts from '../pages/Posts'
import Hashes from '../components/Hashes'
import {useBlogs} from '../hooks/index' 
import { Link } from 'react-router-dom'
import { MainnSkeleton } from './Mainnskelton'
export const Mainnnn = ()=>{
      const { postss, loading } = useBlogs();
      if(loading){
        return <MainnSkeleton></MainnSkeleton>
      }
    return  <div className='grid grid-cols-3'>
              <div className='col-span-3 max-h-5px m-0 p-0'><TopBar></TopBar></div>
              <div className='col-span-3 flex justify-center'><Subs></Subs></div>
             <div className='col-span-3 grid grid-cols-10'>
             <div className='col-start-3 col-span-6 flex flex-col'>
              <div className=' border-b'>
              <Hashes r1="Web D" r2="Web D2" r3="web 3"></Hashes>
              </div>
              <div className="">
      {postss.slice().reverse().map((p) => (
        <Link to={`/blog/${p.id}`} key={p.id} className="block mb-4">
          <div className="p-4 border rounded shadow hover:shadow-lg transition">
            <Posts
              desc={p.content}
              title={p.title}
              author={p.author?.name || "Unknown Author"}
            />
          </div>
  </Link> 
    ))}
              </div>
              </div>
             </div>
              </div>
}
