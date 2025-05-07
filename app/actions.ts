"use server"

import { z } from "zod"

// Email validation schema
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    })

    // Here you would typically send an email to dlinda@mit.edu
    // For example, using a service like SendGrid, Mailgun, or AWS SES
    console.log("Form submission to dlinda@mit.edu:", validatedData)

    // For demonstration purposes, we'll simulate a successful email send
    // In a real application, you would integrate with an email service
    // For example:
    // await sendEmail({
    //   to: "dlinda@mit.edu",
    //   subject: `Portfolio Contact: ${validatedData.name}`,
    //   text: `From: ${validatedData.name} (${validatedData.email})\n\n${validatedData.message}`,
    // });

    // Simulate sending email with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      message: "Thanks for your message! I'll get back to you soon.",
      success: true,
    }
  } catch (error) {
    console.error("Form validation error:", error)

    if (error instanceof z.ZodError) {
      return {
        message: "Please check your form inputs and try again.",
        success: false,
        errors: error.errors,
      }
    }

    return {
      message: "Something went wrong. Please try again or contact me directly at dlinda@mit.edu.",
      success: false,
    }
  }
}
