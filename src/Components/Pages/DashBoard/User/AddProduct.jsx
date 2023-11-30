import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoAdd } from "react-icons/io5";
import UseAuth from "../../../Hooks/UseAuth";
import { TagsInput } from "react-tag-input-component";
import axios from "axios";
import UseAxious from "../../../Hooks/UseAxious";
import Swal from "sweetalert2";
import GiveAccess from "../../../Hooks/GiveAccess";

const AddProduct = () => {
  const [fullImage, setFullImage] = useState([]);
  const [selected, setSelected] = useState([]);
  const AxiouPublic = UseAxious();
  const [access, fetch] = GiveAccess();
  const [loadingTime, setLoadingTime] = useState(false);
  const { user } = UseAuth();
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

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoadingTime(true);
    if (!access) {
      setLoadingTime(false)
      Swal.fire({
        title: "Be Pro User ",
        text: "You already crossed the free limit ",
        icon: "error",
      });
     
      return;
    }
    const from = e.target;
    console.log("clicked");
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
    console.log(result.data);

    const ownerName = from.name.value;
    const Product_image = result.data.data.display_url;
    const Owner_email = from.email.value;
    const Product_name = from.productName.value;
    const Dated = new Date();
    const Status = "Pending";
    const Up_Vote = 0;
    const External_Links = { Amazon: from.amazon.value, Ebay: from.ebay.value };
    const Product_id = Math.floor(Math.random() * 100000) + 1;
    const Featured = false;
    const Description = [...from.productdes.value.split(".")];
    const Tags = [...selected];
    let product = {
      Product_image,
      ownerName,
      Owner_email,
      Product_id,
      Product_name,
      Date: Dated,
      Status,
      Up_Vote,
      External_Links,
      Featured,
      Description,
      Tags,
    };

    AxiouPublic.post("/products", product).then((res) => {
      console.log(res.data);
      setLoadingTime(false);
      fetch()
      Swal.fire({
        title: "Good job!",
        text: "The product have been saved",
        icon: "success",
      });
      e.target.reset();
    });
  };

  return (
    <>
      <div className="text-[#EEEEEE] bg-[#222831] pt-10 mb-10 w-full relative">
        {loadingTime && (
          <div className="absolute w-full mt-[30vh] flex justify-center items-center ">
            <div className="loading-wave">
              <div className="loading-bar" />
              <div className="loading-bar" />
              <div className="loading-bar" />
              <div className="loading-bar" />
            </div>
          </div>
        )}
        {!loadingTime && (
          <>
            <h2 className="text-center text-4xl font-bold">Add Product</h2>

            <form
              onSubmit={handleAddProduct}
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
                      <label className="text-2xl text-[#EEEEEE]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={user?.displayName || "Unknown"}
                        name="name"
                        className="input py-2 mt-3 text-xl focus:border "
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label className="text-2xl text-[#EEEEEE]">
                        Your email
                      </label>
                      <input
                        type="text"
                        readOnly
                        name="email"
                        value={user?.email || "Unknown"}
                        className="input py-2 mt-3 text-xl focus:border "
                      />
                    </div>
                  </div>
                  <div className="flex gap-10 md:flex-row  text-black flex-col">
                    <div className="flex flex-col flex-1 ">
                      <label className="text-2xl text-[#EEEEEE]">
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="productName"
                        required
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
                  name="productdes"
                  className=" input min-h-[160px] w-full text-black relative py-2 mt-3 text-xl focus:border "
                />
              </div>
              <div className="flex lg:flex-row flex-col text-black gap-10 2xl:px-10 px-0 justify-center">
                <div className="flex flex-col flex-1 ">
                  <label className="text-2xl text-[#EEEEEE]">
                    {" "}
                    Amazon Web Link
                  </label>
                  <input
                    type="text"
                    required
                    name="amazon"
                    className="input py-2 mt-3 text-xl focus:border "
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="text-2xl text-[#EEEEEE]">
                    Ebay Web Link
                  </label>
                  <input
                    type="text"
                    required
                    name="ebay"
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
          </>
        )}

        {/* focus:border-[#00ADB5] focus:outline focus:outline-[#00ADB5] outline outline-[#00ADB5] */}
      </div>
    </>
  );
};

export default AddProduct;
