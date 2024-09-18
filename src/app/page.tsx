"use client"
import Header from "@/components/header";
import LoginForm from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";


export default function Home() {


  return (
      <div>
          <div
              className={"h-screen bg-gradient-to-t from-blue-300 dark:from-[#2a5a65] to-transparent to-50% bg-opacity-40"}>
              <div className={"absolute h-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"}>
                  <Header/>
                  <div className={"grid grid-cols-2 gap-20 w-5/6 mx-auto pt-28 h-3/4 items-center"}>
                      <div className={"col-start-2 flex justify-center"}>
                          <Dialog>
                              <DialogTrigger asChild>
                                  <Button variant={"default"} className={"bg-blue-500 md:h-24 w-1/2 md:text-xl lg:text-2xl text-sm h-16"}>Đăng nhập</Button>
                              </DialogTrigger>
                              <DialogContent className={"w-max p-1"}>
                                  <LoginForm/>
                              </DialogContent>
                          </Dialog>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
