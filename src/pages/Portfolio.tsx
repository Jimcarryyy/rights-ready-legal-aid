
import { useState, useEffect } from 'react';
import PortfolioHeader from '@/components/portfolio/PortfolioHeader';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioAbout from '@/components/portfolio/PortfolioAbout';
import PortfolioEducation from '@/components/portfolio/PortfolioEducation';
import PortfolioProjects from '@/components/portfolio/PortfolioProjects';
import PortfolioSkills from '@/components/portfolio/PortfolioSkills';
import PortfolioContact from '@/components/portfolio/PortfolioContact';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <PortfolioHeader darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioEducation />
        <PortfolioProjects />
        <PortfolioSkills />
        <PortfolioContact />
      </main>
    </div>
  );
};

export default Portfolio;
