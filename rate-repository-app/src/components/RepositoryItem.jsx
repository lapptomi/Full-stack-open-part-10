import { View, StyleSheet } from 'react-native';
import CardBody from './Card/CardBody';
import CardFooter from './Card/CardFooter';
import CardHeader from './Card/CardHeader';

const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'stretch',
  },
});

const RepositoryItem = ({ data }) => {
  return (
    <View style={cardStyles.container}>
      <CardHeader data={data} />
      <CardBody data={data} />
      <CardFooter data={data} />
    </View>
  );
};

export default RepositoryItem;