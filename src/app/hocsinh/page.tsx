'use client'
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {ScrollArea} from "@/components/ui/scroll-area"
import {Separator} from "@/components/ui/separator";
import {BellRing, PenLine} from "lucide-react";
import Link from "next/link";
import {BangThongKe} from "@/components/thongkediem";
import {DTBCard, DRLCard, CanhCaoCard, HocLaiCard} from "@/components/thongkeCard"
import {default as BangDiem} from "@/components/BangDiem"
import {Roboto} from "next/dist/compiled/@next/font/dist/google";

const diemtongket = [
    { ky: "I", diem: 9.5 },
    { ky: "II", diem: 8.0 },
    { ky: "III", diem: 7.2 },
    { ky: "IV", diem: 10 },
]

type diem = {
    MaHP: string,
    TenHP: string,
    SoTinChi: number,
    LanHoc: number,
    LanThi: number,
    Diem10: number,
    Diem4: number,
    DiemChu: string,
    TinhTrang: string,
    ChiTiet: {
        DiemThi: number,
        DQT: number,
        LanHoc: number,
    }
}

const DiemChiTiet:diem[] = [
    {
        MaHP:"BS0.101.3",
        TenHP: "Đại số tuyến tính",
        Diem10: 9.5,
        Diem4: 5.7,
        LanHoc: 1,
        LanThi: 1,
        SoTinChi: 3,
        DiemChu: "A+",
        TinhTrang: "Dat",
        ChiTiet: {
            DiemThi: 3.7,
            DQT: 7.6,
            LanHoc: 1,
        }
    },
    {
        MaHP:"IT1.150.2",
        TenHP: "Đại số tuyến tính",
        Diem10: 9.5,
        Diem4: 5.7,
        LanHoc: 1,
        LanThi: 1,
        SoTinChi: 3,
        DiemChu: "A+",
        TinhTrang: "Dat",
        ChiTiet: {
            DiemThi: 3.7,
            DQT: 7.6,
            LanHoc: 1,
        }
    },
    {
        MaHP:"DE0.001.3",
        TenHP: "Đại số tuyến tính",
        Diem10: 9.5,
        Diem4: 5.7,
        LanHoc: 1,
        LanThi: 1,
        SoTinChi: 3,
        DiemChu: "A+",
        TinhTrang: "Dat",
        ChiTiet: {
            DiemThi: 3.7,
            DQT: 7.6,
            LanHoc: 1,
        }
    },
    {
        MaHP:"DE0.002.2",
        TenHP: "Đại số tuyến tính",
        Diem10: 9.5,
        Diem4: 5.7,
        LanHoc: 1,
        LanThi: 1,
        SoTinChi: 3,
        DiemChu: "A+",
        TinhTrang: "Dat",
        ChiTiet: {
            DiemThi: 3.7,
            DQT: 7.6,
            LanHoc: 1,
        }
    },
    {
        MaHP:"DE0.003.1",
        TenHP: "Đại số tuyến tính",
        Diem10: 9.5,
        Diem4: 5.7,
        LanHoc: 1,
        LanThi: 1,
        SoTinChi: 3,
        DiemChu: "A+",
        TinhTrang: "Dat",
        ChiTiet: {
            DiemThi: 3.7,
            DQT: 7.6,
            LanHoc: 1,
        }
    },
    {
        MaHP:"DE0.004.2",
        TenHP: "Đại số tuyến tính",
        Diem10: 9.5,
        Diem4: 5.7,
        LanHoc: 1,
        LanThi: 1,
        SoTinChi: 3,
        DiemChu: "A+",
        TinhTrang: "Dat",
        ChiTiet: {
            DiemThi: 3.7,
            DQT: 7.6,
            LanHoc: 1,
        }
    },
    {
        MaHP:"PE0.002.1",
        TenHP: "Giáo dục thể chất F2",
        Diem10: 9.5,
        Diem4: 5.7,
        LanHoc: 1,
        LanThi: 1,
        SoTinChi: 3,
        DiemChu: "A+",
        TinhTrang: "Dat",
        ChiTiet: {
            DiemThi: 3.7,
            DQT: 7.6,
            LanHoc: 1,
        }
    },
    {
        MaHP:"IT1.103.3",
        TenHP: "Kỹ thuật lập trình",
        Diem10: 9.5,
        Diem4: 5.7,
        LanHoc: 1,
        LanThi: 1,
        SoTinChi: 3,
        DiemChu: "A+",
        TinhTrang: "Dat",
        ChiTiet: {
            DiemThi: 3.7,
            DQT: 7.6,
            LanHoc: 1,
        }
    },



]

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
        <div className={"flex-col gap-y-4 px-4 pt-9 md:px-32 lg:flex-row bg-white dark:bg-[#0e1217] pb-32"}>
            <div className={"flex gap-x-9 w-full mb-10"}>
                <Avatar className={"h-24 w-24 my-auto ring-2 ring-blue-500 ring-offset-background ring-offset-2"}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div className={"my-auto w-full"}>
                    <div id={"information"}>
                        <div className={"flex gap-x-1 lg:gap-x-2 items-baseline"}>
                            <h1 className={"text-lg lg:text-3xl font-medium md:font-bold"}>Luu Viet Dung</h1>
                            <Button variant={"ghost"} className={"items-baseline w-max h-max p-1 text-gray-400"}>
                                <Link href={"./hocsinh/suathongtin"}><PenLine size={20}/></Link>
                            </Button>
                        </div>
                        <p className={"hidden lg:block text-sm" + Roboto}>232630978 - CNTTVA2</p>
                    </div>
                </div>
                <div className={"w-full flex justify-end"}>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant={"outline"} className={"my-auto"}>
                                <BellRing size={20}/>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className={"rounded-2xl"}>
                            <ScrollArea className={"h-[300px]"}>
                                <div className={"p-2"}>
                                    {thongbao.map(item => (
                                        <div key={item.id}>
                                            <div className={"dark:hover:bg-zinc-900 hover:bg-zinc-100 rounded-md p-2 mx-1"}>
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
            {/*end thông tin*/}
            <div className={"flex-col my-4 space-y-4 gap-x-4 md:flex md:flex-row md:space-y-0"}>
                <DTBCard/>
                <DRLCard/>
                <CanhCaoCard/>
                <HocLaiCard/>
            </div>
            <BangThongKe data={diemtongket}/>
            {/*end thong ke*/}
            <div className={"my-4 rounded-xl w-full"}>
                <BangDiem data={DiemChiTiet}/>
            </div>
        </div>
    )
}