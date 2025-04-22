import './App.css'
import { BrowserRouter ,  Route , Routes } from 'react-router-dom'
import { Quote } from './pages/quote'
import { Auth } from './pages/auth'
import { Mainnnn } from './empS/mainnnn'
import { Create } from './pages/Create'
import { BlogHai } from './empS/SpecificBlog'
 function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<div className="h-screen w-full grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-0 bg-white-100">
        <div className='flex justify-center items-center border border-black'><Auth type='signIn'></Auth></div>
        <div className='col-span-2 flex justify-center items-center invisible lg:visible'><Quote ></Quote></div></div>}>
        </Route>
        <Route path="/signin" element={<div className="h-screen w-full grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-0 bg-white-100">
        <div className='flex justify-center items-center border border-black'><Auth type='signIn'></Auth></div>
        <div className='col-span-2 flex justify-center items-center invisible lg:visible'><Quote ></Quote></div></div>}>
        </Route>
        <Route path="/signup" element={<div className="h-screen w-full grid grid-cols-1 lg:grid-cols-3 gap-0 bg-white-100">
        <div className='flex justify-center items-center border border-black'><Auth type='signUp'></Auth></div>
        <div className='lg:col-span-2 flex justify-center items-center invisible lg:visible'><Quote ></Quote></div></div>}>
        </Route>


        <Route path="/blogs" element={<div className=''><Mainnnn/></div>}></Route>
        <Route path="/blog/:id" element={<BlogHai/>}></Route>
        <Route path="/create" element={<div><Create/></div>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
