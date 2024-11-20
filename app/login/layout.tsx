import { ModeToggle } from "@/components/mode/mode-toggle";

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div>
            <div className="absolute right-4 top-4"><ModeToggle /></div>
            <div className="w-dvw h-dvh">{children}</div>
        </div>
    );
}