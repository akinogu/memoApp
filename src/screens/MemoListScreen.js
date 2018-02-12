import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

export default class MemoListScreen extends React.Component {
  handleOnPress() {
    this.props.navigation.navigate('MemoCreate', { currentUser: this.props.navigation.state.params.currentUser });
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton onPress={this.handleOnPress.bind(this)}>{'\uf067'}</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fffdf6',
  },
});
