import { Text, Title } from '@mantine/core';
import classes from './SectionHead.module.css';

interface SectionHeadProps {
  title: string;
  subtitle: string;
}

export default function SectionHead(props: SectionHeadProps) {
  const { title, subtitle } = props;

  return (
    <>
      <Title data-aos="fade-up" className={classes.title}>
        {title}
      </Title>

      <Text data-aos="fade-up" size="lg" c="dimmed" className={classes.subtitle}>
        {subtitle}
      </Text>
    </>
  );
}
