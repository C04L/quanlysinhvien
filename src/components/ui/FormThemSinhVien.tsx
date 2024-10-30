'use client'
import {Form, FormField, FormLabel, FormMessage, FormItem, FormControl, FormDescription} from "@/components/ui/form"
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {useState} from "react";
const formSchema = z.object({
    masv: z
        .string()
        .min(2, {
            message: "Không được để trống mã SV"
        }),
    hoten: z
        .string()
        .min(2, {
            message: "Không được để trống họ tên"
        }),
    Lop: z
        .string()
        .min(1, {
            message: "Không được để trống lớp"
        }),
    khoa: z
        .string()
        .min(2, {
            message: "Không được để trống khoa"
        }),
})

export default function FormThemSinhVien() {

    const [maSV, setMaSV] = useState("")
    const [hoten, sethoten] = useState("")
    const [Lop, setLop] = useState("")
    const [khoa, setkhoa] = useState("")
    const [DiemThi, setDiemThi] = useState("")


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        values: {
            masv: maSV,// @ts-ignore
            hoten: hoten,// @ts-ignore
            Lop: Lop,// @ts-ignore
            khoa: khoa,// @ts-ignore
            diemthi: DiemThi
        }
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        alert(`Đã gửi thông tin sinh viên ${values.masv}. với họ tên: ${values.hoten}, lớp: ${values.Lop}, khoa: ${values.khoa} cho máy chủ, chờ xử lý...`)
    }

    function handleInputhoten(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        sethoten(value);
    }
    function handleInputLop(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setLop(value);
    }
    function handleInputkhoa(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setkhoa(value)
    }
    function handleInputMaSV(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setMaSV(value);
    }

    return (
        <div>
            <div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField control={form.control} name={"masv"} render={
                            ({ field }) => (
                                <FormItem>
                                    <FormLabel>Mã sinh viên<mark className={"bg-transparent text-red-800"}>*</mark></FormLabel>
                                    <FormControl>
                                        <Input {...field} onChange={handleInputMaSV} value={maSV}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }/>

                        <FormField control={form.control} name={"hoten"} render={
                            ({ field }) => (
                                <FormItem className={"my-3"}>
                                    <FormLabel>Họ và tên
                                        <mark className={"bg-transparent text-red-800"}>*</mark>
                                    </FormLabel>
                                    <FormControl>
                                    <Input {...field} inputMode={"numeric"} onChange={handleInputhoten} value={hoten}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }/>
                        <FormField control={form.control} name={"Lop"} render={
                            ({ field }) => (
                                <FormItem className={"my-3"}>
                                    <FormLabel>Lớp
                                        <mark className={"bg-transparent text-red-800"}>*</mark>
                                    </FormLabel>
                                    <FormControl>
                                    <Input {...field} inputMode={"numeric"} onChange={handleInputLop} value={Lop}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }/>
                        <FormField control={form.control} name={"khoa"} render={
                            ({ field }) => (
                                <FormItem className={"my-3"}>
                                    <FormLabel>Khoa
                                        <mark className={"bg-transparent text-red-800"}>*</mark>
                                    </FormLabel>
                                    <FormControl>
                                    <Input {...field} inputMode={"numeric"} onChange={handleInputkhoa} value={khoa}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }/>
                        <Button type={"submit"} className={"mt-7"}>Lưu</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}