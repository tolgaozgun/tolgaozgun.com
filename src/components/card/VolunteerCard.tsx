import { sendEvent } from '@/util/analytics';
import {
  Button,
  Group,
  List,
  ListItem,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  rem,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import {
  IconDeviceLaptop,
  IconDevices,
  IconEye,
  IconInfoCircle,
  IconSchool,
  IconSocial,
} from '@tabler/icons-react';
import { intervalToDuration } from 'date-fns';
import ImageWithSkeleton from '../ImageWithSkeleton';
import classes from './VolunteerCard.module.css';

interface WorkEduEntity {
  id: string;
  title: string;
  subtitle: string;
  githubLink?: string;
  projectLink?: string;
  description: Array<string>;
  period: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
  tag: string;
}

interface VolunteerCardProps {
  data: WorkEduEntity;
  index: number;
}

const VolunteerCard = (props: VolunteerCardProps) => {
  const { data, index } = props;
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const iconStyle = { width: rem(28), height: rem(28) };

  let new_end_date = new Date();

  if (data.end_date) {
    new_end_date = new Date(data.end_date);
  }

  const openWebsite = (projectLink: string) => {
    window.open(projectLink, '_blank');
    sendEvent('outbound', 'visit', projectLink, {
      redirect_purpose: 'project_link',
      redirect_item: data.title,
      redirect_type: '_blank',
      redirect_from: 'volunteer_card',
    });
  };

  const distance = intervalToDuration({
    start: new Date(data.start_date),
    end: new_end_date,
  });

  let distance_period = '';

  if (Number(distance.years) > 0 && Number(distance.months) > 0) {
    distance_period = `${distance.years} years ${distance.months} months`;
  } else if (Number(distance.months) === 0) {
    distance_period = `${distance.years} years`;
  } else {
    distance_period = `${distance.months} months`;
  }

  let icon = <IconInfoCircle style={iconStyle} stroke={1.5} />;

  if (data.tag === 'school') {
    icon = <IconSchool style={iconStyle} stroke={1.5} />;
  } else if (data.tag === 'device') {
    icon = <IconDevices style={iconStyle} stroke={1.5} />;
  } else if (data.tag === 'device-laptop') {
    icon = <IconDeviceLaptop style={iconStyle} stroke={1.5} />;
  } else if (data.tag === 'social') {
    icon = <IconSocial style={iconStyle} stroke={1.5} />;
  } else {
    icon = <ImageWithSkeleton src={data.tag} alt={data.title} sHeight={100} sWidth={100} />;
  }

  return (
    <Paper
      withBorder
      radius="md"
      className={data.is_active ? classes.card_line : classes.card_line_off}
      // data-aos="zoom-in"
      // data-aos-delay={100 * (index + 1)}
    >
      <Group>
        <ThemeIcon
          w={200}
          h={100}
          radius="md"
          color={colorScheme == 'dark' ? theme.colors.dark[7] : 'white'}
          // gradient={
          //   data.is_active
          //     ? { deg: 0, from: 'cyan', to: 'blue' }
          //     : { deg: 0, from: 'gray', to: '#0e0e0e' }
          // }
        >
          {icon}
        </ThemeIcon>
        <Text size="xl" fw={500} mt="md">
          {data.title}
        </Text>
      </Group>
      {data.projectLink ? (
        <Group mt="sm">
          {data.projectLink && (
            <Button
              variant="gradient"
              onClick={() => {
                openWebsite(data.projectLink!);
              }}
              onAuxClick={() => {
                openWebsite(data.projectLink!);
              }}
              leftSection={<IconEye />}
            >
              Show Project
            </Button>
          )}
        </Group>
      ) : null}

      <Stack gap={5}>
        <Text size="lg" fw={600} mt="md">
          {data.subtitle}
        </Text>

        <Group justify="space-between">
          <Text size="sm" fw={500} c="dimmed">
            {data.period}
          </Text>

          <Text size="sm" fw={500} c="dimmed">
            {distance_period}
          </Text>
        </Group>
      </Stack>

      <Text size="sm" mt="sm">
        {data.description && (
          <List>
            {data.description.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        )}
      </Text>
    </Paper>
  );
};

export default VolunteerCard;
