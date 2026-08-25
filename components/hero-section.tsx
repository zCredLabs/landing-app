"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 items-center">

          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl leading-[1.12]">
              The Universal Confidential Layer for{" "}
              <span className="text-purple-600 block mt-1">
                Identity & Credentials
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl"
            >
              zCred is an enterprise-grade privacy infrastructure company. We empower Web3 applications to verify identity claims, private creditworthiness, and regulatory compliance without exposing sensitive user PII or proprietary verifier policy rules.
            </motion.p>

            {/* Clean Professional CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <Link
                href="https://app.zCred.xyz"
                className="inline-flex items-center justify-center rounded-none bg-black px-7 py-3.5 text-sm font-medium text-white hover:bg-black/90 transition-all"
              >
                Launch Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center justify-center rounded-none border border-gray-300 bg-white px-7 py-3.5 text-sm font-medium text-black hover:bg-gray-50 transition-all"
              >
                View Product Suite
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Hero Visual (Preserving original clean camera lens & ID card layout) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[420px] w-full max-w-lg">

              {/* Decorative Lens Graphic */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute left-[5%] top-[10%] z-10 h-36 w-36 rounded-3xl border border-gray-200 bg-white p-3 shadow-md"
              >
                <div className="relative h-full w-full">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute left-[15%] top-[15%] h-5 w-5 rounded-full bg-black"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="absolute bottom-[15%] left-[15%] h-10 w-10 rounded-full border-2 border-purple-600"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    className="absolute right-[15%] top-[15%] h-7 w-7 rounded-full border-2 border-[#e4ff54]"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="absolute bottom-[15%] right-[15%] h-4 w-4 rounded-full bg-black"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-yellow-400"
                  />
                </div>
              </motion.div>

              {/* ID Passport Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="absolute bottom-[10%] left-1/2 z-20 w-80 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-lg">
                    Z
                  </div>
                  <div>
                    <p className="font-bold text-black text-base">zCred Passport</p>
                    <p className="text-xs text-gray-500 font-medium">Confidential Attestation</p>
                  </div>
                  <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                    ✓
                  </div>
                </div>

                <div className="mt-3 space-y-2 border-t border-gray-100 pt-3 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Identity Status:</span>
                    <span className="font-bold text-black bg-[#e4ff54] px-2 py-0.5 rounded text-[11px]">Verified Human</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Credit Score Tier:</span>
                    <span className="font-bold text-purple-600">Tier AAA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Data Privacy:</span>
                    <span className="font-bold text-emerald-600">100% Zero PII Exposed</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 md:justify-start"
        >
          <motion.a
            href="#products"
            className="group flex items-center justify-between rounded-full bg-[#e4ff54] px-6 py-3 pr-3 text-sm font-semibold text-black transition-all hover:pr-5 shadow-sm"
            whileHover={{ scale: 1.02 }}
          >
            Product Suite
            <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-black">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </motion.a>

          <motion.a
            href="#advantages"
            className="group flex items-center justify-between rounded-full bg-purple-600 px-6 py-3 pr-3 text-sm font-semibold text-white transition-all hover:pr-5 shadow-sm"
            whileHover={{ scale: 1.02 }}
          >
            Core Technology
            <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <ArrowRight className="h-4 w-4 text-purple-600" />
            </div>
          </motion.a>

          <motion.a
            href="#ecosystem"
            className="group flex items-center justify-between rounded-full bg-black px-6 py-3 pr-3 text-sm font-semibold text-white transition-all hover:pr-5 shadow-sm"
            whileHover={{ scale: 1.02 }}
          >
            Developer Ecosystem
            <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <ArrowRight className="h-4 w-4 text-black" />
            </div>
          </motion.a>
        </motion.div>

      </div>
    </div>
  )
}
