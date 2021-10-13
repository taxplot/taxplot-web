import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/CTBushong/475a08339c75d28fe7180e9f1d8d5807/raw/32a29a4db5360baef898af6dedc2879d80d89ca2/governor_salaries';
// const row = (d) => {
//   d.type = d['Business types permitted'];
//   return d;
// };

export const useGovernorData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  return data;
};
