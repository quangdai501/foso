"use client";
import Image from "next/image";
import CalendarBlank from "../../../../assets/images/CalendarBlank.png";
import Clock from "../../../../assets/images/Clock.png";
import Author from "../../../../assets/images/author.png";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { posts, postType } from "@/mocks";
export type AuthorInfoType = {
  author: string;
  date: string;
  readingTime: number;
};

export default function AuthorInfo({}) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [author, setAuthor] = useState<postType>();
  useEffect(() => {
    setAuthor(posts.find((item) => item.id == id));
  }, [id]);

  return (
    <div className="flex items-center space-x-6 text-gray-600 text-sm">
      {/* Author Info */}
      <div className="flex items-center space-x-2">
        <span className="bg-white rounded-[50%] border-[1px] border-[#f1f5f7] w-16 h-16 flex items-center justify-center">
          <Image
            src={Author}
            alt="Author Logo"
            className="rounded-full w-8 h-8"
          />
        </span>
        <div className="ml-auto">
          <span className="text-gray-400">Tác giả</span>
          <p className="font-bold text-black">{author?.author}</p>
        </div>
      </div>

      <div className="ml-auto flex text-base text-[#667F93]">
        {/* Date */}
        <div className="flex items-center space-x-1 border-r-[1px] border-r-[#d9e1e7] pr-5">
          <Image src={CalendarBlank} alt="Author Logo" className="w-6 h-6" />
          <span>Cập nhật vào: {author?.date}</span>
        </div>
        {/* Reading Time */}
        <div className="flex items-center space-x-1 pl-5">
          <Image src={Clock} alt="Author Logo" className="w-6 h-6" />
          <span>{author?.timeToRead} phút đọc</span>
        </div>
      </div>
    </div>
  );
}
