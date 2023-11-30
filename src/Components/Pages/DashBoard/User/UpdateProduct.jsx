import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoAdd } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import UseAxious from "../../../Hooks/UseAxious";
import UseAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const productItemData = useLoaderData();
  console.log(productItemData)
  const value = useParams()
  console.log(value)
  const AxiouPublic = UseAxious();
  //    const { data:productItemData = {} , refetch ,isLoading  } = useQuery({
  //     queryKey:['updateProduct',productId],
  //     queryFn:async()=>{
  //         const res = await AxiouPublic.get(`/products/${productId}`)
  //         return res.data
  //     }
  //    })

  const {
    Product_name,
    Product_image,
    Tags,
    Owner_email,
    ownerName,
    Date,
    Status,
    Description,
    Up_Vote,
    External_Links,
    Product_id,
    Featured,
  } = productItemData;
  console.log(productItemData);
  const [fullImage, setFullImage] = useState([]);
  const [selected, setSelected] = useState(Tags|| []);

  //   const [loadingTime, setLoadingTime] = useState(false);
  const { user } = UseAuth();
  const [storedImage, setStoredImage] = useState(
    localStorage.getItem("userImage")
  );
  const [previewImage, setPreviewImage] = useState(Product_image);

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
  const handleUpdateProduct = async(e) => {
    e.preventDefault();
    const from = e.target;
    console.log("clicked");
    const image = Product_image;
    const name = from.name.value
    const email = from.name.value
    const productName = from.productName.value
    const productdes = [...from.productdes.value.split(".")]
    const amazon = from.amazon.value
    const ebay = from.ebay.value
    const Links = { Amazon: amazon, Ebay: ebay };
    const tag = [...selected]

    const productValuedata= {
        Product_image : image,
        ownerName :name,
        Owner_email : email ,
        Product_name:productName,
        Tags : tag,
        External_Links : Links ,
        Description:productdes
    }
   AxiouPublic.patch(`/productsData/${Product_id}`,productValuedata)
   .then(res => console.log(res.data))
    console.log(productValuedata)

    
  }
  //   if(isLoading){
  //     return (<div>fasdfasdf</div>)
  // //   }
  //   console.log(productId);
  return (
    <div className="bg-[#222831] pb-10 pt-10 w-full h-full min-h-[calc(100vh-67px)] ">
      <h2 className="text-center text-[#EEEEEE] text-4xl font-bold">
        Update Your Product
      </h2>
      <form
        onSubmit={handleUpdateProduct}
        className="max-w-[1000px] 2xl:p-0  px-10 mt-20 flex flex-col  gap-10 mx-auto"
      >
        <div className="flex justify-center  gap-10 2xl:flex-row flex-col">
        <div>
                  <label className="text-2xl flex md:justify-start justify-center">
                    {" "}
                    Product Picture{" "}
                  </label>
                  <div {...getRootProps()} className="relative ">
                    <input name="img" {...getInputProps()} />
                    <div
                      className={`dropzone relative mt-5 w-[270px] md:mr-0 md:ml-0 mx-auto h-[270px] rounded-xl text-center cursor-pointer`}
                    >
                      {previewImage ? (
                        <>
                          <img
                            src={previewImage}
                            alt="Uploaded Image"
                            className=" mx-auto  rounded-xl h-full"
                          />
                          <img
                            src="/images/imgUpload.png"
                            className="absolute w-[60px]  -right-3 -bottom-3 bg-white rounded-full"
                            alt=""
                          />
                        </>
                      ) : (
                        <div className="mx-auto flex justify-center items-center rounded-xl w-[270px] border-dotted border-[4px] border-[#00ADB5] bg-[#00ADB5]/5 h-[270px]  ">
                          <IoAdd className="text-7xl " />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-10 md:flex-row  text-black flex-col">
              <div className="flex flex-col flex-1 ">
                <label className="text-2xl text-[#EEEEEE]">Your Name</label>
                <input
                  type="text"
                  readOnly
                  value={user?.displayName}
                  name="name"
                  className="input py-2 mt-3 text-xl focus:border "
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-2xl text-[#EEEEEE]">Your email</label>
                <input
                  type="text"
                  readOnly
                  name="email"
                  value={user?.email}
                  className="input py-2 mt-3 text-xl focus:border "
                />
              </div>
            </div>
            <div className="flex gap-10 md:flex-row  text-black flex-col">
              <div className="flex flex-col flex-1 ">
                <label className="text-2xl text-[#EEEEEE]">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  required
                  defaultValue={Product_name}
                  className="input py-2 mt-3 text-xl focus:border "
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" flex  flex-col 2xl:px-10 gap-3 px-0 justify-center  ">
          <label className="text-2xl "> Product Description </label>
          <textarea
            type="text"
            cols={40}
            rows={3}
            required
            minLength={200}
            defaultValue={Description?.map((item) => item)}
            name="productdes"
            className=" input min-h-[160px] w-full text-black relative py-2 mt-3 text-xl focus:border "
          />
        </div>
        <div className="flex lg:flex-row flex-col text-black gap-10 2xl:px-10 px-0 justify-center">
          <div className="flex flex-col flex-1 ">
            <label className="text-2xl text-[#EEEEEE]"> Amazon Web Link</label>
            <input
              type="text"
              required
              name="amazon"
              defaultValue={External_Links?.Amazon}
              className="input py-2 mt-3 text-xl focus:border "
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-2xl text-[#EEEEEE]">Ebay Web Link</label>
            <input
              type="text"
              required
              name="ebay"
              defaultValue={External_Links?.Ebay}
              className="input py-2 mt-3 text-xl focus:border "
            />
          </div>
        </div>
        <div className=" flex  flex-col text-black 2xl:px-10 gap-3 px-0 justify-center  ">
          <label className="text-2xl text-[#EEEEEE]"> Tags </label>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="fruits"
            placeHolder="Enter Tags"
          />
        </div>
        <div className="2xl:px-10 px-0">
          <button
            type="submit"
            className="btn bg-[#036b70] border-2 hover:bg-[#EEEEEE] border-[#00ADB5] hover:border-2 hover:border-[#00ADB5] hover:text-[#393E46] text-[#EEEEEE] "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
