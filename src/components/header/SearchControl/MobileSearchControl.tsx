import { BoxProps, ElementProps, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { HeaderControl } from '../HeaderControl';

interface MobileSearchControlProps extends BoxProps, ElementProps<'button'> {}

export function MobileSearchControl({ className, ...others }: MobileSearchControlProps) {
  return (
    <HeaderControl {...others} tooltip={`Search`} aria-label="Search">
      <IconSearch style={{ width: rem(15), height: rem(15) }} stroke={1.5} />
    </HeaderControl>
  );
}
