import { Github, Linkedin, Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { useTheme } from "@/context/theme/useTheme"

const Navbar = () => {

    const {theme, setTheme} = useTheme()

  return (
    <nav className="w-full flex items-center justify-between px-6 lg:px-8 py-4 border-b">
        <div className="text-2xl font-extrabold text-primary">
            MOODFlix
        </div>
        <div className="flex items-center">
            <Button className="bg-transparent text-secondary-foreground px-2 py-0 hover:bg-secondary" asChild>
                <Link href="https://www.github.com/codesofC">
                    <Github size={20} />
                </Link>
            </Button>
            <Button className="bg-transparent text-secondary-foreground px-2 py-0 hover:bg-secondary" asChild>
                <Link href="https://www.github.com/codesofC">
                    <Linkedin size={20} />
                </Link>
            </Button>
            <Button className="bg-transparent text-secondary-foreground px-2 py-0 hover:bg-secondary">
                {theme === "light" ? <Moon onClick={() => setTheme("dark")} size={20} /> : 
                <Sun onClick={() => setTheme("light")} size={20} />}
            </Button>
        </div>
    </nav>
  )
}

export default Navbar