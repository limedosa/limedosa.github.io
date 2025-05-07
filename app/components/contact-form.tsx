"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { z } from "zod"
import confetti from "canvas-confetti"
import { Mail, Send } from "lucide-react"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    setErrors({})
    setSuccess(false)

    try {
      // Validate form data
      formSchema.parse(formData)

      // Show success message and trigger confetti
      setMessage("Form submitted successfully! I'll get back to you soon.")
      setSuccess(true)

      // Trigger confetti effect
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      } catch (error) {
        console.error("Confetti error:", error)
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message
          }
        })
        setErrors(fieldErrors)
        setMessage("Please fix the errors in the form.")
      } else {
        setMessage("Something went wrong. Please email me directly at dlinda@mit.edu.")
      }
    } finally {
      setPending(false)
    }
  }

  // Function to safely open email client
  const openEmailClient = () => {
    try {
      const subject = `Portfolio Contact from ${formData.name}`
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`

      // Create the mailto link
      const mailtoLink = `mailto:dlinda@mit.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Open in a new window to avoid navigation issues
      window.open(mailtoLink, "_blank")
    } catch (error) {
      console.error("Error opening email client:", error)
      alert("Could not open email client. Please email dlinda@mit.edu directly.")
    }
  }

  return (
    <Card className="p-3 md:p-6 transition-all duration-300 hover:shadow-md bg-gradient-to-br from-background to-background/80 backdrop-blur border-primary/20">
      {success ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 dark:from-green-500 dark:to-emerald-700 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/20 dark:shadow-green-700/20">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Message Received!
          </h3>
          <p className="text-muted-foreground mb-6">{message}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={openEmailClient}
              className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Email Me Directly
            </Button>
            <Button onClick={() => setSuccess(false)} variant="outline" className="mt-2 sm:mt-0">
              Back to Form
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-1 md:mb-2">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="text-sm transition-all duration-200 focus:scale-[1.02] hover:border-primary/50 bg-background/50 backdrop-blur"
            />
            {errors.name && <p className="text-xs md:text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-1 md:mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="text-sm transition-all duration-200 focus:scale-[1.02] hover:border-primary/50 bg-background/50 backdrop-blur"
            />
            {errors.email && <p className="text-xs md:text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-1 md:mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="text-sm min-h-[120px] transition-all duration-200 focus:scale-[1.02] hover:border-primary/50 bg-background/50 backdrop-blur"
            />
            {errors.message && <p className="text-xs md:text-sm text-red-500 mt-1">{errors.message}</p>}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              className="w-full text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-md bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 flex items-center justify-center gap-2"
              disabled={pending}
            >
              {pending ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
            <Button type="button" variant="outline" onClick={openEmailClient} className="w-full text-sm md:text-base">
              <Mail className="h-4 w-4 mr-2" />
              Email Directly
            </Button>
          </div>
          {message && !success && (
            <p
              className={`text-xs md:text-sm text-center mt-2 md:mt-4 ${
                message.includes("fix") || message.includes("wrong") ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      )}
    </Card>
  )
}
