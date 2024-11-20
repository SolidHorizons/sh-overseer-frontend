"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from "next/link"

export function LoginModal(){
    return(
        <div className="flex w-dvw h-dvh justify-center items-center">
            <div className="rounded-xl p-8 min-w-80 border-solid border-2 border-black dark:border-white flex flex-col justify-center">
                <a className="text-3xl">Login</a>
                <div className='flex flex-row justify-center my-8'>
                <Image
                className="dark:invert"
                src="/icon_clyde_black_RGB.svg"
                alt="Discord Logo"
                width={110}
                height={100}
                priority
                />
                </div>
                <Button asChild>
                    <Link href="/login" className="text-lg">Login with Discord</Link>
                </Button>
                <a className="text-sm">Can't login?</a>
                <a href="https://discord.gg/q64qSEst22" target="_blank" rel="noreferrer" className="text-sm">Contact us on <b><u>Discord</u></b></a>
            </div>
        </div>
    )
}