import * as React from 'react';
import { formatDistance } from 'date-fns';
import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '../Themed';
import { BitcoinBlock } from '../../types';

export function ListItem({
  block: { height, time, hash },
  onPress,
}: {
  block: BitcoinBlock;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.col}>{height}</Text>
        <Text style={styles.col}>{formatDistance(time, new Date())} ago</Text>
        <Text style={styles.col}>{hash}</Text>
      </View>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
  },
  col: {
    paddingRight: 5,
  },
});
