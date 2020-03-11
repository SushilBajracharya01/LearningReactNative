import React, { useState } from 'react';

import {
  Text,
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

const Generator = props => {
  const [value, setText] = useState('');

  return (
    <View>
      <Text>{value}</Text>
      <TextInput onChangeText={text => setText(text)} value={value} />
      <Button title="Clear" color="red" onPress={() => setText('')} />
      <Button
        title="Alert"
        color="yellow"
        onPress={() => alert('You have been alerted')}
      />
      <TouchableWithoutFeedback onPress={props.displayRandomNumber}>
        <View style={{ backgroundColor: 'green', padding: 10, }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Generate Random Number
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Generator;
