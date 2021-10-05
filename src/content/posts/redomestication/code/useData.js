import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/CTBushong/9fd4f0a27743c0759d9e68410842311c/raw/03b4eafbb08044576e190351a25758a9aeda7a60/RedomesticationStates';
const row = (d) => {
  d.type = d['Business types permitted'];
  return d;
};

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
