"use client"
import LoginForm from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import Image from "next/image";
import utc from "@/app/public/utc.png"
import {Josefin_Sans, Rokkitt} from "next/font/google"

const josefinSans = Josefin_Sans({subsets: ['latin']})
const rokkit = Rokkitt({subsets: ['latin']})

export default function Home() {
  return (
      <div className={""}>
          {/*Main*/}
          <div className={"h-full bg-gradient-to-t from-yellow-200 dark:from-[#2a5a65] to-transparent dark:to-50% to-25% bg-opacity-40"}>
              <div className={"min-h-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"}>
                  <div className={"lg:grid lg:grid-cols-2 lg:grid-rows-none lg:gap-x-16 gap-y-4 xl:mt-0 xl:pt-28 lg:h-full flex-row lg:flex-none w-9/12 mx-auto pt-8 h-1/2 items-center space-t-16"}>
                      <div className={"lg:col-start-1 lg:mb-2 font-extrabold row-start-1 lg:justify-start flex-col h-max justify-center space-y-10 text-center lg:text-start"}>
                          <h1 className={josefinSans.className + " bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent lg:pt-4 pt-2 text-4xl leading-[3rem] xl:text-5xl xl:leading-[4rem] uppercase"}>
                              Đại học giao thông vận tải
                          </h1>
                          <p className={rokkit.className + " text-gray-400 text-xl font-normal mt-2 lg:mt-0"}>
                              Ứng dụng quản lý sinh viên và điểm sinh viên dùng trong nội bộ trường Đại Học Giao Thông Vận Tải.
                          </p>
                          <p className={rokkit.className + " text-gray-400 text-xl font-normal mt-2 lg:mt-0 hidden lg:block"}>
                              Demo: hocsinh@lms.utc.edu.vn, giangvien@lms.utc.edu.vn. pass: 123456
                          </p>
                          <Dialog>
                              <DialogTrigger asChild>
                                  <Button variant={"default"} className={"bg-blue-500 h-16 md:text-2xl w-52 text-xl hover:shadow-blue-500/20 hover:shadow-lg rounded-full transition-all"}>
                                      Đăng nhập
                                  </Button>
                              </DialogTrigger>
                              <DialogContent className={"w-max p-1"}>
                                  <LoginForm/>
                              </DialogContent>
                          </Dialog>
                      </div>
                      <div className={"lg:col-start-2 lg:row-start-1 lg:mt-0 flex-shrink-0"}>
                          <Image src={utc} alt={"UTC"}
                                 className={"w-7/8 rounded-3xl ring-gray-600 ring-2 ring-opacity-10 dark:shadow-cyan-200/30 shadow-gray-600/30 shadow-lg mt-10 lg:mt-0 lg:pt-0"}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
