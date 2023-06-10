import React from 'react';
import {useState, useEffect} from "react";
import {View, Platform } from 'react-native';
import PlayerSelect from './PlayerSelect';

const Home = () => {
    return (
        <View className="container p-10">
            <PlayerSelect/>
            <PlayerSelect/>
        </View>
    )
}
export default Home;