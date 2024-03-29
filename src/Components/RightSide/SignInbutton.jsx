import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SignInbutton = () => {

  const {googleLogin, gitHubLogin, users} = useContext(AuthContext)
  
  console.log(users)

  const handleOnClick = (method)=>{
      method()
      .then((result)=>{
        const User = result.user
        console.log(User)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

    return (
        <div>
             <div className="h-40 ">
        <h2 className="text-xl font-bold  mb-4">SignIn with</h2>
        <div className="flex items-center border-2 p-2 w-full justify-center gap-2  rounded-md">
          <FcGoogle className="text-xl" />
          <button className="text-sm" onClick={()=>handleOnClick(googleLogin)}> signIn with Google</button>
        </div>
        <div className="flex items-center border-2 p-2 w-full justify-center text-center gap-2 mt-2 rounded-md">
          <BsFacebook className="text-xl" />
          <button className="text-sm" onClick={()=>handleOnClick(gitHubLogin)}> signIn with Faceboook</button>
        </div>
      </div>
        </div>
    );
};

export default SignInbutton;