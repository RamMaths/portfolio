"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProjectCard from "@/components/project-card"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: "ERP System for EWS company",
    description:
      "I lived the entire Software Lifecycle with this project as a freelancer. I was responsible of building the backend, creating the dev environment, building the deployment pipeline, and designing the cloud architecture. Full ERP Ecosystem going from the creation of the project, to inventory, billing, ready to send emails to users using AWS SES, adapted to customer needs",
    technologies: ["Rust", "PostgreSQL", "AWS EC2", "AWS RDS", "AWS S3", "AWS SES", "AWS Cloud Formation", "Hexagonal Architecture"],
  },
  {
    id: 2,
    title: "AWS Community Day 2025 Ecosystem",
    description: "Serverless solution for the AWS Community Day event, from badge printing, to Agenda management all this managed with AWS CDK",
    technologies: ["typescript", "Node", "React", "GraphQL","AWS Lambda", "AWS DynamoDB", "AWS AppSync", "AWS S3", "AWS SQS"],
    githubUrl: "https://github.com/awscommunitymx/builders_apps",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "My portfolio website built with next.js, deployed to AWS using terraform and AWS official provider. Automated with github actions workflow to deliver the latest version to production when a merge to the main branch occurs.",
    technologies: ["Typescript", "Next.js", "Terraform", "AWS S3", "AWS Cloud Front", "AWS Route 53", "Github Actions"],
    githubUrl: "git@github.com:RamMaths/portfolio.git",
  },
  {
    id: 4,
    title: "Harajuku",
    description:
      "This is a cloud native backend application built with go lang, it manages users, quotes and appointments ready to send emails to users using AWS SES, also with a cache layer for efficient responses. Built with hexagonal architecture we use PostgreSQL, Redis, AWS S3 Sdk, and AWS SES in the adapters layer.",
    technologies: ["Go", "Gin", "PostgreSQL", "Docker", "Redis", "AWS S3"],
    githubUrl: "https://github.com/RamMaths/harajuku",
  },
  {
    id: 5,
    title: "Email Newsletter",
    description:
      "Cloud native application to send emails to blog subscribers when a new post is made using Mailtrap",
    technologies: ["Rust", "PostgreSQL", "Actix-Web", "DigitalOcean", "Mailtrap"],
    githubUrl: "https://github.com/RamMaths/email_newsletter",
  },
  {
    id: 6,
    title: "Esp32 + AWS Iot Core Example",
    description:
      "Example to create firmware for an esp32 to create a TCP socket and send information over MQTT protocol establishing an SSL connection to AWS Iot Core broker",
    technologies: ["Rust", "Esp32", "AWS Iot Core", "AWS Lambda"],
    githubUrl: "https://github.com/RamMaths/esp32-aws-iot-core-example",
  },
]

export default function Projects() {
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

      // Cards stagger animation
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
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
          className="text-5xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Projects
        </h1>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
