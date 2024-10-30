import {Input} from "@/components/ui/input"
import {Avatar} from "@/components/ui/avatar";
import {Plus} from "lucide-react"
import { Roboto_Slab } from "next/font/google";
import {Button} from "@/components/ui/button";
import Link from "next/link"

const robotoslab = Roboto_Slab({subsets: ["latin"]})


export default function page() {
    return (
        <div
            className={"flex-col gap-y-4 px-4 pt-9 md:px-32 bg-white dark:bg-[#0e1217] pb-32 h-screen md:mx-28 mt-12"}>
            <div className={"flex gap-x-9 w-full mb-10 items-center"}>
                <Avatar className={"h-40 w-40 my-auto border-4 border-double border-indigo-600"}>
                    <div
                        className={"h-40 w-40 bg-zinc-700 flex justify-center items-center hover:bg-opacity-80 transition-all ease-in-out"}>
                        <Plus className={"w-15 h-15 text-zinc-400"}/>
                    </div>
                </Avatar>
                <div className={"flex-col mx-9"}>
                    <div className={"text-l my-2 " + robotoslab.className}>Họ và tên:</div>
                    <Input placeholder={"Lưu Việt Dũng"} disabled
                           className={"border-0 border-b-2 border-indigo-600 shadow-none rounded-none focus-visible:ring-0 text-2xl h-11 w-full p-0"}/>
                </div>
            </div>

            <div className={"space-y-6"}>
                <div className={"flex gap-x-9 gap-y-3"}>
                    <div className={"w-full"}>
                        <div className={"text-l my-2 " + robotoslab.className}>Thông tin liên lạc (Email/sđt):</div>
                        <Input
                               className={"border-0 border-b-2 border-indigo-600 shadow-none rounded-none focus-visible:ring-0 text-lg h-11 w-full p-0"}/>
                    </div>
                    <div className={"w-1/2"}>
                        <div className={"my-2 " + robotoslab.className}>Ngày/Tháng/Năm sinh:</div>
                        <Input type={"date"}
                               className={"border-0 border-b-2 border-indigo-600 shadow-none rounded-none focus-visible:ring-0 text-lg h-11 w-full p-0"}/>
                    </div>
                </div>
                <div className={"flex gap-x-9 gap-y-3"}>
                    <div className={"w-full"}>
                        <div className={"text-l my-2 " + robotoslab.className}>Thông tin liên lạc gia đình (Email/sđt):</div>
                        <Input
                               className={"border-0 border-b-2 border-indigo-600 shadow-none rounded-none focus-visible:ring-0 text-lg h-11 w-full p-0"}/>
                    </div>
                </div>
                <div className={"flex gap-x-9 gap-y-3"}>
                    <div className={"w-full"}>
                        <div className={"text-l my-2 " + robotoslab.className}>Thông tin nhận kết quả học tập (Email/sđt):</div>
                        <Input
                               className={"border-0 border-b-2 border-indigo-600 shadow-none rounded-none focus-visible:ring-0 text-lg h-11 w-full p-0"}/>
                    </div>

                </div>
            </div>
            <Button className={"bg-violet-600 my-12 h-12 text-lg"}><Link href={"/hocsinh"}>Lưu thay đổi</Link></Button>


        </div>
    )
}