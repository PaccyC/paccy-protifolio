import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { navLinks } from "@/lib"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed w-full px-8 flex z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
        className="text-xl font-bold text-primary flex items-center cursor-pointer" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Pacifique</span> Portfolio
          </span>
        </a>
        <div className="flex items-center space-x-12">
          <div className="hidden md:flex space-x-8">
          {navLinks.map((link, key) => (
            <a
              key={key}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          </div>
          <ThemeToggle/>
        </div>

        {/* Mobile navigation */}

        <button 
        className="md:hidden p-2 text-foreground z-50 "
        
        onClick={()=>setIsMenuOpen((prev)=> !prev)}
        aria-label={isMenuOpen ? "Close Menu": "Open Menu"}
        >
         {isMenuOpen ? <X size={24}/> : <Menu size={24} />}

         
        </button>

       <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
        "transition-all duration-300 md:hidden",
        isMenuOpen ? "opacity-100 pointer-events-auto": "opacity-0 pointer-events-none"
       )}>

        <div className="flex flex-col text-xl space-y-8">
          {navLinks.map((link, key) => (
            <a
              key={key}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={()=>setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
       </div>
      </div>
    </nav>
  )
}

export default Navbar