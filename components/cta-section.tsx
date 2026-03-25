"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to transform your identity verification process?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Join zCred's secure, decentralized, and efficient verification
            solution to verify & protect across web2 and web3.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://calendly.com/0xshikhar/30min"
              target="_blank"
              className="inline-flex h-12 items-center justify-center rounded-none bg-white px-8 text-sm font-medium text-black hover:bg-gray-100"
            >
              Book a Call
            </Link>
            <Link
              href="mailto:hi@zCred.xyz"
              className="inline-flex h-12 items-center justify-center rounded-none border border-white bg-transparent px-8 text-sm font-medium text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
