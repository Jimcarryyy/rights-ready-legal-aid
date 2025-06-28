
const PortfolioEducation = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      school: "University of Technology",
      year: "2020-2022",
      description: "Specialized in Software Engineering and AI",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "State University",
      year: "2016-2020",
      description: "Focus on Web Development and Database Systems",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Tech Academy",
      year: "2016",
      description: "Intensive program covering modern web technologies",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Education
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.school}
                    </p>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    {edu.year}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioEducation;
