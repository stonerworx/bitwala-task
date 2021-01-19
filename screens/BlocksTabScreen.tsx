import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { BlockList } from '../components/BlockList';
import { useBlocks } from '../hooks/useBlocks';
import { BlockDetailsModal } from './BlockDetailsModal';

export function BlocksTabScreen() {
  const [selectedBlockHeight, setSelectedBlockHeight] = useState<number | undefined>();
  const { blocks } = useBlocks();

  return (
    <View style={styles.container}>
      {!!selectedBlockHeight && (
        <BlockDetailsModal
          blockHeight={selectedBlockHeight}
          onRequestClose={() => {
            setSelectedBlockHeight(undefined);
          }}
        ></BlockDetailsModal>
      )}
      <BlockList data={blocks} onBlockSelected={(block) => setSelectedBlockHeight(block.height)} />
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
