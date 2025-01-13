"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function About() {
  return (
    <section className="min-h-screen pt-20 pb-16">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-light text-center mb-16"
        >
          A B O U T
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg"
              alt="Mahesh Kadam"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-mono">$: /whoami</h2>
            <div className="inline-block bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">
              open to opportunities
            </div>
            <p className="text-lg">Welcome to my digital abode!</p>
            <p className="text-gray-600 dark:text-gray-300">
              I am a <span className="text-blue-600 dark:text-blue-400">full stack developer</span> with
              a passion for building scalable and user-friendly web applications. I love to create
              elegant solutions to complex problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I am also the founder of{" "}
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                localhostcoders
              </Link>
              , a community dedicated to empowering aspiring developers.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Alongside my tech endeavors, I am an avid reader and enjoy delving into subjects such as
              psychology and philosophy while enjoying a{" "}
              <span className="text-blue-600 dark:text-blue-400">fresh cup of coffee</span>!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

