import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import { Link } from 'react-router-native';

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
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.tabItem}>Repositories</Text>
        </Link>
        <Link to="/login">
          <Text style={styles.tabItem}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;