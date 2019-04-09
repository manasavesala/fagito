import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import  ImagePicker from 'react-native-image-picker';

const options={
    title: 'select Library',
    takePhotoButtonTitle: 'Upload from camera',
    chooseFromLibraryButtonTitle: 'Upload from library'
}

export default class ImageUpload extends Component<Props>{
    constructor(Props){
        super(Props);
        this.state={
            avatarSource:null
        }
    }
    myFunction=()=>{
        // alert('test');
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            // } else if (response.customButton) {
            //   console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              });
            }
          });
    }
    render(){
        return(
            <View style={styles.view}>
                <Image 
                style={styles.image}
                source={this.state.avatarSource} />
                <TouchableOpacity 
                onPress={this.myFunction}
                style={styles.button}>
                    <Text 
                    style={styles.buttonText}>
                        Upload Image
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles= StyleSheet.create({
    button:{
        backgroundColor:'green',
        margin:10,
        padding:10
    },
    buttonText:{
        color:'#fff'
    },
    view:{
        paddingTop:150
    },
    image:{
        height:200,
        width:200,
        margin:10
    }
});