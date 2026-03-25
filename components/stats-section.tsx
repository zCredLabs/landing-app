"use client"

import { motion } from "framer-motion"
import Image from "next/image"
export function StatsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="w-full bg-purple-500 px-16 md:py-36">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6"
        >
          {/* Logo */}
          <motion.div variants={item} className="flex items-center justify-center rounded-3xl bg-white p-6 md:p-8">
            <Image src="/zCred.png" alt="zCred" width={100} height={100} />
            <h3 className="text-3xl font-bold md:text-4xl">zCred</h3>
          </motion.div>

          {/* 200+ countries */}
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center rounded-3xl bg-black p-6 text-white md:p-8"
          >
            <h3 className="text-center text-4xl font-bold md:text-5xl">200+</h3>
            <p className="mt-2 text-center text-sm md:text-base">countries and territories covered</p>
          </motion.div>

          {/* 3,000+ documents */}
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center rounded-3xl bg-black p-6 text-white md:p-8"
          >
            <h3 className="text-center text-4xl font-bold md:text-5xl">3,000 +</h3>
            <p className="mt-2 text-center text-sm md:text-base">types of ID documents supported</p>
          </motion.div>

          {/* 30s response time */}
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center rounded-3xl bg-black p-6 text-white md:p-8"
          >
            <h3 className="text-center text-4xl font-bold md:text-5xl">30s</h3>
            <p className="mt-2 text-center text-sm md:text-base">data check response time</p>
          </motion.div>

          {/* 500,000+ onboardings */}
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center rounded-3xl bg-black p-6 text-white md:p-8"
          >
            <h3 className="text-center text-4xl font-bold md:text-5xl">500,000 +</h3>
            <p className="mt-2 text-center text-sm md:text-base">successful on-boardings</p>
          </motion.div>

          {/* 10,000+ data sources */}
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center rounded-3xl bg-black p-6 text-white md:p-8"
          >
            <h3 className="text-center text-4xl font-bold md:text-5xl">10,000 +</h3>
            <p className="mt-2 text-center text-sm md:text-base">data sources</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
