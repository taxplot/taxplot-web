import { useState, useEffect } from 'react';
import { csv } from 'd3';

export const GetStates = () => {
  const [data, setData] = useState(null);
  const csvUrl =
    'https://gist.githubusercontent.com/CTBushong/276dfbf329309a70661d551d4619f0dc/raw/3cbca55c8028927e06a7f88655ada3fce2009479/statesWithDomestication.csv';

  const row = (d) => {
    d.state = d['State'];
    d.abbreviation = d['Abbreviation'];
    d.type = d['Business types permitted'];
    return d;
  };

  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
