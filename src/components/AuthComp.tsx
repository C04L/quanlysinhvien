"use client"
import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import utc from "@/app/public/logoutc.png";
import {Inter} from "next/font/google";
import {ModeToggle} from "@/components/theme-button";

const inter = Inter({subsets: ['latin']})

export function AuthCompLight() {
    return (
        <div id={"Login card"}
             className={"grid md:grid-cols-2 w-10/12 mx-auto border-[1px] border-black/30 bg-background overflow-hidden rounded-xl md:h-[100%] h-5/6 min-h-[40rem] shadow-gray-600 shadow-2xl"}>
            <div className={"hidden md:block border-border h-full dark:bg-muted bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_90%_75%_at_20%_10%,#000_70%,transparent_110%)]"}>
                <div className={"m-7 h-full"}>
                    <div className={"md:inline-flex hidden self-center min-w-full"}>
                        <Image src={utc} width={180} height={140} alt={"Logo trường"}/>
                        <h1 className={"text-2xl uppercase font-extrabold text-yellow-500 leading-normal my-auto text-nowrap md:hidden lg:block " + inter.className}>Trường
                            đại học<br/>giao thông vận tải</h1>
                    </div>
                </div>
            </div>
            <div className={"flex-col flex justify-start"}>
                <div className={"self-end p-3"}>
                    <ModeToggle/>
                </div>
                <div className={"my-auto self-center w-4/6 md:w-auto"}>
                    <LoginForm/>
                </div>

            </div>

        </div>
    )
}
export function AuthCompDark() {
    return (
        <div id={"Login card"}
             className={"grid md:grid-cols-2 w-10/12 mx-auto border-[1px] border-white/30 bg-background overflow-hidden rounded-xl md:h-[100%] h-5/6 min-h-[40rem] shadow-gray-600 shadow-2xl"}>
            <div className={"hidden md:block border-border h-full dark:bg-muted bg-gradient-to-l from-background dark:to-violet-950 to-gray-800"}>
                <div className={"m-7 h-full"}>
                    <div className={"md:inline-flex hidden self-start min-w-full"}>
                        <Image src={utc} width={180} height={140} alt={"Logo trường"}/>
                        <h1 className={"text-2xl uppercase font-extrabold text-white dark:text-yellow-500 leading-normal my-auto text-nowrap md:hidden lg:block " + inter.className}>Trường
                            đại học<br/>giao thông vận tải</h1>
                    </div>
                </div>
            </div>
            <div className={"flex-col flex justify-start"}>
                <div className={"self-end p-3"}>
                    <ModeToggle/>
                </div>
                <div className={"my-auto self-center w-4/6 md:w-auto"}>
                    <LoginForm/>
                </div>

            </div>

        </div>
    )
}