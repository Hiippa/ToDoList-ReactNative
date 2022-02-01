import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Button, Keyboard } from 'react-native';

function Banner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>ToDo example with React Native</Text>
    </View>
  );
}

function TodoList() {
  const [itemText, setItemText] = useState();
  const [items, setItems] = useState([]);

  const addToDoItem = () => {
    if (itemText !== ''){
      // Math.random for unique.Id which is required 
      setItems([...items, {id:Math.random(), text:itemText}])
      setItemText('')
    }
    Keyboard.dismiss();
  }

  const removeItem = (id) => {
    // filter/remove item with id
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  return (  
    <View>
      <View style={styles.addToDo}>
        <TextInput style={styles.addToDoTextInput} value={itemText} onChangeText={ (text) => setItemText(text)} placeholder="Write a new todo here"/>
        <Button title="Add" style={styles.addTodoButton} onPress={addToDoItem}/>
      </View>
      <ScrollView style={styles.list}>
        { items.map( (item,index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.containerForText}>          
            <Text style={styles.listItemText}>{'\u2022'} {item.text}</Text>
            </View>
            <Text style={styles.listItemDelete} onPress={() => removeItem(item.id)}>X</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
        <Banner />
        <TodoList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    margin: 15
  },
  banner: {
    backgroundColor: 'cadetblue',
    justifyContent: 'center',
    marginBottom: 20
  },
  bannerText: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  addTodo: {
    flexDirection: 'row',
    marginBottom: 20
  },
  addToDoTextInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    padding: 5,
    margin: 2,
    // flex messed up input field size || oneplus
  },
  list: {
    color: 'black',
    margin: 2
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  listItemText: {
    fontSize: 20

  },
  listItemDelete: {
    marginStart: 10,
    fontSize: 20,
    color:'red',
    fontWeight: 'bold'
  },
  containerForText: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
  }

});
