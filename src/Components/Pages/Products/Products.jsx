import React, { useEffect, useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import tags from "../../../../public/Data/Tags";
import { WithContext as ReactTags } from "react-tag-input";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAxious from "../../Hooks/UseAxious";
import { useQuery } from "@tanstack/react-query";
import Card from "../../Shared/Card/Card";


const suggestions = tags.map((country) => {
  return {
    id: country,
    text: country,
  };
});

const Products = () => {
  const [tagsList, setTagsList] = useState([]);
  const [item,setItems] = useState([])
  const [totalItem,setTotalItemnum] = useState(0)

  useEffect(()=>{
    AxiousPublic.get('/itemlength')
    .then(res => setTotalItemnum(parseInt(res.data.result)))

  },[])
  const [DataLoading,setDataLoading] = useState(true)
  const [currentPage,setCurrentPage] = useState(0)
  const [pagenumber,setPagenumber] = useState(20)
  const  totalPage = Math.ceil(totalItem / pagenumber)
  const pages = [...Array(totalPage).keys()]
  const AxiousPublic = UseAxious();
  
  
  
  useEffect(() => {
     AxiousPublic.post(`/search`, { tagsList ,page : currentPage , size:pagenumber })
     .then(res => {
        setItems(res.data)
        setDataLoading(false)
        console.log(currentPage)
     })
  }, [tagsList,AxiousPublic,totalPage,currentPage,pagenumber]);
  const handleDelete = (i) => {
    setTagsList(tagsList.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    if(tagsList.length == 3){
    return toast('You can"t add more than 3')
    }
    setTagsList([...tagsList, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tagsList.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTagsList(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

   const handlePageChange = (ind)=>{
    setCurrentPage(ind)
    window.scrollTo(0,0)
   }

  return (
    <div>
<div className="mx-auto max-w-screen-lg mb-20">
      <h1 className="mb-10 mt-20 lg:text-4xl  text-3xl font-bold text-[#222831] flex justify-center gap-3">
        All Products <FaArrowRight />
      </h1>
      
      <div className="flex justify-center items-center">
        <div className="w-full max-w-screen-lg p-4 flex items-center justify-between gap-2 lg:flex-row flex-col">
          <div className="relative border-2 bg-[#EEEEEE] border-[#00ADB5] w-full rounded-lg flex items-center  text-lg py-2">
            <ReactTags
              tags={tagsList}
              placeholder="Search by tags"
              suggestions={suggestions}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              handleDrag={handleDrag}
              handleTagClick={handleTagClick}
              inputFieldPosition="bottom"
              autocomplete
              classNames={{
                tags: "ReactTags__tags flex justify-start text-xl items-center ",
                tagInput:
                  "ReactTags__tagInput w-full lg:w-[500px] md:w-[400px]  380px  text-lg",
                selected: "ReactTags__selected flex  ",
                tag: "ReactTags__tag bg-gray-200  rounded px-2 py-1 flex   mb-2",
                remove: "ReactTags__remove ml-2 cursor-pointer",
                suggestions: "ReactTags__suggestions absolute",
                activeSuggestion:
                  "ReactTags__activeSuggestion bg-blue-200 cursor-pointer",
              }}
            />
          </div>
          <button  className="btn bg-white btn-outline hover:bg-[#222831] text-[#00ADB5]">
            Search
          </button>
        </div>
      </div>

      
      
    </div>
    {
      DataLoading &&  <div className="mt-[10vh] flex justify-center items-center">
      <div id="wifi-loader">
       <svg className="circle-outer" viewBox="0 0 86 86">
         <circle className="back" cx={43} cy={43} r={40} />
         <circle className="front" cx={43} cy={43} r={40} />
         <circle className="new" cx={43} cy={43} r={40} />
       </svg>
       <svg className="circle-middle" viewBox="0 0 60 60">
         <circle className="back" cx={30} cy={30} r={27} />
         <circle className="front" cx={30} cy={30} r={27} />
       </svg>
       <svg className="circle-inner" viewBox="0 0 34 34">
         <circle className="back" cx={17} cy={17} r={14} />
         <circle className="front" cx={17} cy={17} r={14} />
       </svg>
       <div className="text" data-text="Searching" />
     </div>
           </div>
    }
    <div className="grid max-w-[1300px] mb-10 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-3">
      {
        item?.map(item => <Card key={item._id} data={item}></Card>)
      }
      </div>
      <ToastContainer />
      <div className="flex justify-center items-center mb-10">
        {
         pages.map((item,ind) => <button onClick={()=>{handlePageChange(ind)}}  className={`btn ml-2 font-bold text-xl ${currentPage == ind ? 'bg-[#393E46] text-[#00ADB5] hover:bg-[#EEEEEE] border-2 border-[#00ADB5] hover:border-2 hover:border-[#00ADB5]':'bg-[#00ADB5] text-[#EEEEEE] hover:bg-[#EEEEEE] border-2 border-[#00ADB5] hover:border-2 hover:text-[#222831] hover:border-[#00ADB5] '} `}>{item+1}</button>)
           
        }
      
      </div>
    
      
    </div>
    
  );
};

export default Products;
