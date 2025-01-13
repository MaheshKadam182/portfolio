"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AboutSection } from "@/components/sections/about"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative">
      <section className="min-h-screen pt-14 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="container flex flex-col items-center text-center z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 rounded-full overflow-hidden mb-8"
          >
            <Image
              src="/placeholder.svg"
              alt="Mahesh Kadam"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-widest mb-4"
          >
            FULL-STACK DEVELOPER
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            I create content for community.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button variant="secondary" className="rounded-full" onClick={() => scrollToSection('about')}>
              about
            </Button>
            <Button variant="secondary" className="rounded-full" onClick={() => scrollToSection('experience')}>
              experience
            </Button>
            <Button variant="secondary" className="rounded-full" onClick={() => scrollToSection('projects')}>
              projects
            </Button>
            <Button variant="secondary" className="rounded-full" onClick={() => scrollToSection('contact')}>
              contact
            </Button>
          </motion.div>
        </div>
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className={`absolute border border-gray-200 rounded-full
              ${i === 1 ? 'w-[200px] h-[200px]' : ''}
              ${i === 2 ? 'w-[300px] h-[300px]' : ''}
              ${i === 3 ? 'w-[500px] h-[500px]' : ''}
              ${i === 4 ? 'w-[700px] h-[700px]' : ''}
            `}
          />
        ))}
      </section>

      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

