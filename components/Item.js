
import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class Item extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.item}>
            <Text style={styles.itemText}>{this.props.val.date}</Text>
            <Text style={styles.itemText}>{this.props.val.item}</Text>
            <TouchableOpacity onPress={this.props.deletemethod} style={styles.itemDelete}>
            <Text style={styles.itemDeleteText}>Remove</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item:{
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    itemText:{
        paddingLeft: 20,
        borderLeftWidth:10,
        borderLeftColor:'#E91E63'
    },
    itemDelete:{
        position:'absolute',
        alignItems:'center',
        backgroundColor:'#2980b9',
        padding:10,
        top:10,
        bottom:10,
        right:10
    },
    itemDeleteText:{
        color:'white'
    }
});
