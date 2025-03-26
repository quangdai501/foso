import Image from "next/image";
import Logo from "../assets/images/logo.png";
import Icon_country from "../assets/images/icon_country.png";
import Arrow from "../assets/images/skewarrow.png";
import CaretDown from "../assets/images/CaretDown.png";
import pen from "../assets/images/pen.png";
import notebook from "../assets/images/notebook.png";
import blog from "../assets/images/blog.png";
import ArrowRight from "../assets/images/ArrowRight.png";
import Clock from "../assets/images/Clock.png";
import CalendarBlank from "../assets/images/CalendarBlank.png";
import MagnifyingGlass from "../assets/images/MagnifyingGlass.png";
import Computer from "../assets/images/Computer.png";
import Vector from "../assets/images/Vector.png";
import Robo from "../assets/images/Robo.png";
import Group from "../assets/images/Group.png";
import Group2 from "../assets/images/Group2.png";
import Mrplogo from "../assets/images/mrplogo.svg";
import Pagination from "@/components/Pagination";
import Header from "@/components/Header";
import Link from "next/link";
import Post from "@/components/Post";
import Advertisement from "@/components/Advertisement";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { postType } from "@/components/Post/Post";

export default function Home() {
  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tài nguyên", href: "/" },
    { label: "Blog", href: "/blog" },
  ];

  const posts: postType[] = [
    {
      topic: "Quản lý sản xuất",
      title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
      image: "",
      date: "1/1/2020",
      timeToRead: 10,
    },
    {
      topic: "Quản lý sản xuất A",
      title: "Tại sao BOM quan trọng trong quản lý sản xuất A?",
      image: "",
      date: "1/1/2021",
      timeToRead: 14,
    },
    {
      topic: "Quản lý sản xuất B",
      title: "Tại sao BOM quan trọng trong quản lý sản xuất B?",
      image: "",
      date: "1/1/2022",
      timeToRead: 15,
    },
    {
      topic: "Quản lý sản xuất C",
      title: "Tại sao BOM quan trọng trong quản lý sản xuất C?",
      image: "",
      date: "1/1/2024",
      timeToRead: 16,
    },
    {
      topic: "Quản lý sản xuất",
      title: "Tại sao BOM quan trọng trong quản lý sản xuất D?",
      image: "",
      date: "1/1/2025",
      timeToRead: 17,
    },
    {
      topic: "Quản lý sản xuất D",
      title: "Tại sao BOM quan trọng trong quản lý sản xuất E?",
      image: "",
      date: "1/1/2023",
      timeToRead: 18,
    },
  ];
  return (
    <div className="relative px-2 md:px-2">
      <Header />
      <div className="flex justify-center my-4 lg:my-[64px]">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="flex flex-wrap lg:items-center text-center sm:pb-10 max-w-[1536px] mx-auto">
        <div className="flex-[100%] lg:basis-0 lg:flex-auto flex justify-center pb-5 self-start">
          <Image src={notebook} alt="Calendar" className="w-[195px]" />
        </div>

        <div className="flex-[100%] lg:flex-8 flex flex-col items-center mt-10">
          <h1 className="text-6xl md:text-5xl font-normal mt-3">
            Blog{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#53B086] via-[#85EEB3B5] to-[#53B086F9]">
              FOSO
            </span>{" "}
            –
          </h1>
          <h2 className="text-3xl md:text-6xl font-normal text-black mt-2">
            Cập Nhật Tin Tức{" "}
            <span className="relative">
              <span className="relative text-black font-extrabold z-50">
                Mới Nhất
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-5 bg-[#a3eed6] rounded-2xl opacity-50"></span>
            </span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl">
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </p>
        </div>

        <div className="flex-[100%] mt-10 lg:mt-0 lg:basis-0 lg:flex-auto flex justify-center self-start">
          <Image src={pen} alt="Writing Hand" className="w-[195px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-6">
          {/* Left Section: Articles */}
          <div className="lg:col-span-7">
            <h3 className="text-4xl font-extrabold mb-4">Tất Cả Bài Viết</h3>
            {/* Banner */}
            <div
              className="text-white rounded-[40px] mb-10 flex flex-wrap items-center justify-between"
              style={{
                background:
                  "linear-gradient(77.74deg, #013DA0 11.85%, #0142A9 20.65%, #0148B3 29.45%, #024EBC 38.25%, #0254C5 47.05%, #025ACE 55.84%, #0261D7 64.64%, #0267E1 73.44%, #036EEA 82.24%, #0375F3 91.04%)",
              }}
            >
              <div className="p-6 flex-[100%] sm:flex-[70%] lg:flex-1">
                <h2 className="text-4xl font-bold text-justify mr-12">
                  Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
                </h2>
                <button className="mt-8 border-2 border-white text-white rounded-full px-6 py-3 text-lg flex items-center justify-center gap-2 transition hover:bg-white hover:text-blue-600">
                  <span>Tham Gia Ngay</span>
                  <Image
                    src={Vector} // Replace with actual image path
                    alt="Laptop and Mobile UI"
                    className="ml-10"
                  />
                </button>
              </div>
              <Image
                src={Group2}
                alt="Banner"
                className="flex-[100%] sm:flex-[30%] lg:flex-1 h-full mr-6"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((item, i) => (
                <Post key={i} post={item} />
              ))}
            </div>
          </div>

          {/* Right Section: Sidebar */}
          <div className="lg:col-span-3 w-full p-4 rounded-lg">
            {/* Tìm kiếm */}
            <div>
              <h2 className="text-2xl font-extrabold mb-2">Tìm Kiếm</h2>
              <div className="h-[72px] bg-white shadow flex items-center rounded-xl">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết"
                  className="w-full p-3 pl-2 pr-10 text-gray-600 rounded-lg focus:outline-none"
                />
                <button className="pr-2">
                  <span className="w-12 h-12 rounded-xl bg-[#15AA7A] flex items-center justify-center">
                    <Image src={MagnifyingGlass} alt="" className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </div>

            {/* Danh mục */}
            <div className="mt-6">
              <h2 className="text-2xl font-extrabold mb-2">Danh Mục</h2>
              <ul className="space-y-2">
                {[
                  { title: "Tất cả", count: 108 },
                  { title: "Thiết Kế Website", count: 36 },
                  { title: "Thiết Kế App Mobile", count: 13 },
                  { title: "Quản Lý Sản Xuất", count: 25 },
                  { title: "Quản Lý Bán Hàng", count: 22 },
                  { title: "Báo Chí Nói Về FOSO", count: 7 },
                  { title: "Tin Tức FOSO", count: 5 },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-gray-700 py-2 border-b-[#f1f5f7] border-b-[1px] hover:text-green-600 cursor-pointer text-lg font-medium"
                  >
                    <span>{item.title}</span>
                    <span className="text-gray-400">{item.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Advertisement />
          </div>
        </div>
      </div>

      <div
        className="absolute  w-[500px] h-[500px] top-[528px] left-[-340px] "
        style={{
          background: "linear-gradient(90deg, #E0FFCC 0%, #CCFFEC 100%)",
          filter: "blur(200px)",
        }}
      ></div>
      <Pagination />
    </div>
  );
}
