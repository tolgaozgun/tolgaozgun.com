import {
  AppShell,
  AppShellFooter,
  AppShellMain,
  rem,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const Layout = () => {
  const theme = useMantineTheme();

  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <main className="App">
      <AppShell
        padding="md"
        bg={colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]}
        header={{ height: rem(60) }}
        footer={{ height: rem(70) }}
      >
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShellFooter>
          <Footer />
        </AppShellFooter>
        <AppShellMain mt={30}>
          <Outlet />
        </AppShellMain>
      </AppShell>
    </main>
  );
};

export default Layout;
