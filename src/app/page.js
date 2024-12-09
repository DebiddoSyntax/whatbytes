"use client"
import React, { useState } from "react";
import HTML from "./img/HTML5.png"
import Image from "next/image";
import { IoCheckbox } from "react-icons/io5";
import { FcComboChart } from "react-icons/fc";
import { FaTrophy } from "react-icons/fa";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { useForm } from "react-hook-form";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

// Register necessary components
ChartJS.register(ArcElement);

const DoughnutChart = ({score, totalQuestions}) => {
  
  const incorrectQuestions = totalQuestions - score;

  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [score, incorrectQuestions], 
        backgroundColor: ["#4c8bf5", "#d3d3d3"], 
      },
    ],
  };

  const options = {
    cutout: "70%", 
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};




export default function Home() {


  const { register, handleSubmit, formState: { errors }, } = useForm();

  const [update, setUpdate] = useState(false);

  const toggleUpdate = () => {
    setUpdate(!update)
  };

  const [internPercentile, setInternPercentile]= useState(30);
  const [rank, setRank]= useState(1);
  const [score, setScore]= useState(10);
  const totalQuestions = 15;

  const onSubmit = (data) => {
    setInternPercentile(data.percentile);
    setRank(data.rank);
    setScore(data.score)
    
    if(data){
      toggleUpdate()
    }
  }

  const data = [
    {
      name: '0%',
      percentile: 0,
    },
    {
      name: '25%',
      percentile: 25,
    },
    {
      name: '30%',
      percentile: 30,
      InternPercentile: internPercentile,
    },
    {
      name: '50%',
      percentile: 50,
    },
    {
      name: '72%',
      percentile: 72,
      average: 72,
    },
    {
      name: '75%',
      percentile: 75,
    },
    {
      name: '100%',
      percentile: 100,
    }
  ];

  return (
    <div className="text-black">
    
      {/* this is the navbar */}
      <Navbar />
    

     <div className="flex">
      {/* sidebar */}
      <Sidebar />


      
      <div className="px-5 md:px-10 py-10 flex flex-col w-full">
        <h5 className="text-lg font-normal">Skill Test</h5>
        
        {/* Dashboard components */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">

            <div className="py-5 col-span-1 lg:col-span-2">
              
              <div className="flex justify-between items-center border-2 p-5">
                <Image className="mx-2 w-10 md:w-12 h-10 md:h-12" src={HTML} alt="HTML"/>
                <div className="w-full mx-3">
                  <h5 className="text-sm my-1 md:text-base lg:text-base font-semibold">Hyper Text Markup Language</h5>
                  <p className="text-sm my-1 md:text-base lg:text-base font-normal">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                </div>
                <button className="px-5 md:px-10 py-3 mx-1 md:mx-3 rounded-md bg-slate-900 text-white" onClick={()=> toggleUpdate()}>Update</button>
              </div>

              {/* Update scores modal */}
              {update && <div className="fixed inset-0 bg-black bg-opacity-50 flex z-30" >
                <div className="z-50 relative bg-white m-auto w-[90%] md:w-[70%] lg:w-[50%] py-10 ">
                  <h3 className="px-10 text-xl font-semibold">Update scores</h3>
                  <div className="px-5">

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">

                      <div className="grid grid-cols-3">
                        <div className="flex col-span-2 items-center">
                          <p className="p-3 mr-5 bg-slate-900 rounded-full text-white text-lg">1</p>
                          <p className="mx-3">Update your <span className="font-bold text-base">Rank</span></p>
                        </div>
                        <div>
                          <input type="number" name="rank" className=" w-[100%] p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none" {...register("rank", { required: "Should be a number" })}/>
                          {errors.rank && <p className="text-sm text-red-700">{errors.rank.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 mt-5">
                        <div className="flex col-span-2 items-center">
                          <p className="p-3 mr-5 bg-slate-900 rounded-full text-white text-lg">2</p>
                          <p className="mx-3">Update your <span className="font-bold text-base">Percentile</span></p>
                        </div>
                        <div>
                          <input type="number" name="percentile" className=" w-[100%] p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none" {...register("percentile", { required: "Should be a percentile" })} />
                          {errors.percentile && <p className="text-sm text-red-700">{errors.percentile.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 mt-5">
                        <div className="flex col-span-2 items-center">
                          <p className="p-3 mr-5 bg-slate-900 rounded-full text-white text-lg">3</p>
                          <p className="mx-3">Update your <span className="font-bold text-base">Score</span></p>
                        </div>
                        <div>
                          <input type="number" name="score" className=" w-[100%] p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none" {...register("score", { required: "Should be a number between 1 -15" })}/>
                          {errors.score && <p className="text-sm text-red-700">{errors.score.message}</p>}
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div></div>
                        <div className="flex items-center mt-5">
                          <button className="mr-3 py-3 px-10 border-2 text-sm font-semibold rounded-sm" onClick={()=> toggleUpdate()}>Cancel</button>
                          <button type="submit" className="ml-3 py-3 px-10 bg-slate-900 text-sm font-semibold text-white rounded-sm">save</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            }

              <div className="mt-5 px-5 border-2 pt-3 pb-8">
                <h5 className="font-semibold pt-3">Quick Statistics</h5>
               
                <div className="grid grid-cols-3 gap-1 lg:gap-2 mt-5 w-full">

                  <div className="flex items-start border-r-2">
                    <div className="p-2 lg:p-3 rounded-full bg-gray-300 mr-1 md:mr-2"><FaTrophy className="text-lg md:text-xl lg:2xl" color="gold"/></div>
                    <div className="">
                      <h4 className="font-semibold text-lg md:text-xl">{rank}</h4>
                      <h4 className="text-sm md:text-sm">YOUR RANK</h4>
                    </div>
                  </div>

                  <div className="flex items-start border-r-2">
                    <div className="p-2 lg:p-3 rounded-full bg-gray-300 mr-1 md:mr-2"><FcComboChart className="text-lg md:text-xl lg:2xl"/></div>
                    <div className="">
                      <h4 className="font-semibold text-lg md:text-xl">{internPercentile}%</h4>
                      <h4 className="text-sm md:text-sm">PERCENTILE</h4>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 lg:p-3 rounded-full bg-gray-300 mr-1 md:mr-2"><IoCheckbox className="text-lg md:text-xl lg:2xl" color="green"/></div>
                    <div className="">
                      <h4 className="font-semibold text-lg md:text-xl">{score} / 15</h4>
                      <h4 className="text-sm md:text-sm w-full">CORRECT ANSWERS</h4>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-5 py-5 px-5 border-2">
                <h5>Comparison Graph</h5>
                <div className="flex mt-3 justify-between">
                  <p><span className="font-semibold text-base">You scored {internPercentile}% percentile</span> which is lower than <br/>the average percentile 72% of all the engineers who took the asessment</p>
                  <div className="p-3 h-10 rounded-full bg-gray-300 mr-2"><FcComboChart className="text-lg md:text-xl lg:2xl"/></div>
                </div>
             

            
              <div className="w-full h-72 mt-5">
                  <ResponsiveContainer className="z-10">
                    <LineChart className="h-full w-full z-20"
                      width={700}
                      height={300}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                
                      <XAxis dataKey="name" />
                      <Tooltip />
                      <Line type="monotone" dataKey="percentile" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="InternPercentile" stroke="#FF0000" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="average" stroke="#008000" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

              </div>
        

            </div>


            <div className="w-full">
              <div className="mt-5 border-2 px-5 pt-5">
                <h5 className="font-semibold text-base">Syllabus Wise Analysis</h5>

                    <div className="mb-5 mt-10">
                      <div className="text-base"> HTML Tools, Forms, History </div>
                      <div className="flex items-center">
                        <div className="bg-[#f0f0f0] h-3 mt-5 w-full rounded-xl">
                          <div className="h-full bg-blue-700 w-[80%] rounded-xl"></div>
                        </div> 
                        <div className="ml-5 text-lg font-semibold text-blue-700">80%</div>
                      </div>

                      <div className="text-base mt-10"> Tags & References in HTML </div>
                      <div className="flex items-center">
                        <div className="bg-[#f0f0f0] h-3 mt-5 w-full rounded-xl">
                          <div className="h-full bg-orange-600 w-[60%] rounded-xl"></div>
                        </div> 
                        <div className="ml-5 text-lg font-semibold text-orange-600">60%</div>
                      </div>

                      <div className="text-base mt-10"> Tables & References in HTML </div>
                      <div className="flex items-center">
                        <div className="bg-[#f0f0f0] h-3 mt-5 w-full rounded-xl">
                          <div className="h-full bg-red-400 w-[24%] rounded-xl"></div>
                        </div> 
                        <div className="ml-5 text-lg font-semibold text-red-400">24%</div>
                      </div>
                      
                      <div className="text-base mt-10"> Tables & CSS Basics</div>
                      <div className="flex items-center">
                        <div className="bg-[#f0f0f0] h-3 mt-5 w-full rounded-xl">
                          <div className="h-full bg-green-600 w-[96%] rounded-xl"></div>
                        </div> 
                        <div className="ml-5 text-lg font-semibold text-green-600">96%</div>
                      </div>
                      
                    </div>
              </div>

              <div className="mt-5 px-5 py-5 border-2">
                <h5 className="font-semibold text-base">Question Analysis</h5>
                <p className="mt-5">You scored {score} questions correct out of 15. However it still needs some improvement</p>
                <div className="flex mt-5 w-full h-64 justify-center"><DoughnutChart score={score} totalQuestions={totalQuestions}/></div>
              </div>
            </div>
        </div>

      </div>
     
     </div>
    
    
    
    </div>
  );
}







