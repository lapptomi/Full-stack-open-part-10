import { View, Text } from 'react-native';

const RepositoryItem = ({ data }) => {
  return (
    <View>
      <Text>Full name: {data.item.fullName}</Text>
      <Text>Description: {data.item.description}</Text>
      <Text>Language: {data.item.language}</Text>
      <Text>Stars: {data.item.stargazersCount}</Text>
      <Text>Forks: {data.item.forksCount}</Text>
      <Text>Reviews: {data.item.reviewCount}</Text>
      <Text>rating: {data.item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;