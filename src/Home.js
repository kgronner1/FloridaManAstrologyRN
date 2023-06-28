import React from 'react';
import {useState, useEffect} from "react";
import {View, Platform, Button } from 'react-native';
import PlayerSelect from './PlayerSelect';
import Chart from './Chart';
import Compatibility from './Compatibility';
import ButtonGroup from './ButtonGroup';



const Home = () => {

  // default colors for player select
  const [color, setColor] = useState({
    "one":"#cc5eed",
    "two":"#ffc0cb"
  });

  // Function to update the data
  const updateColor = (key, value) => {
    setColor(prevColor => ({ ...prevColor, [key]: value }));
  };

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
            <PlayerSelect color={color.one} updateColor={value => updateColor("one", value)} />
            <PlayerSelect color={color.two} updateColor={value => updateColor("two", value)} />
            <Chart data={data} color={color}/>
            <Compatibility data={data}/>
            <ButtonGroup onPressUpdate={updateData} />
        </View>
    )

    
}
export default Home;
