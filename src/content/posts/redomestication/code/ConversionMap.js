import React, { useEffect, useState } from 'react';
import { useMap } from './useMap';
import { useData } from './useData';
import { Marks } from './Marks';
import './styles.css';

export const ConversionMap = () => {
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
  //const width = window.innerWidth;
  //const height = window.innerHeight;
  const margins = { top: 20, right: 20, bottom: 20, left: 20 };
  const legendPortion = 0.2;
  const mapData = useMap();
  const data = useData();

  if (!mapData || !data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg id="map" width={width} height={height}>
      <Marks
        mapData={mapData}
        data={data}
        width={width}
        height={height}
        margins={margins}
        legendPortion={legendPortion}
      />
    </svg>
  );
};
