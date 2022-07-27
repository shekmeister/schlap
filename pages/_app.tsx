import '../styles/globals.css';
import type { AppProps } from 'next/app';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }: AppProps) {
  const fullConfig = resolveConfig(tailwindConfig);
  return (
    <MantineProvider
      theme={{
        colors: {
          tailwind: {
            ...fullConfig.theme.accentColor,
          }
        }
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>)
}

export default MyApp
