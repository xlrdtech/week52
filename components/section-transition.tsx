"use client"

import type React from "react"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

interface SectionTransitionProps {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  className?: string
}

export default function SectionTransition({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: SectionTransitionProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const getVariants = () => {
    const distance = 50
    let initial = {}

    switch (direction) {
      case "left":
        initial = { x: -distance, opacity: 0 }
        break
      case "right":
        initial = { x: distance, opacity: 0 }
        break
      case "up":
        initial = { y: -distance, opacity: 0 }
        break
      case "down":
        initial = { y: distance, opacity: 0 }
        break
    }

    return {
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay,
        },
      },
      hidden: initial,
    }
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={getVariants()} className={className}>
      {children}
    </motion.div>
  )
}
