"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link
            href="/"
            className="flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:text-primary group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="font-medium text-sm md:text-base">Back to Home</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Link href="/resume.pdf" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="h-8 md:h-10 transition-all duration-200 hover:scale-105 hover:shadow-sm hover:border-primary group"
              >
                <Download className="h-3 w-3 md:h-4 md:w-4 md:mr-2 transition-transform duration-200 group-hover:translate-y-1" />
                <span className="hidden md:inline">Download PDF</span>
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="h-8 md:h-10" onClick={() => window.print()}>
              <FileText className="h-3 w-3 md:h-4 md:w-4 md:mr-2" />
              <span className="hidden md:inline">Print</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6 md:py-8 px-4 md:px-6 max-w-4xl mx-auto">
        <Card className="p-4 md:p-8 print:shadow-none print:border-none">
          <div className="space-y-6 md:space-y-8 print:space-y-6">
            {/* Header */}
            <div className="text-center border-b pb-4 print:pb-2">
              <h1 className="text-2xl md:text-3xl font-bold">Linda Dominguez</h1>
              <p className="text-muted-foreground mt-1 text-sm md:text-base">
                (201) 496-1973 | dlinda@mit.edu | New York, NY 10028
              </p>
              <div className="flex justify-center gap-4 mt-2">
                <Link
                  href="https://www.linkedin.com/in/linda-dominguez/"
                  className="text-xs md:text-sm text-primary hover:underline"
                >
                  LinkedIn
                </Link>
                <Link href="/" className="text-xs md:text-sm text-primary hover:underline">
                  Personal Website
                </Link>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-3">Education</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <h3 className="font-semibold text-sm md:text-base">Wellesley College</h3>
                    <span className="text-xs md:text-sm">Wellesley, MA</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <p className="text-xs md:text-sm italic">B.A. in Psychology</p>
                    <span className="text-xs md:text-sm">Sep. 2020 – May 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm mt-1">
                    <li>Relevant Courses: Data Structures, Computer Programming & Problem Solving, Stats, Java OOP</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <h3 className="font-semibold text-sm md:text-base">Massachusetts Institute of Technology (MIT)</h3>
                    <span className="text-xs md:text-sm">Cambridge, MA</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <p className="text-xs md:text-sm italic">
                      Cross-registered in Computer Science, Machine Learning, Data Science
                    </p>
                    <span className="text-xs md:text-sm">Sep. 2022 – May 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm mt-1">
                    <li>
                      Relevant Courses: Intro CS, Programming Fundamentals, Deep Learning, WebLab, Machine Learning,
                      Software Systems for Data Science, Web Design
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-3">Experience</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <h3 className="font-semibold text-sm md:text-base">
                      AI Engineer, Jefferies Group LLC (via Widenet AI)
                    </h3>
                    <span className="text-xs md:text-sm">New York Metro</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <span className="text-xs md:text-sm"></span>
                    <span className="text-xs md:text-sm">Current</span>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm mt-1">
                    <li>
                      Partnered with Jefferies' CTO and engineering team to design and develop a document extraction
                      system, reducing manual processing time and improving data accuracy.
                    </li>
                    <li>
                      Conducted tests to evaluate optimal approach for data input, comparing OCR, direct file input to
                      model, or both.
                    </li>
                    <li>Built UI and backend components using TypeScript and React, delivering seamless UX.</li>
                    <li>
                      Diagnosed system issues, optimized performance, and automated document processing & data
                      validation.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <h3 className="font-semibold text-sm md:text-base">Data Scientist, Fusion Alpha AI</h3>
                    <span className="text-xs md:text-sm">New York, NY</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <span className="text-xs md:text-sm"></span>
                    <span className="text-xs md:text-sm">July 2024 — Dec. 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm mt-1">
                    <li>
                      Developed and optimized LSTM models to enhance ticker(stock) buy/sell signals, improving accuracy
                      by 5%.
                    </li>
                    <li>
                      Created and upkept data pipelines using AWS, MongoDB, and S3 to source, process, and store data.
                    </li>
                    <li>
                      Automated data collection from various APIs and performed feature extraction for thematic
                      analysis, informing targeted outreach strategies and improving CRM automation.
                    </li>
                    <li>
                      Used MongoDB database for storing historical data and conducting analytics on large datasets.
                    </li>
                    <li>
                      Developed and improved React-based system to automate email management using Gmail APIs, boosting
                      operational efficiency by 30%.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <h3 className="font-semibold text-sm md:text-base">
                      Machine Learning Engineer Intern, Biointerphase
                    </h3>
                    <span className="text-xs md:text-sm">Remote</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <span className="text-xs md:text-sm"></span>
                    <span className="text-xs md:text-sm">Sep. 2023 — Dec. 2023</span>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm mt-1">
                    <li>
                      Built random forest & NLP to predict bat population decline(97% accuracy) using timestamp &
                      geolocation data.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <h3 className="font-semibold text-sm md:text-base">Fellowship, Breakthrough Tech AI @ MIT</h3>
                    <span className="text-xs md:text-sm">Cambridge, MA</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <span className="text-xs md:text-sm"></span>
                    <span className="text-xs md:text-sm">June 2023 — April 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm mt-1">
                    <li>
                      Received hands-on training in machine learning algorithms; earned ML Foundations certification.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-3">Projects</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <h3 className="font-semibold text-sm md:text-base">Low-cost Ensemble Training Framework</h3>
                    <span className="text-xs md:text-sm">In Progress</span>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm mt-1">
                    <li>
                      Developed a low-cost ensemble framework for CIFAR-10, using pruning, BatchEnsemble, and
                      distillation to reduce training time and memory usage.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <h3 className="font-semibold text-sm md:text-base">
                      Sentiment Analysis on Cryptocurrency Patterns
                    </h3>
                    <span className="text-xs md:text-sm">Feb. 2024 – May 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm mt-1">
                    <li>
                      Developed LSTM & GRU models for Bitcoin price prediction using tweet sentiment & historical data.
                    </li>
                    <li>
                      Used Alpaca API & NLTK for data extraction and sentiment analysis, boosting prediction accuracy.
                    </li>
                    <li>Architected data pipelines to automate real-time data collection and preprocessing.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <h3 className="font-semibold text-sm md:text-base">
                      New York Botanical Gardens Image Classification
                    </h3>
                    <span className="text-xs md:text-sm">Jan. 2024 – April 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm mt-1">
                    <li>
                      Developed a ResNet101V2-based model to classify 120,000+ plant and animal specimen images across
                      10 categories with 97% accuracy.
                    </li>
                    <li>
                      Optimized the data pipeline for preprocessing images using TensorFlow and Numpy, reducing training
                      time by 25%.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <h3 className="font-semibold text-sm md:text-base">HealthAssess: Web-based AI Health Tool</h3>
                    <span className="text-xs md:text-sm">Feb. 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm mt-1">
                    <li>
                      Flask health assessment tool using live heart rate data, integrating GPT-4 API for real-time
                      analysis & prediction.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-3">Skills</h2>
              <ul className="list-none text-xs md:text-sm">
                <li>
                  <span className="font-semibold">Programming Languages:</span> Python, SQL, Java, HTML/CSS, R
                </li>
                <li>
                  <span className="font-semibold">Tools:</span> MongoDB, Pandas, TensorFlow, Numpy, Flask, AWS S3,
                  FastAPI
                </li>
                <li>AWS S3, FastAPI</li>
                <li>
                  <span className="font-semibold">Data Science Skills:</span> Data Pipeline Development, Feature
                  Engineering, Data Warehousing, AI Use Cases, Reporting Practices, Time Series Analysis, Excel, API
                  integration
                </li>
              </ul>
            </div>

            {/* Leadership & Awards */}
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-3">Leadership & Awards</h2>
              <ul className="list-none text-xs md:text-sm space-y-1">
                <li>Camellia Student Leadership Award, awarded by Wellesley College (May 2023)</li>
                <li>Wellesley College Honor Code Council Deputy Chief Justice (Sep. 2022 – May 2023)</li>
                <li>OTHER: MIT SHPE, Wellesley Engineering Society, Wellesley CS Club</li>
              </ul>
            </div>
          </div>
        </Card>
      </main>

      <ScrollToTop />
    </div>
  )
}
