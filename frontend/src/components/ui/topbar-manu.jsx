import Link from "next/link";
import { Button } from "./button";

export function TopbarManu(){
    
    return(
        <header className="flex items-center h-20 gap-9">
            <Link href="/"> 
            <h1 className="text-5xl font-extrabold">Organize</h1>
            </Link>
            <nav className="flex justify-between items-center w-full">
            <div className="flex gap-6 text-sm">
                <Link href="/plans">Planos</Link>
                <Link href="/resources">Recursos</Link>
            </div>
            
            <div className="flex gap-7.5">
                <Button asChild variant="outline">
                    <Link href="/login" className="text-black">Login</Link>
                </Button>
                <Button>
                    <Link href="/cadastro">Cadrastre-se</Link>
                </Button>
            </div>
            </nav>
        </header>
    );
}
