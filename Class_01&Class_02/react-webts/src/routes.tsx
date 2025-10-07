import {Route ,createBrowserRouter, createRoutesFromElements} from 'react-router'
import Rootlayout from "./pages/root"
import Home from './pages/Home'
import About from "./pages/About"
import Services from './pages/Services'
import Contact from './pages/Contact'


const appRouter = createBrowserRouter(
  createRoutesFromElements(
   <Route  path='' element={<Rootlayout  />} >
   <Route  path='/' element={<Home />} />
   <Route  path='/about-us' element={<About/>} />
    <Route  path='/contact-us' element={<Contact/>} />
    <Route  path='/services' element={<Services/>} />
</Route>
  )

)

export default  appRouter;

