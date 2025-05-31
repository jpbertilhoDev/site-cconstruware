"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        {/* Search and filters */}
        <div className="flex gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Pesquisar artigos..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">Mais recentes</Button>
          <Button variant="outline">Categorias</Button>
        </div>

        {/* Featured post */}
        <div className="grid gap-8 mb-16">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-lg bg-card"
          >
            <div className="aspect-video bg-muted" />
            <div className="p-6">
              <span className="text-sm text-primary mb-2 inline-block">Gestão de Obras</span>
              <h2 className="text-2xl font-bold mb-4">Como otimizar o gerenciamento de projetos na construção civil</h2>
              <p className="text-muted-foreground mb-4">
                Descubra as melhores práticas para melhorar a eficiência e produtividade dos seus projetos de construção.
              </p>
              <Button variant="link" className="p-0">Ler mais →</Button>
            </div>
          </motion.article>
        </div>

        {/* Recent posts grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <motion.article
              key={post}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: post * 0.1 }}
              className="bg-card rounded-lg overflow-hidden"
            >
              <div className="aspect-video bg-muted" />
              <div className="p-6">
                <span className="text-sm text-primary mb-2 inline-block">Tecnologia</span>
                <h3 className="text-xl font-bold mb-2">Inovações tecnológicas na construção civil</h3>
                <p className="text-muted-foreground mb-4">
                  As últimas tendências e tecnologias que estão transformando o setor da construção.
                </p>
                <Button variant="link" className="p-0">Ler mais →</Button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </main>
  )
}