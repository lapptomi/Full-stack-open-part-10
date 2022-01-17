import { View, StyleSheet, Image } from 'react-native';
import Text from '../Text';

const cardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 3,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
});

const CardHeader = ({ data }) => {
  return (
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
        <Image
          style={cardHeaderStyles.avatar}
          source={{ uri: data.item.ownerAvatarUrl }}
        />
      </View>
      <View style={cardHeaderStyles.infoContainer}>
        <Text fontWeight="bold" fontSize="subheading">{data.item.fullName}</Text>
        <Text color="textSecondary">{data.item.description}</Text>
      </View>
    </View>
  )
}

export default CardHeader;