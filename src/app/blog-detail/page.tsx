"use client";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import facebook from "../../assets/images/facebook.png";
import X from "../../assets/images/X.png";
import zalo from "../../assets/images/zalo.png";
import socialicon from "../../assets/images/socialicon.png";
import CaretUp from "../../assets/images/CaretUp.png";
import CaretDown from "../../assets/images/CaretDown.png";
import linkedin from "../../assets/images/linkedin.png";
import image from "../../assets/images/Body/image.png";
import image1 from "../../assets/images/Body/image1.png";
import image2 from "../../assets/images/Body/image2.png";
import image3 from "../../assets/images/Body/image3.png";
import image4 from "../../assets/images/Body/image4.png";
import quote from "../../assets/images/Body/quote.png";
import AuthorInfo from "./elements/AuthorInfo";
import Post from "@/components/Post";
import Advertisement from "@/components/Advertisement";
import Vote from "./elements/Vote";
import { useSearchParams } from "next/navigation";
import { posts, postType } from "@/mocks";
import { Suspense, useEffect, useState } from "react";

export type breadcrumbType = {
  label: string;
  href: string;
};

export default function BlogDetail() {
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");
  // const [author, setAuthor] = useState<postType>();
  const [isOpen, setIsOpen] = useState<Boolean>();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tài nguyên", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Quản Lý Sản Xuất", href: "/" },
  ];

  // useEffect(() => {
  //   setAuthor(posts.find((item) => item.id == id));
  // }, [id]);

  const socialIcons = [zalo, facebook, X, linkedin, socialicon];
  return (
    <>
      <div className="max-w-7xl mx-auto ">
        <div className="my-5 relative">
          <Breadcrumb items={breadcrumbItems} />
          <div className="hidden absolute left-[-150px] top-[280px] lg:flex flex-col items-center">
            <p className="font-extrabold text-base">Chia sẻ</p>

            {socialIcons.map((item, i) => {
              return (
                <div className="mb-2" key={i}>
                  <span className="w-12 h-12 rounded-xl border-[1px] border-[#15AA7A] flex items-center justify-center">
                    <Image src={item} alt="" className="h-4 w-4" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-15 grid grid-cols-1 lg:grid-cols-10 gap-6">
          <div className="lg:col-span-7 lg:mr-10">
            <p className="inline-block text-sx font-medium py-1 px-2 bg-[#E2F0FE] rounded-lg text-[#0F4F9E]">
              Quản lý sản xuất
            </p>
            <h1 className="font-extrabold text-4xl my-6">
              Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
            </h1>

            <div className="mb-5 mt-1">
              <Suspense>
                <AuthorInfo></AuthorInfo>
              </Suspense>
            </div>

            {/* main */}
            <div className="flex flex-col items-center">
              <Image src={image} alt="" className="w-full" />
              <div className="text-base font-normal my-2 text-[#667f93]">
                Quy trình 5S là gì?
              </div>
            </div>
            <div className="relative">
              <p className="w-full text-center px-5 md:px-20 italic font-medium text-xl">
                Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì?
                Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời
                cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo
                nên thành công của quy trình bạn nhé.
              </p>
              <Image
                src={quote}
                alt=""
                className="absolute left-[-10px] md:left-3 top-[-10px] "
              />
            </div>
            <div className="my-5">
              {/* Nội dung bài viết */}
              <article className="space-y-6">
                <h2 id="1" className="text-xl font-bold text-[#15AA7A]">
                  1. Quy trình 5S là gì?
                </h2>
                <p>
                  Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong
                  sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh
                  đào Nhật Bản.
                </p>
                <p>
                  Quy trình{" "}
                  <a
                    href="https://vi.wikipedia.org/wiki/5S_(ph%C6%B0%C6%A1ng_ph%C3%A1p)"
                    className="border-b-[1px]"
                  >
                    5S
                  </a>{" "}
                  hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi
                  tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S
                  đầu trong tiếng Nhật:
                </p>
                <ul className="list-disc list-inside ml-2">
                  <li>
                    <strong className="text-[#15aa74]">Seiri</strong> (Ngăn nắp)
                  </li>
                  <li>
                    <strong className="text-[#15aa74]">Seiso</strong> (Sạch sẽ)
                  </li>
                  <li>
                    <strong className="text-[#15aa74]">Seiton</strong> (Trật tự)
                  </li>
                  <li>
                    <strong className="text-[#15aa74]">Shitsuke</strong> (Kỷ
                    luật)
                  </li>
                  <li>
                    <strong className="text-[#15aa74]">Seiketsu</strong> (Tiêu
                    chuẩn hóa)
                  </li>
                </ul>

                <h2 id="2" className="text-xl font-bold text-[#15AA7A]">
                  2. Lợi ích quy trình 5S đem lại
                </h2>
                <p>
                  Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho
                  mỗi bước của quy trình với mục đích cải tiến môi trường làm
                  việc của doanh nghiệp.
                </p>
                <p>
                  Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh
                  nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc
                  logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ
                  dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi
                  cần thiết.
                </p>
                <p>
                  Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra
                  thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần tạo
                  nên một văn hóa doanh nghiệp tích cực.
                </p>
              </article>
            </div>
            <div className="flex flex-col items-center">
              <Image src={image1} alt="" className="w-full" />
              <div className="text-base font-normal my-2 text-[#667f93]">
                Tại sao doanh nghiệp cần quy trình 5S?
              </div>
            </div>
            <div className="my-5">
              <h2 id="3" className="text-xl font-bold text-[#15AA7A] mb-4">
                3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
              </h2>
              <p className="mb-4">
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-[#15AA7A]">
                    3.1 Cải thiện rõ nét môi trường làm việc
                  </h3>
                  <p>
                    Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn,
                    gọn gàng hơn và có tổ chức hơn.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#15AA7A]">
                    3.2 Tiết kiệm thời gian đáng kể
                  </h3>
                  <p>
                    Doanh nghiệp giảm được thời gian đáng kể khi không mất nhiều
                    thời gian tìm kiếm đồ dùng.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#15AA7A]">
                    3.3 Tăng năng suất làm việc
                  </h3>
                  <p>
                    Nhờ vào quy tắc 5S, doanh nghiệp loại bỏ những thứ không cần
                    thiết, tăng cường sắp xếp và vệ sinh.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#15AA7A]">
                    3.4 Tiết kiệm chi phí
                  </h3>
                  <p>
                    Doanh nghiệp có thể giảm thiểu chi phí nhờ tối ưu hóa không
                    gian làm việc và giảm lãng phí tài nguyên.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#15AA7A]">
                    3.5 Tăng chất lượng sản phẩm
                  </h3>
                  <p>
                    5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn
                    gàng, giúp nâng cao chất lượng sản phẩm.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image src={image2} alt="" className="w-full" />
              <div className="text-base font-normal my-2 text-[#667f93]">
                Quy trình 5s gồm các bước
              </div>
            </div>
            <div className="my-5">
              <h2 id="4" className="text-xl font-bold text-[#15AA7A]">
                4. Quy trình 5S gồm các bước
              </h2>
              <p className="mt-2 text-gray-700">
                5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường
                hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao
                gồm năm bước cơ bản sau:
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-[#15AA7A]">
                    4.1 Seiri (Ngăn nắp)
                  </h3>
                  <p className="text-gray-700">
                    Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn
                    nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần
                    thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và
                    tiết kiệm thời gian.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#15AA7A]">
                    4.2 Seiton (Sắp xếp)
                  </h3>
                  <p className="text-gray-700">
                    Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ,
                    thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để
                    giúp tìm kiếm và sử dụng chúng một cách dễ dàng.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#15AA7A]">
                    4.3 Seiso (Vệ sinh)
                  </h3>
                  <p className="text-gray-700">
                    Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá
                    nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn
                    sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm
                    thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
                    nhân viên.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#15AA7A]">
                    4.4 Seiketsu (Tiêu chuẩn hóa)
                  </h3>
                  <p className="text-gray-700">
                    Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa.
                    Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng
                    và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#15AA7A]">
                    4.5 Shitsuke (Kỷ luật)
                  </h3>
                  <p className="text-gray-700">
                    Đây được xem là bước cuối cùng trong quy trình. Và bước này
                    đóng vai trò quan trọng trong duy trì tính hiệu quả của quy
                    tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ
                    thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người
                    trong tổ chức duy trì và tuân thủ theo quy trình.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image src={image3} alt="" className="w-full" />
              <div className="text-base font-normal my-2 text-[#667f93]">
                Các bước thực hiện quy trình 5s
              </div>
            </div>
            <div className="my-5">
              <h2 id="5" className="text-xl font-bold text-[#15AA7A]">
                5. Quy trình được thực hiện như sau:
              </h2>
              <p className="mt-2 text-gray-700">
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình:
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-[#15AA7A]">
                    5.1 Giai đoạn chuẩn bị
                  </h3>
                  <p className="text-gray-700">
                    Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực
                    đứng ra điều hành và quản lý quá trình thực hiện quy trình
                    5S. Việc phân bố cụ thể như vậy sẽ giúp quá trình áp dụng
                    quy tắc 5S hiệu quả hơn.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#15AA7A]">
                    5.2 Triển khai rộng rãi
                  </h3>
                  <p className="text-gray-700">
                    Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về
                    quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ
                    kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp
                    của bạn.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#15AA7A]">
                    5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
                  </h3>
                  <p className="text-gray-700">
                    Đây là bước có thể khiến mọi người không hào hứng trong các
                    bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực
                    và tạo không khí hào hứng cho từng cá nhân.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#15AA7A]">
                    5.4 Sàng lọc, sắp xếp và đánh giá
                  </h3>
                  <p className="text-gray-700">
                    Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh
                    toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ
                    ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học
                    hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#15AA7A]">
                    5.5 Đánh giá
                  </h3>
                  <p className="text-gray-700">
                    Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại
                    quá trình cải tiến và xem xét cần cải tiến phương diện nào
                    để không ngừng quá trình thực hiện quy trình 5S.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-5">
              {/* Section 6 */}
              <h2 id="6" className="text-xl font-bold text-[#15AA7A]">
                6. Quy trình 5S có giống với Kaizen?
              </h2>
              <p className="mt-2 text-gray-700">
                Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
                không? Quy trình 5S với Kaizen là hai khái niệm khác nhau nhưng
                giữa chúng có mối quan hệ chặt chẽ với nhau.
              </p>

              <div className="mt-4 border-l-[3px] text-xl border-green-600 pl-4 py-3 italic text-gray-700">
                <p>
                  Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục
                  trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi
                  tích cực, mang tính liên tục và bền vững.
                </p>
              </div>

              <div className="mt-4 border-l-[3px] text-xl border-green-600 pl-4 py-3 italic text-gray-700">
                <p>
                  Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải
                  tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ,
                  sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.
                </p>
              </div>

              <p className="mt-4 text-gray-700">
                Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy
                tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm
                việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước
                đầu tiên trong quá trình cải tiến liên tục của phương pháp
                Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải
                tiến tiếp theo.
              </p>

              {/* Section 7 */}
              <h2 id="7" className="mt-6 text-xl font-bold text-[#15AA7A]">
                7. Đối tượng nào nên áp dụng 5S?
              </h2>
              <p className="mt-2 text-gray-700">
                Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng
                rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác
                nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản
                xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các
                doanh nghiệp nhỏ.
              </p>
              <p className="mt-4 text-gray-700">
                Các tổ chức có xuất hiện lưu chuyển nhiều nhân viên, hoạt động
                phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử
                dụng hiệu quả.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={image4} alt="" className="w-full" />
              <div className="text-base font-normal my-2 text-[#667f93]">
                Các yếu tố tạo nên thành công cho quy trình 5S
              </div>
            </div>
            {/* Section 8 */}
            <div className="text-gray-700">
              <h2 id="8" className="mt-6 text-xl font-bold text-[#15AA7A]">
                8. Đối tượng nào nên áp dụng 5S?
              </h2>
              <p className="mt-4 text-gray-700">
                Và những nhân tố quyết định đến quá trình thành công của quy
                trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là
                từ phía:
              </p>
              <ul className="mt-4 ml-6 list-disc">
                <li>
                  Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp.
                  Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có
                  áp dụng quy tắc này hay không.
                </li>
                <li>
                  Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh
                  đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch
                  thực hiện triển khai 5S. 
                </li>
                <li>
                  Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần
                  huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi
                  ích chung của tổ chức, của doanh nghiệp.
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng
                cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt
                tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và
                với những thông tin bổ ích như trên, FOSO mong rằng phần nào
                giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc
                trong tương lai.
              </p>
            </div>
            <div className="block my-25">
              <Vote />
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-3">
            <div className="py-4 w-full max-w-md ">
              {/* Header */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <h2 className="font-extrabold text-2xl">Nội Dung Bài Viết</h2>
                {isOpen ? (
                  <Image src={CaretUp} alt="" className="h-4 w-4" />
                ) : (
                  <Image src={CaretDown} alt="" className="h-4 w-4" />
                )}
              </div>

              {/* TOC List */}

              <ul
                className={`mt-3 text-[#33404a] space-y-1 font-medium text-lg overflow-hidden transition${
                  isOpen ? " max-h-0" : ""
                }`}
              >
                <li className="text-[#15AA7A] font-semibold">
                  <a href="#1">1. Quy trình 5S là gì?</a>
                </li>
                <li>
                  <a href="#2">2. Lợi ích quy trình 5S đem lại</a>
                </li>
                <li>
                  <a href="#3">
                    3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
                  </a>
                </li>
                <ul className="pl-4 space-y-1 text-sm text-gray-600">
                  <li>
                    <a href="#3.1">3.1 Cải thiện rõ nét môi trường làm việc</a>
                  </li>
                  <li>
                    <a href="#3.2">3.2 Tiết kiệm thời gian đáng kể</a>
                  </li>
                  <li>
                    <a href="#3.3">3.3 Tăng năng suất làm việc</a>
                  </li>
                  <li>
                    <a href="#3.4">3.4 Tiết kiệm chi phí</a>
                  </li>
                  <li>
                    <a href="#3.5">3.5 Tăng chất lượng sản phẩm</a>
                  </li>
                </ul>
                <li>
                  <a href="#4">4. Quy trình 5S gồm các bước:</a>
                </li>
                <ul className="pl-4 space-y-1 text-sm text-gray-600">
                  <li>
                    <a href="#4.1">4.1 Seiri (Ngăn nắp)</a>
                  </li>
                  <li>
                    <a href="#4.2">4.2 Seiton (Sắp xếp)</a>
                  </li>
                  <li>
                    <a href="#4.3">4.3 Seiso (Vệ sinh)</a>
                  </li>
                  <li>
                    <a href="#4.4">4.4 Seiketsu (Tiêu chuẩn hóa)</a>
                  </li>
                  <li>
                    <a href="#4.5">4.5 Shitsuke (Kỷ luật)</a>
                  </li>
                </ul>
                <li>
                  <a href="#5">5. Quy trình được thực hiện như sau:</a>
                </li>
                <ul className="pl-4 space-y-1 text-sm text-gray-600">
                  <li>
                    <a href="#5.1">5.1 Giai đoạn chuẩn bị</a>
                  </li>
                  <li>
                    <a href="#5.2">5.2 Triển khai rộng rãi</a>
                  </li>
                  <li>
                    <a href="#5.3">
                      5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
                    </a>
                  </li>
                  <li>
                    <a href="#5.4">5.4 Sàng lọc, sắp xếp và đánh giá</a>
                  </li>
                  <li>
                    <a href="#5.5">5.5 Đánh giá</a>
                  </li>
                </ul>
                <li>
                  <a href="#6">6. Quy trình 5S có giống với Kaizen?</a>
                </li>
                <li>
                  <a href="#7">7. Đối tượng nào nên áp dụng 5S?</a>
                </li>
                <li>
                  <a href="#8">
                    8. Các yếu tố tạo nên thành công cho quy trình 5S
                  </a>
                </li>
              </ul>
            </div>
            <Advertisement />
          </div>
        </div>
        <h1 className="font-extrabold text-4xl my-6 ">Bài viết liên quan</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3  md:gap-4">
          {posts.slice(0, 3).map((item, i) => (
            <Post key={i} post={item} />
          ))}
        </div>
      </div>
    </>
  );
}
