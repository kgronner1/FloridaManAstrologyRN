import React from 'react';
import {useState, useEffect} from "react";
import {TextInput, View, Text, Pressable, Platform } from 'react-native';
import UploadImage from './UploadImage';
import CalendarPicker from './CalendarPicker';

const PlayerSelect = () => {
    const [text, onChangeText] = useState('');
    const [link, onChangeLink] = useState('Link');

    return (
            <View className="flex flex-row items-center justify-center p-10 max-w-full gap-2.5 max-w-md">
                <UploadImage/> 
                <View className="flex flex-column w-full gap-2.5">          
                    <TextInput
                    className="block w-full bg-white rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChangeText={onChangeText}
                    placeholder="Name"
                    value={text}
                    />
                    <Text className="block w-full rounded-md px-3.5 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                    {link}
                    </Text>
                </View> 
                <CalendarPicker/>              
            </View>
    )
}
export default PlayerSelect;