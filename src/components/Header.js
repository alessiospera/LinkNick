import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession, useSession } from "next-auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStaylinked } from "@fortawesome/free-brands-svg-icons";
import  LogoutButton  from "@/components/buttons/LogoutButton";
import Link from "next/link";

export default async function Header(){

    const session = await getServerSession(authOptions); //only usable for server component
    console.log(session);

    return(
        <header className="bg-white border-b py-4">
            <div className="max-w-4xl flex justify-between mx-auto px-8">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2 text-blue-700">
                        <FontAwesomeIcon icon={faStaylinked} className="text-blue-500" />
                        <span className="font-bold"> LinkNick </span>
                    </Link>
                    <nav className="flex items-center gap-4 text-slate-500 text-sm">
                        <Link href="/about">About</Link>
                        <Link href="/login">Pricing</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </div>
                <div className="flex gap-6">
                    <nav className="flex items-center gap-4 text-sm text-slate-500">
                        {!!session && (
                            <>
                                <Link href="/account">
                                    Hello, {session?.user?.name}
                                </Link>
                                <LogoutButton />
                            </>
                            
                        
                        )}
                        {!session && (
                            <>
                                <Link href="/login">Sign In</Link>
                                <Link href="/login">Create Account</Link>
                            </>
                        )}
                
                    </nav>
                </div>
            </div>
        
      </header>
    )
}