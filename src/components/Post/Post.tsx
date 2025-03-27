import Image from "next/image";
import Link from "next/link";
import blog from "../../assets/images/blog.png";
import CalendarBlank from "../../assets/images/CalendarBlank.png";
import Clock from "../../assets/images/Clock.png";
import ArrowRight from "../../assets/images/ArrowRight.png";
import { postType } from "@/mocks";


export default function Post({ post, ...props }: { post: postType }) {
  return (
    <Link {...props} href={`/blog-detail?id=${post?.id}`} className="bg-white rounded-lg">
      <Image
        src={blog}
        alt="BOM Là Gì?"
        className="rounded-lg w-full"
      />
      <div className="py-6">
        <p className="inline-block text-sx font-medium py-1 px-2 bg-[#E2F0FE] rounded-lg text-[#0F4F9E]">
          {post?.topic}
        </p>
        <p className="text-gray-700 text-2xl font-extrabold mt-6">
          {post?.title}
        </p>
        <div className="flex items-center text-[#667F93] text-xs mt-6">
          <div className="inline-flex">
            <Image
              src={CalendarBlank}
              alt=""
              className="h-4 w-4"
            />
            <span className="ml-1">{post?.date}</span>
          </div>
          <div className="inline-flex ml-4">
            <Image
              src={Clock}
              alt=""
              className="h-4 w-4"
            />
            <span className="ml-1">{post?.timeToRead}</span>
          </div>
        </div>

        <div className="flex mt-6 items-center">
          <button className="text-[#667F93] text-lg font-light mr-5">
            Khám phá thêm
          </button>
          <Image
            src={ArrowRight}
            alt=""
            className="h-4"
          />
        </div>
      </div>
    </Link>
  );
}
