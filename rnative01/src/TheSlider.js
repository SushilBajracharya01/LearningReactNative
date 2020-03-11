import React from 'react';
import {
  View,
  Slider,
  Text,
  Picker,
  ActivityIndicator,
  Image,
} from 'react-native';

import ProPic from './propic.jpg';

class TheSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
      displayActivityIndicator: true,
    };
  }

  handleSliderChange = value => {
    this.setState({
      value: value,
    });
  };

  handleActivityIndicatorChange = value => {
    this.setState({
      displayActivityIndicator: value,
    });
  };
  render() {
    return (
      <View>
        <Text>Hello World</Text>
        <Slider
          maximumValue={100}
          value={this.state.value}
          step={10}
          onValueChange={this.handleSliderChange}
        />
        <Picker
          selectedValue={this.state.displayActivityIndicator}
          onValueChange={this.handleActivityIndicatorChange}>
          <Picker.Item label="Show" value={true} />
          <Picker.Item label="Hide" value={false} />
        </Picker>
        <Text style={{ textAlign: 'center' }}>{this.state.value}</Text>
        <ActivityIndicator
          size={this.state.value}
          color="#1eeeff"
          animating={this.state.displayActivityIndicator}
        />
        <Image
          source={{ uri: 'https://picsum.photos/400/300' }}
          style={{ width: 400, height: 400 }}
          onLoadStart={() => this.handleActivityIndicatorChange(true)}
          onLoadEnd={() => this.handleActivityIndicatorChange(false)}
        />

        <Image
          source={ProPic}
          style={{ backgroundColor: 'red', width: 400, height: 400 }}
        />
      </View>
    );
  }
}

export default TheSlider;
