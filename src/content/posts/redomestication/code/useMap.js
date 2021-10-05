import { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature, mesh } from 'topojson-client';

//Can't figure out how to import, so we're just grabbing it from unpkg
const jsonUrl = 'https://unpkg.com/us-atlas@3.0.0/states-10m.json';
export const useMap = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    json(jsonUrl).then((topology) => {
      const { states } = topology.objects;
      setData({
        states: feature(topology, states),
        interiors: mesh(topology, states, (a, b) => a !== b),
      });
    });
  }, []);

  return data;
};
