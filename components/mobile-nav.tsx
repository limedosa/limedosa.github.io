"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[80%] sm:w-[350px]">
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            href="#about"
            className="text-lg font-medium py-2 hover:text-primary transition-all duration-200 hover:translate-x-2 hover:scale-105 flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="opacity-0 -ml-4 mr-1 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0">
              →
            </span>
            About
          </Link>
          <Link
            href="#experience"
            className="text-lg font-medium py-2 hover:text-primary transition-all duration-200 hover:translate-x-2 hover:scale-105 flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="opacity-0 -ml-4 mr-1 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0">
              →
            </span>
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium py-2 hover:text-primary transition-all duration-200 hover:translate-x-2 hover:scale-105 flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="opacity-0 -ml-4 mr-1 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0">
              →
            </span>
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-lg font-medium py-2 hover:text-primary transition-all duration-200 hover:translate-x-2 hover:scale-105 flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="opacity-0 -ml-4 mr-1 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0">
              →
            </span>
            Skills
          </Link>
          <Link
            href="#education"
            className="text-lg font-medium py-2 hover:text-primary transition-all duration-200 hover:translate-x-2 hover:scale-105 flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="opacity-0 -ml-4 mr-1 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0">
              →
            </span>
            Education
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium py-2 hover:text-primary transition-all duration-200 hover:translate-x-2 hover:scale-105 flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="opacity-0 -ml-4 mr-1 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0">
              →
            </span>
            Contact
          </Link>
          <Link
            href="/resume"
            className="text-lg font-medium py-2 hover:text-primary transition-all duration-200 hover:translate-x-2 hover:scale-105 flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="opacity-0 -ml-4 mr-1 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0">
              →
            </span>
            Resume
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
