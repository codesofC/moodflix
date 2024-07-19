import { Github, Linkedin, Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { useTheme } from "@/context/theme/useTheme"
import Image from "next/image"

const Navbar = () => {

    const {theme, setTheme} = useTheme()

  return (
    <nav className="w-full flex items-center justify-between px-6 lg:px-8 py-2 border-b">
        <div className="w-32 sm:w-40">
            <Image 
                src="/moodflix-logo.png"
                alt="moodflix"
                width={800}
                height={800}
                className="w-full object-contain"
            />
        </div>
        <div className="flex items-center">
            <Button className="bg-transparent text-secondary-foreground px-2 py-0 hover:bg-secondary" asChild>
                <Link href="https://www.github.com/codesofC/moodflix">
                    <Github size={20} />
                </Link>
            </Button>
            <Button className="bg-transparent text-secondary-foreground px-2 py-0 hover:bg-secondary" asChild>
                <Link href="https://www.linkedin.com/in/judelininelus">
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