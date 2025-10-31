
    import { Link } from 'react-router-dom';
    import logo from "../assets/images/Logo.png"
  //  import { BiSolidSearch } from "react-icons/bi";
    import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import {X,Search,User} from "lucide-react"
    
const Navbar = () => {
  return (
   <>
   <header>
    <div  className=''>
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
  <div className='flex gap-4 items-center'>
    <button className='rounded-full   hover:'> <Search  className='' size={18}/> </button>

    {/* <BiSolidSearch /> */}
    {/* الإنجليزية */}
  <Link className='font-interbold hover:font-interregular hover:color-primary hover:cursor-pointer'  to="/services">AR</Link>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
 
{/* تسجيل الدخول */}
 <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {/* ابدأ */}
  <button>
    <Link to={"/getstarted"}>Get Started</Link>
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


