import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Sentry from 'sentry-expo';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

Sentry.init({
  dsn: 'https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@xxxxxxx.ingest.sentry.io/5598010',
  enableInExpoDevelopment: true,
  debug: true,
});

const client = new ApolloClient({
  uri: 'https://graphql.bitquery.io',
  cache: new InMemoryCache(),
});

function isWeb() {
  if (typeof document != 'undefined') {
    return true;
  }

  return false;
}

function wrapWithSentryNativeErrorBoundary(children: React.ReactNode) {
  if (isWeb()) {
    return children;
  }

  return (
    <Sentry.Native.ErrorBoundary fallback={'An error has occurred'}>
      {children}
    </Sentry.Native.ErrorBoundary>
  );
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return wrapWithSentryNativeErrorBoundary(
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ApolloProvider>,
    );
  }
}
