'use client'
import {Button} from "@/components/ui/button"
import icon from '@/app/public/microsoft.svg'
import Image from "next/image"
import {Form, FormField, FormLabel, FormMessage, FormItem, FormControl} from "@/components/ui/form"
import {useForm} from "react-hook-form"
import {Input} from "@/components/ui/input";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";

const formSchema = z.object({
    username: z.string().min(1, {
        message: "Vui lòng nhập tên đăng nhập"
    }).email({
        message: "Vui điền đúng định dạng Email"
    }),
    password: z.string().min(1, {
        message: "Vui lòng nhập mật khẩu"
    })
})


export default function LoginForm() {

    const [failed, setfailed] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        }
    })

    function onSubmit (values: z.infer<typeof formSchema>) {
        if (values.username === "hocsinh@lms.utc.edu.vn" && values.password === "123456") {
            window.location.href = "/hocsinh"
        } else if (values.username === "giangvien@lms.utc.edu.vn" && values.password === "123456") {
            window.location.href = "/giangvien"
        } else {
            setfailed(true)
        }
    }

    return (
        <div className={"lg:w-96 w-full flex-col"}>
            <div className={"text-center"}>
                <h1 className={"text-2xl font-extrabold mb-4"}>Đăng nhập</h1>
                <p className={"text-foreground/30 hidden md:block"}>Sinh viên sử dụng mã sinh viên <br/> hoặc tài khoản Office đã được cấp
                </p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name={"username"} render={
                        ({field}) => (
                            <FormItem className={"mt-4"}>
                                {failed && <p className={"text-red-500 text-center my-3"}>Tài khoản hoặc mật khẩu không chính xác</p>}
                                <FormLabel>Tài khoản</FormLabel>
                                <FormMessage/>
                                <FormControl>
                                    <Input placeholder={"Tên đăng nhập"} {...field} className={"w-full"}/>
                                </FormControl>
                            </FormItem>
                        )
                    }/>
                    <FormField control={form.control} name={"password"} render={
                        ({field}) => (
                            <FormItem className={"mt-4"}>
                                <FormLabel>Mật khẩu</FormLabel>
                                <FormMessage/>
                                <FormControl>
                                    <Input placeholder={"Mật khẩu"} type={"password"} className={"w-full"} {...field}/>
                                </FormControl>
                            </FormItem>
                        )
                    }/>
                    <Button type={"submit"} className={"w-full mt-7"}>Đăng nhập</Button>
                </form>
            </Form>
            <div className={"relative"}>
                <div className={"inset-0 flex items-center absolute"}>
                    <span className="w-full border-t"/>
                </div>
                <div className={"relative flex justify-center"}>
                    <span className={"px-2 bg-background text-muted-foreground text-sm my-6 uppercase"}>Hoặc</span>
                </div>
            </div>
            <Button variant={"outline"}
                    className={"inline-flex justify-center items-center w-full px-2 text-foreground"}>
                <Image src={icon} alt={"Microsoft Icon"} className={"mx-2 block text-foreground w-4 h-4"}/>
                Sử dụng Office
            </Button>
            <div className={"text-center mt-4"}>
                <p className={"text-foreground/30 font-light text-sm"}>
                    Hotline 1900 **xxx (6:00-22:00)<br/>
                </p>
            </div>
        </div>
    )
}