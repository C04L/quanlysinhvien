import {ThongBao} from "@/app/hocsinh/ThongBao";
import Image from "next/image"

export default function BangTin() {
    return (
        <div className={"dark:bg-[#0e1217] dark:bg-[radial-gradient(ellipse_80%_80%_at_10%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen"}>
            <div className={"lg:mx-28 lg:py-20"}>
                <div
                    className={"lg:grid lg:grid-cols-10 lg:gap-x-5 min-h-[100vh] lg:rounded-2xl p-8 flex flex-col"}>
                    <article className={"col-span-8 mb-8 pb-8 border-b-2 lg:border-0 lg:mb-0 lg:pb-0 md:mr-10"}>
                        <h1 className={"lg:text-5xl md:text-3xl text-2xl font-bold leading-[1.5em] text-center"}>Triển
                            khai web quản lý điểm sinh viên trường Đại Học Giao Thông Vận Tải</h1>
                        <h3 className={"text-foreground/50 my-3 italic lg:px-6 lg:text-md text-sm"}>Ngày đăng:
                            23/10/2024 - Nguyễn Đức Mạnh</h3>
                        <p className={"lg:px-3"}>Từ ngày 26/10/2024 nhà trường sẽ chính thức triển khai web quản lý đào
                            điểm sinh viên mới được thực hiện với sự hợp tác của công ty C04L.
                            Mọi vấn đề phát sinh trong quá trình sử dụng sinh viên hãy liên hệ với ban kỹ thuật của nhà
                            trường để xử lý sớm nhất.</p>
                        <Image src={"https://images3.alphacoders.com/135/thumb-1920-1358192.png"}
                               alt={"Đại học giao thông vận tải"} width={830} height={300} className={"mx-auto mt-6"}/>
                        <p className={"text-center text-foreground/60 italic my-3"}>Hoshino siêu cute - Blue Archive</p>
                        <p className={"lg:px-3"}>Từ ngày 26/10/2024 nhà trường sẽ chính thức triển khai web quản lý đào
                            điểm sinh viên mới được thực hiện với sự hợp tác của công ty C04L.
                            Mọi vấn đề phát sinh trong quá trình sử dụng sinh viên hãy liên hệ với ban kỹ thuật của nhà
                            trường để xử lý sớm nhất.</p>
                    </article>
                    <div className={"lg:col-span-2 lg:col-start-9 max-h-full lg:mt-10"}>
                        <div className={"lg:overflow-auto h-screen"}>
                            <h1 className={"font-extrabold text-3xl text-right"}>Tin nổi bật</h1>
                            {ThongBao.map(item => {
                                return (
                                    <div key={item.id} className={"h-fit border-2 rounded-2xl p-2 my-3 hover:bg-foreground/30"}>
                                        <div className={"h-fit my-3 px-2 rounded-lg"}>
                                            <h3 className={"text-lg font-bold"}>{item.title}</h3>
                                            <p className={"text-sm text-foreground/70"}>{item.content}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}