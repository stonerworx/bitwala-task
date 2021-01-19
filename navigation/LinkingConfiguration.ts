import * as Linking from 'expo-linking';

export const LinkingConfiguration = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Blocks: {
            screens: {
              BlocksTabScreen: 'blocks',
            },
          },
          Transactions: {
            screens: {
              TransactionsTabScreen: 'transactions',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
