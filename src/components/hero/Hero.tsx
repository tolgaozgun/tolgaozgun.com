import {
  ACADEMIC_RESUME_URL,
  EMAIL_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PROFESSIONAL_RESUME_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from '@/constants';
import { sendEvent } from '@/util/analytics';
import {
  ActionIcon,
  Button,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
  rem,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from '@tabler/icons-react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import Dots from '../Dots';
import classes from './Hero.module.css';

const Hero = () => {
  const openAcademicResume = () => {
    window.open(ACADEMIC_RESUME_URL, '_blank');
    sendEvent('outbound', 'visit', ACADEMIC_RESUME_URL, {
      redirect_purpose: 'academic_resume',
      redirect_type: '_blank',
      redirect_from: 'hero',
    });
  };

  const openProfessionalResume = () => {
    window.open(PROFESSIONAL_RESUME_URL, '_blank');
    sendEvent('outbound', 'visit', PROFESSIONAL_RESUME_URL, {
      redirect_purpose: 'professional_resume',
      redirect_type: '_blank',
      redirect_from: 'hero',
    });
  };

  const openInstagram = () => {
    window.open(INSTAGRAM_URL, '_blank');
    sendEvent('outbound', 'visit', INSTAGRAM_URL, {
      redirect_purpose: 'instagram',
      redirect_type: '_blank',
      redirect_from: 'hero',
    });
  };

  const openTwitter = () => {
    window.open(TWITTER_URL, '_blank');
    sendEvent('outbound', 'visit', TWITTER_URL, {
      redirect_purpose: 'twitter',
      redirect_type: '_blank',
      redirect_from: 'hero',
    });
  };

  const openLinkedIn = () => {
    window.open(LINKEDIN_URL, '_blank');
    sendEvent('outbound', 'visit', LINKEDIN_URL, {
      redirect_purpose: 'linkedin',
      redirect_type: '_blank',
      redirect_from: 'hero',
    });
  };

  const openGithub = () => {
    window.open(GITHUB_URL, '_blank');
    sendEvent('outbound', 'visit', GITHUB_URL, {
      redirect_purpose: 'github',
      redirect_type: '_blank',
      redirect_from: 'hero',
    });
  };

  const openYoutube = () => {
    window.open(YOUTUBE_URL, '_blank');
    sendEvent('outbound', 'visit', YOUTUBE_URL, {
      redirect_purpose: 'youtube',
      redirect_type: '_blank',
      redirect_from: 'hero',
    });
  };

  const sendMail = () => {
    window.open(EMAIL_URL, '_blank');
    sendEvent('outbound', 'visit', EMAIL_URL, {
      redirect_purpose: 'email',
      redirect_type: '_blank',
      redirect_from: 'hero',
    });
  };

  return (
    <section id="hero">
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Stack gap={10} justify="center" align="center">
          <Image
            src={
              'https://media.licdn.com/dms/image/D4D03AQGw_v52AoVu-A/profile-displayphoto-shrink_800_800/0/1686460768504?e=1713398400&v=beta&t=fipf7YSnAmD3yh6Ppy0iG4ESI8gXgjSMvsWTTk5obuU'
            }
            alt="avatar"
            h={140}
            w={140}
            style={{ borderRadius: rem(55) }}
            data-aos="fade-up"
          />
          <Title data-aos="fade-up" className={classes.title}>
            {`Hello, I'm `}
            <Text component="span" className={classes.highlight} inherit>
              Tolga Özgün
            </Text>
          </Title>
          <Title data-aos="fade-up" c="dimmed" className={classes.subtitle}>
            {`Senior Computer Engineering Student at `}
            <Text component="span" inherit>
              Bilkent University
            </Text>
          </Title>
          <Container p={0} size={600}>
            <Text data-aos="fade-up" size="lg" c="dimmed" className={classes.description}>
              I am interested in working on Machine Learning and Fullstack Website Development. I
              enjoy learning new things, both in technology and other fields.
            </Text>
          </Container>
          <Group
            style={{
              justifyContent: 'center',
            }}
            data-aos="fade-up"
            mt="md"
          >
            <Button size={'lg'} w={230} variant="gradient" onClick={openAcademicResume}>
              Academic Resume
            </Button>
            <Button size={'lg'} w={230} variant="gradient" onClick={openProfessionalResume}>
              Professional Resume
            </Button>
          </Group>

          <Group
            gap={0}
            className={classes.links}
            justify="flex-end"
            wrap="nowrap"
            data-aos="fade-up"
            pt="xl"
          >
            <ActionIcon size="lg" variant="subtle" onAuxClick={openTwitter} onClick={openTwitter}>
              <IconBrandX style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="subtle" onAuxClick={openYoutube} onClick={openYoutube}>
              <IconBrandYoutube style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              variant="subtle"
              onAuxClick={openInstagram}
              onClick={openInstagram}
            >
              <IconBrandInstagram style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="subtle" onAuxClick={openGithub} onClick={openGithub}>
              <IconBrandGithub style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="subtle" onAuxClick={openLinkedIn} onClick={openLinkedIn}>
              <IconBrandLinkedin style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="subtle" onAuxClick={sendMail} onClick={sendMail}>
              <IconMail style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
            </ActionIcon>
          </Group>
          <ColorSchemeToggle data-aos="fade-up" />
        </Stack>
      </div>
    </section>
  );
};

export default Hero;
