import './App.css'
import { Blog } from './components/blog'
import { BrowserRouter ,  Route , Routes } from 'react-router-dom'
import { Quote } from './pages/quote'
import { Auth } from './pages/auth'

function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
        <Route path="/signin" element={<div className="h-screen flex justify-center items-center bg-white-100">
        <Auth type='signIn'></Auth> 
        <div className=''><Quote ></Quote></div> </div>}>
        </Route>

        <Route path="/signup" element={<div className="h-screen w-full flex justify-center bg-white-100">
        <Auth type='signUp'></Auth> 
        <Quote></Quote> </div>}> 
        </Route>

        <Route path="/blog" element={<Blog></Blog>}> </Route>
        
        </Routes>
        </BrowserRouter>
    </>

  )
}

export default App
