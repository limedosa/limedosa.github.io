import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/app/components/contact-form"
import ProjectCard from "@/app/components/project-card"
import TechStack from "@/app/components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import GithubStats from "@/app/components/github-stats"
import { MobileNav } from "@/components/mobile-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import HeroSection from "@/app/components/hero-section"
import CoursesSection from "@/app/components/courses-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <MobileNav />
          <div className="mr-4 md:flex hidden">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold">Linda.dev</span>
            </Link>
            <nav className="flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-all duration-200 hover:text-primary hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="transition-all duration-200 hover:text-primary hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="transition-all duration-200 hover:text-primary hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                Projects
              </Link>
              <Link
                href="#courses"
                className="transition-all duration-200 hover:text-primary hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                Courses
              </Link>
              <Link
                href="#skills"
                className="transition-all duration-200 hover:text-primary hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="transition-all duration-200 hover:text-primary hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="md:hidden flex items-center">
            <Link href="/" className="font-bold text-sm">
              Linda.dev
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Link href="/resume">
              <Button variant="outline" size="sm" className="h-8 md:h-10">
                <FileText className="h-3 w-3 md:h-4 md:w-4 md:mr-2" />
                <span className="hidden md:inline">Resume</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <HeroSection />

      <main className="container px-4 md:px-6">
        <section id="about" className="py-8 md:py-12 lg:py-24">
          <div className="container px-0 md:px-6">
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
                  <Image src="/images/profile.png" alt="Linda Dominguez" fill className="object-cover" priority />
                </div>
                <h1 className="text-xl md:text-2xl font-bold">Linda Dominguez</h1>
                <p className="text-primary font-medium">AI Engineer @ Jefferies Group LLC <br></br>(via Widenet AI)</p>
                <p className="text-muted-foreground mt-2">dlinda@mit.edu</p>

                <div className="flex space-x-4 mt-4">
                  <Link href="https://github.com/limedosa" target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 md:h-10 md:w-10 transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-primary/10"
                    >
                      <Github className="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/linda-dominguez/" target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 md:h-10 md:w-10 transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-primary/10"
                    >
                      <Linkedin className="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:dlinda@mit.edu">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 md:h-10 md:w-10 transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-primary/10"
                    >
                      <Mail className="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 w-full">
                  <Link href="/resume.pdf" target="_blank">
                    <Button className="w-full text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-md bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90">
                      <Download className="mr-2 h-3 w-3 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-y-1" />
                      View Resume
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  My Journey
                </h2>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground">
                  <p>
                    I'm a recent graduate from Wellesley College and cross-registered student at Massachusetts Institute
                    of Technology (MIT), where I studied Computer Science, Machine Learning, Data Science and Psychology
                    related topics.
                  </p>
                  <p>
                    Currently, I'm an AI Engineer at Jefferies Group LLC, where I'm partnering with the CTO and
                    engineering team to design and develop document extraction systems. I'm leveraging my skills in
                    TypeScript, React, and machine learning to build robust UI and backend components while optimizing
                    system performance and automating document processing workflows.
                  </p>
                  <p className="font-semibold text-foreground">
                    I'm actively seeking AI engineering opportunities in the fintech sector, where I can apply my
                    expertise in machine learning, data science, and software development to create innovative solutions
                    for complex financial challenges.
                  </p>
                  <p>
                    I embarked on my computer science journey when I discovered my unwavering passion for the
                    ever-growing field. The challenges presented through problem-solving exercises ignited my critical
                    thinking skills and affirmed my devotion to computer science. As I delved deeper into the subject,
                    my enthusiasm grew, allowing me to apply my knowledge to real-world problems and craft innovative
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="github-stats" className="py-8 md:py-12 lg:py-24">
          <div className="container px-0 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              GitHub Stats
            </h2>
            <GithubStats />
          </div>
        </section>

        <section id="experience" className="py-8 md:py-12 lg:py-24">
          <div className="container px-0 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Experience
            </h2>
            <div className="space-y-8 md:space-y-10 max-w-3xl mx-auto">
              <div className="border-l-2 border-primary pl-4 md:pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-lg md:text-xl font-bold">AI Engineer</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">Current</p>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">Jefferies Group LLC (via Widenet AI)</p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-xs md:text-sm">
                  <li>
                    Partnered with Jefferies' CTO and engineering team to design and develop a document extraction
                    system
                  </li>
                  <li>Conducted tests to evaluate optimal approach for data input</li>
                  <li>Built UI and backend components using TypeScript and React</li>
                  <li>Diagnosed system issues, optimized performance, and automated document processing</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 md:pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-lg md:text-xl font-bold">Data Scientist</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">July 2024 - Dec 2024</p>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">Fusion Alpha AI</p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-xs md:text-sm">
                  <li>Developed and optimized LSTM models to enhance ticker(stock) buy/sell signals</li>
                  <li>Created and upkept data pipelines using AWS, MongoDB, and S3</li>
                  <li>Automated data collection from various APIs and performed feature extraction</li>
                  <li>Developed React-based system to automate email management using Gmail APIs</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 md:pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-lg md:text-xl font-bold">Machine Learning Engineer Intern</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">Sep 2023 - Dec 2023</p>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">Biointerphase</p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-xs md:text-sm">
                  <li>Built random forest & NLP to predict bat population decline (97% accuracy)</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 md:pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-lg md:text-xl font-bold">Fellowship</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">June 2023 - April 2024</p>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">Breakthrough Tech AI @ MIT</p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-xs md:text-sm">
                  <li>Received hands-on training in machine learning algorithms</li>
                  <li>Earned ML Foundations certification</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-8 md:py-12 lg:py-24">
          <div className="container px-0 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Projects
            </h2>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Prediction Bet – UFC Fight Tracker"
                description="A full-stack web application that predicts UFC fight outcomes by combining real-time betting odds with sentiment analysis from Twitter and Reddit. Uses machine learning to flag mismatches between public sentiment and market odds."
                image="/placeholder.svg?height=400&width=600&text=UFC+Fight+Predictions"
                githubLink="https://github.com/limedosa/predictbet"
                tags={["React", "FastAPI", "MongoDB", "Python", "VADER", "Hugging Face", "Snscrape"]}
              />
              <ProjectCard
                title="Low-cost Ensemble Training Framework"
                description="Developed a low-cost ensemble framework for CIFAR-10, using pruning, BatchEnsemble, and distillation to reduce training time and memory usage while maintaining high accuracy."
                image="/placeholder.svg?height=400&width=600&text=Ensemble+ML+Framework"
                githubLink="https://github.com/limedosa/ensemble-training"
                tags={["PyTorch", "CIFAR-10", "Ensemble Learning", "Model Pruning", "Distillation"]}
              />
              <ProjectCard
                title="Sentiment Analysis on Cryptocurrency"
                description="Developed LSTM & GRU models for Bitcoin price prediction using tweet sentiment & historical data. Used Alpaca API & NLTK for data extraction and sentiment analysis."
                image="/placeholder.svg?height=400&width=600&text=Crypto+Sentiment+Analysis"
                githubLink="https://github.com/limedosa/Crypto-Sentiment"
                tags={["LSTM", "GRU", "NLP", "Alpaca API", "NLTK", "Time Series"]}
              />
              <ProjectCard
                title="NY Botanical Gardens Classification"
                description="Built a multicategorical ResNet101V2 model to categorize 120,000+ images belonging to 10 classes of plant & animal specimen, with 97% accuracy. Ranked top 15 out of 75+ national teams."
                image="/placeholder.svg?height=400&width=600&text=Plant+Classification"
                githubLink="https://github.com/limedosa/New-York-Botanical-Gardens-Image-Classification/blob/main/NYBG_Image_Classification.ipynb"
                tags={["ResNet101V2", "TensorFlow", "Keras", "Numpy", "Image Classification"]}
              />
              <ProjectCard
                title="HealthAssess: AI Health Tool"
                description="Developed web-based AI health assessment tool using live heart rate data, integrating GPT-4 API for real-time analysis & prediction. Designed for MakeHarvard 2024 AI competition."
                image="/placeholder.svg?height=400&width=600&text=Health+Assessment+Tool"
                githubLink="https://github.com/limedosa/Health-Assess-MakeHavard24"
                tags={["Flask", "GPT-4 API", "Healthcare", "Python", "Web Development"]}
              />
              <ProjectCard
                title="Bat Population Predictive Model"
                description="Found, standardized, and merged 3 bat population datasets. Built random forest & NLP to predict bat population decline (97% accuracy) using timestamp & geolocation data."
                image="/placeholder.svg?height=400&width=600&text=Bat+Population+Analysis"
                githubLink="https://github.com/limedosa/Bat-Population-Decline/blob/main/Bat%20Population%20Decline.ipynb"
                tags={["Random Forest", "NLP", "Tokenizer", "Geographical Data", "Binary Classification"]}
              />
              <ProjectCard
                title="Cryptocurrency Price Prediction"
                description="Trained multiple classification models (SGD, XGBoost, Random Forest, SVM, KNN) to predict cryptocurrency types, achieving up to 99.51% accuracy."
                image="/placeholder.svg?height=400&width=600&text=Crypto+Price+Prediction"
                githubLink="https://github.com/limedosa/Cryptocurrency-Price-Prediction/blob/main/Cryptocurrency_Price_Prediction.ipynb"
                tags={["Alpaca API", "SGD", "Random Forest", "XGBClassifier", "Scikit-learn"]}
              />
              <ProjectCard
                title="Cleaning Website Contract"
                description="Hired to create a cleaning website for a cleaning company in Manhattan. Helped business grow and gain customers."
                image="/placeholder.svg?height=400&width=600&text=Cleaning+Service+Website"
                demoLink="https://wendys-cleaning.glitch.me/index.html"
                tags={["Bootstrap", "JavaScript", "HTML/CSS", "Web Development"]}
              />
            </div>
          </div>
        </section>

        <section id="courses" className="py-8 md:py-12 lg:py-24">
          <div className="container px-0 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Courses
            </h2>
            <CoursesSection />
          </div>
        </section>

        <section id="skills" className="py-8 md:py-12 lg:py-24">
          <div className="container px-0 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Skills
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="education" className="py-8 md:py-12 lg:py-24">
          <div className="container px-0 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Education
            </h2>
            <div className="space-y-8 md:space-y-10 max-w-3xl mx-auto">
              <div className="border-l-2 border-primary pl-4 md:pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-lg md:text-xl font-bold">Wellesley College</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">Sep 2020 - May 2024</p>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">B.A. in Psychology</p>
                <p className="mt-2 text-xs md:text-sm">
                  Focused on the intersection of psychology and computer science, with coursework in data analysis and
                  human-computer interaction.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4 md:pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-lg md:text-xl font-bold">Massachusetts Institute of Technology (MIT)</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">Sep 2022 - May 2024</p>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                  Cross-registered in Computer Science, Machine Learning, Data Science
                </p>
                <p className="mt-2 text-xs md:text-sm">
                  Specialized in advanced computer science topics, with a focus on machine learning, artificial
                  intelligence, and software development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-8 md:py-12 lg:py-24">
          <div className="container px-0 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-4 md:py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Linda Dominguez. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
