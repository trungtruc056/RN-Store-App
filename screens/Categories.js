import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'PHOTOS' },
        { id: 2, name: 'SHOPPING' },
        { id: 3, name: 'DEVELOPER TOOLS' },
        { id: 4, name: 'FUN' },
        { id: 5, name: 'SPORTS' },
        { id: 6, name: 'SEARCH TOOLS' }
      ]
    };
  }

  render() {
      const { navigation } = this.props;
    const { categories } = this.state;
    return (
        <FlatList data={categories}
          renderItem={({ item }) => 
            <CategoryListItem 
            category={item}
            onPress={() => navigation.navigate('Category')}
        />
        }
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.container}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
});
