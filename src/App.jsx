 
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import BlogsDetails from './pages/BlogsDetails'
import PLacesRoute from './pages/PlacesRoute'
import Nopages from './pages/Nopages'

 
 
 

function App() {
   

  return (
    <>
    <BrowserRouter>
      <Routes>

       <Route path='/'element={<Layout/>}>

          <Route index element={<Home/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/blogs'element={<Blogs/>}/>
          <Route path='/blogs/:id' element={<BlogsDetails/>} />
          <Route path='/places'element={<PLacesRoute/>}/>
          <Route path='*'element={<Nopages/>}/>
        
        </Route>
       </Routes>  
    </BrowserRouter>
    </>
  )
}

export default App
