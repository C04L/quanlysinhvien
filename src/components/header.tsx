
import {ModeToggle} from "@/components/theme-button";
import Logo from "@/components/Logo";

export default function navbar() {



    return (
        <div>
            <div className="w-full bg-background
             h-16 flex items-center sticky top-0
             outline outline-1 outline-border">

                <div className="w-fit box-border ml-4" id="left-side">
                    <Logo projectName="Bai tap lon" githubLink="https://github.com/C04l"/>
                </div>

                <div className="w-full flex gap-4 justify-end mx-4" id="right-side">
                    <ModeToggle/>
                </div>
            </div>
        </div>
    )
}