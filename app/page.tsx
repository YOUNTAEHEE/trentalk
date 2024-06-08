import Image from "next/image";
import { IoSendSharp } from "react-icons/io5";
import Link from "next/link";
import { Viga } from "next/font/google";
const viga = Viga({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="flex flex-wrap w-[100%] items-center justify-center pt-10 pb-10">
        <Link href="/">
          <h1
            className={`${viga.className} w-[100%] text-center text-[1.8rem] text-red-700`}
          >
            TRENTALK
          </h1>
        </Link>
        <p className="w-[100%] text-center text-sm text-gray-300 mt-16 mb-2">
          인기 검색어
        </p>
        <div className=" flex flex-wrap items-center justify-center w-[80%] md:w-[40%] lg:w-[20%]">
          <div className="w-[100%] flex flex-wrap  border-[1.5px] border-slate-200 rounded-lg p-8">
            <div className="w-[100%] p-4 border-red-600 border-[2px] rounded-lg">
              <Link href="/hotContent" className="text-red-500 cursor-pointer ">
                <span className="mr-4">1</span> 일등검색어
              </Link>
            </div>
            <Link href="/hotContent" className="w-[100%] p-4 cursor-pointer">
              <span className="mr-4">2</span> 이등검색어
            </Link>
            <Link href="/hotContent" className="w-[100%] p-4 cursor-pointer">
              <span className="mr-4">3</span> 삼등검색어
            </Link>
            <Link
              href="/hotContent"
              className="w-[100%] p-4 text-gray-500 cursor-pointer"
            >
              <span className="mr-4">4</span> 사등검색어
            </Link>
            <Link
              href="/hotContent"
              className="w-[100%] p-4 text-gray-400 cursor-pointer"
            >
              <span className="mr-4">5</span> 오등검색어
            </Link>
            <Link
              href="/hotContent"
              className="w-[100%] p-4 text-gray-300 cursor-pointer"
            >
              <span className="mr-4">6</span> 육등검색어
            </Link>
          </div>

          <div className=" p-2 mt-4 mb-2 w-[100%] h-[25vh] overflow-y-auto">
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
            <p className=" text-left text-xs text-gray-300 ">정해진 닉네임</p>
            <div className="relative w-[100%]">
              <input
                type="text"
                className="w-[100%] border-[1.5px] border-slate-200 rounded-lg  h-8 p-2 pr-8 focus:outline-none text-xs"
              />
              <IoSendSharp className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
