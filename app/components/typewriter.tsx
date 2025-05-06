"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  text: string | string[]
  delay?: number
  infinite?: boolean
  className?: string
}

export default function Typewriter({ text, delay = 100, infinite = false, className = "" }: TypewriterProps) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Handle array of strings
    const textArray = Array.isArray(text) ? text : [text]
    const currentString = textArray[currentArrayIndex]

    // If paused, wait before continuing
    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 1500)
      return () => clearTimeout(timeout)
    }

    // Handle typing and deleting
    if (!isDeleting && currentIndex < currentString.length) {
      // Typing
      timeout = setTimeout(() => {
        setCurrentText(currentString.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, delay)
    } else if (isDeleting && currentIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setCurrentText(currentString.substring(0, currentIndex - 1))
        setCurrentIndex(currentIndex - 1)
      }, delay / 2)
    } else if (currentIndex === 0 && isDeleting) {
      // Move to next string in array
      setIsDeleting(false)
      setCurrentArrayIndex((currentArrayIndex + 1) % textArray.length)
    } else if (currentIndex === currentString.length && !isDeleting && Array.isArray(text)) {
      // Pause at the end of typing before deleting
      setIsPaused(true)
    } else if (currentIndex === currentString.length && !isDeleting && !Array.isArray(text) && infinite) {
      // For single string with infinite loop
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 1500)
    }

    return () => clearTimeout(timeout)
  }, [text, delay, currentIndex, currentArrayIndex, isDeleting, isPaused, infinite])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}
