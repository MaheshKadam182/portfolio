"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: "Quickflow",
    description: "Quickflow is an open-source alternative to Notion that aims to provide a superior user experience. It utilizes NextJS13 as a framework, Shadcn and TailwindCSS for styling, Clerk for...",
    image: "/placeholder.svg",
    github: "#",
    live: "#",
    techStack: ["Next.js", "TypeScript", "Tailwind"]
  }
  // Add more projects here
]

export default function Projects() {
  return (
    <section className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-light text-center mb-16"
        >
          P R O J E C T S
        </motion.h1>
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="flex gap-4 mb-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github}>Github</a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.live}>Live</a>
                      </Button>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {/* Background diagonal shape */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 dark:from-blue-950 to-transparent -skew-y-12 transform-gpu" />
    </section>
  )
}

