import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const addImage = async () =>{
    let _image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,3],
        quality: 1,
      });
      console.log(JSON.stringify(_image));
        if (!_image.canceled) {
            setImage(_image.uri);
        }
  };
  return (
            <View className="flex flex-column items-center justify-center" style={imageUploaderStyles.container}>
                {
                    image  && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                }
                    <View>
                        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                            <Ionicons name="person" size={40} color="#ffffff" />
                            {/* <Text>{image ? 'Edit' : 'Upload'} Image</Text> */}
                        </TouchableOpacity>
                    </View>
            </View>
  );
}
const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:80,
        width:80,
        backgroundColor:'#333333',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'#333333',
        width:'100%',
        height:'50%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:"#333333"
    }
})