import React from 'react';
import { wineData } from './data';
import { mean, median, mode } from './utils';
import DataTable from './Table';

const App = () => {
  const flavanoids = wineData.map((data) => data.Flavanoids);
  const meanFlavanoids = mean(flavanoids);
  const medianFlavanoids = median(flavanoids);
  const modeFlavanoids = mode(flavanoids);

  const tableData = [
    {
      measure: 'Flavanoids Mean',
      class1: meanFlavanoids.toFixed(3),
      class2: medianFlavanoids.toFixed(3),

    },
    {
      measure: 'Flavanoids Median',
      class1: meanFlavanoids.toFixed(3),
      class2: medianFlavanoids.toFixed(3),

    },
    {
      measure: 'Flavanoids Mode',
      class1: meanFlavanoids.toFixed(3),
      class2: medianFlavanoids.toFixed(3),

    },

  ];

  return <DataTable data={tableData} />;
};

export default App;
