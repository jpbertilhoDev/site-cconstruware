"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Image from "next/image"

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm"
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/construwaree.png"
            alt="Construware Logo"
            width={32}
            height={32}
            className="dark:invert"
          />
          <span className="text-xl font-bold">Construware</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/features" className="text-foreground/60 hover:text-foreground">
            Funcionalidades
          </Link>
          <Link href="/pricing" className="text-foreground/60 hover:text-foreground">
            Preços
          </Link>
          <Link href="/enterprise" className="text-foreground/60 hover:text-foreground">
            Enterprise
          </Link>
          <Link href="/blog" className="text-foreground/60 hover:text-foreground">
            Blog
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Começar Grátis</Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}