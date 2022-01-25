import { useQuery } from '@apollo/client';
import { FlatList } from 'react-native';
import { ME } from '../graphql/queries';
import ReviewItem from './ReviewItem';
import Text from './Text';

const UserReviews = () => {
  const { loading, data } = useQuery(ME, {
    variables: { includeReviews: true }
  })

  if (loading) {
    return <Text>Loading</Text>
  }

  const { me } = data;

  return (
    <FlatList
      data={me.reviews.edges}
      renderItem={(item) => <ReviewItem review={item} />}
      keyExtractor={({ node }) => node.id}
    />
  )
}

export default UserReviews;