import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const cardFooterStyles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
});

const CardFooter = ({ data }) => {
  return (
    <View style={cardFooterStyles.container}>
      <View>
        <Text testID="stargazersCount" fontWeight="bold">
          {data.item.stargazersCount > 1000 
            ? `${Math.round(data.item.stargazersCount / 100) / 10}k`
            : data.item.stargazersCount 
          }
        </Text>
        <Text>Stars</Text>
      </View>
      <View>
        <Text testID="forksCount" fontWeight="bold">
          {data.item.forksCount > 1000 
            ? `${Math.round(data.item.forksCount / 100) / 10}k`
            : data.item.forksCount 
          }
        </Text>
        <Text>Forks</Text>
      </View>
      <View>
        <Text testID="reviewCount" fontWeight="bold">
          {data.item.reviewCount > 1000 
            ? `${Math.round(data.item.reviewCount / 100) / 10}k`
            : data.item.reviewCount
          }  
        </Text>
        <Text>Reviews</Text>
      </View>
      <View>
        <Text testID="ratingAverage" fontWeight="bold">
          {data.item.ratingAverage > 1000 
            ? `${Math.round(data.item.ratingAverage / 100) / 10}k`
            : data.item.ratingAverage
          }    
        </Text>
        <Text>rating</Text>
      </View>
    </View>
  )
};

export default CardFooter;