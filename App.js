import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      value: "Edit me!"
    }
    // when accessed from elsewhere, the context of 'this' would refer to wherever the original function loves. Binding 'this' makes it so the scope changes to refer to the constructor class' 'this'. So when the function is used as a prop, if the function uses 'this', it will instead refer to the constructor class, and now we can edit this.state with the function!
    // new comment to test something
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(newText) {
    // in the case shown here, 'this' refers to constructor class, not the component as a whole, thanks to binding
    this.setState({
      value: newText
    })
  }

  // from what you see above the text input, every time you change the text, the components are re-rendered accurately to reflect the state

  render() {
    return (
      <View style={styles.container}>
        <Text>you are writing {this.state.value}</Text>
        <TextInput
          style={styles.textInput}
          // basically the placeholder
          defaultValue={this.state.value}
          onChangeText={this.handleChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'slategray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    color: 'white',
    backgroundColor: 'blue',
  },
});
