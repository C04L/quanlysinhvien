import {CardHeader,Card,CardContent,CardDescription,CardTitle,CardFooter} from "@/components/ui/card";
import * as React from "react";
import Link from "next/link";
import {} from "lucide-react";
import {ColumnDef, AccessorColumnDef, AccessorKeyColumnDef, } from "@tanstack/react-table"
import {Table, TableBody, TableCell, TableCaption, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table"

export function ThemSinhVien() {
    return (
        <Card className={""}>
            <Link href={"/giangvien/themsinhvien"}>
            <CardHeader>
                <CardTitle>Thêm sinh viên</CardTitle>
                <CardDescription>Thêm sinh viên vào danh sách sinh viên trong lớp</CardDescription>
            </CardHeader>
            </Link>
        </Card>
    )
}

export function CapNhapDiemSinhVien() {
    return (
        <Card>
            <Link href={"/giangvien/capnhapdiem"}>
            <CardHeader>
                <CardTitle>Cập nhập điểm</CardTitle>
                <CardDescription>Cập nhập điểm cho sinh viên trong lớp</CardDescription>
            </CardHeader>
            </Link>
        </Card>
    )
}

export type diem = {
    Masv: string,
    TenSV: string,
    Diem1: number,
    Diem2: number,
    Diem3: number,
    DiemThi: number,
    TinhTrang: "dat" | "hoclai"
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
                                <TableCell className={"hidden md:table-cell"}>{item.TinhTrang}</TableCell>
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
