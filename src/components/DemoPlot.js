import React, { useState, useEffect } from 'react'
import { 
    VictoryChart,
    VictoryAxis, 
    VictoryStack, 
    VictoryArea, 
    VictoryCursorContainer, 
    LineSegment,
    VictoryLabel,
    VictoryLegend,
    VictoryGroup,
    VictoryContainer
    } from 'victory'
import { TaxPayer, payrollTax, taxValues, } from '@taxplot/calc'
import { payrollInfo2021Single } from '../data/s-corp-data'
import { rates2021single, 
    deduction2021single, 
    rates2021singleCA} from '../data/tax-brackets-data'

const DemoPlot = () => {

    const [legendTaxPayer, updateLegendTaxPayer] = useState(new TaxPayer({deduction: deduction2021single, income: 150000}))
    const [cursorIncome, setCursorIncome] = useState(150000)
    const [legendObject, setLegendObject] = useState({
        medicaidEmployer: 0,
        medicaidEmployee: 0,
        ssEmployer: 0,
        ssEmployee: 0,
        federalIncome: 0,
        stateIncome: 0
    })
    
    useEffect(() => {
        updateLegendTaxPayer({...legendTaxPayer,  income: cursorIncome})
        const payrollValues = payrollTax(payrollInfo2021Single, legendTaxPayer)
        
        const fedIncomeTax = taxValues(rates2021single, legendTaxPayer)
        setLegendObject({...legendObject, 
            medicaidEmployer: payrollValues.HI.Employer,
            medicaidEmployee: payrollValues.HI.Employee,
            ssEmployer: payrollValues.OASDI.Employer,
            ssEmployee: payrollValues.OASDI.Employee,
            federalIncome: taxValues(rates2021single, legendTaxPayer).taxAmount,
            stateIncome: taxValues(rates2021singleCA, legendTaxPayer).taxAmount,
        })
    }, [cursorIncome])

    const domain = {
        x: [0, 300000], 
        y: [0, 140000]
    }

    const duration = 1000

    const tickFormat = (t) => {
        if (t===1200) {
            return "$10,000"
        }
        if (0 < t && t < 1000) {
            return `$${Math.round(t)}`
        } else if (1000 <= t && t < 1000000) {
            return `$${Math.round(t/1000)}k`
        } else {
            return `$${Math.round(t/1000000)}M`
        }
    }
    let ourTaxPayer = new TaxPayer({deduction: deduction2021single})
    const updateTaxPayer = (income) => {
        ourTaxPayer.income = income.x
        return ourTaxPayer
    }

    return(
        <div>
      
                <VictoryStack
                    domain={domain}
                    colorScale={["#8B4513", "#A26A42", "#B58868", "#C4A086", "#cc7700", "#cc8800" ]}
                    containerComponent={
                        <VictoryCursorContainer
                        cursorDimension="x"
                        defaultCursorValue={cursorIncome}
                        cursorComponent={<LineSegment style={{stroke:'beige'}}/>}
                        onCursorChange={(income) => setCursorIncome(Math.round(income,2))}
                        />
                    }
                      
                >
                
                    <VictoryArea
                        y={(data) => payrollTax(payrollInfo2021Single, updateTaxPayer(data)).OASDI.Employee}
                        domain={domain}
                        animate={{
                            duration: duration,
                            onLoad: { duration: duration },
                            delay: 0
                          }}   
                    />
                    <VictoryArea
                        domain={domain}
                        y={(data) => payrollTax(payrollInfo2021Single, updateTaxPayer(data)).OASDI.Employer}
                        animate={{
                            duration: duration,
                            onLoad: { duration: duration },
                            delay: 1000
                          }}
                    />
                    <VictoryArea
                    domain={domain}
                        y={(data) => payrollTax(payrollInfo2021Single, updateTaxPayer(data)).HI.Employee}
                        animate={{
                            duration: duration,
                            onLoad: { duration: duration },
                            delay: 2000
                          }}
                    />
                    <VictoryArea
                    domain={domain}
                        
                        y={(data) => payrollTax(payrollInfo2021Single, updateTaxPayer(data)).HI.Employer}
                        animate={{
                            duration: duration,
                            onLoad: { duration: duration },
                            delay: 3000
                          }}
                    />
                    <VictoryArea
                    domain={domain}
                        
                        y={(data) => taxValues(rates2021single, updateTaxPayer(data)).taxAmount}
                        animate={{
                            duration: duration,
                            onLoad: { duration: duration },
                            delay: 4000
                          }}
                    />
                    <VictoryArea
                    domain={domain}
                        
                        y={(data) => taxValues(rates2021singleCA, updateTaxPayer(data)).taxAmount}
                        animate={{
                            duration: duration,
                            onLoad: { duration: duration },
                            delay: 5000
                          }}
                    />   
                    
                </VictoryStack>
                <VictoryLegend x={125} y={50}
                title="Legend"
                centerTitle
                orientation="horizontal"
                gutter={20}
                style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                data={[
                    { name: "One", symbol: { fill: "tomato", type: "star" } },
                    { name: "Two", symbol: { fill: "orange" } },
                    { name: "Three", symbol: { fill: "gold" } }
                ]}
                />
        </div>
    )
}

export default DemoPlot