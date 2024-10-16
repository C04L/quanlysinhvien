"use client"
import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import utc from "@/app/public/logoutc.png";
import {Inter} from "next/font/google";
import {ModeToggle} from "@/components/theme-button";

const inter = Inter({subsets: ['latin']})

export default function AuthComp() {
    return (
        <div id={"Login card"}
             className={"grid md:grid-cols-2 w-10/12 mx-auto border-[1px] border-border bg-background overflow-hidden rounded-xl md:h-[100%] h-5/6 min-h-96 shadow-gray-600 shadow-2xl"}>
            <div className={"hidden md:block border-border h-full dark:bg-muted bg-gradient-to-l from-background dark:to-violet-950 to-blue-900"}>
                <div className={"m-7 h-full"}>
                    <div className={"md:inline-flex hidden self-start min-w-full"}>
                        <Image src={utc} width={180} height={140} alt={"Logo trường"}/>
                        <h1 className={"text-2xl uppercase font-extrabold text-white dark:text-yellow-500 leading-normal my-auto text-nowrap " + inter.className}>Trường
                            đại học<br/>giao thông vận tải</h1>
                    </div>
                </div>
            </div>
            <div className={"flex-col flex justify-start"}>
                <div className={"self-end p-3"}>
                    <ModeToggle/>
                </div>
                <div className={"my-auto self-center"}>
                    <LoginForm/>
                </div>

            </div>

        </div>
    )
}