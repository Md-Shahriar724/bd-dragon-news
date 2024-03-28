import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const SignInbutton = () => {
    return (
        <div>
             <div className="h-40 ">
        <h2 className="text-xl font-bold  mb-4">SignIn with</h2>
        <div className="flex items-center border-2 p-2 w-full justify-center gap-2  rounded-md">
          <FcGoogle className="text-xl" />
          <p className="text-sm"> signIn with Google</p>
        </div>
        <div className="flex items-center border-2 p-2 w-full justify-center text-center gap-2 mt-2 rounded-md">
          <BsFacebook className="text-xl" />
          <p className="text-sm"> signIn with Faceboook</p>
        </div>
      </div>
        </div>
    );
};

export default SignInbutton;