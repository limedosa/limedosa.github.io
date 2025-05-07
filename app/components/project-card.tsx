import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  githubLink?: string
  demoLink?: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, githubLink, demoLink, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-background to-background/80 backdrop-blur border-primary/20">
      <div className="relative aspect-video overflow-hidden group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-3 md:p-4 flex-grow">
        <h3 className="font-semibold text-base md:text-lg lg:text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-1 md:gap-2">
          {tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-primary/10 px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
          {tags.length > 5 && (
            <span className="inline-flex items-center rounded-md bg-primary/10 px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
              +{tags.length - 5} more
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-3 md:p-4 pt-0 flex justify-between mt-auto">
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-sm hover:underline hover:text-primary transition-colors duration-200 hover:scale-105"
          >
            <Github className="h-3 w-3 md:h-4 md:w-4 transition-transform duration-200 group-hover:rotate-12" />
            GitHub
          </Link>
        )}
        {demoLink && (
          <Link
            href={demoLink}
            target="_blank"
            className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-sm hover:underline hover:text-primary transition-colors duration-200 hover:scale-105"
          >
            <ExternalLink className="h-3 w-3 md:h-4 md:w-4 transition-transform duration-200 group-hover:rotate-12" />
            Live Demo
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
