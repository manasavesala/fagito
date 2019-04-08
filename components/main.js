
import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Item from './Item'
import { isFlowPredicate } from '@babel/types';

export default class App extends React.Component{
        constructor(props){
            super(props);
            this.state={
                itemArray: [],
                newItemInput:'',
            }
        }
    render() {
        var textItems = [];
        for (var i = 0; i < this.state.itemArray.length; i++) {
            var key = i;
            var val = {
                date: this.state.itemArray[i].date,
                item: this.state.itemArray[i].text
            }
            var donothing = function() {};
            var itemComponent = <Item key={i} keyval={i} val={val} deletemethod={() => this.deleteItem(key)}/>
            textItems.push(itemComponent);
        }

        var self = this;
        var onNewItemTextInputChange = function (inputText) {
            self.setState({newItemInput:inputText})
        }

        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Welcome to Fagito</Text>
                </View>
                <Text key='head'>List of Items:</Text>
                <ScrollView style={styles.scrollContainer}>
                    {textItems}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput 
                        style={styles.textinput} 
                        onChangeText={onNewItemTextInputChange} 
                        value={this.state.newItemInput}/>
                </View>
                    <TouchableOpacity style={styles.addButton} onPress={this.addItem.bind(this)}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
            </View>
        );
    }

    addItem() {
        console.log('+addItem');
        if(this.state.newItemInput){
            
            console.log('[addItem] before execution');
            var d = new Date();
            var dateString = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
            var currentItemArray = this.state.itemArray;
            currentItemArray.push({
                date: dateString,
                text: this.state.newItemInput
            });
            // TODO merge the below two calls into one.
            this.setState({itemArray: currentItemArray});
            this.setState({newItemInput:''});
        }
        console.log('-addItem');
    }

    deleteItem(index) {
        var currentArray = this.state.itemArray;
        currentArray.splice(index, 1);
        this.setState({itemArray: currentArray});
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth:10,
        borderBottomColor: '#ddd',
    },
    heaterText:{
        color:'white',
        fontSize:18,
        padding:26,
    },
    scrollContainer:{
        flex:1,
        marginBottom: 100,
    },
    footer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        zIndex:10,
    },
    textinput:{
        alignSelf:'stretch',
        color:'#fff',
        padding:20,
        backgroundColor:'#252525',
        borderTopWidth:2,
        borderTopColor:'#ededed'
    },
    addButton:{
        position:'absolute',
        zIndex:11,
        right:20,
        bottom:90,
        backgroundColor: '#E91E63',
        width:90,
        height:90,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:8,
    },
    addButtonText:{
        color:'#fff',
        fontSize:24
    }

});
