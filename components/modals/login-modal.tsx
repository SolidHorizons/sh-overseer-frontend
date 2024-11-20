"use client"

import { Button, buttonVariants  } from "@/components/ui/button";
import Link from "next/link"

export function LoginModal(){
    return(
        <div className="flex w-dvw h-dvh justify-center items-center">
            <div className="rounded-xl p-8 border-solid border-2 border-black dark:border-white flex flex-col justify-center">
                <Button asChild>
                    <Link href="/login">Login with Discord</Link>
                </Button>
            </div>
        </div>
    )
}