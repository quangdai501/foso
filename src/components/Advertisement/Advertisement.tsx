import Image from "next/image";
import Computer from '../../assets/images/computer.png'
import Group from '../../assets/images/Group.png'
import Vector from '../../assets/images/Vector.png'
import Robo from '../../assets/images/Robo.png'
import Mrplogo from '../../assets/images/mrplogo.svg'

export default function Advertisement() {
  return (
    <div className="grid grid-cols-1 md:gap-1 lg:grid-cols-1 justify-self-center">
      <div
        className="relative max-w-[370px] h-[650px] mt-10 from-blue-600 to-blue-800 rounded-3xl py-6 text-white text-center shadow-lg"
        style={{
          background:
            "linear-gradient(36.82deg, #013DA0 2.16%, #0142A9 12.83%, #0148B3 23.51%, #024EBC 34.18%, #0254C5 44.85%, #025ACE 55.53%, #0261D7 66.2%, #0267E1 76.87%, #036EEA 87.55%, #0375F3 98.22%)",
        }}
      >
        {/* Image Section */}
        <div className="w-full flex justify-center h-[244px]">
          <Image
            src={Computer}
            alt="Laptop and Mobile UI"
            width={425}
            height={265}
            className="rounded-lg absolute right-0"
          />
        </div>

        {/* Text Content */}
        <div className="mt-25 px-3">
          <div className="relative flex justify-center items-center mt-2">
            <Image
              src={Robo}
              alt="MRP Logo"
              className="absolute sm:left-0 sm:bottom-[-10px] h-[120px] w-auto"
            />
            <div className="flex flex-col ml-auto">
              <h2 className="text-xl font-bold">Miễn phí dùng thử</h2>
              <div className="relative">
                <Image src={Mrplogo} alt="MRP Logo" className="h-[45px]" />
                <span className="absolute top-0 right-4 ml-2 bg-green-500 text-xs px-2 py-1 rounded-md">
                  Beta
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-20 border-2 border-white text-white rounded-full px-6 py-3 mx-3 text-lg flex items-center justify-center gap-2 transition hover:bg-white hover:text-blue-600">
          <span>Trải Nghiệm Ngay</span>
          <Image
            src={Vector} 
            alt="Laptop and Mobile UI"
            className="ml-auto w-auto"
          />
        </div>
      </div>
      <div
        className="max-w-[370px] h-[650px] mt-10 from-blue-600 to-blue-800 rounded-3xl py-8 text-white text-center shadow-lg"
        style={{
          background:
            "linear-gradient(357.92deg, #013DA0 2.23%, #0142A9 12.81%, #0148B3 23.39%, #024EBC 33.96%, #0254C5 44.54%, #025ACE 55.12%, #0261D7 65.7%, #0267E1 76.28%, #036EEA 86.86%, #0375F3 97.44%)",
        }}
      >
        {/* Image Section */}
        <div className="w-full flex justify-center h-[244px]">
          <Image
            src={Group} 
            alt="Laptop and Mobile UI"
            className="h-[380px] w-auto"
          />
        </div>

        <div className="px-6">
          <p className="font-bold text-xl mt-[160px] text-justify">
            Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
          </p>

          {/* Call-to-Action Button */}
          <button className="mt-8 w-full border-2 border-white text-white rounded-full px-6 py-3 text-lg flex items-center justify-center gap-2 transition hover:bg-white hover:text-blue-600">
            <span>Tham Gia Ngay</span>
            <Image
              src={Vector}
              alt="Laptop and Mobile UI"
              className="ml-auto w-auto"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
