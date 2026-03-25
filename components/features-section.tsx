"use client"

import { motion } from "framer-motion"
import { Check, Shield, Globe, Clock, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Key Features</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Our platform provides everything you need for secure and compliant identity verification
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Check className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Automated Verification</h3>
            <p className="text-gray-600">
              Verify identities in seconds with our advanced AI-powered verification system that works across multiple
              document types.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Fraud Prevention</h3>
            <p className="text-gray-600">
              Advanced fraud detection algorithms protect your business from identity theft and synthetic identities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Global Coverage</h3>
            <p className="text-gray-600">
              Support for over 3,000 ID types from more than 200 countries and territories in native languages.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Fast Response Time</h3>
            <p className="text-gray-600">
              Get verification results in as little as 30 seconds, allowing for quick and efficient onboarding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Dedicated Support</h3>
            <p className="text-gray-600">
              Your dedicated account manager will guide you through implementation, training, and ongoing support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
