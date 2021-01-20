import { useEffect, useMemo, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { parseISO } from 'date-fns';

import { BitcoinBlock } from '../types';

const LIMIT = 20;

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

interface BitqueryBitcoinVariables {
  offset: number;
  limit: number;
}

export const BLOCKS_QUERY = gql`
  query GetBlocks($offset: Int!, $limit: Int!) {
    bitcoin(network: bitcoin) {
      blocks(options: { limit: $limit, offset: $offset, desc: "height" }) {
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

export function useBlocks(): { blocks: ReadonlyArray<BitcoinBlock>; loadMore: () => void } {
  const [offset, setOffset] = useState(0);
  const [blocks, setBlocks] = useState<readonly BitcoinBlock[]>([]);

  const { data, loading } = useQuery<BitqueryBitcoinData, BitqueryBitcoinVariables>(BLOCKS_QUERY, {
    variables: { offset, limit: LIMIT },
  });
  const newBlocks = useMemo(() => (data ? data.bitcoin.blocks.map(mapBitqueryBlockToBlock) : []), [
    data,
  ]);

  useEffect(() => {
    setBlocks((previousBlocks) => [...previousBlocks, ...newBlocks]);
  }, [newBlocks]);

  function loadMore() {
    if (loading) {
      return;
    }
    setOffset(offset + LIMIT);
  }

  return { blocks, loadMore };
}
