import React from 'react';
import { View, Text, Button, Modal } from 'react-native';

class TheModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
    };
  }

  toggleModal = () => {
    this.setState({
      displayModal: !this.state.displayModal,
    });
  };
  render() {
    return (
      <View>
        <Text>Hello</Text>
        <Button title="Open Modal" onPress={this.toggleModal} />

        <Modal visible={this.state.displayModal} animationType={'slide'}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#231fa2',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#ffefff',
                textAlign: 'center',
                marginBottom: 10,
              }}>
              YOYO
            </Text>
            <Button title="Close Modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}

export default TheModal;
