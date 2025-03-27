import Logo from "../../assets/images/logo.png";
import Icon_country from "../../assets/images/icon_country.png";
import Arrow from "../../assets/images/skewarrow.png";
import CaretDown from "../../assets/images/CaretDown.png";
import Image from "next/image";
export default function Header() {
  return (
    <nav className="sticky top-0 z-[1000] bg-white shadow-lg rounded-full px-6 py-3  text-sm flex items-center justify-center w-full max-w-6xl mx-auto mt-4">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="" />
      </div>

      <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium ml-20 mr-20">
        <li>
          <a href="#" className="hover:text-green-600">
            Về Chúng Tôi
          </a>
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-green-600 flex items-center">
            Giải Pháp{" "}
            <Image src={CaretDown} alt="Vietnamese" className="h-4 w-4" />
          </a>
          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-48">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Giải pháp 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Giải pháp 2
            </a>
          </div>
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-green-600 font-bold flex items-center">
            Tài Nguyên{" "}
            <Image src={CaretDown} alt="Vietnamese" className="h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-600">
            Liên Hệ
          </a>
        </li>
      </ul>

      <div className="hidden md:flex md:ml-4 items-center space-x-4 h-[40px]">
        <div className=" relative group">
          <button className="flex items-center space-x-1 bg-gray-100 px-3 py-2 rounded-full">
            <Image src={Icon_country} alt="Vietnamese" className="h-6 w-6" />
            <span className="ml-2 mr-1">VI</span>
            <Image src={CaretDown} alt="Vietnamese" className="h-4 w-4" />
          </button>
          <div className="absolute right-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-24">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              EN
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              VI
            </a>
          </div>
        </div>

        <a
          href="#"
          className="bg-[#1ad598] self-stretch text-[#052b1e] px-4 rounded-full flex items-center hover:bg-green-600 font-bold"
        >
          Trở Thành Khách Hàng
          <span className="ml-2">
            <Image src={Arrow} alt="Vietnamese" className="h-5 w-5" />
          </span>
        </a>
      </div>
    </nav>
  );
}
