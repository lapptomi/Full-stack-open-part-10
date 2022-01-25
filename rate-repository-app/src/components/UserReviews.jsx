import { useMutation, useQuery } from '@apollo/client';
import { Alert, FlatList, Pressable, StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import theme from '../../theme';
import { DELETE_REVIEW } from '../graphql/mutations';
import { ME } from '../graphql/queries';
import ReviewItem from './ReviewItem';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    padding: 15,
    margin: 10,
    borderRadius: 5
  },
  redButton: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  }
});

const UserReviews = () => {
  const [deleteReview] = useMutation(DELETE_REVIEW);
  const navigate = useNavigate();

  const { loading, data, refetch } = useQuery(ME, {
    variables: { includeReviews: true }
  });

  if (loading) {
    return <Text>Loading</Text>;
  }

  const handleDelete = (object) => {
    const reviewId = object.item.node.id;
    
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: async () => {
            console.log("OK Pressed");
            await deleteReview({ variables: { deleteReviewId: reviewId }})
            await refetch();
          }
        }
      ]
    );
  };

  return (
    <FlatList
      data={data.me.reviews.edges}
      renderItem={(item) => (
        <View style={styles.container}>
          <ReviewItem review={item} />
          <Pressable
            style={styles.button}
            onPress={() => navigate(`/repository/${item.item.node.repositoryId}`)}
          >
            <Text color="white">View repository</Text>
          </Pressable>
          <Pressable
            style={styles.redButton}
            onPress={() => handleDelete(item)}
          >
            <Text color="white">Delete review</Text>
          </Pressable>
        </View>
      )}
      keyExtractor={({ node }) => node.id}
    />
  );
};

export default UserReviews;