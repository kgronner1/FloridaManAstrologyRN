import React from 'react';
import {useState, useEffect} from "react";
import {View, Platform, Button } from 'react-native';
import PlayerSelect from './PlayerSelect';
import Chart from './Chart';
import Compatibility from './Compatibility';
import ButtonGroup from './ButtonGroup';



const Home = () => {

    // default data
    const [data, setData] = useState({
        datasets: [
          {
            data: [0, 0, 0],
          },
          {
            data: [0, 0, 0],
          },
        ],
      });
    

    // Function to update the data
    const updateData = () => {
        const getRandomNumber = () => {
        return Math.floor(Math.random() * 5) + 1;
        };
    
        const newData = {
        datasets: [
            {
            data: [
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
            ],
            },
            {
            data: [
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
            ],
            },
        ],
        };
    
        setData(newData);
    };
  

    return (
        <View className="container">
            <PlayerSelect/>
            <PlayerSelect/>
            <Chart data={data}/>
            <Compatibility data={data}/>
            <ButtonGroup onPressUpdate={updateData} />
        </View>
    )
}
export default Home;