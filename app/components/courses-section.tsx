"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Course data organized by category
const courseData = [
  {
    category: "Computer Science",
    courses: [
      { code: "CS111", title: "Computer Programming & Problem Solving", institution: "Wellesley" },
      { code: "6.100L", title: "Introduction to CS and Programming using Python", institution: "MIT" },
      { code: "CS230", title: "Data Structures in Java", institution: "Wellesley" },
      { code: "6.009", title: "Fundamentals of Programming", institution: "MIT" },
    ],
  },
  {
    category: "Web Development",
    courses: [
      { code: "6.9620", title: "Web Lab", institution: "MIT" },
      { code: "6.S063", title: "Design for the Web: Languages and User Interfaces", institution: "MIT" },
      { code: "CS220", title: "Human Computer Interaction", institution: "Wellesley" },
    ],
  },
  {
    category: "Artificial Intelligence & Machine Learning",
    courses: [
      { code: "6.390", title: "Introduction to Machine Learning", institution: "MIT" },
      { code: "CS232", title: "Artificial Intelligence", institution: "Wellesley" },
      { code: "6.S191", title: "Introduction to Deep Learning", institution: "MIT" },
    ],
  },
  {
    category: "Data Science",
    courses: [{ code: "6.S079", title: "Software Systems for Data Science", institution: "MIT" }],
  },
]

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filteredCourses =
    activeCategory === "all" ? courseData : courseData.filter((category) => category.category === activeCategory)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <Button
          variant={activeCategory === "all" ? "default" : "outline"}
          onClick={() => setActiveCategory("all")}
          className={`text-xs md:text-sm transition-all duration-300 ${
            activeCategory === "all" ? "bg-gradient-to-r from-primary to-purple-500" : "hover:border-primary/50"
          }`}
        >
          All Courses
        </Button>
        {courseData.map((category) => (
          <Button
            key={category.category}
            variant={activeCategory === category.category ? "default" : "outline"}
            onClick={() => setActiveCategory(category.category)}
            className={`text-xs md:text-sm transition-all duration-300 ${
              activeCategory === category.category
                ? "bg-gradient-to-r from-primary to-purple-500"
                : "hover:border-primary/50"
            }`}
          >
            {category.category}
          </Button>
        ))}
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
        {filteredCourses.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="p-4 md:p-6 h-full bg-gradient-to-br from-background to-background/80 backdrop-blur border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.courses.map((course) => (
                  <li key={course.code} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                    <span className="text-xs md:text-sm font-semibold bg-primary/10 text-primary px-2 py-1 rounded-md inline-block min-w-[80px] text-center">
                      {course.code}
                    </span>
                    <span className="text-sm md:text-base flex-grow">{course.title}</span>
                    <span className="text-xs text-muted-foreground ml-auto">{course.institution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
