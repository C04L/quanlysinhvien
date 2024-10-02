"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A linear area chart"

const chartData = [
    { ky: "I", diem: 9.5 },
    { ky: "II", diem: 8.0 },
    { ky: "III", diem: 7.2 },
    { ky: "IV", diem: 10 },
    { ky: "V", diem: 0 },
    { ky: "IV", diem: 0 },
    { ky: "VII", diem: 0 },
    { ky: "VIII", diem: 0 },
]

const chartConfig = {
    diem: {
        label: "Điểm TB:",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function BangThongKe() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Thống kê học tập</CardTitle>
                <CardDescription>
                    Thống kê quá trình học tập thông qua 8 kỳ học
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className={"h-96 w-full"}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="ky"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" hideLabel />}
                        />
                        <Area
                            dataKey="diem"
                            type="linear"
                            fill="var(--color-diem)"
                            fillOpacity={0.4}
                            stroke="var(--color-diem)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Kỳ này bạn có tiến bộ đấy! <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            Cập nhập: ** - ** - 2024
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
