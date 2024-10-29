import type { Metadata } from "next";
import { Inter, Roboto_Slab  } from "next/font/google";
import "../globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import utc from "@/app/public/logoutc.png";
import Image from "next/image";
import {ModeToggle} from "@/components/theme-button";
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

const robotoslab = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "Trang quản lý điểm cho giáo viên",
  description: "Quản lý đào tạo đại học giao thông",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
              >
                  <div>
                      <div className="w-screen bg-background
                         h-16 flex items-center fixed top-0
                         outline outline-1 outline-border">

                          <div className="w-fit box-border mx-4 text-nowrap" id="left-side">
                             <div className={"px-5"}>
                                 Gv.<Button variant={"link"} className={"text-lg font-bold px-0"}>Nguyễn Đức Mạnh</Button>
                             </div>
                          </div>

                          <div className="w-full flex gap-4 justify-end mx-4" id="right-side">
                              <SearchBar/>
                              <Button><Link href={"/"}><LogOut/></Link></Button>
                              <ModeToggle/>
                          </div>
                      </div>
                  </div>
                  {children}
              </ThemeProvider>
              <footer>
                  <div className={"bg-[#00377a] w-full h-fit dark:bg-[#0e0e10] md:grid md:grid-cols-3 gap-y-9 hidden"}>
                      <div className={"py-12 mx-13 flex"}>
                          <Image alt={"Logo đại học giao thông vận tải"} src={utc} width={200} height={160}/>
                          <div className={"my-auto text-center"}>
                              <p className={"text-2xl font-extrabold uppercase leading-relaxed text-yellow-400 " + robotoslab.className}>Trường
                                  đại học <br/> giao thông vận tải</p>
                          </div>
                      </div>
                      <div className={"col-start-2 px-16 py-10 text-white hidden md:block"}>
                          <p className={"font-extrabold"}>PHÂN HIỆU HÀ NỘI:</p>
                          <p>
                              Địa chỉ: Số 3 phố Cầu Giấy, P.Láng Thượng, Q.Đống Đa, Hà Nội. <br/>
                              Điện thoại: (84.24) 37663311 - <br/>
                              Fax: (84.24)37669613 <br/>
                              Email: dhgtvt@utc.edu.vn <br/>
                          </p>
                      </div>
                      <div className={"col-start-3 px-16 py-10 text-white hidden md:block"}>
                          <p className={"font-extrabold"}>PHÂN HIỆU TP.HỒ CHÍ MINH:</p>
                          <p>
                              Địa chỉ: 450-451 Đường Lê Văn Việt, Phường Tăng Nhơn Phú A, TP. Thủ Đức (Quận 9 cũ), TP. Hồ Chí Minh <br/>
                              Điện thoại: (84.28) 38966798 - <br/>
                              Fax: (84.28)38964736 <br/>
                              Email: info@utc2.edu.vn <br/>
                          </p>
                      </div>
                  </div>
              </footer>
          </body>
      </html>
  );
}
