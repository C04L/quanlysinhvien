import AuthComp from "@/components/AuthComp";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Đăng nhập",
    description: "Đại học giao thông vận tải",
}


export default function Authentication() {

    return (
        <div className={"h-full bg-zinc-300 dark:bg-background"}>
            <div className={"min-h-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"}>
                <div className={
                    "py-24 items-center h-screen min-h-max"
                }>
                    <AuthComp/>
                </div>
            </div>
        </div>
    )
}