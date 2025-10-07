import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";




const root = () => {
  return (
    <div>
      <Navbar />
        <Outlet />
      <Footer />

    </div>
  )
}

export default root
