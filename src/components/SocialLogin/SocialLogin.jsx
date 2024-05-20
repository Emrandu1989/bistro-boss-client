import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
     const {googleSignIn} = useContext(AuthContext);
     const axiosPublic = useAxiosPublic();
     const navigate = useNavigate();

     const handleGoogleSignIn = () =>{
           googleSignIn()
           .then(result=>{
            console.log(result.user)
            const userInfo = {
                   email: result.user?.email,
                   name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                 console.log(res.data)
                 navigate('/')
            })
           })
           .catch(error=>{
              console.log(error)
           })
     }
  return (
    <div>
          <div className="divider"></div>
      <div className="px-8">
           <button
            onClick={handleGoogleSignIn}
           className="btn">
              <FaGoogle /> Google
              
           </button>
      </div>
    </div>
  );
};

export default SocialLogin;