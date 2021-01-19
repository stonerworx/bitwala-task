import { gql, useQuery } from '@apollo/client';
import { parseISO } from 'date-fns';

import { BitcoinBlockDetails } from '../types';

interface BitqueryTimestamp {
  time: string;
}

interface BitqueryBlock {
  blockHash: string;
  height: number;
  timestamp: BitqueryTimestamp;
  blockSize: number;
  blockStrippedSize: number;
  blockVersion: number;
  blockWeight: number;
  chainwork: string;
  difficulty: number;
  transactionCount: number;
}

interface BitqueryBitcoinData {
  bitcoin: {
    blocks: BitqueryBlock[];
  };
}

export const BLOCK_QUERY = gql`
  query GetBlock($height: Int!) {
    bitcoin(network: bitcoin) {
      blocks(height: { is: $height }) {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
        blockHash
        blockSize
        blockStrippedSize
        blockVersion
        blockWeight
        chainwork
        difficulty
        transactionCount
      }
    }
  }
`;

function mapBitqueryBlockToBlockDetails(
  bitqueryBlock: BitqueryBlock,
): BitcoinBlockDetails | undefined {
  return {
    hash: bitqueryBlock.blockHash,
    height: bitqueryBlock.height,
    time: parseISO(bitqueryBlock.timestamp.time),
    size: bitqueryBlock.blockSize,
    strippedSize: bitqueryBlock.blockStrippedSize,
    version: bitqueryBlock.blockVersion,
    weight: bitqueryBlock.blockWeight,
    chainwork: bitqueryBlock.chainwork,
    difficulty: bitqueryBlock.difficulty,
    transactionCount: bitqueryBlock.transactionCount,
  };
}

export function useBlockDetails(height?: number): BitcoinBlockDetails | undefined {
  const { data } = useQuery<BitqueryBitcoinData>(BLOCK_QUERY, {
    variables: { height },
  });

  return data ? data.bitcoin.blocks.map(mapBitqueryBlockToBlockDetails)[0] : undefined;
}
