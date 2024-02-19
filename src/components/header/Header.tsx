import { GITHUB_URL } from '@/constants';
import { Burger, Container, Group, Image, rem, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { spotlight } from '@mantine/spotlight';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { Search } from '../search/Search';
import classes from './Header.module.css';
import { HeaderControls } from './HeaderControls';

const links = [
  { link: 'hero', label: 'Home' },
  { link: 'section-education', label: 'Education' },
  { link: 'section-experience', label: 'Experience' },
  { link: 'section-projects', label: 'Projects' },
  { link: 'section-volunteer', label: 'Volunteer' },
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

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
      }}
      onSetActive={() => {
        setActive(link.link);
      }}
      activeClass="active"
      spy={true}
    >
      {link.label}
    </Link>
  ));

  const onSearch = () => {
    spotlight.open();
    console.log('search');
  };

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Group>
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
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export default Header;