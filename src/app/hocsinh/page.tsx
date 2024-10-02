'use client'
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {ScrollArea} from "@/components/ui/scroll-area"
import {Separator} from "@/components/ui/separator";
import {BellRing, PenLine} from "lucide-react";
import Link from "next/link";
import {BangThongKe} from "@/components/thongkediem";

const thongbao = [
    {
        id: 1,
        title: "Đã cập nhập điểm kỳ 1",
        content: "Nhà trường đã cập nhập điểm kỳ 1, sinh viên hiện tại đã có thể kiểm tra ngay trên web."
    },
    {
        id: 2,
        title: "Đã cập nhập điểm kỳ 2",
        content: "Nhà trường đã cập nhập điểm kỳ 2, sinh viên hiện tại đã có thể kiểm tra ngay trên web."
    },
    {
        id: 3,
        title: "Đã cập nhập điểm kỳ 3",
        content: "Nhà trường đã cập nhập điểm kỳ 3, sinh viên hiện tại đã có thể kiểm tra ngay trên web."
    },
    {
        id: 4,
        title: "Đã cập nhập điểm kỳ 3",
        content: "Nhà trường đã cập nhập điểm kỳ 3, sinh viên hiện tại đã có thể kiểm tra ngay trên web."
    },
    {
        id: 5,
        title: "Đã cập nhập điểm kỳ 3",
        content: "Nhà trường đã cập nhập điểm kỳ 3, sinh viên hiện tại đã có thể kiểm tra ngay trên web."
    }
]

export default function hocSinh() {
    return (
        <div className={"flex-col gap-y-4 mx-20 mt-9 lg:mx-52 lg:flex-row"}>
            <div className={"flex gap-x-9 w-full mb-10"}>
                <Avatar className={"h-24 w-24 my-auto"}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div className={"my-auto w-full"}>
                    <div id={"information"}>
                        <div className={"flex gap-x-1 lg:gap-x-2 items-baseline"}>
                            <h1 className={"text-lg lg:text-3xl font-bold"}>Luu Viet Dung</h1>
                            <Button variant={"ghost"} className={"items-baseline w-max h-max p-1 text-gray-400"}>
                                <Link href={"./hocsinh/suathongtin"}><PenLine size={20}/></Link>
                            </Button>
                        </div>
                        <p className={"hidden lg:block text-sm"}>232630978 - CNTTVA2</p>
                    </div>
                </div>
                <div className={"w-full flex justify-end"}>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant={"outline"} className={"my-auto"}>
                                <BellRing size={20}/>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <ScrollArea className={"h-[300px]"}>
                                <div className={"p-2"}>
                                    {thongbao.map(item => (
                                        <div key={item.id}>
                                            <div className={"hover:bg-zinc-900 rounded-md p-2"}>
                                                <h3 className={"text-md font-bold mb-2"}>{item.title}</h3>
                                                <p className={"text-sm"}>{item.content}</p>
                                            </div>
                                            <Separator className={"my-3"}/>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <BangThongKe/>
        </div>
    )
}