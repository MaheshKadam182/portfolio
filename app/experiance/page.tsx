"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const experiences = [
  {
    title: "Frontend developer intern",
    company: "zeza.tech",
    period: "april, 2023 - july, 2023",
    logo: "/placeholder.svg",
    points: [
      "Contributed to the development of UI and components using Next.js for Xpower Boost, a cutting-edge no-code AI/ML platform with widespread applications across various industries.",
      "Implemented interactive features using React and harnessed the capabilities of AgGrid to optimize data display and enhance user engagement."
    ]
  },
  {
    title: "Founder",
    company: "localhostcoders community",
    period: "dec, 2020 - present",
    logo: "/placeholder.svg",
    points: [
      "Started a community for tech enthusiasts and developers, focusing on creating content and designing posts!",
      "Reached to 3600+ followers on Instagram"
    ]
  }
]

export default function Experience() {
  return (
    <section className="min-h-screen pt-20 pb-16">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-light text-center mb-16"
        >
          E X P E R I E N C E
        </motion.h1>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="grid md:grid-cols-[100px_1fr] gap-8"
            >
              <Image
                src={exp.logo}
                alt={exp.company}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">at, {exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

