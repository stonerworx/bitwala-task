import * as React from 'react';
import { StyleSheet } from 'react-native';
import { subDays } from 'date-fns';

import { View } from '../components/Themed';
import { BlockList } from '../components/BlockList';

const BLOCKS_MOCK_DATA = [
  {
    height: 123456,
    time: subDays(new Date(), 1),
    hash: 'xxxxxxxxy',
  },
  {
    height: 123457,
    time: subDays(new Date(), 2),
    hash: 'xxxxxxxxx',
  },
  {
    height: 123458,
    time: subDays(new Date(), 3),
    hash: 'xxxxxxxxx',
  },
  {
    height: 123459,
    time: subDays(new Date(), 3),
    hash: 'xxxxxxxxx',
  },
  {
    height: 1234510,
    time: subDays(new Date(), 3),
    hash: 'xxxxxxxxx',
  },
  {
    height: 1234511,
    time: subDays(new Date(), 3),
    hash: 'xxxxxxxxx',
  },
  {
    height: 1234512,
    time: subDays(new Date(), 3),
    hash: 'xxxxxxxxx',
  },
  {
    height: 1234513,
    time: subDays(new Date(), 3),
    hash: 'xxxxxxxxx',
  },
  {
    height: 1234514,
    time: subDays(new Date(), 3),
    hash: 'xxxxxxxxx',
  },
];

export function BlocksTabScreen() {
  return (
    <View style={styles.container}>
      <BlockList data={BLOCKS_MOCK_DATA} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
