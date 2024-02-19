import SectionHead from '@/components/SectionHead';
import ProjectCard from '@/components/card/ProjectCard';
import { Group, Timeline, TimelineItem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import jsonData from './projects.json';

const ProjectsSection = () => {
  const tablet_match = useMediaQuery('(max-width: 768px)');
  const cards = jsonData.data.map((item, index) => {
    if (tablet_match) {
      return <ProjectCard data={item} index={index} key={item.id} />;
    }
    return (
      <TimelineItem key={item.id}>
        <ProjectCard data={item} index={index} key={item.id} />
      </TimelineItem>
    );
  });
  return (
    <section id="section-projects">
      <SectionHead title="Projects" subtitle="My project portfolio" />

      {tablet_match ? (
        <Group pt="xl">{cards}</Group>
      ) : (
        <Timeline bulletSize={50} lineWidth={4} p={100} pl={200} pr={200}>
          {cards}
        </Timeline>
      )}
    </section>
  );
};

export default ProjectsSection;
