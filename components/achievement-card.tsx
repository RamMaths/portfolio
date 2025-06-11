"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"

interface Achievement {
  id: number
  title: string
  description: string
  date: string
  category: string
  icon: string
}

interface AchievementCardProps {
  achievement: Achievement
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseEnter = () => {
      gsap.to(card, {
        x: 10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      })

      gsap.to(iconRef.current, {
        scale: 1.2,
        rotation: 10,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        x: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })

      gsap.to(iconRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="achievement-card bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-colors cursor-pointer"
    >
      <div className="flex items-start space-x-4">
        {/* Icon */}
        <div
          ref={iconRef}
          className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-2xl border border-white/10"
        >
          {achievement.icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                {achievement.category}
              </span>
              <span className="text-sm text-gray-400">{achievement.date}</span>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </div>
  )
}
