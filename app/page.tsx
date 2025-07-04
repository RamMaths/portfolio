"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Instagram,
  ArrowDown,
  Users,
  Award,
  Code,
  Calendar,
  Trophy,
  Zap,
  Globe,
  Heart,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const communitiesRef = useRef<HTMLDivElement>(null)
  const scholarshipRef = useRef<HTMLDivElement>(null)
  const hackathonsRef = useRef<HTMLDivElement>(null)

  const scrollToNextSection = () => {
    communitiesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      const tl = gsap.timeline()

      // Profile image animation
      tl.from(imageRef.current, {
        scale: 0,
        rotation: 180,
        duration: 1.2,
        ease: "back.out(1.7)",
      })

      // Text stagger animation
      tl.from(
        ".hero-text",
        {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.5",
      )

      // Social links animation
      tl.from(
        ".social-link",
        {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3",
      )

      // Scroll indicator animation
      tl.from(
        scrollIndicatorRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        "-=0.2",
      )

      // Floating animation for profile image
      gsap.to(imageRef.current, {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      })

      // Scroll indicator bounce
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      })

      // Social links hover effects
      document.querySelectorAll(".social-link").forEach((link) => {
        const linkElement = link as HTMLElement

        linkElement.addEventListener("mouseenter", () => {
          gsap.to(linkElement, {
            scale: 1.2,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out",
          })
        })

        linkElement.addEventListener("mouseleave", () => {
          gsap.to(linkElement, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      })

      // Communities section animations
      gsap.from(".community-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: communitiesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".communities-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: communitiesRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Scholarship section animations
      gsap.from(".scholarship-content", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scholarshipRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".scholarship-image", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scholarshipRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      // Hackathons section animations
      gsap.from(".hackathon-item", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: hackathonsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".hackathons-title", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: hackathonsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="overflow-hidden">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Profile Image */}
          <div ref={imageRef} className="mb-8">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-50" />
              <Image
                src="/profile-picture.jpeg?height=192&width=192"
                alt="Profile"
                width={192}
                height={192}
                className="relative z-10 rounded-full border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div ref={textRef} className="space-y-6 mb-12">
            <h1 className="hero-text text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Ramses Mata
            </h1>
            <h2 className="hero-text text-2xl md:text-3xl text-gray-300 font-light">Backend Developer | Cloud Engineer</h2>
            <p className="hero-text text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative and efficient solutions. 
            </p>
          </div>

          {/* Social Links */}
          <div ref={socialRef} className="flex justify-center space-x-8 mb-16">
            <Link
              href="https://www.linkedin.com/in/ramses-mata/"
              className="social-link p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com/RamMaths"
              className="social-link p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/ramtoearth"
              className="social-link p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div
            ref={scrollIndicatorRef}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer pt-10"
            onClick={scrollToNextSection}
          >
            <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Communities Section */}
      <section ref={communitiesRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="communities-title text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Communities & Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="community-card bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/competitive.jpeg?height=200&width=400"
                  alt="Tech Community Meetup"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-white">Competitive Programming Club Captain</h3>
                <p className="text-gray-300 leading-relaxed">
                  Active organizer and captain within the competitive programming club at my University
                </p>
              </div>
            </div>

            <div className="community-card bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/communityday.jpeg?height=200&width=400"
                  alt="Open Source Collaboration"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-white">Commited to share knowledge</h3>
                <p className="text-gray-300 leading-relaxed">
                  I feel passion about learning and sharing what I learn.
                </p>
              </div>
            </div>

            <div className="community-card bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/speaker.jpeg?height=200&width=400"
                  alt="Global Tech Network"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-white">Present in tech events</h3>
                <p className="text-gray-300 leading-relaxed">
                  Speaker at AWS Community Day 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section ref={scholarshipRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="scholarship-content">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-yellow-400 font-semibold">Academic Excellence</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                2023 GKS Scholarship winner
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The{" "}
                <strong className="text-white">Global Korea Scholarship (GKS)</strong> is a scholarship issued by the South Korea Government, offered to students
                around the world with outstanding academic performance.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-gray-300">Top four tech country</span>
                </div>
                <div className="flex items-center">
                  <Code className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-gray-300">Computer Engineering</span>
                </div>
              </div>
            </div>

            <div className="scholarship-image">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <Image
                    src="/gks.jpeg?height=300&width=400"
                    alt="Scholarship Award"
                    width={400}
                    height={300}
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons & Tech Events Section */}
      <section ref={hackathonsRef} className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-6">
          <h2 className="hackathons-title text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hackathons & Events
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="Category hackathon-item bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/hackatec.jpeg?height=200&width=400"
                    alt="TECNM Hackatec 2024"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm border border-purple-500/30">
                      1st Place Category Winner
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">TECNM Hackatec</h3>
                      <div className="flex items-center text-sm text-purple-400 mt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>2024</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    We built a mobile application to learn mexican sign language. We also trained a ML
                    model using scikit learn and created a web server.
                  </p>
                </div>
              </div>

              <div className="hackathon-item bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/oracle.jpeg?height=200&width=400"
                    alt="Google Developer Challenge"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">Oracle Cloud Academy Challenge</h3>
                      <div className="flex items-center text-sm text-blue-400 mt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>2024</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Developed an Iot ecosystem to monitor garbage containers using Esp32 and Oracle Apex.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 text-lg">
                Passionate about innovation and collaboration in the tech community.
                <br />
                <span className="text-purple-400 font-semibold">
                  Always excited to participate in the next big challenge!
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
