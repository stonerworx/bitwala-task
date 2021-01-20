import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';
import { parseISO } from 'date-fns';

import { BLOCKS_QUERY, useBlocks } from './useBlocks';

describe('useBlocks', () => {
  it('returns an empty list of blocks when there are no results', async () => {
    const mockNoResponse = {
      request: {
        query: BLOCKS_QUERY,
        variables: {
          offset: 0,
          limit: 20,
        },
      },
      result: {
        data: undefined,
      },
    };

    const wrapper = ({ children }: { children: React.ReactElement }) => (
      <MockedProvider mocks={[mockNoResponse]} addTypename={false}>
        {children}
      </MockedProvider>
    );
    const { result, waitForNextUpdate } = renderHook(() => useBlocks(), { wrapper });

    await waitForNextUpdate();

    expect(result.current.blocks).toEqual([]);
  });

  it('returns an empty list of blocks on error', async () => {
    const mockErrorResponse = {
      request: {
        query: BLOCKS_QUERY,
        variables: {
          offset: 0,
          limit: 20,
        },
      },
      error: new Error('something went wrong'),
    };

    const wrapper = ({ children }: { children: React.ReactElement }) => (
      <MockedProvider mocks={[mockErrorResponse]} addTypename={false}>
        {children}
      </MockedProvider>
    );
    const { result, waitForNextUpdate } = renderHook(() => useBlocks(), { wrapper });

    await waitForNextUpdate();

    expect(result.current.blocks).toEqual([]);
  });

  it('returns the blocks when there are results', async () => {
    const bitqueryResponseBlocks = [
      {
        height: 1337,
        blockHash: 'hash1',
        timestamp: {
          time: '2015-10-01T00:00:00Z',
        },
      },
      {
        height: 1338,
        blockHash: 'hash2',
        timestamp: {
          time: '2015-10-02T00:00:00Z',
        },
      },
      {
        height: 1339,
        blockHash: 'hash3',
        timestamp: {
          time: '2015-10-03T00:00:00Z',
        },
      },
    ];
    const mockResponse = {
      request: {
        query: BLOCKS_QUERY,
        variables: {
          offset: 0,
          limit: 20,
        },
      },
      result: {
        data: {
          bitcoin: {
            blocks: bitqueryResponseBlocks,
          },
        },
      },
    };

    const wrapper = ({ children }: { children: React.ReactElement }) => (
      <MockedProvider mocks={[mockResponse]} addTypename={false}>
        {children}
      </MockedProvider>
    );
    const { result, waitForNextUpdate } = renderHook(() => useBlocks(), { wrapper });

    await waitForNextUpdate();

    expect(result.current.blocks).toHaveLength(bitqueryResponseBlocks.length);
    bitqueryResponseBlocks.forEach((bitqueryResponseBlock, index) => {
      expect(result.current.blocks[index]).toEqual({
        height: bitqueryResponseBlock.height,
        hash: bitqueryResponseBlock.blockHash,
        time: parseISO(bitqueryResponseBlock.timestamp.time),
      });
    });
  });
});
