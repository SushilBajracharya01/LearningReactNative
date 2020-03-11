import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = props => {
  return props.items.map((item, id) => (
    <TouchableOpacity
      style={styles.listItem}
      key={id}
      onPress={() => props.remove(id)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginTop: 5,
  },
});
export default ListItem;
