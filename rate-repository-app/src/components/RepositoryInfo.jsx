import * as Linking from 'expo-linking';
import RepositoryItem from './RepositoryItem';
import { Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  button: {
    padding: 10,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(0, 104, 225)',
    borderRadius: 5,
  },
});

const RepositoryInfo = ({ repository }) => {
  return (
    <View style={styles.container}>
      <RepositoryItem data={{ item: repository }} />
      <Pressable
        style={styles.button}
        onPress={() => Linking.openURL(repository.url)}
      >
        <Text color="white">Open in Github</Text>
      </Pressable>
    </View>
  )
};

export default RepositoryInfo;