import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {Button} from "@/components/ui/button"
import icon from '@/app/public/microsoft.svg'
import Image from "next/image"
import {Form, FormField, FormLabel, FormMessage, FormItem, FormControl} from "@/components/ui/form"
import {useForm} from "react-hook-form"
import {Input} from "@/components/ui/input";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod";

const formSchema = z.object({
    username: z.string().min(1, {
        message: "Vui lòng nhập tên đăng nhập"
    }),
    password: z.string().min(1, {
        message: "Vui lòng nhập mật khẩu"
    })
})


export default function LoginForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })

    function onSubmit (values: z.infer<typeof formSchema>) {
        if (values.username === "hocsinh@lms.utc.edu.vn" && values.password === "123456") {
            window.location.href = "/hocsinh"
        } else if (values.username === "giangvien@lms.utc.edu.vn" && values.password === "123456") {
            window.location.href = "/giangvien"
        }
    }

    return (
        <div className={"lg:w-96 w-80"}>
            <Card className={"lg:m-w-96 m-w-80 border-transparent m-6 mb-2 space-y-2"}>
                <CardHeader className={"p-0"}>
                    <CardTitle>Đăng nhập</CardTitle>
                    <CardDescription>
                        Đăng nhập để tiếp tục
                    </CardDescription>
                </CardHeader>
                <CardContent className={"w-full px-0"}>
                    <Button variant={"outline"} className={"inline-flex my-4 justify-center items-center w-full px-2 text-foreground"}>
                        <Image src={icon} alt={"Microsoft Icon"} className={"mx-2 block text-foreground w-4 h-4"}/>
                        Sử dụng Office
                    </Button>
                    <div className={"relative"}>
                        <div className={"inset-0 flex items-center absolute"}>
                            <span className="w-full border-t"/>
                        </div>
                        <div className={"relative flex justify-center"}>
                            <span className={"px-2 bg-background text-muted-foreground text-sm"}>Sử dụng mật khẩu</span>
                        </div>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField control={form.control} name={"username"} render={
                                ({field}) => (
                                    <FormItem className={"mt-4"}>
                                        <FormLabel>Tài khoản</FormLabel>
                                        <FormMessage/>
                                        <FormControl>
                                            <Input placeholder={"Tên đăng nhập"} {...field}/>
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
                                            <Input placeholder={"Mật khẩu"} type={"password"} {...field}/>
                                        </FormControl>
                                    </FormItem>
                                )
                            }/>
                            <Button type={"submit"} className={"w-full mt-4"}>Đăng nhập</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className={"text-center justify-center text-sm opacity-35 pb-2 " + {}}>
                    Hotline hỗ trợ: 1900 1000
                </CardFooter>
            </Card>
        </div>
    )
}