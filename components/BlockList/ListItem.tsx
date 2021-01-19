import * as React from 'react';
import { formatDistance } from 'date-fns';

import { Text, View } from '../Themed';
import { BitcoinBlock } from '../../types';
import { styles } from './styles';

export function ListItem({ height, time, hash }: BitcoinBlock) {
  return (
    <View style={styles.row}>
      <Text style={styles.col}>{height}</Text>
      <Text style={styles.col}>{formatDistance(time, new Date())} ago</Text>
      <Text style={styles.col}>{hash}</Text>
    </View>
  );
}
