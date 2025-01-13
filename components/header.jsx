"use client"

import Link from "next/link"
import { Home, Twitter, Github, Linkedin, Moon, Sun, Mail } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-14">
        <nav className="flex gap-4">
          <Link href="/" className="hover:opacity-80">
            <Home className="w-5 h-5" />
          </Link>
          <Link href="https://twitter.com/maheshkadam" className="hover:opacity-80">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/maheshkadam" className="hover:opacity-80">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com/in/maheshkadam" className="hover:opacity-80">
            <Linkedin className="w-5 h-5" />
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Mail className="w-4 h-4" />
            Get in touch
          </Button>
        </div>
      </div>
    </header>
  )
}

