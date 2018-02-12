import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

export default class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  handleSubmit() {
    const { params } = this.props.navigation.state;
    const db = firebase.firestore();
    db.collection(`users/${params.currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
    .then((docRef) => {

    })
    .catch((error) => {

    })

  }
  // () => {this.props.navigation.goBack(); }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.memoEditInput} 
          value={this.state.body}
          onChangeText={(text) => this.setState({ body: text})} 
          multiline />
        <CircleButton onPress={this.handleSubmit.bind(this)}>{'\uf00c'}</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
});
