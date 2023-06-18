import React from 'react';
import { View, Text } from 'react-native';

const Compatibility = ({data}) => {

    const calculateCompatibilityPercentage = () => {
        const data1 = data.datasets[0].data;
        const data2 = data.datasets[1].data;
    
        if (data1.length !== 3 || data2.length !== 3) {
          return 0; // Return 0 if datasets do not have exactly three elements
        }
    
        let matchingItems = 0;
    
        for (let i = 0; i < 3; i++) {
          const diff = Math.abs(data1[i] - data2[i]);
          const weight = (5 - diff) / 4; // Weighted difference based on proximity
    
          if (weight > 0) {
            matchingItems += weight;
          }
        }
    
        return (matchingItems / 3) * 100;
      };
    
      const compat = calculateCompatibilityPercentage();
    
   
    return(
    <View>
        <Text className="block w-full rounded-md px-3.5 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
            Compatibility Level:
        </Text>
        <Text className="block w-full rounded-md px-3.5 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
            {compat}%
        </Text>
    </View>
    )
}
export default Compatibility;