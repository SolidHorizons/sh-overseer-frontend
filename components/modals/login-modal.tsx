import { Button, buttonVariants  } from "@/components/ui/button";
import Link from "next/link"

export function LoginModal(){
    return(
        <div className="flex w-dvw h-dvh justify-center items-center">
            <Button asChild>
                <Link href="/login">Login with Discord</Link>
            </Button>
        </div>
    )
}