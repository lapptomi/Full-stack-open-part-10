import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const cardBodyStyles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(0, 104, 225)',
    borderRadius: 5,
  }
});

const CardBody = ({ data }) => {
  return (
    <View style={cardBodyStyles.container}>
      <Text testID="language" style={{ color: 'white' }}>
        {data.item.language}
      </Text>
    </View>
  )
};

export default CardBody;