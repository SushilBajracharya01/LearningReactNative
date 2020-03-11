import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Nav from './src/Nav';
// import Generator from './src/Generator';
// import ListItem from './src/ListItem';
// import TodoApp from './src/TodoApp';
// import ThePicker from './src/ThePicker';
// import TheSlider from './src/TheSlider';
import TheModal from './src/TheModal';

class App extends React.Component {
  state = {
    nameOfApp: 'My Awesome App',
    creator: 'Sushil Bajracharya',
    randomNo: [20, 32],
  };
  generateRandomNo = () => {
    let random = Math.round(Math.random() * 100);
    this.setState(prevState => ({
      randomNo: [...prevState.randomNo, random],
    }));
  };

  removeRandom = position => {
    let newRandomList = this.state.randomNo.filter((item, id) => {
      return position !== id;
    });
    this.setState({
      randomNo: newRandomList,
    });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Nav nameOfApp={this.state.nameOfApp} />
        {/* <View style={styles.containerBox}>
          <Text style={styles.textStyle}>{this.state.creator}</Text>
        </View>
        <Generator displayRandomNumber={this.generateRandomNo} /> */}
        <ScrollView style={{width: '100%'}}>
          {/* <ListItem items={this.state.randomNo} remove={this.removeRandom} /> */}

          {/* <ThePicker /> */}

          {/* <TheSlider /> */}
          <TheModal />
        </ScrollView>
        {/* <TodoApp /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerBox: {
    backgroundColor: 'green',
    marginTop: 5,
    padding: 10,
  },
  textStyle: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  randomNoContainer: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '400',
  },
});

export default App;
