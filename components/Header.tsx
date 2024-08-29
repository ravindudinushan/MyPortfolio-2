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
            {/* Desktop nav & Hire me button*/}
            <div className="hidden xl:flex item-center gap-8">
              <Nav />
              <Link href="/contact">
                <Button>Hire me</Button>
              </Link>
            </div>

            {/* Mobile nav */}
            <div className="xl:hidden">mobile nav</div>
        </div>
    </header>
  )
}

export default Header
