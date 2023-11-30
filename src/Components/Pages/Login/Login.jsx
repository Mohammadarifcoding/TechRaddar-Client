
import { Link, useNavigate, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import UseAxious from '../../Hooks/UseAxious';

const Login = () => {
    const {Google,In} = UseAuth()
    const nav = useNavigate()
    const location = useLocation()
    const AxiousPublic = UseAxious()
    const from = location?.state?.from?.pathname || '/'
    
    const handleSignIN = (e)=>{
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
      In(email, password)
      .then((res) => {
         Swal.fire({
          title: "Your account have been created.",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `,
        });
        console.log(res.user);
        nav(from, { replace: true });
        
      })
      .catch((err) => {
        console.log(err);
        alert('Sign in failed ');
      });
    }

    const handleGoogle = ()=>{
      Google()
      .then(res => {
        const loggedUser = { email: res.user.email , name : res.user.displayName };
        AxiousPublic.post("/users",  loggedUser )
        .then((res) => {
          console.log(res.data)
        })
         Swal.fire({
          title: "Your account have been created.",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `,
        });
        nav(from, { replace: true });
       
       })
      .catch(err=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
        });
      })
}

    return (
        <div className='min-h-screen w-full bg-[#00ADB5] p-6  flex justify-center  items-center'>
            <div className='mx-auto  max-w-md  sm:min-w-[440px] bg-white shadow-2xl  p-8 rounded-lg py-4'>
            <div className='flex  justify-center items-center '>
                <img className='w-20' src="/images/AuthWelcome.png" alt="" />
                <div>
                <h2 className='text-3xl font-extrabold text-[#222831]'>Welcome Back</h2>
                <p className='text-xl font-extrabold text-[#393E46]'>Login to continue</p>
                </div>
                
            </div>
           <form
     
      className="form  mt-4"
      onSubmit={handleSignIN}
    >
      
      
   
      <label className="relative ">
        <p className='py-2 text-lg font-bold'>Email</p>
        <input
          required
          name="email"
          placeholder="ex : abc@gmail.com"
          type="email"
          className="input w-full p-2 mb-2 focus:outline-none focus:border-[#00ADB5] border-2 border-gray-400 rounded-lg"
        />
      </label>
      <label className="relative">
      <p className='py-2 text-lg font-bold'>Password</p>
        <input
          required
          name="password"
          placeholder="ex : PassWord1"
          type="password"
          className="input w-full p-2 mb-2 focus:outline-none focus:border-[#00ADB5] border-2 border-gray-400 rounded-lg"
        />
      </label>
      
      <button className="submit border border-[#00ADB5] hover:bg-white hover:text-[#00ADB5] bg-[#00ADB5] w-full mt-5 p-2 rounded-lg text-white text-lg transition duration-300 ease-in">
        Login
      </button>
      
    </form> 
    <div className="divider">OR</div>
    <button
        onClick={handleGoogle}
        className=" bg-white hover:bg-[#EEEEEE] border-2 border-[#393E46] w-full text-[#393E46] font-bold py-2 flex items-center justify-center gap-3 px-4 rounded-md mt-4"
      >

        <img className="w-[30px]" src="/images/google.png" alt="" />
        Continue With Google
      </button>
      <p className="signin text-gray-700  text-center mt-2 ">
        New user? 
        <Link to={'/register'} className="text-[#00ADB5] ml-2  hover:underline">
          Register
        </Link>
      </p>

           </div>
           
           </div>
           
    );
};

export default Login;