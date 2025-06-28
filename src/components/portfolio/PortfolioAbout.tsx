
const PortfolioAbout = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-6xl font-bold">
                JP
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Passionate Developer & Designer
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm a dedicated full-stack developer with a passion for creating 
                exceptional digital experiences. With expertise in modern web technologies, 
                I love bringing ideas to life through clean code and thoughtful design.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying the great outdoors.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mission</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    To create meaningful digital solutions that make a positive impact
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Values</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Innovation, Quality, Collaboration, Continuous Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAbout;
