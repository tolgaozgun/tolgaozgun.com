import SectionHead from '@/components/SectionHead';
import VolunteerCard from '@/components/card/VolunteerCard';
import { Group, Timeline, TimelineItem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import jsonData from './volunteer.json';

const VolunteerSection = () => {
  const tablet_match = useMediaQuery('(max-width: 768px)');
  const cards = jsonData.data.map((item, index) => {
    if (tablet_match) {
      return <VolunteerCard data={item} index={index} key={item.id} />;
    }
    return (
      <TimelineItem key={item.id}>
        <VolunteerCard data={item} index={index} key={item.id} />
      </TimelineItem>
    );
  });
  return (
    <section
      id="section-volunteer"
      style={{
        marginTop: tablet_match ? 50 : 0,
      }}
    >
      <SectionHead title="Volunteer" subtitle="My volunteer and community work" />

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

export default VolunteerSection;
