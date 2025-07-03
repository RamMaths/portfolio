"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AchievementCard from "@/components/achievement-card"

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  {
    id: 1,
    title: "Software Engineer @ Grupo Deca",
    description: "Full stack development for a Geolocation services company, automating workflows for multi cluster kubernetes architecture",
    date: "2025 - Now",
    category: "Junior - Mid",
    icon: "🗺️",
  },
  {
    id: 2,
    title: "Freelancer",
    description: "Responsible of creating backend and cloud infrastructure efficient solutions",
    date: "2024",
    category: "Junior",
    icon: "💻",
  },
  {
    id: 3,
    title: "Web Developer Intern",
    description: "Frontend development with vanilla JS @ Espiral Sistemas",
    date: "2023",
    category: "Entry",
    icon: "🧑🏾‍💻",
  }
]

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      // Achievement cards animation
      gsap.from(".achievement-card", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".achievements-list",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
        >
          Professional Experience
        </h1>

        <div className="achievements-list max-w-4xl mx-auto space-y-6">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  )
}
