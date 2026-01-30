const experiences = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Metso",
    logo: "/assets/images/metso-logo.png",
    location: "Cracow, Poland",
    period: "June 2024 - Present",
    description: [
      "Developing modern, responsive web applications using .NET and React",
      "Managing CI/CD pipelines with GitHub Actions",
      "Building scalable, distributed backend services with .NET Orleans",
      "Integrating a simulation engine with a digital twin platform",
      "Maintaining cloud infrastructure using Terraform and Azure",
      "Setting up, managing and improving handling of large volumes of time series data using ADX",
    ],
    technologies: [
      ".NET",
      "React",
      "Azure",
      "TypeScript",
      "Microsoft Orleans",
      "GitHub Actions",
      "Terraform",
      "Azure Data Explorer",
      "Kubernetes",
      "Helm",
      "PostgreSQL",
      "Git",
      "Docker",
      "HTML/CSS",
    ],
  },
  {
    id: 2,
    title: ".NET Developer",
    company: "Siemens Digital Industries Software",
    logo: "/assets/images/siemens-logo.png",
    location: "Katowice, Poland",
    period: "June 2022 - May 2024",
    description: [
      "Back-end API development using C# and .NET framework to meet business requirements",
      "Application of functional programming in C# to develop scalable solutions",
      "Working with images and containers",
      "Integrating external APIs",
      "Participation in a full lifecycle of a product development",
      "Managing and developing Gitlab CI/CD pipelines",
      "Using AWS for creating and managing cloud infrastructure, with Infrastructure as Code approach",
      "Responsible for compliance and service observability infrastructure",
    ],
    technologies: [
      ".NET Core",
      "Docker",
      "Git",
      "GitLab CI/CD",
      "AWS",
      "Terraform",
      "Functional programming (LangExt)",
    ],
  },
  {
    id: 3,
    title: "Software Developer",
    company: "Autocab Ltd",
    logo: "/assets/images/autocab-logo copy.png",
    location: "Stockport, United Kingdom",
    period: "April 2020 - May 2022",
    description: [
      "Working as a back-end developer maintaining ASP.NET and ASP.NET Core projects",
      "Developing web APIs and business logic for booking and dispatch systems",
      "Integrating APIs with front-end projects using Angular",
      "Developing standalone applications to process orders from various sources",
      "Creating public API and documentation",
    ],
    technologies: ["C#", "JavaScript", "HTML/CSS", "Git"],
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "CSI Media",
    logo: "/assets/images/csi.png",
    location: "Crewe, United Kingdom",
    period: "September 2019 - April 2020",
    description: [
      "Developing web applications in ASP.NET and ASP.NET Core",
      "Maintaining and extending microservices",
      "Working with MVC and MVVM architectural patterns, using various ORM frameworks, integrating front-end with the underlying back-end architecture",
      "Managing the databases",
    ],
    technologies: [
      "ASP.NET Core 2.1 - 3.0",
      "C#",
      "JavaScript",
      "HTML/CSS",
      "Git",
      "Entity Framework",
      "SQL Server",
    ],
  },
  {
    id: 5,
    title: "Support Consultant",
    company: "Tribal Group",
    logo: "/assets/images/tribal-logo.png",
    location: "Swansea, United Kingdom",
    period: "February 2019 - July 2019",
    description: [
      "Providing support to Dynamics 365 customers and the extended system",
      "Resolving software issues within time-pressured situations",
      "Debugging and code investigation",
      "Conducting software deployments to customers' sites",
      "Attending daily support and development stand-up meetings",
      "Database management",
      "Monitoring the support queue",
      "Configuring servers and data integration",
    ],
    technologies: [
      "C#",
      "JavaScript",
      "HTML/CSS",
      "Git",
      "Dynamics 365",
      "Customer Relationship Management (CRM)",
      "Customer Service",
      "SQL",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 py-20 px-8 lg:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 text-center mb-16">
        Work Experience
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="contents">
              {/* Left side (odd items) */}
              {index % 2 === 0 ? (
                <>
                  <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <div className="text-gray-400 font-medium">
                          {exp.company}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-yellow-500 font-semibold text-sm mb-4">
                      {exp.period}
                    </div>
                    <ul className="text-gray-300 mb-4 space-y-3">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-yellow-500 mt-1.5 text-xs">
                            ▹
                          </span>
                          <span className="flex-1 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-700 text-yellow-500 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full z-10 ${
                        exp.period.includes("Present")
                          ? "bg-red-500 animate-pulse"
                          : "bg-yellow-500"
                      }`}
                    ></div>
                    <div className="w-0.5 h-full bg-gray-700 flex-1"></div>
                  </div>

                  {/* Empty right side */}
                  <div className="hidden md:block"></div>
                </>
              ) : (
                <>
                  {/* Empty left side */}
                  <div className="hidden md:block"></div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full z-10 ${
                        exp.period.includes("Present")
                          ? "bg-red-500 animate-pulse"
                          : "bg-yellow-500"
                      }`}
                    ></div>
                    <div className="w-0.5 h-full bg-gray-700 flex-1"></div>
                  </div>

                  {/* Right side (even items) */}
                  <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <div className="text-gray-400 font-medium">
                          {exp.company}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-yellow-500 font-semibold text-sm mb-4">
                      {exp.period}
                    </div>
                    <ul className="text-gray-300 mb-4 space-y-3">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-yellow-500 mt-1.5 text-xs">
                            ▹
                          </span>
                          <span className="flex-1 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-700 text-yellow-500 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExperienceSection;
