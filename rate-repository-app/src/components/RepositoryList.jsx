import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';
import { Button, Menu, Divider } from 'react-native-paper';
import { useState } from 'react';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'left',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <View testID='repositoryItem'>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={(repository) => <RepositoryItem data={repository} />}
      />
    </View>
  );
};

const RepositoryList = () => {
  const [visible, setVisible] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  const { repositories, loading } = useRepositories(sortBy);

  if (loading) {
    return <Text>Loading</Text>
  }

  return (
    <>
      <View
        style={styles.menuContainer}>
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={<Button onPress={() => setVisible(true)}>Sort repositories by</Button>}
        >
          <Menu.Item
            onPress={() => {
              setVisible(false);
              setSortBy('default')
            }}
            title="Latest repositories"
          />
          <Divider />
          <Menu.Item 
            onPress={() => {
              setVisible(false);
              setSortBy('rating_desc')
            }}
            title="Highest rated repositories"
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              setVisible(false)
              setSortBy('rating_asc')
            }}
            title="Lowest rated repositories"
          />
        </Menu>
      </View>
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;