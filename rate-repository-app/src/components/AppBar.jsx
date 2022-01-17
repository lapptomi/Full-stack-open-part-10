import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    textAlign: 'center',
    backgroundColor: theme.colors.appBarBackground,
    display: 'flex',
  },
  tabItem: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left'
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('Hello world')}>
        <Text style={styles.tabItem}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;