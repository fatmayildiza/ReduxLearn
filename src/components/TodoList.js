import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';

 
const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) =>state.tasks ); 
    const data = [
        {
            id:1,
            title:"Learn React Native",
        },
        {
            id:2,
            title: "Learn Readux Toolkit",
        },
    ];

    const onDelete = (id) => {
        dispatch (
            deleteTask({
                id:id
            })

        );
    };
const renderItem = ( {item}) => {
    return (
        <View style = {styles.item}>
          <Text style = {styles.title}> {item.name}  </Text>
          <TouchableOpacity
          style= {styles.deleteButton}
          onPress={()=> onDelete(item.id)}
          >
          <Ionicons name = "trash" size= {24} color= "red" />

          </TouchableOpacity>
       
        </View>
      );

};

return (
    <View>
        <FlatList
        data = {todos}
        renderItem={renderItem}
        keyExtractor={(item)=> item.id}
        />
    </View>
);
};

export default TodoList

const styles = StyleSheet.create({
    item:{
        backgroundColor: "lightblue",
        padding:20,
        marginTop:34,
        marginVertical: 8,
        marginHorizontal:16,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    title: {
        fontSize:32,
    },
    delete: {
        fontSize:24,
        color:"red",

    },
})