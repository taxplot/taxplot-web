import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/CTBushong/a1e779014312206dd6a839432e0ce39e/raw/849403bf1858472139d001771effa4ddf683edbf/state_median_household_income_2009-2020';

export const useIncomeData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);
  return data;
};
