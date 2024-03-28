import { Button } from "keep-react";
import { SignIn } from "phosphor-react";
import profile from '../../assets/user.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between my-4 items-center">
        <div>

        </div>
        <ul className="flex gap-4 justify-center">
          <li className="text-lg font-semibold cursor-pointer"><NavLink to='/'>Home</NavLink></li>
          <li className="text-lg font-semibold cursor-pointer"><NavLink to='/'>About</NavLink></li>
          <li className="text-lg font-semibold cursor-pointer"><NavLink to='/'>Wether</NavLink></li>
        </ul>

        <div className="flex items-center gap-2">
            <button>
            <img className="w-10 h-10" src={profile} alt="" />
            </button>
                
            
          <Button>
            <SignIn size={20} className="mr-1.5 py-0" />
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
