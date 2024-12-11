import {StyleSheet, ViewStyle, TextStyle, Platform} from 'react-native';

interface Styles {
  container: ViewStyle;
  headerButtons: ViewStyle;
  listContainer: ViewStyle;
  itemContainer: ViewStyle;
  itemDetails: ViewStyle;
  itemName: TextStyle;
  itemButtons: ViewStyle;
  centerText: TextStyle;
  categoriesButton: ViewStyle;
  categoriesButtonText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 16,
    top: Platform.OS === 'android' ? 45 : 0,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  listContainer: {paddingTop: 16},
  itemContainer: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
  },
  itemDetails: {flex: 3},
  itemName: {fontSize: 16, fontWeight: 'bold'},
  itemButtons: {flex: 1, justifyContent: 'space-around'},
  centerText: {flex: 1, textAlign: 'center', marginTop: 20},
  categoriesButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  categoriesButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
