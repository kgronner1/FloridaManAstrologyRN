import React from 'react';
import {useState, useEffect} from "react";
import {View, Platform } from 'react-native';
import PlayerSelect from './PlayerSelect';
import Chart from './Chart';

const Home = () => {
    return (
        <View className="container p-10">
            <PlayerSelect/>
            <PlayerSelect/>
            <Chart />
        </View>
    )
}
export default Home;