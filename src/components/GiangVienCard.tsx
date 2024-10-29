import {CardHeader,Card,CardContent,CardDescription,CardTitle} from "@/components/ui/card";
import * as React from "react";
import {default as FormThemSinhVien} from "@/components/ui/FormThemSinhVien"
import {Table, TableBody, TableCell, TableCaption, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import FormCapNhapDiem from "@/components/FormCapNhapDiem";

export function ThemSinhVien() {
    return (
        <Card className={""}>
            <CardHeader>
                <CardTitle>Thêm sinh viên</CardTitle>
                <CardDescription>Thêm sinh viên vào danh sách sinh viên trong lớp</CardDescription>
            </CardHeader>
            <CardContent>
                <FormThemSinhVien/>
            </CardContent>
        </Card>
    )
}

export function CapNhapDiemSinhVien() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Cập nhập điểm</CardTitle>
                <CardDescription>Cập nhập điểm cho sinh viên trong lớp</CardDescription>
            </CardHeader>
            <CardContent>
                <FormCapNhapDiem/>
            </CardContent>
        </Card>
    )
}

export type diem = {
    Masv: string,
    TenSV: string,
    Diem1: number,
    Diem2: number,
    Diem3: number,
    DiemThi: number
}

export function BangDiem({data}: {data: diem[]}) {
    return (
        <Card className={"p-4"}>
            <Table className={"lg:w-full overflow-hidden"}>
                <TableCaption className={"hidden md:table-caption"}>Nếu có vấn đề, liên hệ hotline 1900 xxxx</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Mã SV</TableHead>
                        <TableHead>Họ tên</TableHead>
                        <TableHead>Điểm TX1</TableHead>
                        <TableHead>Điểm TX2</TableHead>
                        <TableHead>Điểm TX3</TableHead>
                        <TableHead>Điểm thi</TableHead>
                        <TableHead className={"hidden md:table-cell"}>Tình trạng</TableHead>
                    </TableRow>
                </TableHeader>
                    <TableBody>
                        {data.map((item:diem) => (
                            <TableRow key={item.Masv}>
                                <TableCell >{item.Masv}</TableCell>
                                <TableCell>{item.TenSV}</TableCell>
                                <TableCell>{item.Diem1}</TableCell>
                                <TableCell>{item.Diem2}</TableCell>
                                <TableCell>{item.Diem3}</TableCell>
                                <TableCell>{item.DiemThi}</TableCell>
                                <TableCell className={"hidden md:table-cell"}>{((item.Diem1+item.Diem2+item.Diem3)/3 + item.DiemThi)/2 > 4 ? "Đạt":"Học lại"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className={"hidden md:table-footer-group"}>
                        <TableRow>
                            <TableCell colSpan={6}>Tổng số sinh viên</TableCell>
                            <TableCell>10</TableCell>
                        </TableRow>
                    </TableFooter>
            </Table>
        </Card>
    )
}
