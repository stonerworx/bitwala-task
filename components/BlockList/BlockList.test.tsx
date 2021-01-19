import * as React from 'react';
import { render } from '@testing-library/react-native';

import { BlockList } from './BlockList';

describe('Block List', () => {
  it('renders no results for an empty list', () => {
    const { getByText } = render(<BlockList data={[]} />);

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

    const { getAllByText } = render(<BlockList data={BLOCKS} />);

    expect(getAllByText('hash')).toHaveLength(3);
  });
});
