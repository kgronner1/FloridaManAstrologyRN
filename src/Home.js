import React from 'react';
import {useState, useEffec} from "react";
import {View, Platform, Button, ScrollView, StyleSheet, Image } from 'react-native';
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
        <View className="flex-1">            
            <ScrollView vertical showsHorizontalScrollIndicator={false}> 
            {/* className="flex-1 w-100 min-w-screen flex flex-grow justify-center items-center p50" style={[structureStyles.min100vh, structureStyles.nightSky]}  */}
            <Image style={{width:100,height:100}} source={require('/assets/nightsky1.png')}/>
              <View className="flex-1 max-w-100 min-w-screen flex justify-center items-center" style={structureStyles.min100vh}>             
                <PlayerSelect color={color.one} updateColor={value => updateColor("one", value)} />
                <PlayerSelect color={color.two} updateColor={value => updateColor("two", value)} />
                <Chart data={data} color={color}/>
                <Compatibility data={data}/>
              </View>
            </ScrollView>
            <ButtonGroup onPressUpdate={updateData} />
        </View>
    )

    
}
export default Home;


const structureStyles=StyleSheet.create({
  min100vh:{
      flex:1
  },
  nightSky: {
    flex: 1,
    itemsCenter:'center',
    justifyContent: 'center',
    width:100,
    height:100,
    zIndex:-1
  },
})