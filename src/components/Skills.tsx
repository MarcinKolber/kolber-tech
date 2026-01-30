const skillCategories = [
  {
    id: 1,
    title: "Backend Development",
    icon: "/assets/images/backend.png",
    skills: [
      [".NET (Core)|2.1 - 10", "C#|7 - 14", "ASP.NET"],
      ["SQL Server", "PostgreSQL"],
      ["RESTful APIs", "gRPC", "WCF"],
      ["MVC", "Web API"],
      ["SignalR", "WebSockets"],
      ["Entity Framework", "Identity Framework"],
      ["Functional programming: LangExt"],
      ["Actor model: Microsoft Orleans"],
    ],
  },
  {
    id: 2,
    title: "Frontend Development",
    icon: "/assets/images/front-end.svg",
    skills: [
      ["React|18", "TypeScript|v5", "Redux"],
      ["JavaScript|ES6+"],
      ["HTML|5", "CSS|3"],
      ["Tailwind CSS|4", "Bootstrap|5", "Material-UI|7.3.5"],
    ],
  },
  {
    id: 3,
    title: "DevOps",
    icon: "/assets/images/devops-logo.png",
    skills: [
      ["Terraform"],
      ["GitHub Actions", "GitLab CI/CD"],
      ["SonarQube", "Harbor"],
    ],
  },
  {
    id: 4,
    title: "Tools & Technologies",
    icon: "/assets/images/tools.svg",
    skills: [["Visual Studio", "VS Code", "JetBrains Rider"], ["Git"]],
  },
  {
    id: 5,
    title: "Azure",
    icon: "/assets/images/azure_svg.png",
    skills: [
      [
        "Azure App Service",
        "Azure Functions",
        "Azure Virtual Machines (VM)",
        "Azure Kubernetes Service (AKS)",
      ],
      ["Azure Load Balancer / Application Gateway", "Azure Front Door"],
      ["Azure Storage", "Azure Database for PostgreSQL", "Azure Data Explorer"],
      ["Azure IoT Hub", "Event Grid", "Event Hubs"],
      ["Terraform"],
    ],
  },
  {
    id: 6,
    title: "Observability & Monitoring",
    icon: "/assets/images/chart.svg",
    skills: [
      ["Datadog", "Grafana"],
      ["OpenTelemetry", "Prometheus"],
      [
        "Tracing",
        "Logs",
        "Metrics",
        "Application Performance Monitoring (APM)",
      ],
    ],
  },
  {
    id: 7,
    title: "Containerization & Orchestration",
    icon: "/assets/images/docker.svg",
    skills: [["Docker"], ["Kubernetes"], ["Helm"]],
  },
  {
    id: 8,
    title: "Version control",
    icon: "/assets/images/git.svg",
    skills: [
      ["Git", "Git CLI"],
      ["GitHub", "GitLab", "Bitbucket"],
    ],
  },
  {
    id: 9,
    title: "Security & Compliance",
    icon: "/assets/images/security.svg",
    skills: [
      ["ISO Compliance"],
      [
        "Defence-in-depth",
        "Security through obscurity",
        "Least privilege principle",
      ],
    ],
  },
  {
    id: 10,
    title: "Methodologies & Documentation",
    icon: "/assets/images/methodologies.svg",
    skills: [
      ["Agile (Scrum & Kanban)", "TDD (Test-Driven Development)"],
      ["JIRA", "Confluence", "Agility"],
    ],
  },
  {
    id: 10,
    title: "Architecture and Design Patterns",
    icon: "/assets/images/architecture.svg",
    skills: [
      [
        "Domain-Driven Design (DDD)",
        "Microservices Architecture",
        "Event-Driven Architecture",
        "CQRS (Command Query Responsibility Segregation)",
        "Event Sourcing",
      ],
    ],
  },
  {
    id: 11,
    title: "Artificial Intelligence",
    icon: "/assets/images/artificial-intelligence-ai-icon.png",
    skills: [
      ["OpenCV", "Tessaract OCR"],
      ["Python|3.x"],
      ["ML.NET"],
      ["Copilot"],
    ],
  },
];

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 py-20 px-8 lg:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 text-center mb-16">
        Skills & Technologies
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={category.icon}
                    alt={`${category.title} icon`}
                    className={`w-full h-full object-contain p-3 ${
                      category.icon.endsWith(".svg")
                        ? "brightness-0 invert"
                        : ""
                    }`}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skillGroup, groupIndex) => (
                  <div key={groupIndex}>
                    <div className="space-y-2">
                      {skillGroup.map((skill) => {
                        const [name, version] = skill.split("|");
                        return (
                          <div
                            key={skill}
                            className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-500 hover:text-gray-900 transition-colors flex justify-between items-center"
                          >
                            <span>{name}</span>
                            {version && (
                              <span className="text-yellow-400 font-semibold text-xs bg-gray-600 px-2 py-1 rounded">
                                Version: {version}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {groupIndex < category.skills.length - 1 && (
                      <div className="border-t border-gray-600 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
