import { StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
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

const ReviewItem = (props) => {
  const review = props.review.item.node
  const { repositoryId } = useParams();

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.ratingContainer}>
          {review.rating}
        </View>
        <View style={styles.infoContainer}>
          <Text fontWeight="bold" fontSize="subheading">
            {repositoryId ? review.user.username : review.repository.fullName}
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

export default ReviewItem;