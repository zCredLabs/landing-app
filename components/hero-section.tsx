"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-full overflow-hidden">
      <header className="container mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center">
            <Image src="/zCred.png" alt="zCred" width={60} height={60} />
          </div>
          <span className="text-lg font-medium">zCred</span>
        </div>
        {/* <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="#features" className="text-sm font-medium hover:text-gray-600">
                Features
              </Link>
            </li>
            <li>
              <Link href="#industries" className="text-sm font-medium hover:text-gray-600">
                Industries
              </Link>
            </li>
            <li>
              <Link href="#resources" className="text-sm font-medium hover:text-gray-600">
                Resources
              </Link>
            </li>
            <li>
              <Link href="#company" className="text-sm font-medium hover:text-gray-600">
                Company
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-sm font-medium hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav> */}
        <Link
          href="https://app.zCred.xyz"
          className="hidden rounded-none bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 md:inline-block"
        >
          Try Beta Version
        </Link>
      </header>

      <div className="container mx-auto my-12 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 lg:my-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Universal Identity Protocol for Everyone and Everything
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative"
            >
              ***
              <motion.div
                className="absolute -bottom-1 left-0 h-[3px] bg-black"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-lg text-gray-700"
          >
            Open-source, interoperable and standardized protocol for identity aggregation and verification on the blockchain.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="https://app.zCred.xyz"
              className="inline-flex items-center justify-center rounded-none bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              Try Beta Version
            </Link>
            <Link
              href="https://github.com/zCred"
              target="_blank"
              className="inline-flex items-center justify-center rounded-none border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-50"
            >
              <Github className="mr-2 h-4 w-4" />
              Github
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative h-[400px] w-full">
            {/* Camera lens element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute left-[10%] top-[15%] z-10 h-32 w-32 rounded-2xl border border-gray-200 bg-white p-2"
            >
              <div className="relative h-full w-full">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute left-[15%] top-[15%] h-4 w-4 rounded-full bg-black"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute bottom-[15%] left-[15%] h-8 w-8 rounded-full border-2 border-black"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute right-[15%] top-[15%] h-6 w-6 rounded-full border-2 border-purple-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="absolute bottom-[15%] right-[15%] h-3 w-3 rounded-full bg-black"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-yellow-300"
                />
              </div>
            </motion.div>

            {/* ID Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute right-[5%] top-[5%] z-10 h-48 w-48 overflow-hidden rounded-3xl border border-gray-200 bg-white"
            >
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Identity Photo"
                width={192}
                height={192}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* ID Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-[15%] left-1/2 z-20 w-64 -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <span className="text-xl">L</span>
                </div>
                <div>
                  <p className="font-medium">Ralph Edwards</p>
                  <p className="text-sm text-gray-500">05/18/1984</p>
                </div>
                <div className="ml-auto text-2xl">+</div>
              </div>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-wider text-gray-500">Verification Date</p>
                <div className="flex items-center gap-2">
                  <p className="font-medium tracking-widest">02/23/2022</p>
                  <div className="h-1 w-16 rounded bg-gray-200"></div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs font-medium tracking-widest">AB-07-443YFY3-XF34-4*MR*</p>
              </div>
            </motion.div>

            {/* Connecting lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute left-[35%] top-[25%] z-0 h-[2px] w-[30%] bg-gray-300"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute left-[25%] top-[40%] z-0 h-[80px] w-[2px] bg-gray-300"
            />
          </div>
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="container mx-auto mt-12 flex flex-wrap items-center justify-center gap-4 px-4 pb-12 md:justify-start md:gap-6 lg:mt-16"
      >
        <motion.a
          href="#workflow"
          className="group flex items-center justify-between rounded-full bg-[#e4ff54] px-6 py-3 pr-3 text-sm font-medium text-black transition-all hover:pr-5"
          whileHover={{ scale: 1.03 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          Workflow
          <motion.div
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-black"
            whileHover={{ x: 5 }}
          >
            <ArrowRight className="h-4 w-4 text-white" />
          </motion.div>
        </motion.a>
        <motion.a
          href="#id-verification"
          className="group flex items-center justify-between rounded-full bg-purple-500 px-6 py-3 pr-3 text-sm font-medium text-white transition-all hover:pr-5"
          whileHover={{ scale: 1.03 }}
        >
          ID Verification
          <motion.div
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white"
            whileHover={{ x: 5 }}
          >
            <ArrowRight className="h-4 w-4 text-purple-500" />
          </motion.div>
        </motion.a>
        <motion.a
          href="#aml-screening"
          className="group flex items-center justify-between rounded-full bg-black px-6 py-3 pr-3 text-sm font-medium text-white transition-all hover:pr-5"
          whileHover={{ scale: 1.03 }}
        >
          AML Screening
          <motion.div
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white"
            whileHover={{ x: 5 }}
          >
            <ArrowRight className="h-4 w-4 text-black" />
          </motion.div>
        </motion.a>
      </motion.div> */}
    </div>
  )
}
