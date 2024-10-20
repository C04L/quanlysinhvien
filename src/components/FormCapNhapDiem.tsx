'use client'
import {Form, FormField, FormLabel, FormMessage, FormItem, FormControl, FormDescription} from "@/components/ui/form"
import {useForm,} from "react-hook-form";
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
    diem1: z
        .string().transform(arg => Number(arg)).
        refine(arg => arg >= 0 && arg <= 10, {
            message: "Điểm phải là số thực dương nhỏ hơn 10"
        }).optional(),
    diem2: z
        .string().transform(arg => Number(arg)).
        refine(arg => arg >= 0 && arg <= 10, {
            message: "Điểm phải là số thực dương nhỏ hơn 10"
        }).optional(),
    diem3: z
        .string().transform(arg => Number(arg)).
        refine(arg => arg >= 0 && arg <= 10, {
            message: "Điểm phải là số thực dương nhỏ hơn 10"
        }).optional(),
    diemthi: z
        .string().transform(arg => Number(arg)).
        refine(arg => arg >= 0 && arg <= 10, {
            message: "Điểm phải là số thực dương nhỏ hơn 10"
        }).optional(),
})

export default function FormCapNhapDiem() {

    const [maSV, setMaSV] = useState("")
    const [Diem1, setDiem1] = useState("")
    const [Diem2, setDiem2] = useState("")
    const [Diem3, setDiem3] = useState("")
    const [DiemThi, setDiemThi] = useState("")


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        values: {
            masv: maSV,// @ts-ignore
            diem1: Diem1,// @ts-ignore
            diem2: Diem2,// @ts-ignore
            diem3: Diem3,// @ts-ignore
            diemthi: DiemThi
        }
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        alert(`Đã lưu thông tin cho SV ${values.masv}. với điểm tx1: ${values.diem1}, điểm tx2: ${values.diem2}, điểm tx3: ${values.diem3}, diem thi: ${values.diemthi}`)
    }

    function handleInputDiem1(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const isNumber = /^[0-9]*$/.test(value);
        if (isNumber) {
            setDiem1(value);
        }
    }
    function handleInputDiem2(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const isNumber = /^[0-9]*$/.test(value);
        if (isNumber) {
            setDiem2(value);
        }
    }
    function handleInputDiem3(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const isNumber = /^[0-9]*$/.test(value);
        if (isNumber) {
            setDiem3(value);
        }
    }
    function handleInputDiemThi(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const isNumber = /^[0-9]*$/.test(value);
        if (isNumber) {
            setDiemThi(value);
        }
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
                                    <FormDescription>
                                        Chỉ được nhập mã sinh viên trong lớp bạn
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )
                        }/>

                        <FormField control={form.control} name={"diem1"} render={
                            ({ field }) => (
                                <FormItem className={"my-3"}>
                                    <FormLabel>Điểm thường xuyên 1</FormLabel>
                                    <FormControl>
                                        <Input {...field} inputMode={"numeric"} onChange={handleInputDiem1} value={Diem1}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }/>
                        <FormField control={form.control} name={"diem2"} render={
                            ({ field }) => (
                                <FormItem className={"my-3"}>
                                    <FormLabel>Điểm thường xuyên 2</FormLabel>
                                    <FormControl>
                                        <Input {...field} inputMode={"numeric"} onChange={handleInputDiem2} value={Diem2}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }/>
                        <FormField control={form.control} name={"diem3"} render={
                            ({ field }) => (
                                <FormItem className={"my-3"}>
                                    <FormLabel>Điểm thường xuyên 3</FormLabel>
                                    <FormControl>
                                        <Input {...field} inputMode={"numeric"} onChange={handleInputDiem3} value={Diem3}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }/>
                        <FormField control={form.control} name={"diemthi"} render={
                            ({ field }) => (
                                <FormItem className={"my-3"}>
                                    <FormLabel>Điểm thi KTHP</FormLabel>
                                    <FormControl>
                                        <Input {...field} inputMode={"numeric"} onChange={handleInputDiemThi} value={DiemThi}/>
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