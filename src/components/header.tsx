import {default as SearchBar} from "@/components/SearchBar";
import {ModeToggle} from "@/components/theme-button";
import Logo from "@/components/Logo";
import Link from "next/link";
import {LogOut} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function navbar({navlink, tieude}: {navlink: string, tieude: string}) {



    return (
        <div>
            <div className="w-full bg-background
             h-16 flex items-center fixed top-0
             outline outline-1 outline-border
             backdrop-blur-2xl z-40">

                <div className="w-fit box-border ml-4" id="left-side">
                    <Logo projectName={tieude} githubLink={navlink}/>
                </div>

                <div className="w-full flex gap-4 justify-end mx-4" id="right-side">
                    <SearchBar/>
                    <Button className={"p-2 py-1"}><Link href={"/"}><LogOut width={18}/></Link></Button>
                    <ModeToggle/>
                </div>
            </div>
        </div>
    )
}