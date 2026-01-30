const education = [
  {
    id: 1,
    degree: "Master of Science (MSc)",
    field: "Advanced Computer Science",
    institution: "University of Manchester",
    logo: "/assets/images/manchester1.png",
    location: "Manchester, United Kingdom",
    period: "2019 - 2020",
    grade: "Distinction",
    description:
      "Focused on advanced topics in software engineering, cloud computing, web applications, data storage and distributed systems.",
    thesis: "On-demand IoT workflow creation using Natural Language Processing",
  },
  {
    id: 2,
    degree: "Bachelor of Science (BSc)",
    field: "Software Engineering",
    institution: "Swansea University",
    logo: "/assets/images/swansea.png",
    location: "Swansea, United Kingdom",
    period: "2016 - 2019",
    grade: "First Class Honours",
    description:
      "Comprehensive study of computer science fundamentals including algorithms, data structures, software development, and database management systems.",
    thesis: "Intelligent Camera Scanner (OpenCV)",
  },
];

const Education = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 py-20 px-8 lg:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 text-center mb-16">
        Education
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu) => (
              <div key={edu.id} className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-yellow-500 rounded-full border-4 border-gray-950 z-10"></div>

                {/* Education Card */}
                <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    {/* University Logo */}
                    <div className="w-32 h-32 bg-zinc-200 rounded-lg flex items-center justify-center overflow-hidden shrink-0 mx-auto md:mx-0">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    {/* Education Details */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {edu.degree}
                          </h3>
                          <div className="text-xl text-gray-300 font-medium mb-2">
                            {edu.field}
                          </div>
                          <div className="text-gray-400 font-medium">
                            {edu.institution}
                          </div>
                          <div className="text-gray-500 text-sm">
                            {edu.location}
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:text-right">
                          <div className="text-yellow-500 font-semibold mb-2">
                            {edu.period}
                          </div>
                          <div className="inline-block bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                            {edu.grade}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                  {edu.thesis && (
                    <div className="pt-4 border-t border-gray-700">
                      <div className="text-gray-400 text-sm font-medium mb-1">
                        Thesis/Dissertation:
                      </div>
                      <div className="text-yellow-500 font-medium italic">
                        {edu.thesis}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
