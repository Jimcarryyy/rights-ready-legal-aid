
import { Button } from '@/components/ui/button';

const PortfolioHero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              JP
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">John Portfolio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Full Stack Developer & UI/UX Designer passionate about creating beautiful, 
            functional digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
