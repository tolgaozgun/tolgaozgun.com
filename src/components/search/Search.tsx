import { rem } from '@mantine/core';
import { Spotlight, SpotlightActionData } from '@mantine/spotlight';

import '@mantine/spotlight/styles.css';
import { IconBook, IconBriefcase, IconCode, IconHeart, IconSearch } from '@tabler/icons-react';
import { scroller } from 'react-scroll';

export function Search({ data }: { data: any[] }) {
  // const actions = data?.map((item) => ({
  //   id: item.component,
  //   label: item.component,
  //   description: item.attributes.title,
  //   onClick: () => {},
  // }));
  const actions: SpotlightActionData[] = [
    {
      id: 'education',
      label: 'Education',
      description: 'View my educational background',
      onClick: () =>
        scroller.scrollTo('section-education', { smooth: 'easeInOutQuart', offset: -100 }),
      leftSection: <IconBook style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
    },
    {
      id: 'experience',
      label: 'Experience',
      description: 'Explore my professional experience',
      onClick: () =>
        scroller.scrollTo('section-experience', { smooth: 'easeInOutQuart', offset: -100 }),
      leftSection: <IconBriefcase style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
    },
    {
      id: 'projects',
      label: 'Projects',
      description: 'Check out the projects I have worked on',
      onClick: () =>
        scroller.scrollTo('section-projects', { smooth: 'easeInOutQuart', offset: -100 }),
      leftSection: <IconCode style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
    },
    {
      id: 'volunteer',
      label: 'Volunteer Experience',
      description: 'Learn about my volunteer work',
      onClick: () =>
        scroller.scrollTo('section-volunteer', { smooth: 'easeInOutQuart', offset: -100 }),
      leftSection: <IconHeart style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
    },
  ];

  return (
    <Spotlight
      // store={searchStore}
      shortcut={['mod + K', 'mod + P', '/']}
      actions={actions}
      // tagsToIgnore={[]}
      highlightQuery
      clearQueryOnClose
      radius="md"
      limit={7}
      nothingFound="Nothing found!"
      searchProps={{
        leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} />,
        placeholder: 'Search me..',
      }}
    />
  );
}
