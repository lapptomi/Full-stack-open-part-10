import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import { Link } from 'react-router-native';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

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
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const { loading, data } = useQuery(ME);

  const signOut = () => {
    apolloClient.resetStore();
    authStorage.removeAccessToken();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.tabItem}>Repositories</Text>
        </Link>
        {!loading && data.me !== null
          ? <Text onClick={() => signOut()} style={styles.tabItem}>
              Sign Out
            </Text>
          : <Link to="/login">
              <Text style={styles.tabItem}>Sign In</Text>
            </Link>

        }
      </ScrollView>
    </View>
  );
};

export default AppBar;