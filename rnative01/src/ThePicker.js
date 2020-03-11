import React from 'react';
import { View, Text, Picker } from 'react-native';

class ThePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english',
      gender: 'male',
    };
  }

  handleLanguageChange = (itemValue, itemIndex) => {
    this.setState({
      language: itemValue,
    });
  };

  handleGenderChange = (itemValue, itemIndex) => {
    this.setState({
      gender: itemValue,
    });
  };

  render() {
    return (
      <View>
        <Text>Hello what is up</Text>
        <Picker
          style={{ width: '100%' }}
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) =>
            this.handleLanguageChange(itemValue, itemIndex)
          }>
          <Picker.Item label="Spanish" value="spanish" />
          <Picker.Item label="English" value="english" />
        </Picker>

        <Picker
          style={{ width: '100%' }}
          selectedValue={this.state.gender}
          onValueChange={(itemValue, itemIndex) =>
            this.handleGenderChange(itemValue)
          }>
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
      </View>
    );
  }
}

export default ThePicker;
