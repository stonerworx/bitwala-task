import * as React from 'react';

import { Text, View } from '../Themed';
import { styles } from './styles';

export function ListHeader() {
  return (
    <View style={styles.row}>
      <Text style={styles.col}>Height</Text>
      <Text style={styles.col}>Time</Text>
      <Text style={styles.col}>Hash</Text>
    </View>
  );
}
