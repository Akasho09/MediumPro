import './App.css'
import { BrowserRouter ,  Route , Routes } from 'react-router-dom'
import { Quote } from './pages/quote'
import { Auth } from './pages/auth'
import TopBar from './pages/TopBar'
import Subs from './components/Subs'
import Right from './components/Right'
import Posts from './pages/Posts'
import Hashes from './components/Hashes'
import { useState} from 'react'
import {useBlogs} from './hooks/index' 

function App() {

  const [author, setAuthor] = useState("Null");
  const [title , setTitle ] = useState("Title hai Jani ");
  const [desc , SetDesc] = useState("Ye descriptio honi chahiye");
  const { postss, loading } = useBlogs();


  return (
    <>
        <BrowserRouter>
        <Routes>
        <Route path="/signin" element={<div className="h-screen w-full grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-0 bg-white-100">
        <div className='flex justify-center items-center border border-black'><Auth type='signIn'></Auth></div>
        <div className='col-span-2 flex justify-center items-center invisible lg:visible'><Quote ></Quote></div></div>}>
        </Route>

        <Route path="/signup" element={<div className="h-screen w-full grid grid-cols-1 lg:grid-cols-3 gap-0 bg-white-100">
        <div className='flex justify-center items-center border border-black'><Auth type='signUp'></Auth></div>
        <div className='lg:col-span-2 flex justify-center items-center invisible lg:visible'><Quote ></Quote></div></div>}>
        </Route>

        <Route path="/blogs" element={
          <div className='grid grid-cols-3'>
          <div className='col-span-3 max-h-5px m-0 p-0'><TopBar></TopBar></div>
          <div className='col-span-3 flex justify-center'><Subs></Subs></div>
         <div className='col-span-3 grid grid-cols-10'>
         <div className='col-start-2 col-span-6 flex flex-col'>
          <div className=' border-b'>
          <Hashes r1="Web D" r2="Web D2" r3="web 3"></Hashes>
          </div>
          <div className="">
          {postss.map(p =><Posts desc={p} title={title} author={author}></Posts>)}
            </div>
          </div>
          <div className='col-span-2'><Right></Right>right</div>
         </div>
          </div>
        }> </Route>
        
        </Routes>
        </BrowserRouter>
    </>

  )
}

export default App
