"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: {
      translate: {
        TranslateElement: {
          InlineLayout: {
            HORIZONTAL: string
          }
          new (options: { pageLanguage: string; layout: string }, elementId: string): void
        }
      }
    }
  }
}

export function GoogleTranslate() {
  useEffect(() => {
    // Create the translate element div
    const translateElement = document.createElement("div")
    translateElement.id = "google_translate_element"
    translateElement.className = "fixed bottom-4 left-4 z-50 bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow-lg"
    document.body.appendChild(translateElement)

    // Add the Google Translate script
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    document.body.appendChild(script)

    // Initialize the Google Translate Element
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        "google_translate_element",
      )
    }

    return () => {
      // Clean up
      const element = document.getElementById("google_translate_element")
      if (element) element.remove()

      const scripts = document.querySelectorAll('script[src*="translate.google.com"]')
      scripts.forEach((script) => script.remove())

      delete window.googleTranslateElementInit
    }
  }, [])

  return null
}
