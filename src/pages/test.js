import React from 'react';

import { TaxPayer, taxValues, payrollTax } from '@taxplot/calc';
import { payrollInfo2021Single } from '../data/s-corp-data';
import {
  rates2021single,
  deduction2021single,
  rates2021singleCA,
} from '../data/tax-brackets-data';

const TestPage = () => {
  let i;
  let dataObject = [];

  let ourTaxPayer = new TaxPayer({ deduction: deduction2021single });
  const updateTaxPayer = (i) => {
    ourTaxPayer.income = i;
    return ourTaxPayer;
  };

  for (i = 0; i <= 300000; i += 1000) {
    dataObject.push({
      x: i,
      y: payrollTax(payrollInfo2021Single, updateTaxPayer(i)).OASDI.Employee,
    });
  }

  return <div>{JSON.stringify(dataObject)}</div>;
};

export default TestPage;
