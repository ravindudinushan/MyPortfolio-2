import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    RD <span className="text-accent">.</span>
                </h1>
            </Link>
            {/* Desktop Nav */}
            <Nav />
        </div>
    </header>
  )
}

export default Header
