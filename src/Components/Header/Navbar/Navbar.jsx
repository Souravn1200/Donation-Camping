import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            {/* <NavLink to="/"
            className={({ isActive, isPending }) =>
            isPending ? "pending" :
            isActive ? "text-orange-500 underline" : ""}>
            Home
            </NavLink>

            <NavLink to="/donation"
            className={({ isActive, isPending }) =>
            isPending ? "pending" :
            isActive ? "text-orange-500 underline" : ""}>
            Donation
            </NavLink>

            <NavLink to="/statistics"
            className={({ isActive, isPending }) =>
            isPending ? "pending" :
            isActive ? "text-orange-500 underline" : ""}>
            Statistics
            </NavLink> */}




  <div className="lg: flex justify-between items-center mt-5">
    
            <div className="w-40 hidden lg:block">
            <img src="https://i.ibb.co/SvPW5XH/Logo.png" alt=""/>
            </div>
            
            <div className="mx-auto lg:mx-0">
            <ul className="flex gap-4">
      <li className="mr-4"><NavLink to="/"
            className={({ isActive, isPending }) =>
            isPending ? "pending" :
            isActive ? "text-orange-500 underline" : ""}>
            Home
            </NavLink></li>
      <li className="mr-4"><NavLink to="/donation"
            className={({ isActive, isPending }) =>
            isPending ? "pending" :
            isActive ? "text-orange-500 underline" : ""}>
            Donation
            </NavLink></li>
      <li className="mr-4"><NavLink to="/statistics"
            className={({ isActive, isPending }) =>
            isPending ? "pending" :
            isActive ? "text-orange-500 underline" : ""}>
            Statistics
            </NavLink> </li>
    </ul>
            </div>

  </div>
  

        </div>
    );
};

export default Navbar;