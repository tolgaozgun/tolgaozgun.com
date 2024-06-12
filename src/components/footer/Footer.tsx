import {
  EMAIL_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from '@/constants';
import { sendEvent } from '@/util/analytics';
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

const Footer = () => {
  const openInstagram = () => {
    window.open(INSTAGRAM_URL, '_blank');
    sendEvent('outbound', 'visit', INSTAGRAM_URL, {
      redirect_purpose: 'instagram',
      redirect_type: '_blank',
      redirect_from: 'footer',
    });
  };

  const openTwitter = () => {
    window.open(TWITTER_URL, '_blank');
    sendEvent('outbound', 'visit', TWITTER_URL, {
      redirect_purpose: 'twitter',
      redirect_type: '_blank',
      redirect_from: 'footer',
    });
  };

  const openLinkedIn = () => {
    window.open(LINKEDIN_URL, '_blank');
    sendEvent('outbound', 'visit', LINKEDIN_URL, {
      redirect_purpose: 'linkedin',
      redirect_type: '_blank',
      redirect_from: 'footer',
    });
  };

  const openGithub = () => {
    window.open(GITHUB_URL, '_blank');
    sendEvent('outbound', 'visit', GITHUB_URL, {
      redirect_purpose: 'github',
      redirect_type: '_blank',
      redirect_from: 'footer',
    });
  };

  const openYoutube = () => {
    window.open(YOUTUBE_URL, '_blank');
    sendEvent('outbound', 'visit', YOUTUBE_URL, {
      redirect_purpose: 'youtube',
      redirect_type: '_blank',
      redirect_from: 'footer',
    });
  };

  const sendMail = () => {
    window.open(EMAIL_URL, '_blank');
    sendEvent('outbound', 'visit', EMAIL_URL, {
      redirect_purpose: 'email',
      redirect_type: '_blank',
      redirect_from: 'footer',
    });
  };

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.logo}>
          <Image
            src={
              'https://firebasestorage.googleapis.com/v0/b/tolga-ozgun-personal.appspot.com/o/IMG_2156-2.png?alt=media&token=b65d3192-7153-48fb-a359-8ad89083afee'
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
