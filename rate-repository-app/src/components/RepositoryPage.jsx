import { useQuery } from '@apollo/client';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import { FIND_REPOSITORY } from '../graphql/queries';
import Text from './Text';
import ReviewItem from './ReviewItem';
import RepositoryInfo from './RepositoryInfo';

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