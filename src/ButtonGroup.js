import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonGroup = ({ onPressUpdate }) => {
    return (
      <View className='flex-row justify-center bottom-0 left-0 right-0 pb-8 mt-10'>
        <TouchableOpacity onPress={onPressUpdate} style={ButtonStyles.grayBut} className='flex-1 mx-2 bg-blue-500 rounded-lg py-4'>
          <Text className='text-white text-center font-bold'>Regenerate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ButtonStyles.grayBut} className='flex-1 mx-2 bg-blue-500 rounded-lg py-4'>
          <Text className='text-white text-center font-bold'>Share</Text>
        </TouchableOpacity>
      </View>
    );
};

const ButtonStyles=StyleSheet.create({
    grayBut:{
        backgroundColor:'#333333',
        color:"#ffffff"
    }    
})

export default ButtonGroup;