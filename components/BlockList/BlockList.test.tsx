import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { BlockList } from './BlockList';

describe('Block List', () => {
  it('renders no results for an empty list', () => {
    const { getByText } = render(<BlockList data={[]} onBlockSelected={jest.fn()} />);

    expect(getByText('no results')).toBeDefined();
  });

  it('renders 3 results', () => {
    const BLOCKS = [
      {
        height: 1,
        time: new Date(),
        hash: 'hash',
      },
      {
        height: 2,
        time: new Date(),
        hash: 'hash',
      },
      {
        height: 3,
        time: new Date(),
        hash: 'hash',
      },
    ];

    const { getAllByText } = render(<BlockList data={BLOCKS} onBlockSelected={jest.fn()} />);

    expect(getAllByText('hash')).toHaveLength(3);
  });

  it('calls onBlockSelected with the selected block onPress', () => {
    const BLOCKS = [
      {
        height: 1,
        time: new Date(),
        hash: 'hash',
      },
      {
        height: 2,
        time: new Date(),
        hash: 'hash2',
      },
    ];

    const onBlockSelected = jest.fn();

    const { getByText } = render(<BlockList data={BLOCKS} onBlockSelected={onBlockSelected} />);

    fireEvent(getByText('hash2'), 'onPress');

    expect(onBlockSelected).toBeCalledWith(BLOCKS[1]);
  });
});
