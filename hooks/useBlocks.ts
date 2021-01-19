import { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';
import { parseISO } from 'date-fns';

import { BitcoinBlock } from '../types';

interface BitqueryTimestamp {
  time: string;
}

interface BitqueryBlock {
  blockHash: string;
  height: number;
  timestamp: BitqueryTimestamp;
}

interface BitqueryBitcoinData {
  bitcoin: {
    blocks: BitqueryBlock[];
  };
}

export const BLOCKS_QUERY = gql`
  query {
    bitcoin(network: bitcoin) {
      blocks(options: { limit: 20 }) {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        blockHash
        height
      }
    }
  }
`;

function mapBitqueryBlockToBlock(bitqueryBlock: BitqueryBlock): BitcoinBlock {
  return {
    hash: bitqueryBlock.blockHash,
    height: bitqueryBlock.height,
    time: parseISO(bitqueryBlock.timestamp.time),
  };
}

export function useBlocks(): { blocks: ReadonlyArray<BitcoinBlock> } {
  // TODO: error handling
  const { data } = useQuery<BitqueryBitcoinData>(BLOCKS_QUERY);

  const blocks = useMemo(() => (data ? data.bitcoin.blocks.map(mapBitqueryBlockToBlock) : []), [
    data,
  ]);

  return { blocks };
}
