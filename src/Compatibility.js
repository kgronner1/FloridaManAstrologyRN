import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Compatibility = ({ data }) => {
  const calculateCompatibilityPercentage = () => {
    const data1 = data.datasets[0].data;
    const data2 = data.datasets[1].data;

    if (data1.length !== 3 || data2.length !== 3) {
      return 0; // Return 0 if datasets do not have exactly three elements
    }

    let matchingItems = 0;

    for (let i = 0; i < 3; i++) {
      const diff = Math.abs(data1[i] - data2[i]);
      const weight = (5 - diff) / 5; // Weighted difference based on proximity

      if (weight > 0) {
        matchingItems += weight;
      }
    }

    if (matchingItems < 0) {
      matchingItems = 0;
    } 

    const x = Math.round((matchingItems / 3) * 100);

    let color = 'text-red-500'; // Default color
    let statement = '';

    switch (true) {
      case x < 50:
      case x >= 50 && x < 60:
        color = 'text-red-500';
        statement = 'Do you want to live a life of mediocrite and never end up on the news without pants on? Dump this loser, they dont understand.';
        break;
      case x >= 60 && x < 70:
      case x >= 70 && x < 80:
        color = 'text-blue-500';
        statement = 'They may be muggy and sweaty like a Florida summer but hey somethings happening.';
        break;
      case x >= 80 && x < 90:
      case x >= 90:
        color = 'text-green-500';
        statement = 'Everybody will be jealous of your gator-skin wedding dress and hat combo later this month.';
        statement = 'Move to the Everglades immediately, bring them with you.';
        break;
    }

    return { x, color, statement };
  };

  const { x: compat, color: compatColor, statement: pith  } = calculateCompatibilityPercentage();

  const fullClassName = `text-7xl ${compatColor}`;


  return (
    <View style={structureStyles.spacing} className="mt-100 pt-100 max-w-md flex items-center justify-items-center">
      <Text className="block w-full rounded-md px-3.5 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
        Compatibility Level: 
      </Text>
      <Text style={structureStyles.mt30} className={fullClassName}>
        {compat}%
      </Text>
      <Text style={[structureStyles.mt30, structureStyles.colorWhite]}>
        {pith}
      </Text>
    </View>
  );
};

export default Compatibility;

const structureStyles=StyleSheet.create({
  spacing:{
      marginTop:100,
      marginBottom:100
  },
  mt30:{
    marginTop:30,
  },
  colorWhite: {
    color:"#ffffff",
  } 
})