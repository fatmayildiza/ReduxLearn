import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTask} from '../redux/taskSlice';

const TodoHeader = () => {
  const [todo, setTodo] = useState ("");

  const dispatch =useDispatch();

const onSubmitTask = () => {
  if (todo.trim().length === 0) {
    Alert.alert ("please enter a meal name");
    setTodo("");
    return;
  }
  dispatch (
    addTask({
      task: todo,
    })
    );
    
  setTodo("");
};


  return (
    <View>
      <Text style={styles.header}>TodoList</Text>
      <View style= {styles.content}>
      <TextInput style={styles.input} 
      placeholder="Add todo" 
      onChangeText={setTodo} 
      value={todo} />

      <TouchableOpacity 
      style= {styles.addButton}
      onPress={onSubmitTask}
      >
      <Text style={{color:"white"}}> Add </Text>
      </TouchableOpacity>

      </View> 
    </View>
  )
}

export default TodoHeader

const styles = StyleSheet.create({
    header:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:"center",
        marginTop:20,
    },
    input:{
        borderColor:"gray",
        borderWidth:1,
        padding:10,
        width:"80%",
        borderRadius:5,

    },
    content: {
      alignItems:'center',
      justifyContent: 'center',
    },
    addButton:{
      backgroundColor:'black',
      padding:10,
      width:"80%",
      borderRadius:7,
      alignItems:"center",
    },
})