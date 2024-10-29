import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SearchIcon} from "lucide-react";

export default function SearchBar() {
    return (
        <div className="w-1/2 flex gap-2 items-center border-2 border-border rounded-lg bg-white mx-auto">
            <Input placeholder="Tìm kiếm" className="w-full bg-white border-0 shadow-none pr-0 text-black focus-visible:ring-0"/>
            <Button variant="link" className={"border-0 shadow-none bg-white p-0 pr-2 text-black"}><SearchIcon width={20}/></Button>
        </div>
    )
}