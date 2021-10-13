import React, { useState, useEffect } from 'react';
import { useMap } from './useMap';
import { useGovernorData } from './useGovernorData';
import { useIncomeData } from './useIncomeData';

import { Marks } from './Marks';
import './styles.css';

export const GovMap = () => {
  const [height, setHeight] = useState(500);
  const [width, setwidth] = useState(500);

  const updateWindowDimensions = () => {
    setwidth(window.innerWidth);
  };

  //get window dimensions
  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    setHeight(width * 0.5);
  }, [width]);

  const margins = { top: 20, right: 20, bottom: 20, left: 20 };
  const legendPortion = 0.2;

  const mapData = useMap();
  const governorData = useGovernorData();
  const incomeData = useIncomeData();
  const year = 2020;

  if (!mapData || !governorData || !incomeData) {
    return <pre>Loading...</pre>;
  }

  const incomeMultiples = governorData.map((row) => {
    const hhIncomeRow = incomeData.find(
      (incomeRow) => incomeRow.State === row.State
    );
    return {
      multiple: row[year] / hhIncomeRow[year],
      State: row.State,
      GovSalary: row[year],
      medianHHIncome: hhIncomeRow[year],
    };
  });

  return (
    <svg id="map" width={width} height={height}>
      <Marks
        mapData={mapData}
        data={incomeMultiples}
        width={width}
        height={height}
        margins={margins}
        legendPortion={legendPortion}
      />
    </svg>
  );
};
