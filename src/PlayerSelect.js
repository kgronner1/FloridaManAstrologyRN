import React from 'react';
import {useState, useEffect} from "react";
import {TextInput, View, Text, StyleSheet, Pressable, Platform, TouchableOpacity } from 'react-native';
import UploadImage from './UploadImage';
import CalendarPicker from './CalendarPicker';
import ColorPalette from 'react-native-color-palette';


const PlayerSelect = ({color, updateColor}) => {
    const [text, onChangeText] = useState('');
    const [link, onChangeLink] = useState('');
    const [date, onChangeDate] = useState('Select a date.');
    const [open, setOpen] = useState(false);


    const onConfirmSingle = React.useCallback(
        (params) => {

          setOpen(false);

          // pass params to the parent
          updateColor(params); // Pass the desired color value as the parameter

          console.log("get that date", params);
        },
        [setOpen]
      );

      const onColorOpen = React.useCallback(
        (params) => {
          setOpen(!params);
          
          console.log("get that date", params);
        },
        [setOpen]
      );

    const dynamicColor = { backgroundColor: color };

    return (
            <View className="flex flex-row items-start justify-center px-20 max-w-full gap-2.5 max-w-md mt-10">
                <UploadImage/> 
                <View className="flex flex-column w-full">   
                    <View className="flex flex-row w-full gap-2.5">      
                        <TextInput
                        className="block w-full bg-white rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChangeText={onChangeText}
                        placeholder="Name"
                        value={text}
                        />
                        <TouchableOpacity onPress={() => onColorOpen(open)}>
                            <View style={[playerColorPicker.but, dynamicColor]} >                            
                            </View>
                        </TouchableOpacity>
                    </View> 

                    {open &&
                    <ColorPalette
                    onChange={color => onConfirmSingle(color)}
                    title=''
                    defaultColor={dynamicColor}
                    colors={['#C0392B', "#DEDEDE", '#000000', '#8E44AD', '#2980B9']}
                    />
                    }

                    <CalendarPicker/> 
                    <Text className="block w-full rounded-md px-3.5 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                    {link}
                    </Text>
                </View>              
            </View>
    )
}
export default PlayerSelect;

const playerColorPicker=StyleSheet.create({
    but:{
        elevation:2,
        height:35,
        width:35,
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    }    
})