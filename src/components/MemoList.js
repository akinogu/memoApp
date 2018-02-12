import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

export default class MemoList extends React.Component {
  renderMemo({item}) {
    return (
      <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
        <View style={styles.monoListItem}>
          <Text style={styles.monoTitle}>
            {item.body}
          </Text>
          <Text style={styles.monoDate}>
            {item.body}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
  
  render() {
    return (
      <View style={styles.monoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  monoList: {
    width: '100%',
    flex: 1,
  },
  monoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  monoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  monoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});
