"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-background/95 pt-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  O sistema inteligente para obras modernas
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Gerencie projetos, equipes e recursos com eficiência. Transforme sua construtora com tecnologia de ponta.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-[#FF5C00] hover:bg-[#FF5C00]/90">
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Agendar Demo
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5C00]" />
                  <span>14 dias grátis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5C00]" />
                  <span>Sem cartão de crédito</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl border bg-gradient-to-br from-[#FF5C00]/20 via-[#FF5C00]/10 to-background shadow-xl"
            >
              <div className="h-full w-full bg-background/40 backdrop-blur-sm">
                {/* Placeholder for product demo/screenshot */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}