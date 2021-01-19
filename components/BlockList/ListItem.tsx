import * as React from 'react';
import { formatDistance } from 'date-fns';
import { Pressable } from 'react-native';

import { Text, View } from '../Themed';
import { BitcoinBlock } from '../../types';
import { styles } from './styles';

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
