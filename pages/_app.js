import '../styles/globals.css';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { ClientProvider } from '@micro-stacks/react';
import Sidebar from "./components/sidebar";

function MyApp({ Component, pageProps }) {

  return (
      <ClientProvider
          appName="Nextjs + Microstacks"
          appIconUrl="/vercel.png"
      >
              <ThemeProvider attribute="class">
                      <Sidebar>
                          <Component>
                            {pageProps}
                          </Component>
                      </Sidebar>
              </ThemeProvider>
      </ClientProvider>

  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;