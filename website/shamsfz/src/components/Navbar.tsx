
    import { Link } from 'react-router-dom';
    import logo from "../assets/images/Logo.png"
  //  import { BiSolidSearch } from "react-icons/bi";
    import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import {X,Search,User} from "lucide-react"
    
const Navbar = () => {
  return (
   <>
   <header className='w-full bg-white shadow-lg'>
    <div  className='max-w-6xl mx-auto px-1 py-1 flex items-center justify-between'>
      {/* *************** Logo /nav Div  Desktop  ********************** */}
   <div className='flex  items-center m-4  '>
       <img src={logo} width={120}  height={100} alt='logo'/>
 
      {/* بيت */}
    <nav className='lg:flex  gap-8 text-[16px] text-secondary   '>
          <Link className='font-interbold hover:font-interregular hover:color-primary hover:cursor-pointer' to="/">Home</Link>
{/* عن */}
        <Link  className='font-interbold hover:font-interregular hover:color-primary hover:cursor-pointer' to="/about-us">About</Link>
        {/* اتصال */}
        <Link  className='font-interbold hover:font-interregular hover:color-primary hover:cursor-pointer' to="/contact-us">Contact</Link>
        {/* خدمات */}
        <Link  className='font-interbold hover:font-interregular hover:color-primary hover:cursor-pointer'to="/services">Services</Link>
  
    </nav>
    
    </div>
 
 <div className='flex gap-8 items-center '>
    <button className='rounded-full bg-gray-400 p-2  m-4 hover:bg-secondary'> <Search  className='hover:text-white' size={18}/> </button>

    {/* <BiSolidSearch /> */}
    {/* الإنجليزية */}
    {/* */}
<span > <Link className='font-interbold hover:font-interregular hover:color-primary hover:cursor-pointer'  to="/services">AR</Link>   </span>
 
<div className='items-center gap-1 flex cursor-pointer'>
   <User  size={18}/>
 
{/* تسجيل الدخول */}
 <SignedOut>
  
        <SignInButton  mode='modal'/>
      
      </SignedOut>
      <SignedIn >
      
        <UserButton />

      </SignedIn>
</div>
      {/* ابدأ */}
  <button className='border transition delay-150 duration-300 ease-in-out hover:-translate-y-1 border-primary text-secondary px-5 py-2 rounded-full hover:bg-secondary hover:text-white '>
    <Link to={"/contact-us"}>Get Started</Link>
  </button>
  </div>
  </div>
<div>
       </div>

   </header>
   </>
  )
}

export default Navbar


