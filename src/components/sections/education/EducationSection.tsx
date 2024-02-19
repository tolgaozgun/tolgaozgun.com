import SectionHead from '@/components/SectionHead';
import ItemCard from '@/components/card/ItemCard';
import { Group, Timeline, TimelineItem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import jsonData from './education.json';

const ExperienceSection = () => {
  const tablet_match = useMediaQuery('(max-width: 768px)');
  const cards = jsonData.data.map((item, index) => {
    if (tablet_match) {
      return <ItemCard data={item} index={index} key={item.id} />;
    }
    return (
      <TimelineItem key={item.id}>
        <ItemCard data={item} index={index} key={item.id} />
      </TimelineItem>
    );
  });
  return (
    <section id="section-education">
      <SectionHead title="Education" subtitle="My education history" />

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

export default ExperienceSection;
