import { useQuery } from '@apollo/client';
import { Pressable, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';
import { FIND_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import * as Linking from 'expo-linking';

const style = StyleSheet.create({
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
  }
});

const RepositoryPage = () => {
  const { repositoryId } = useParams();

  const { loading, data } = useQuery(FIND_REPOSITORY, {
    variables: { repositoryId: repositoryId }
  })

  if (loading) {
    return <Text>Loading</Text>
  }
  
  return (
    <View style={style.container}>
      <RepositoryItem data={{ item: data.repository }} />
        <Pressable
          style={style.button}
          onPress={() => Linking.openURL(data.repository.url)}
        >
          <Text color="white">Open in Github</Text>
        </Pressable>
    </View>
  )
};

export default RepositoryPage;
