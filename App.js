import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '20px',
    margin: 15,
    flex: 1,
  },
  common: {
    backgroundColor: 'white',
    padding: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  list: {
    marginTop: 12,
    marginBottom: 12,
  },
  listItem: {
    margin: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    marginBottom: 10,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomColor: 'royalblue',
  },
  buttonText: {fontSize: 18, color: 'black', textAlign: 'center'},
});

const App = () => {
  const [list, setList] = useState([]);
  const [inputVal, setInputVal] = useState('');

  const addItem = () => {
    if (!inputVal) return;

    setList([...list, inputVal]);
    setInputVal('');
  };

  const removeItem = index => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.wrapper}>
      <Text style={{fontSize: 20}}>Todo list</Text>
      <ScrollView style={styles.list}>
        {list.map((x, i) => (
          <View style={{...styles.common, ...styles.listItem}} key={i}>
            <Text style={{flex: 0.9}}>{x}</Text>
            <Text onPress={() => removeItem(i)}>Remove</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        value={inputVal}
        onChangeText={setInputVal}
        style={{...styles.common, ...styles.input}}
        placeholder="Item name..."
      />
      <TouchableOpacity style={styles.common}>
        <Text style={styles.buttonText} onPress={addItem}>
          Add task
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
