import {data} from "./TableData"
import {Roboto, Roboto_Slab} from "next/font/google";
import {ThemSinhVien, CapNhapDiemSinhVien, BangDiem} from "@/components/GiangVienCard";

const roboto = Roboto({subsets: ["latin"], weight: ["400", "700"]})
const slab = Roboto_Slab({subsets: ["latin"], weight: ["400", "700"]})



export default function giangvien() {
    return (
        <div className={"my-24 lg:mx-32 mx-10 min-h-screen "}>
            <div className={"my-4 " + roboto.className}>
                <h1 className={"lg:text-5xl text-3xl my-6 font-extrabold uppercase bg-gradient-to-t from-[#FFAF7B] via-[#D76D77] via-80% to-[#3A1C71] bg-clip-text text-transparent text-center " + slab.className}>Chào mừng trở lại</h1>
            </div>

            <div className={"my-16"}>
                <div className={"lg:grid grid-cols-2 gap-4 flex flex-col my-4"}>
                    <ThemSinhVien/>
                    <CapNhapDiemSinhVien/>
                </div>
                <BangDiem data={data}/>
            </div>
        </div>
    )
}