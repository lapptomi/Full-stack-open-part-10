import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';
import { Button, Menu, Divider, Searchbar } from 'react-native-paper';
import React, { useState } from 'react';
import { useDebounce } from "use-debounce";


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  menuContainer: {
    flexDirection: 'col',
    justifyContent: 'left',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;

    return (
      <Searchbar
        placeholder="Search"
        onChangeText={props.setSearchQuery}
        value={props.searchQuery}
      />
    );
  };

  render() {
    const props = this.props;

    const repositoryNodes = props.repositories
      ? props.repositories.edges.map(edge => edge.node)
      : [];

    return (
      <View testID='repositoryItem'>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={(repository) => <RepositoryItem data={repository} />}
        ListHeaderComponent={this.renderHeader}
      />
    </View>
    );
  }
}

const RepositoryList = () => {
  const [visible, setVisible] = useState(false);
  const [sortBy, setSortBy] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedText] = useDebounce(searchQuery, 1000);

  const { repositories, loading } = useRepositories(sortBy, debouncedText);

  if (loading) {
    return <Text>Loading</Text>;
  }

  return (
    <>
      <View style={styles.menuContainer}>
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={<Button onPress={() => setVisible(true)}>Sort repositories by</Button>}
        >
          <Menu.Item
            onPress={() => {
              setVisible(false);
              setSortBy({})
            }}
            title="Latest repositories"
          />
          <Divider />
          <Menu.Item 
            onPress={() => {
              setVisible(false);
              setSortBy({ orderDirection: 'DESC', orderBy: 'RATING_AVERAGE' })
            }}
            title="Highest rated repositories"
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              setVisible(false)
              setSortBy({ orderDirection: 'ASC', orderBy: 'RATING_AVERAGE' })
            }}
            title="Lowest rated repositories"
          />
        </Menu>
      </View>
      <RepositoryListContainer
        repositories={repositories}
        searchQuery={searchQuery}
        setSearchQuery={(value) => setSearchQuery(value)}
      />
    </>
  );
};

export default RepositoryList;