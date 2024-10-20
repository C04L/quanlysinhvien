import { Table, TableRow, TableHeader, TableHead, TableFooter, TableCaption, TableCell, TableBody } from "@/components/ui/table"
import {Card,CardContent, CardHeader} from "@/components/ui/card"

type diem = {
    MaHP: string,
    TenHP: string,
    SoTinChi: number,
    LanHoc: number,
    LanThi: number,
    Diem10: number,
    Diem4: number,
    DiemChu: string,
    TinhTrang: string,
    ChiTiet: {
        DiemThi: number,
        DQT: number,
        LanHoc: number,
    }
}

export default function BangDiem({data}: {data: diem[]}) {
    return (
        <Card>
            <CardHeader></CardHeader>
            <CardContent>
                <Table className={"lg:w-full overflow-hidden"}>
                    <TableCaption className={"hidden md:table-caption"}>Liên hệ phòng đào tạo nếu muốn phúc khảo</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className={"hidden md:table-cell"}>Mã học phần</TableHead>
                            <TableHead>Tên học phần</TableHead>
                            <TableHead>Số tín chỉ</TableHead>
                            <TableHead>Lần học</TableHead>
                            <TableHead>Lần thi</TableHead>
                            <TableHead>Điểm hệ 10</TableHead>
                            <TableHead>Điểm hệ 4</TableHead>
                            <TableHead>Điểm chữ</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item:diem) => (
                            <TableRow key={item.MaHP}>
                                <TableCell className={"hidden md:block"}>{item.MaHP}</TableCell>
                                <TableCell>{item.TenHP}</TableCell>
                                <TableCell>{item.SoTinChi}</TableCell>
                                <TableCell>{item.LanHoc}</TableCell>
                                <TableCell>{item.LanThi}</TableCell>
                                <TableCell>{item.Diem10}</TableCell>
                                <TableCell>{item.Diem4}</TableCell>
                                <TableCell>{item.DiemChu}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className={"hidden md:table-footer-group"}>
                        <TableRow>
                            <TableCell colSpan={7}>Tổng kết hệ 10</TableCell>
                            <TableCell>9.5</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </CardContent>
        </Card>
    )
}