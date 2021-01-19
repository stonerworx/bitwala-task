import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  blockList: {
    width: '100%',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  row: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
  },
  col: {
    paddingRight: 5,
  },
});
