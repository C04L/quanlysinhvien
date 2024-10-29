import {AuthCompLight, AuthCompDark} from "@/components/AuthComp";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Đăng nhập",
    description: "Đại học giao thông vận tải",
}


export default function Authentication() {

    return (
        <div className={"h-full bg-background"}>
            <div className={"min-h-screen dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[size:24px_24px] dark:block hidden"}>
                <div className={
                    "py-20 items-center h-screen min-h-max"
                }>
                    <AuthCompDark/>
                </div>
            </div>
            <div className={"dark:hidden bg-white"}>
                <div className={"py-20 items-center h-screen min-h-max bg-gradient-to-tr from-pink-400/15 via-blue-300/10 to-purple-400/15"}>
                    <AuthCompLight/>
                </div>
            </div>
        </div>
    )
}