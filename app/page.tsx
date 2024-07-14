"use client";
import Image from "next/image";
import { IoSendSharp } from "react-icons/io5";
import Link from "next/link";
import { Viga } from "next/font/google";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import axios from "axios";

const viga = Viga({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
type Message = {
  id: number;
  message: string;
  username: string;
};
interface Search {
  id: number;
  search_keyword: string;
  rank: number;
}
function generateRandomNickname() {
  const adjectives = ["멋진", "빠른", "강한", "즐거운", "용감한", "행복한"];
  const nouns = ["호랑이", "사자", "독수리", "늑대", "곰", "여우"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNumber = Math.floor(Math.random() * 100);
  return `${adjective} ${noun}${randomNumber}`;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [nickname, setNickname] = useState<string>("");
  const [showLoading, setShowLoading] = useState(false);
  const [searches, setSearches] = useState<Search[]>([]);
  const [loadingSearches, setLoadingSearches] = useState(true);

  useEffect(() => {
    const channel = supabase
      .channel("chat")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "message" },
        (payload) => {
          console.log("Change received!", payload);
          fetchMessage();
        }
      )
      .subscribe();

    fetchMessage();
    fetchSearches();

    setNickname(generateRandomNickname());

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchSearches = async () => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL_SEARCHES;
    const token = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !token) {
      console.error("Supabase URL or token is not defined");
      console.log("URL:", url);
      console.log("Token:", token);
      return;
    }

    console.log("Fetching searches from", url);
    console.log("Using token", token);

    try {
      const response = await axios.post(
        url,
        { name: "dudnjs" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response status:", response.status);

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Search[] = response.data;
      console.log("Response data:", data);

      const reassignedData = data
        .slice(0, 6)
        .map((item: Search, index: number) => ({
          ...item,
          rank: index + 1,
        }));
      setSearches(reassignedData);
    } catch (error) {
      console.error("Fetch error:", error);
    }

    setLoadingSearches(false);
  };

  const fetchMessage = async () => {
    setLoading(true);
    setShowLoading(false);

    const loadingTimeout = setTimeout(() => {
      if (loading) setShowLoading(true);
    }, 300);

    const { data, error } = await supabase
      .from("message")
      .select("*")
      .order("id", { ascending: false });

    if (error) console.error("Error fetching message:", error);
    else setMessages(data || []);

    clearTimeout(loadingTimeout);
    setLoading(false);
    setShowLoading(false);
  };

  const addMessage = async (e: any) => {
    e.preventDefault();
    if (newMessage.trim().length === 0) return;

    const { data, error } = await supabase
      .from("message")
      .insert([{ message: newMessage, username: nickname }]);

    if (error) {
      console.error("Error adding message:", error);
    } else {
      setNewMessage("");
      fetchMessage();
    }
  };
  const getRankClass = (rank: number) => {
    switch (rank) {
      case 4:
        return "text-gray-500";
      case 5:
        return "text-gray-400";
      case 6:
        return "text-gray-300";
      default:
        return "";
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="flex flex-wrap w-[100%] items-center justify-center pt-10 pb-10">
        <div>
          <h1
            className={`${viga.className} w-[100%] text-center text-[1.8rem] text-red-700`}
          >
            TRENTALK
          </h1>
        </div>
        <p className="w-[100%] text-center text-sm text-gray-300 mt-16 mb-2">
          인기 검색어
        </p>
        <div className=" flex flex-wrap items-center justify-center w-[80%] md:w-[40%] lg:w-[20%]">
          <div className="w-[100%] flex flex-wrap  border-[1.5px] border-slate-200 rounded-lg p-8">
            {loadingSearches ? (
              <div className="text-gray-500 text-sm">Loading...</div>
            ) : (
              searches.map((search) => (
                <div
                  className={
                    search.rank === 1
                      ? "w-[100%] p-4 border-red-600 border-[2px] rounded-lg"
                      : `w-[100%] p-4 ${getRankClass(search.rank)}`
                  }
                  key={search.id}
                >
                  <div className={search.rank === 1 ? "text-red-500" : ""}>
                    <span className="mr-4">{search.rank}</span>{" "}
                    {search.search_keyword}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className=" p-2 mt-4 mb-2 w-[100%] h-[25vh] overflow-y-auto">
            {loading && showLoading ? (
              <div className="text-gray-500 text-sm">Loading...</div>
            ) : messages.length === 0 ? (
              <div className="text-gray-500 text-sm">메시지가 없습니다.</div>
            ) : (
              messages.map((el) => (
                <>
                  <p className="text-gray-500 text-xs mb-2" key={el.id}>
                    <span className="mr-4">{el.username}</span>
                    {el.message}
                  </p>
                  {/* <p className="text-gray-500 text-xs mb-2">
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
                <div className="h-[600px]"></div> */}
                </>
              ))
            )}
          </div>

          <div className="w-[100%]">
            <form onSubmit={addMessage}>
              <p className=" text-left text-xs text-gray-300 ">{nickname}</p>
              <div className="relative w-[100%]">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-[100%] border-[1.5px] border-slate-200 rounded-lg  h-8 p-2 pr-8 focus:outline-none text-xs"
                />
                <button type="submit">
                  <IoSendSharp className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
