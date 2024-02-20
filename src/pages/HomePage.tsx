import ExperienceSection from '@/components/sections/experience/ExperienceSection';
import ProjectsSection from '@/components/sections/projects/ProjectsSection';
import VolunteerSection from '@/components/sections/volunteer/VolunteerSection';
import { sendPageView } from '@/util/analytics';
import { useEffect } from 'react';
import Hero from '../components/hero/Hero';
import EducationSection from '../components/sections/education/EducationSection';

const HomePage = () => {
  useEffect(() => {
    sendPageView(location.pathname);
  }, [location]);

  return (
    <>
      <Hero />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <VolunteerSection />
    </>
  );
};

export default HomePage;
