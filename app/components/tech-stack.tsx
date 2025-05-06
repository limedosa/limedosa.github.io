import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "Java", "HTML/CSS", "R", "TypeScript", "JavaScript"],
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "TensorFlow",
      "Keras",
      "LSTM",
      "GRU",
      "ResNet",
      "Random Forest",
      "NLP",
      "Computer Vision",
      "XGBoost",
      "SGD",
      "Artificial Intelligence",
    ],
  },
  {
    category: "Data Science",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Pipeline Development",
      "Feature Engineering",
      "Time Series Analysis",
      "API Integration",
      "Scikit-learn",
      "Jupyter Notebook",
      "Excel",
    ],
  },
  {
    category: "Web Development & Tools",
    skills: [
      "React",
      "Vue.js",
      "Flask",
      "Bootstrap",
      "Tailwind CSS",
      "JSON",
      "RESTful APIs",
      "Figma",
      "Git",
      "MongoDB",
      "Linux",
      "Object Oriented Programming",
      "Test Driven Development",
      "Algorithms",
    ],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-3 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2">
      {technologies.map((tech) => (
        <Card
          key={tech.category}
          className="p-3 md:p-4 lg:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
