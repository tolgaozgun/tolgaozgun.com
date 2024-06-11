import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import AOS from 'aos';
import { Router } from './Router';
import { theme } from './theme';

import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 0,
      once: true,
    });
  });

  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
