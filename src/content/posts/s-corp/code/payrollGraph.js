import React from 'react'
import { VictoryChart, VictoryLine, VictoryArea, VictoryStack } from 'victory'
import { payrollInfo2021Single } from '../../../../data/s-corp-data'
import { TaxPayer, payrollTax} from '@taxplot/calc'

const PayrollGraph = () => {
  let ourTaxPayer = new TaxPayer
  const updateTaxPayer = (income) => {
    ourTaxPayer.income = income.x
    return ourTaxPayer
  }
  const maxIncome = 250000
    return (
        <div>
            <VictoryChart>
            <VictoryStack
            domain={{x: [0, maxIncome]}}
   
            >
          <VictoryArea
          domain={{x: [0, maxIncome]}}
            y={(data) => payrollTax(payrollInfo2021Single, updateTaxPayer(data)).OASDI.Employee}
            animate={{
              duration: 5000,
              onLoad: { duration: 2000 }
            }}
          />
          <VictoryArea
          domain={{x: [0, maxIncome]}}
          samples={50}
            y={(data) => payrollTax(payrollInfo2021Single, updateTaxPayer(data)).OASDI.Employer}
            animate={{
              duration: 5000,
              onLoad: { duration: 2000 },
              delay: 2000
            }}
          />
          <VictoryArea
          domain={{x: [0, maxIncome]}}
            y={(data) => payrollTax(payrollInfo2021Single, updateTaxPayer(data)).HI.Employee}
          />
          <VictoryArea
          domain={{x: [0, maxIncome]}}
            
            y={(data) => payrollTax(payrollInfo2021Single, updateTaxPayer(data)).HI.Employer}
          />
          </VictoryStack>
            </VictoryChart>
        </div>
    )
}

export default PayrollGraph