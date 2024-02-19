import {
  EMAIL_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from '@/constants';
import { ActionIcon, Group, Image, Text, rem } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from '@tabler/icons-react';
import classes from './Footer.module.css';

// const links = [
//   { link: '#', label: 'Contact' },
//   { link: '#', label: 'Privacy' },
//   { link: '#', label: 'Blog' },
//   { link: '#', label: 'Store' },
//   { link: '#', label: 'Careers' },
// ];

const Footer = () => {
  const openInstagram = () => {
    window.open(INSTAGRAM_URL, '_blank');
  };

  const openTwitter = () => {
    window.open(TWITTER_URL, '_blank');
  };

  const openLinkedIn = () => {
    window.open(LINKEDIN_URL, '_blank');
  };

  const openGithub = () => {
    window.open(GITHUB_URL, '_blank');
  };

  const openYoutube = () => {
    window.open(YOUTUBE_URL, '_blank');
  };

  const sendMail = () => {
    window.open(EMAIL_URL, '_blank');
  };

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.logo}>
          <Image
            src={
              'https://media.licdn.com/dms/image/D4D03AQGw_v52AoVu-A/profile-displayphoto-shrink_800_800/0/1686460768504?e=1713398400&v=beta&t=fipf7YSnAmD3yh6Ppy0iG4ESI8gXgjSMvsWTTk5obuU'
            }
            alt="avatar"
            h={40}
            w={40}
            style={{ borderRadius: rem(10) }}
          />
          <Text className={classes.siteName}>Tolga Özgün</Text>
        </Group>

        {/* <Group className={classes.links}>{items}</Group> */}

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onAuxClick={openTwitter}
            onClick={openTwitter}
          >
            <IconBrandX style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={openYoutube}
            onAuxClick={openYoutube}
          >
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={openInstagram}
            onAuxClick={openInstagram}
          >
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={openGithub}
            onAuxClick={openGithub}
          >
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={openLinkedIn}
            onAuxClick={openLinkedIn}
          >
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={sendMail}
            onAuxClick={sendMail}
          >
            <IconMail style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
};

export default Footer;
