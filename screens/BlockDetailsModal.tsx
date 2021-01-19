import * as React from 'react';
import { Modal } from 'react-native';

import { useBlockDetails } from '../hooks/useBlockDetails';
import { View } from '../components/Themed';
import { BlockDetails } from '../components/BlockDetails';

interface BlockDetailsModalProps {
  blockHeight: number;
  onRequestClose: () => void;
}

export function BlockDetailsModal({ blockHeight, onRequestClose }: BlockDetailsModalProps) {
  const blockDetails = useBlockDetails(blockHeight);

  if (!blockDetails) {
    return null;
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={true}
        onRequestClose={onRequestClose}
      >
        <BlockDetails {...blockDetails} />
      </Modal>
    </View>
  );
}
