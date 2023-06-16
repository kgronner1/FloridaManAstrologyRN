import React from 'react';
import { View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from 'victory-native';

const data = {
  labels: ['🍑', '🔫', '🤡'],
  datasets: [
    {
      data: [3, 3, 5],
    },
    {
      data: [2, 1, 5],
    },
  ],
};

const Chart = () => {
  return (
    <View>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryGroup offset={10} colorScale={['blue', 'green']}>
          {data.datasets.map((dataset, index) => (
            <VictoryBar
              key={index}
              data={dataset.data.map((value, dataIndex) => ({
                x: data.labels[dataIndex],
                y: value,
              }))}
            />
          ))}
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
};

export default Chart;