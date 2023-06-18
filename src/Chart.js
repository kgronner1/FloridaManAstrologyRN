import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from 'victory-native';

const labels = ['🍑', '🔫', '🤡'];

const Chart = ({data}) => {
  return (
    <View >
      <VictoryChart theme={VictoryTheme.material} domain={{ y: [1, 5] }} >
        <VictoryGroup offset={10} colorScale={['black', 'pink']}>
          {data.datasets.map((dataset, index) => (
            <VictoryBar
              key={index}
              data={dataset.data.map((value, dataIndex) => ({
                x: labels[dataIndex],
                y: value,
              }))}              
            />
          ))}
        </VictoryGroup>
        <VictoryAxis // Y-axis
          dependentAxis
          tickValues={[0, 1, 2, 3, 4, 5]} // Set the tick values for the Y-axis
          style={{
            axis: { stroke: 'black' }, // Customize the Y-axis color
            tickLabels: { fontSize: 12 },
          }}
        />
        <VictoryAxis
          tickValues={labels} // Set the x-axis tick values
          tickFormat={(tick) => tick} // Display the tick values as they are (optional)
          style={{
            tickLabels: {
              fontSize: 40, // Set the desired font size here
            },
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default Chart;