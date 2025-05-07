"use client"

import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function GithubStats() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [statTheme, setStatTheme] = useState("catppuccin_latte")

  useEffect(() => {
    setMounted(true)
    setStatTheme(theme === "dark" ? "radical" : "catppuccin_latte")
  }, [theme])

  if (!mounted) {
    return (
      <div className="flex flex-col items-center gap-4 md:gap-6">
        <Card className="p-2 md:p-4 w-full max-w-2xl h-24 md:h-32 animate-pulse bg-muted"></Card>
        <Card className="p-2 md:p-4 w-full max-w-2xl h-64 md:h-80 animate-pulse bg-muted"></Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-4 md:gap-6">
      <Card className="p-2 md:p-4 w-full max-w-2xl overflow-hidden">
        <iframe
          src={`https://github-readme-stats.vercel.app/api?username=limedosa&show_icons=true&locale=en&theme=${statTheme}&hide=stars,prs,issues,contribs&hide_rank=true&border_radius=19`}
          className="w-full h-24 md:h-32 border-none"
          title="GitHub Stats"
          loading="lazy"
        />
      </Card>

      <Card className="p-2 md:p-4 w-full max-w-2xl overflow-hidden">
        <iframe
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=limedosa&show_icons=true&locale=en&langs_count=8&layout=donut&theme=${statTheme}&size_weight=0.5&count_weight=0.5&border_radius=19`}
          className="w-full h-64 md:h-80 border-none"
          title="GitHub Language Stats"
          loading="lazy"
        />
      </Card>
    </div>
  )
}
