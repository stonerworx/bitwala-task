import * as React from 'react';
import { StyleSheet } from 'react-native';
import { formatDistance } from 'date-fns';

import { BitcoinBlockDetails } from '../../types';
import { View, Text } from '../Themed';

export function BlockDetails({
  height,
  time,
  hash,
  size,
  strippedSize,
  version,
  weight,
  chainwork,
  difficulty,
  transactionCount,
}: BitcoinBlockDetails) {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Height: {height}</Text>
      <Text style={styles.info}>Time: {formatDistance(time, new Date())}</Text>
      <Text style={styles.info}>Hash: {hash}</Text>
      <Text style={styles.info}>Size: {size}</Text>
      <Text style={styles.info}>Stripped Size: {strippedSize}</Text>
      <Text style={styles.info}>Version: {version}</Text>
      <Text style={styles.info}>Weight: {weight}</Text>
      <Text style={styles.info}>Chainwork: {chainwork}</Text>
      <Text style={styles.info}>Difficulty: {difficulty}</Text>
      <Text style={styles.info}>Transaction Count: {transactionCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  info: {
    marginBottom: 5,
    fontSize: 24,
  },
});
