"use client"

import { motion } from "framer-motion"

export function AdvantagesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="w-full bg-purple-500 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold text-white md:text-5xl"
        >
          zCred Advantages
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Card 1 - Comply with regulations */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8">
            <h3 className="mb-4 text-xl font-bold md:text-2xl">Verify Once, Access Everywhere</h3>
            <p className="mb-8 text-sm text-gray-700 md:text-base">
              Users can verify their identity once and use it across multiple platforms and planets. Reduce complexity to access and verify identity while maintaining the highest level of security for identity verification.
            </p>
            <div className="mt-auto flex justify-center">
              <div className="relative h-36 w-36 rounded-full bg-purple-500">
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-1 p-4">
                    <div className="h-2 w-12 bg-black"></div>
                    <div className="h-2 w-12 bg-purple-500"></div>
                    <div className="h-2 w-12 bg-purple-300"></div>
                    <div className="h-2 w-12 bg-gray-200"></div>
                    <div className="h-2 w-12 bg-gray-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Operate businesses worldwide */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8">
            <h3 className="mb-4 text-xl font-bold md:text-2xl">Any device, anywhere</h3>
            <p className="mb-8 text-sm text-gray-700 md:text-base">
              Using zCred,your digital identity is accessible anywhere on any device by using any verified authenciator.
              Using our satellite nodes connection, there is no territorial limits and geographical restrictions for your identity verification.
            </p>
            <div className="mt-auto flex justify-center">
              <div className="relative h-36 w-36 rounded-full bg-[#e4ff54]">
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                  <div className="flex h-full w-full flex-col items-center justify-center p-2">
                    <div className="mb-1 h-10 w-10">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.6 9H20.4"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.6 15H20.4"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 3C14.5 5.5 15.5 8.5 15 12C14.5 15.5 13.5 18.5 12 21C10.5 18.5 9.5 15.5 9 12C8.5 8.5 9.5 5.5 12 3Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="relative h-8 w-12 bg-white">
                      <div className="absolute h-8 w-12 border border-black">
                        <div className="mt-1 h-1 w-8 bg-black"></div>
                        <div className="mt-1 h-1 w-8 bg-gray-300"></div>
                      </div>
                      <div className="absolute -right-1 top-0 h-3 w-3 bg-black"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Streamline on-boarding */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8">
            <h3 className="mb-4 text-xl font-bold md:text-2xl">Zero-Knowledge Privacy</h3>
            <p className="mb-8 text-sm text-gray-700 md:text-base">
              Protect your personal information with our advanced zero-knowledge proof technology. Verify your identity and credentials without revealing sensitive data, maintaining complete control over your personal information.
            </p>
            <div className="mt-auto flex justify-center">
              <div className="relative h-36 w-36 rounded-full bg-gray-200">
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                  <div className="flex h-full w-full flex-col items-center justify-center p-2">
                    <div className="h-16 w-16 border border-gray-300">
                      <div className="h-4 w-full border-b border-gray-300">
                        <div className="ml-2 mt-1.5 flex gap-1">
                          <div className="h-1 w-1 rounded-full bg-yellow-500"></div>
                          <div className="h-1 w-1 rounded-full bg-orange-500"></div>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-col gap-1 p-1">
                        <div className="h-3 w-full bg-purple-500"></div>
                        <div className="h-3 w-full bg-black"></div>
                        <div className="mt-1 flex items-center">
                          <div className="h-4 w-10 bg-[#e4ff54]"></div>
                          <div className="ml-1 h-2 w-2 border-b border-r border-black rotate-[-45deg]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Protect your customer data */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8">
            <h3 className="mb-4 text-xl font-bold md:text-2xl">Instant Cross-Chain Scale</h3>
            <p className="mb-8 text-sm text-gray-700 md:text-base">
              Why limit yourself to one blockchain when you can seamlessly verify your identity across multiple networks?
              zCred aims to integrate with major blockchain platforms, providing unified identity verification across the entire Web3 ecosystem.
            </p>
            <div className="mt-auto flex justify-center">
              <div className="relative h-36 w-36 rounded-full bg-purple-500">
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="relative h-14 w-12">
                      <div className="h-8 w-12 rounded-t-xl border-2 border-black bg-white"></div>
                      <div className="absolute -top-4 left-1/2 h-8 w-8 -translate-x-1/2 rounded-t-full border-2 border-b-0 border-black bg-purple-500"></div>
                      <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-black"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Card 5 - World-class customer support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 rounded-3xl bg-white p-6 md:p-8"
        >
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="md:w-1/2">
              <h3 className="mb-4 text-xl font-bold md:text-2xl">Open Source & Community Driven</h3>
              <p className="text-sm text-gray-700 md:text-base">
                Our platform is built on the principles of open source and community-driven development.
                We welcome contributions and feedback from the community to improve the protocol and make it more secure and reliable.
              </p>
            </div>
            <div className="flex w-full justify-center md:w-1/2">
              <div className="relative h-36 w-36">
                <div className="absolute right-0 h-32 w-32 rounded-full bg-purple-500"></div>
                <div className="absolute left-0 h-32 w-32 rounded-full bg-[#e4ff54]">
                  <div className="absolute bottom-2 right-0 h-16 w-8">
                    <div className="h-12 w-3 bg-black"></div>
                    <div className="ml-3 mt-1 h-8 w-3 bg-purple-500"></div>
                    <div className="ml-6 mt-1 h-4 w-3 bg-[#e4ff54]"></div>
                  </div>
                </div>
                <div className="absolute right-4 top-4 h-16 w-16">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 18V17C21 15.3431 19.6569 14 18 14H14C12.3431 14 11 15.3431 11 17V18"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 10C17.6569 10 19 8.65685 19 7C19 5.34315 17.6569 4 16 4C14.3431 4 13 5.34315 13 7C13 8.65685 14.3431 10 16 10Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 14H7C5.34315 14 4 15.3431 4 17V18"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
