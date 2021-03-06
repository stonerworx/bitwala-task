export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Blocks: undefined;
  Transactions: undefined;
};

export type BlocksTabParamList = {
  BlocksTabScreen: undefined;
};

export type TransactionsTabParamList = {
  TransactionsTabScreen: undefined;
};

export interface BitcoinBlock {
  height: number;
  time: Date;
  hash: string;
}

export interface BitcoinBlockDetails {
  height: number;
  time: Date;
  hash: string;
  size: number;
  strippedSize: number;
  version: number;
  weight: number;
  chainwork: string;
  difficulty: number;
  transactionCount: number;
}
