import { motion } from "framer-motion"
import Link from "next/link"
import { Youtube, Twitter, Linkedin, Github } from 'lucide-react'

interface SocialLink {
  href: string;
  icon: React.ElementType;
  label: string;
}

const socialLinks: SocialLink[] = [
  { href: "#", icon: Youtube, label: "Youtube" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Github, label: "Github" },
]

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen pt-20 pb-16">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-light text-center mb-16"
        >
          C O N T A C T
        </motion.h1>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-8"
          >
            connect with me on <span className="text-blue-600 dark:text-blue-400">socials.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-8 mb-12"
          >
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400">
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.label}</span>
              </Link>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 dark:text-gray-300 mb-8"
          >
            or drop a mail at{" "}
            <Link
              href="mailto:nickkadam23@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              nickkadam23@gmail.com
            </Link>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-500"
          >
            website designed and developed by{" "}
            <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              nikhil
            </Link>
          </motion.p>
        </div>
      </div>
    </section>
  )
} 