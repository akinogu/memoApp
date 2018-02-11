import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.monoList}>
        <View style={styles.monoListItem}>
          <Text style={styles.monoTitle}>
            講座のタイトル
          </Text>
          <Text style={styles.monoDate}>
            2017/10/10
          </Text>
        </View>

        <View style={styles.monoListItem}>
          <Text style={styles.monoTitle}>
            講座のタイトル
          </Text>
          <Text style={styles.monoDate}>
            2017/10/10
          </Text>
        </View>

        <View style={styles.monoListItem}>
          <Text style={styles.monoTitle}>
            講座のタイトル
          </Text>
          <Text style={styles.monoDate}>
            2017/10/10
          </Text>
        </View>

        <View style={styles.monoListItem}>
          <Text style={styles.monoTitle}>
            講座のタイトル
          </Text>
          <Text style={styles.monoDate}>
            2017/10/10
          </Text>
        </View>
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
