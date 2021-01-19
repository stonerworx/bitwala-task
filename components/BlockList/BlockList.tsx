import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { BitcoinBlock } from '../../types';
import { ListEmpty } from './ListEmpty';
import { ListHeader } from './ListHeader';
import { ListItem } from './ListItem';

interface BlockListProps {
  data: readonly BitcoinBlock[];
  onBlockSelected: (block: BitcoinBlock) => void;
}

export function BlockList({ data, onBlockSelected }: BlockListProps) {
  const renderItem = ({ item }: { item: BitcoinBlock }) => (
    <ListItem block={item} onPress={() => onBlockSelected(item)} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.height.toString()}
      ListHeaderComponent={ListHeader}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={ListEmpty}
      style={styles.blockList}
    />
  );
}

const styles = StyleSheet.create({
  blockList: {
    width: '100%',
  },
});
