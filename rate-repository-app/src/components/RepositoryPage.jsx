import { useQuery } from '@apollo/client';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';
import { FIND_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import * as Linking from 'expo-linking';

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
  reviewContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
    alignItems: 'stretch',
  },
  headerContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  ratingContainer: {
    flexGrow: 0,
    paddingRight: 15,
    color: 'red'
  },
  infoContainer: {
    flexGrow: 1,
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

const ReviewItem = (props) => {
  const review = props.review.item.node
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.ratingContainer}>
          {review.rating}
        </View>
        <View style={styles.infoContainer}>
          <Text fontWeight="bold" fontSize="subheading">
            {review.user.username}
          </Text>
          <Text color="textSecondary">
            {review.createdAt}
          </Text>
        </View>
      </View>
      <View>
        <Text color="textPrimary">
          {review.text}
        </Text>
      </View>
    </View>
  )
};

const SingleRepository = () => {
  const { repositoryId } = useParams();
  const { loading, data } = useQuery(FIND_REPOSITORY, {
    variables: { repositoryId: repositoryId }
  })

  if (loading) {
    return <Text>Loading</Text>
  }

  const { repository } = data;

  return (
    <FlatList
      data={repository.reviews.edges}
      renderItem={(item) => <ReviewItem review={item} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};

export default SingleRepository;