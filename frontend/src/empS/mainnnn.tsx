
import TopBar from '../pages/TopBar'
import Subs from '../components/Subs'
import Right from '../components/Right'
import Posts from '../pages/Posts'
import Hashes from '../components/Hashes'
import {useBlogs} from '../hooks/index' 

export const Mainnnn = ()=>{
      const { postss, loading } = useBlogs();
      if(loading){
        return <div>Loading....</div>
      }
      console.log(postss)

    return  <div className='grid grid-cols-3'>
              <div className='col-span-3 max-h-5px m-0 p-0'><TopBar></TopBar></div>
              <div className='col-span-3 flex justify-center'><Subs></Subs></div>
             <div className='col-span-3 grid grid-cols-10'>
             <div className='col-start-2 col-span-6 flex flex-col'>
              <div className=' border-b'>
              <Hashes r1="Web D" r2="Web D2" r3="web 3"></Hashes>
              </div>
              <div className="">
              {postss.map(p => (
        <div className=''><Posts 
        key={p.id} 
        desc={p.content} 
        title={p.title} 
        author={p.author?.name || "Unknown Author"} 
    /></div>
    ))}
              </div>
              </div>
              <div className='col-span-2'><Right></Right>right</div>
             </div>
              </div>
}
