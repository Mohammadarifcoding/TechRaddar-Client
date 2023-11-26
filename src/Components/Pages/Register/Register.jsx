import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";

const Register = () => {
  const { creatUser, update , Google } = UseAuth();
  const navigate = useNavigate();
  const  [regLoading,setRegLoading] = useState(false)
  const [fullImage, setFullImage] = useState([]);
  const [storedImage, setStoredImage] = useState(
    localStorage.getItem("userImage")
  );
  const [previewImage, setPreviewImage] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      setFullImage(acceptedFiles[0]);
      console.log(acceptedFiles);
      console.log(acceptedFiles[0]);

      reader.onload = function (e) {
        // Store the image data in localStorage

        localStorage.setItem("userImage", e.target.result);
        setPreviewImage(e.target.result);
        setStoredImage(e.target.result);
      };

      reader.readAsDataURL(file);
    },
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    setRegLoading(true)
    const image = fullImage;
    console.log(image);
    const result = await axios.post(
      `https://api.imgbb.com/1/upload?key=aeeb86c89c07e1b579479f8b39ef94a5`,
      { image },
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    console.log(result);

    const form = e.target;
    const Name = form.Name.value;
    const email = form.email.value;
    const password = form.password.value;

    let img = result?.data?.data?.display_url;
    console.log(img);

    if (password.length < 6) {
      setRegLoading(false)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The password need to contain 6 character",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegLoading(false)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The password need to contain Capital letter",
      });
      return;
    } 

    creatUser(email, password)
      .then((res) => {
        console.log(res.user);
        update(Name, img).then().catch()
        setRegLoading(false)

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
        navigate('/')
        setTimeout(() => {
          location.reload();
        }, 3000);
      })
      .catch((err) => {
        setRegLoading(false)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
        });
      });
  };

  
 const handelGoogle = ()=>{
       Google()
       .then(res => {
        setRegLoading(true)
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
        navigate('/')
       
       })
       .catch(res => {
        setRegLoading(false)
       })
 }
 if(regLoading){
  return (
    <div className="flex justify-center items-center mt-[40vh]">
<div className="spinnerContainer ">
  <div className="spinner" />
  <div className="loader">
    <p>loading</p>
    <div className="words">
      <span className="word">Getting your Data</span>
      <span className="word">Creating Account</span>
      <span className="word">Updating Account</span>
      <span className="word">Creating Your Profile</span>
      <span className="word">Getting the Website</span>
    </div>
  </div>
</div>
    </div>
   

  )
 }
  return (
    <div className="min-h-screen w-full bg-[#00ADB5]  flex justify-center  items-center py-6">
      <div className="mx-auto  max-w-md  sm:min-w-[440px] min-w-[300px] bg-white shadow-2xl  p-8 rounded-lg py-4">
        <div className="flex  justify-center items-center ">
          <img className="w-16" src="/images/AuthWelcome.png" alt="" />
          <div>
            <h2 className="text-2xl font-extrabold text-[#222831]">
              Create Account
            </h2>
          </div>
        </div>
        <form onSubmit={handleRegister} className="form  ">
          <div {...getRootProps()} className="relative flex justify-center">
            <input name="img"  {...getInputProps()} />
            <div
              className={`dropzone border-2 border-[#00ADB5] w-[70px]  h-[70px] rounded-full text-center cursor-pointer`}
            >
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Uploaded Image"
                  className=" mx-auto  rounded-full h-full"
                />
              ) : (
                <div className="mx-auto rounded-full bg-[#EEEEEE] h-full">
                  <img
                    className="w-full h-full"
                    src="/images/imgUpload.png"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
          <label className="relative  ">
          <p className='pb-[2px]  font-bold'>Name</p>
            <input
              required
              name="Name"
              placeholder="Enter your Name"
              type="text"
              className="input w-full h-[45px]  mb-[10px] focus:outline-none focus:border-[#00ADB5] border-2 border-gray-400 rounded-lg"
            />
          </label>
          <label className="relative ">
          <p className='pb-[2px]  font-bold'>Email</p>
            <input
              required
              name="email"
              placeholder="Enter your Email"
              type="email"
              className="input w-full h-[45px] mb-[10px] focus:outline-none focus:border-[#00ADB5] border-2 border-gray-400 rounded-lg"
            />
          </label>

          <label className="relative">
          <p className='pb-[2px] font-bold'>Password</p>
            <input
              required
              name="password"
              placeholder="Enter your Password"
              type="password"
              className="input w-full h-[45px]  focus:outline-none focus:border-[#00ADB5] border-2 border-gray-400 rounded-lg"
            />
          </label>

          <button
            type="submit"
            className="submit border border-[#00ADB5] h-[45px] hover:bg-white hover:text-[#00ADB5] bg-[#00ADB5] w-full mt-5 p-2 rounded-lg text-white text-lg transition duration-300 ease-in"
          >
            Register
          </button>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handelGoogle}
          className=" bg-white hover:bg-[#EEEEEE] border-2 border-[#393E46] w-full text-[#393E46] font-bold py-2 flex items-center justify-center gap-3 px-4 rounded-md mt-4"
        >
          <img className="w-[30px]" src="/images/google.png" alt="" />
          Continue With Google
        </button>
        <p className="signin text-gray-700  text-center mt-2 ">
          Already User?
          <Link to={"/login"} className="text-[#00ADB5] ml-2  hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
