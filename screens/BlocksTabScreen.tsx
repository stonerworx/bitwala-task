import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { BlockList } from '../components/BlockList';
import { useBlocks } from '../hooks/useBlocks';

export function BlocksTabScreen() {
  const { blocks } = useBlocks();

  return (
    <View style={styles.container}>
      <BlockList data={blocks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
