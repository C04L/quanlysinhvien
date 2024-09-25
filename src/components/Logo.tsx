import React from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {VT323, Nova_Mono, Courier_Prime} from 'next/font/google'

const vt323 = VT323({weight: '400', subsets: ['latin']})
const novaMono = Nova_Mono({weight: '400', subsets: ['latin']})
const courierPrime = Courier_Prime({weight: '400', subsets: ['latin']})

export default function Logo({projectName, githubLink}: {projectName: string, githubLink: string}) {

    return (
        <div className="text-foreground flex text-nowrap flex-nowrap items-baseline">
            <div className={vt323.className}>
                <Button variant="link" size="sm">
                    <Link href={"../"}><h1 className="text-2xl font-extrabold" id="left-side">UTC</h1></Link>
                </Button>
            </div>
            <div className={novaMono.className}>
                <h1 className="text-2xl text-border font-extralight hidden md:block" id="left-side">/</h1>
            </div>
            <div className={courierPrime.className}>
                <Button variant="link" size="sm">
                    <Link href={githubLink}><h1 className="text-lg font-light hidden md:block" id="left-side">{projectName}</h1></Link>
                </Button>
            </div>
        </div>
    )
}