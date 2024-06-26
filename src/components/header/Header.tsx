import { GITHUB_URL } from '@/constants';
import { sendEvent } from '@/util/analytics';
import {
  Burger,
  Container,
  Divider,
  Drawer,
  Group,
  Image,
  rem,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { spotlight } from '@mantine/spotlight';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { Search } from '../search/Search';
import classes from './Header.module.css';
import { HeaderControls } from './HeaderControls';
import { MobileHeaderControls } from './MobileHeaderControls';

const links = [
  { link: 'hero', label: 'Home' },
  { link: 'section-education', label: 'Education' },
  { link: 'section-experience', label: 'Experience' },
  { link: 'section-projects', label: 'Projects' },
  { link: 'section-volunteer', label: 'Volunteer' },
];

const Header = () => {
  const [active, setActive] = useState(links[0].link);
  const tabletMatch = useMediaQuery('(max-width: 768px)');
  const theme = useMantineTheme();
  const trackSection = (sectionId: string, visitType: string) => {
    sendEvent('section', 'visit', sectionId, {
      visit_type: visitType,
      visit_from: 'header',
    });
  };

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      offset={-100}
      smooth="easeInOutQuart"
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
        trackSection(link.label, 'click');
        closeDrawer();
      }}
      onSetActive={() => {
        setActive(link.link);
        trackSection(link.label, 'scroll');
      }}
      activeClass="active"
      spy={true}
    >
      {link.label}
    </Link>
  ));

  const onSearch = () => {
    spotlight.open();
    closeDrawer();
  };

  return (
    <>
      <header className={classes.header}>
        <Container size="xl" className={classes.inner}>
          <Group>
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
          {/* <MantineLogo size={28} /> */}
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>

          <HeaderControls
            visibleFrom="sm"
            onSearch={onSearch}
            githubLink={GITHUB_URL}
            withDirectionToggle={false}
            withDiscord={false}
            discordLink="false"
            withGithub={false}
          />
          <Search data={[]} />
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={
          <Group>
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
        }
        hiddenFrom="xs"
        zIndex={1000000}
      >
        {/* <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md"> */}
        <Divider my="sm" />
        <Stack>
          {items}

          <MobileHeaderControls
            onSearch={onSearch}
            githubLink={GITHUB_URL}
            withDirectionToggle={false}
            withDiscord={false}
            discordLink="false"
            withGithub={false}
          />
        </Stack>

        {/* </ScrollArea> */}
      </Drawer>
    </>
  );
};

export default Header;
