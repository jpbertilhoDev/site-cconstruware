"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Building2, Calendar, ChartBar, ClipboardCheck, Clock, Users } from "lucide-react"

const features = [
  {
    title: "Gestão de Projetos",
    description: "Planejamento e controle completo de obras",
    icon: ClipboardCheck,
    content: "Gerencie todas as etapas do seu projeto com ferramentas poderosas de planejamento, cronograma e controle de custos."
  },
  {
    title: "Controle Financeiro",
    description: "Orçamentos e fluxo de caixa",
    icon: ChartBar,
    content: "Mantenha suas finanças sob controle com relatórios detalhados, previsões e análises em tempo real."
  },
  {
    title: "Gestão de Equipes",
    description: "Colaboração e produtividade",
    icon: Users,
    content: "Organize suas equipes, atribua tarefas e acompanhe o progresso com ferramentas colaborativas eficientes."
  },
  {
    title: "Cronogramas",
    description: "Planejamento temporal",
    icon: Calendar,
    content: "Crie e gerencie cronogramas detalhados com visualização Gantt e alertas automáticos."
  },
  {
    title: "Gestão de Recursos",
    description: "Controle de materiais e equipamentos",
    icon: Building2,
    content: "Controle seu estoque, equipamentos e recursos com sistema integrado de gestão."
  },
  {
    title: "Relatórios em Tempo Real",
    description: "Análises e insights",
    icon: Clock,
    content: "Tome decisões baseadas em dados com relatórios personalizados e dashboards em tempo real."
  }
]

const integrations = [
  "Autodesk BIM 360",
  "Microsoft Project",
  "QuickBooks",
  "Sage",
  "Procore",
  "PlanGrid"
]

const comparisons = [
  {
    feature: "Gestão de Projetos",
    free: "✓",
    plus: "✓",
    pro: "✓"
  },
  {
    feature: "Usuários",
    free: "Até 3",
    plus: "Até 10",
    pro: "Ilimitado"
  },
  {
    feature: "Projetos Ativos",
    free: "1",
    plus: "5",
    pro: "Ilimitado"
  },
  {
    feature: "Armazenamento",
    free: "5GB",
    plus: "50GB",
    pro: "500GB"
  },
  {
    feature: "Suporte",
    free: "Email",
    plus: "Priority",
    pro: "24/7 Dedicado"
  }
]

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Funcionalidades Poderosas
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Tudo que você precisa para gerenciar suas obras com eficiência
          </p>
        </motion.div>

        <Tabs defaultValue="features" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:max-w-[400px] mx-auto">
            <TabsTrigger value="features">Funcionalidades</TabsTrigger>
            <TabsTrigger value="integrations">Integrações</TabsTrigger>
            <TabsTrigger value="comparison">Comparativo</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <feature.icon className="h-8 w-8 text-[#FF5C00] mb-2" />
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle>Integrações Disponíveis</CardTitle>
                <CardDescription>
                  Conecte o Construware com suas ferramentas favoritas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={integration}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-2 rounded-lg border p-4"
                    >
                      <div className="h-2 w-2 rounded-full bg-[#FF5C00]" />
                      <span>{integration}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparison">
            <Card>
              <CardHeader>
                <CardTitle>Comparativo de Planos</CardTitle>
                <CardDescription>
                  Escolha o plano ideal para sua empresa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Funcionalidade</TableHead>
                      <TableHead>Free</TableHead>
                      <TableHead>Plus</TableHead>
                      <TableHead>Pro</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisons.map((row) => (
                      <TableRow key={row.feature}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell>{row.free}</TableCell>
                        <TableCell>{row.plus}</TableCell>
                        <TableCell>{row.pro}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}