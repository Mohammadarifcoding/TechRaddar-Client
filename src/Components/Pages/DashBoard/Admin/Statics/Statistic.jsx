import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import UseAxious from "./../../../../Hooks/UseAxious";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

const Statistic = () => {
  const axiosPublic = UseAxious();
  const [stats, setStats] = useState({});

  useEffect(() => {
    axiosPublic.get("/statsProduct").then((res) => {
      setStats(res.data);
    });
  }, [axiosPublic]);

  const data = [
    ["Task", "Hours per Day"],
    ["Accepted", stats.countdata?.Accepted || 0],
    ["Rejected", stats.countdata?.Rejected || 0],
    ["Pending", stats.countdata?.Pending || 0],
  ];

  const options = {
    title: "All Products",
    pieHole: 0.4,
    slices: [
      { color: "#189ba1" }, // Accepted
      { color: "#FF6363" }, // Rejected
      { color: "#d89314" }, // Pending (green shade)
    ],
    legend: {
      textStyle: {
        color: "#EEEEEE",
      },
    },
    titleTextStyle: {
      color: "#EEEEEE",
      fontSize: 24,
    },
    backgroundColor: "#222831",
  };

  const Reviewdata = [
    ["Type", "Count", { role: "style" }],
    ["Reviews", stats?.feedback?.Reviews || 0, "#1976D2"],
    ["Reported", stats?.feedback?.Reported || 0, "#D32F2F"],
  ];

  const items = [
    {
      name: "Review vs Report",
      Report: stats?.feedback?.Reported || 0,
      Review: stats?.feedback?.Reviews || 0,
    },
  ];
  //   const votingdata = [
  //     { name: 'Upvote', value: 45|| 0, color: '#1976D2' },
  //     { name: 'DownVote', value: c || 0, color: '#D32F2F' },
  //   ];

  const votingdata = [
    {
      name: "Upvote and Downvote",
      Upvote: stats?.totalVote?.Upvote || 0,
      DownVote: stats?.totalVote?.DownVote || 0,
    },
  ];
  return (
    // <div className="bg-[#222831]  min-h-[calc(100vh-69px)] pt-10 xl:px-10 p-4 pb-10">
    //   <h2 className="text-center text-[#EEEEEE] text-4xl font-bold">
    //     Statistic
    //   </h2>
         

    //   <div className="flex  items-center justify-center mt-20  mx-auto w-full lg:flex-row flex-col">
    //     <div className="lg:w-[50%] w-full mx-auto">
    //       <ResponsiveContainer width="100%" height={600}>
    //         <Chart chartType="PieChart" data={data} options={options} />
    //       </ResponsiveContainer>
    //     </div>
    //     <div className="lg:w-[50%] w-full xl:-mt-32">
    //       <h2 className="text-[#EEEEEE] text-2xl font-bold mb-3 text-center">
    //         Total Review and Report
    //       </h2>
    //       <ResponsiveContainer width="100%" height={300}>
    //         <BarChart
    //           data={items}
    //           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    //         >
    //           <CartesianGrid strokeDasharray="3 3" />
    //           <XAxis dataKey="name" stroke="#fff" />
    //           <YAxis stroke="#fff" />
    //           <Tooltip
    //             cursor={{ fill: "rgba(0, 0, 0, 0.2)" }}
    //             contentStyle={{
    //               backgroundColor: "#222831",
    //               border: "none",
    //               color: "#fff",
    //             }}
    //             labelStyle={{ color: "#fff" }}
    //           />
    //           <Legend wrapperStyle={{ color: "#fff" }} iconSize={18} />
    //           <Bar
    //             dataKey="Report"
    //             fill="#ff6f61"
    //             background={{ fill: "#222831" }}
    //           />
    //           <Bar dataKey="Review" fill="#38d138" />
    //         </BarChart>
    //       </ResponsiveContainer>
    //     </div>
    //   </div>
    //   <div className="flex  flex-col">
    //     <div className=" mt-32 lg:mt-0 mb-10">
    //       <h2 className="text-center text-[#EEEEEE] text-xl bg-[#00ADB5] py-3 font-bold">
    //         Vote Statistics
    //       </h2>
    //       <ResponsiveContainer width="100%" height={400}>
    //         <BarChart data={votingdata}>
    //           <XAxis dataKey="name" stroke="#fff" />
    //           <YAxis stroke="#fff" />
    //           <Tooltip
    //             cursor={{ fill: "rgba(0, 0, 0, 0.2)" }}
    //             contentStyle={{
    //               backgroundColor: "#222831",
    //               border: "none",
    //               color: "#fff",
    //             }}
    //             labelStyle={{ color: "#fff" }}
    //           />
    //           <Legend></Legend>
    //           <Bar
    //             dataKey="Upvote"
    //             fill="#00ADB5"
    //             background={{ fill: "#222831" }}
    //           />
    //           <Bar dataKey="DownVote" fill="#F44336" />
    //         </BarChart>
    //       </ResponsiveContainer>
    //     </div>
        
    //   </div>
    // </div>
    <div className="bg-[#222831] min-h-[calc(100vh-69px)] pt-10 xl:px-10 p-4 pb-10">
  <h2 className="text-center text-[#EEEEEE] text-4xl font-bold">Statistic</h2>

  <div className="flex items-center justify-center mt-20 mx-auto w-full lg:flex-row flex-col space-y-10 lg:space-y-0">
    <div className="lg:w-[50%] w-full mx-auto">
      <ResponsiveContainer width="100%" height={600}>
      <ResponsiveContainer width="100%" height={600}>
             <Chart chartType="PieChart" data={data} options={options} />
          </ResponsiveContainer>
      </ResponsiveContainer>
    </div>
    
    <div className="lg:w-[50%] w-full xl:-mt-32">
      <h2 className="text-[#EEEEEE] text-2xl font-bold mb-3 text-center">
        Total Review and Report
      </h2>
      <ResponsiveContainer width="100%" height={300}>
               <BarChart
              data={items}
               margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
             >
              <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="name" stroke="#fff" />
             <YAxis stroke="#fff" />
               <Tooltip
                 cursor={{ fill: "rgba(0, 0, 0, 0.2)" }}
                 contentStyle={{
                   backgroundColor: "#222831",
                   border: "none",
                   color: "#fff",
                 }}
                 labelStyle={{ color: "#fff" }}
               />
               <Legend wrapperStyle={{ color: "#fff" }} iconSize={18} />
               <Bar
                 dataKey="Report"
                 fill="#ff6f61"
                 background={{ fill: "#222831" }}
               />
               <Bar dataKey="Review" fill="#38d138" />
             </BarChart>
      </ResponsiveContainer>
    </div>
  </div>

  <div className="flex flex-col mt-10">
    <h2 className="text-center text-[#EEEEEE] text-xl bg-[#00ADB5] py-3 font-bold">
      Vote Statistics
    </h2>
    <ResponsiveContainer width="100%" height={400}>
    <BarChart data={votingdata}>
               <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                cursor={{ fill: "rgba(0, 0, 0, 0.2)" }}
                contentStyle={{
                  backgroundColor: "#222831",
                  border: "none",
                  color: "#fff",
                 }}
               labelStyle={{ color: "#fff" }}
               />
               <Legend></Legend>
               <Bar
                 dataKey="Upvote"
                 fill="#00ADB5"
                 background={{ fill: "#222831" }}
               />
               <Bar dataKey="DownVote" fill="#F44336" />
             </BarChart>
    </ResponsiveContainer>
  </div>

  <div className="flex items-center justify-center mt-10">
    <h2 className="text-[#EEEEEE] text-lg font-bold">
      Total Users: {stats.users?.user}
    </h2>
  </div>
</div>

  );
};

export default Statistic;
