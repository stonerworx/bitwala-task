import * as React from 'react';
import { FlatList } from 'react-native';

import { BitcoinBlock } from '../../types';
import { ListEmpty } from './ListEmpty';
import { ListHeader } from './ListHeader';
import { ListItem } from './ListItem';
import { styles } from './styles';

interface BlockListProps {
  data: readonly BitcoinBlock[];
}

const renderItem = ({ item }: { item: BitcoinBlock }) => (
  <ListItem height={item.height} time={item.time} hash={item.hash} />
);

export function BlockList({ data }: BlockListProps) {
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
