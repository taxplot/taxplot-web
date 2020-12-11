import React from "react";
import { TaxPayer, taxBrackets, standardDeduction, taxValues, bracketPlot } from '@taxplot/calc'

const BracketPost = () => {
    const someTaxpayer = new TaxPayer({year:1862})
    const someBracket = taxBrackets('THISISMYTAXPLOTTOKEN', someTaxpayer)
    return (
        <div>
            hello
        </div>
    )
}

export {BracketPost}