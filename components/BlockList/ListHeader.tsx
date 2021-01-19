import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';

export function ListHeader() {
  return (
    <View style={styles.row}>
      <Text style={styles.col}>Height</Text>
      <Text style={styles.col}>Time</Text>
      <Text style={styles.col}>Hash</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
