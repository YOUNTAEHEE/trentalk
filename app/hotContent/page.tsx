"use client";
import { useState } from "react";
import Image from "next/image";
import { IoSendSharp } from "react-icons/io5";
import Link from "next/link";
import { Viga } from "next/font/google";
import { BsHandThumbsUpFill } from "react-icons/bs";
const viga = Viga({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function HotContent() {
  const [activeComponent, setActiveComponent] = useState("realtime");

  const handleRealtimeCommentsClick = () => {
    setActiveComponent("realtime");
  };

  const handleCommentsStatsClick = () => {
    setActiveComponent("stats");
  };
  return (
    <div className="flex min-h-screen items-start justify-center ">
      <div className="flex flex-wrap w-[100%] items-center justify-center pt-10 pb-10">
        <Link href="/">
          <h1
            className={`${viga.className} w-[100%] text-center text-[1.8rem] text-red-700`}
          >
            TRENTALK
          </h1>
        </Link>
        <div className="w-[100%]  flex items-start justify-center">
          <div className=" flex flex-wrap items-start justify-center w-[80%] md:w-[40%] lg:w-[20%]">
            <div className="w-[100%] h-[500px]  mt-10 mb-10">
              <div className="w-[100%] h-[200px] bg-slate-400">컨텐츠</div>
              <Link href="#" className="text-xs">
                링크
              </Link>
              <p className="w-[100%] h-[250px] bg-slate-400 mt-5">
                요약내용입니다.요약내용입니다.요약내용입니다.요약내용입니다.요약내용입니다.요약내용입니다.요약내용입니다.
                요약내용입니다.요약내용입니다.요약내용입니다.요약내용입니다.
              </p>
            </div>
            <div className="w-[100%] flex items-center justify-start">
              <button
                className={`p-2 ${
                  activeComponent === "realtime"
                    ? " bg-red-700 text-white"
                    : "bg-slate-300"
                }  text-sm`}
                onClick={handleRealtimeCommentsClick}
              >
                실시간 댓글
              </button>
              <button
                className={`p-2 ${
                  activeComponent === "stats"
                    ? "bg-red-700 text-white"
                    : "bg-slate-300"
                }  text-sm `}
                onClick={handleCommentsStatsClick}
              >
                댓글 통계
              </button>
            </div>
            {activeComponent === "realtime" && (
              <>
                <div className=" p-2  mb-4 w-[100%] h-[25vh] overflow-y-auto border-[1px]">
                  <p className="text-gray-500 text-xs mb-2">
                    <span className="mr-4">익명 닉네임</span>안녕!!!!
                  </p>
                  <p className="text-gray-500 text-xs mb-2">
                    <span className="mr-4">익명 닉네임</span>안녕!!!!
                  </p>
                  <p className="text-gray-500 text-xs mb-2">
                    <span className="mr-4">익명 닉네임</span>안녕!!!!
                  </p>
                  <p className="text-gray-500 text-xs mb-2">
                    <span className="mr-4">익명 닉네임</span>안녕!!!!
                  </p>
                  <p className="text-gray-500 text-xs mb-2">
                    <span className="mr-4">익명 닉네임</span>안녕!!!!
                  </p>
                  <div className="h-[600px]"></div>
                </div>
                <div className="w-[100%]">
                  <p className=" text-left text-xs text-gray-300 ">
                    정해진 닉네임
                  </p>
                  <div className="relative w-[100%]">
                    <input
                      type="text"
                      className="w-[100%] h-[40px] border-[1.5px] border-slate-200 rounded-lg  h-8 p-2 pr-8 focus:outline-none text-xs"
                    />
                    <IoSendSharp className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                  </div>
                </div>
              </>
            )}
            {activeComponent === "stats" && (
              <>
                <div className="w-[100%]  border-[1.5px] border-red-700 flex justify-start items-center flex-wrap rounded-lg p-2 mt-4">
                  <div className="flex justify-between items-center w-[100%]">
                    <div className="w-[100px] h-[35px] bg-red-700 text-white rounded-lg   flex justify-center items-center">
                      분노
                    </div>
                    <div className="flex  justify-center items-center">
                      <BsHandThumbsUpFill className="ml-2 text-gray-300" />
                      <p className="text-gray-300">1000</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start items-start  w-[100%] mt-2">
                    <p className="w-[80%] mb-2">주제주제주제주제주제</p>
                    <p className="w-[100%]">
                      내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                    </p>
                  </div>
                </div>
                <div className="w-[100%]  border-[1.5px] border-slate-500 flex justify-start items-center flex-wrap rounded-lg p-2 mt-4">
                  <div className="flex justify-between items-center w-[100%]">
                    <div className="w-[100px] h-[35px] bg-slate-500 text-white rounded-lg   flex justify-center items-center">
                      분노
                    </div>
                    <div className="flex  justify-center items-center">
                      <BsHandThumbsUpFill className="ml-2 text-gray-300" />
                      <p className="text-gray-300">1000</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start items-start  w-[100%] mt-2">
                    <p className="w-[80%] mb-2">주제주제주제주제주제</p>
                    <p className="w-[100%]">
                      내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                    </p>
                  </div>
                </div>
                <div className="w-[100%]  border-[1.5px] border-red-700 flex justify-start items-center flex-wrap rounded-lg p-2 mt-4">
                  <div className="flex justify-between items-center w-[100%]">
                    <div className="w-[100px] h-[35px] bg-red-700 text-white rounded-lg   flex justify-center items-center">
                      분노
                    </div>
                    <div className="flex  justify-center items-center">
                      <BsHandThumbsUpFill className="ml-2 text-gray-300" />
                      <p className="text-gray-300">1000</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start items-start  w-[100%] mt-2">
                    <p className="w-[80%] mb-2">주제주제주제주제주제</p>
                    <p className="w-[100%]">
                      내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                    </p>
                  </div>
                </div>
                <div className="w-[100%]  border-[1.5px] border-slate-500 flex justify-start items-center flex-wrap rounded-lg p-2 mt-4">
                  <div className="flex justify-between items-center w-[100%]">
                    <div className="w-[100px] h-[35px] bg-slate-500 text-white rounded-lg   flex justify-center items-center">
                      분노
                    </div>
                    <div className="flex  justify-center items-center">
                      <BsHandThumbsUpFill className="ml-2 text-gray-300" />
                      <p className="text-gray-300">1000</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start items-start  w-[100%] mt-2">
                    <p className="w-[80%] mb-2">주제주제주제주제주제</p>
                    <p className="w-[100%]">
                      내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                    </p>
                  </div>
                </div>
                <div className="w-[100%]  border-[1.5px] border-red-700 flex justify-start items-center flex-wrap rounded-lg p-2 mt-4">
                  <div className="flex justify-between items-center w-[100%]">
                    <div className="w-[100px] h-[35px] bg-red-700 text-white rounded-lg   flex justify-center items-center">
                      분노
                    </div>
                    <div className="flex  justify-center items-center">
                      <BsHandThumbsUpFill className="ml-2 text-gray-300" />
                      <p className="text-gray-300">1000</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start items-start  w-[100%] mt-2">
                    <p className="w-[80%] mb-2">주제주제주제주제주제</p>
                    <p className="w-[100%]">
                      내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                    </p>
                  </div>
                </div>
                {/* 아래는 다른 디자인 */}
                {/* <div className="w-[100%]  border-[1.5px] border-red-700 flex justify-start items-center h-[100px] rounded-lg p-2 mt-4">
                  <div className="w-[30%] bg-red-700 text-white rounded-lg h-[90%] w-[30%] flex justify-center items-center">
                    분노
                  </div>
                  <div className="flex flex-wrap justify-start items-start ml-2 w-[70%]">
                    <div className="w-[100%] flex justify-between items-start ">
                      <p className="w-[80%] mb-2">주제주제주제주제주제</p>
                      <div className="flex  justify-center items-center">
                        <BsHandThumbsUpFill className="ml-2 text-gray-300" />
                        <p className="text-gray-300">1000</p>
                      </div>
                    </div>
                    <p className="w-[100%]">내용내용</p>
                  </div>
                </div> */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
