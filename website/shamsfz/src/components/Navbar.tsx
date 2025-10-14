
    import { Link } from 'react-router-dom';
    import logo from "../assets/images/Logo.png"
    import { BiSolidSearchAlt2 } from "react-icons/bi";
const Navbar = () => {
  return (
   <>
   <nav>
    <div className='flex  '>
      <img src={logo} width={150}  height={100} alt='logo'/>
      {/* بيت */}
        <Link to="/">Home</Link>
{/* عن */}
        <Link to="/about-us">About</Link>
        {/* اتصال */}
        <Link to="/contact-us">Contact</Link>
        {/* خدمات */}
        <Link to="/services">Services</Link>
  
  <div>
 
 <BiSolidSearchAlt2 />
  <Link to="/services">AR</Link>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
 
  <Link to="/services">Login</Link>

  <button>
    <Link to={"/getstarted"}>Get Started</Link>
  </button>
  </div>

       </div>

   </nav>
   </>
  )
}

export default Navbar
