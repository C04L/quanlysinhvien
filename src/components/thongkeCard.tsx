"use client"

import {CardFooter, CardHeader, CardTitle, CardDescription, CardContent, Card} from "@/components/ui/card";
import {TrendingDown, TrendingUp, MoveUp, MoveDown, Minus} from "lucide-react";

export function DRLCard() {
    return (
        <div className={"w-full md:w-1/4"}>
            <Card className={"h-full"}>
                <CardHeader>
                    <CardTitle>Điểm rèn luyện</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className={"font-bold text-xl lg:text-3xl flex gap-x-4 items-center"}>
                        <p>8.12</p>
                        <p className={"text-sm text-green-700 flex md:hidden lg:flex items-center"}>+ 0.25 <MoveUp className={"h-4"}/></p>
                    </CardDescription>
                </CardContent>
                <CardFooter className={"hidden md:block"}>
                    <div className={"text-green-700 lg:text-md text-sm"}>
                        Tăng **% so với kỳ trước <TrendingUp className={"inline-block"}/>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export function DTBCard() {
    return (
        <div className={"w-full md:w-1/4"}>
            <Card className={"h-full"}>
                <CardHeader>
                    <CardTitle>Điểm TB chung</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className={"font-bold text-xl lg:text-3xl flex gap-x-4 items-center"}>
                        <p>8.12</p>
                        <p className={"text-sm text-red-700 flex md:hidden lg:flex items-center"}>- 0.25 <MoveDown className={"h-4"}/></p>
                    </CardDescription>
                </CardContent>
                <CardFooter className={"hidden md:block"}>
                    <div className={"text-red-700 lg:text-md text-sm hidden md:block"}>
                        Giảm **% so với kỳ trước <TrendingDown className={"inline-block"}/>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export function HocLaiCard() {
    return (
        <div className={"w-full md:w-1/4"}>
            <Card className={"h-full"}>
                <CardHeader>
                    <CardTitle className={"hidden sm:block font-bold"}>Số tín chỉ tích lũy</CardTitle>
                    <CardTitle className={"block sm:hidden"}>Số tín chỉ tích lũy</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className={"font-bold text-xl lg:text-3xl flex gap-x-4 items-center"}>
                        <p>26</p>
                        <p className={"text-sm text-green-700 flex md:hidden lg:flex items-center"}>+ 13</p>
                    </CardDescription>
                </CardContent>
                <CardFooter className={"hidden md:block"}>
                    <div className={"text-green-700 lg:text-md text-sm hidden md:block"}>
                        Không tăng so với kỳ trước
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export function CanhCaoCard() {
    return (
        <div className={"w-full md:w-1/4"}>
            <Card className={"h-full"}>
                <CardHeader>
                    <CardTitle>Mức cảnh cáo</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className={"font-bold text-xl lg:text-3xl flex gap-x-4 items-center"}>
                        <p>0/3</p>
                        <p className={"text-sm text-green-700 flex md:hidden lg:flex items-center"}><Minus className={"h-4"}/></p>
                    </CardDescription>
                </CardContent>
                <CardFooter className={"hidden md:block"}>
                    <div className={"text-green-700 lg:text-md text-sm hidden md:block"}>
                        Tăng so với kỳ trước
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}