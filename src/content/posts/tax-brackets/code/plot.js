import {
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
  VictoryArea,
} from 'victory';
import {
  rates1861,
  rates1862,
  rates1862fake,
  rates2021single,
  deduction1861,
  deduction1862,
  deduction2021single,
} from '../../../../data/tax-brackets-data';
import { TaxPayer, effectiveRate, bracketPlot } from '@taxplot/calc';
import React, { useState, useEffect, useRef } from 'react';
import theme from '../../../../style/theme';
import { GlobalContext } from '../../../../components/RootContext';

const TestPlot = ({ slideIndex }) => {
  const [taxBrackets, setBrackets] = useState(rates2021single);
  const [deduction, setDeduction] = useState(deduction2021single);
  const [showEffectiveArea, setShowEffectiveArea] = useState(true);
  const [rangeMultiple, setRangeMultiple] = useState(1.01);
  const [xMax, setXMax] = useState(null);
  const [taxPayer, setTaxPayer] = useState(new TaxPayer());
  const [labelPoints, setLabelPoints] = useState(null);
  const [tickValuesX, setTickValuesX] = useState(null);
  const [tickValuesY, setTickValuesY] = useState(null);
  const [labelNames, setLabelNames] = useState(null);
  const [greenArea, setGreenArea] = useState(null);
  const [redArea, setRedArea] = useState(null);
  const [bracketArea, setBracketArea] = useState(null);
  const [dimensions, setDimensions] = React.useState({
    height: 700,
    width: 1000,
  });

  const updateWindowDimensions = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  //get window dimensions
  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  // Dollar slice variables
  const [showDollar, setShowDollar] = useState(false);

  const prezMode = React.useContext(GlobalContext);

  const ref = useRef(null);

  //adjustable Stroke Width
  const strokeWidth = 4;

  // Animation sequence
  useEffect(() => {
    if (slideIndex <= 0) {
      setBrackets(rates2021single);
      setDeduction(deduction2021single);
      setShowEffectiveArea(true);
      setRangeMultiple(1.01);
      setXMax(null);
      setTaxPayer({ ...taxPayer, year: 2021, deduction: deduction2021single });
      setTickValuesX(null);
      setTickValuesY(null);
      setLabelNames([
        'Marginal Tax Rate',
        'Effective Tax Rate',
        '32% Tax Bracket',
      ]);
      setLabelPoints([
        { x: 770000, y: 0.35 },
        { x: 600000, y: 0.25 },
        { x: 420000, y: 0.1 },
      ]);
      setShowDollar(false);
      setBracketArea([
        { x: 164925 + deduction2021single, y: 0.32 },
        { x: 209425 + deduction2021single, y: 0.32 },
      ]);
    } else if (slideIndex === 1) {
      setBrackets(rates1861);
      setDeduction(deduction1861);
      setShowEffectiveArea(false);
      setRangeMultiple(1.6);
      setXMax(2500);
      setTaxPayer({ ...taxPayer, year: 1861, deduction: deduction1861 });
      setTickValuesX([800]);
      setTickValuesY(null);
      setLabelNames(['Marginal Tax Rate']);
      setLabelPoints([{ x: 1600, y: 0.03 }]);
      setShowDollar(false);
      setBracketArea(null);
    } else if (slideIndex === 2) {
      //dollar slices 1861
      setBrackets(rates1861);
      setDeduction(deduction1861);
      setShowEffectiveArea(false);
      setRangeMultiple(10);
      setXMax(1600);
      setTaxPayer({ ...taxPayer, year: 1861, deduction: deduction1861 });
      setTickValuesX([800]);
      setTickValuesY([0.03]);
      setLabelNames(['$1', '97¢', '3¢']);
      setLabelPoints([
        { x: 400, y: 0.1 },
        { x: 1200, y: 0.1 },
        { x: 1200, y: 0.007 },
      ]);
      setShowDollar(true);
      setGreenArea([
        { x: 200, y: 0, y0: 0 },
        { x: 200, y: 1, y0: 0 },
        { x: 600, y: 1, y0: 0 },
        { x: 600, y: 0, y0: 0.0 },
        { x: 1000, y: 0, y0: 0 },
        { x: 1000, y: 1, y0: 0.03 },
        { x: 1400, y: 1, y0: 0.03 },
      ]);
      setRedArea([
        { x: 1000, y: 0, y0: 0 },
        { x: 1000, y: 0.03, y0: 0 },
        { x: 1400, y: 0.03, y0: 0 },
      ]);
      setBracketArea(null);
    } else if (slideIndex === 3) {
      setBrackets(rates1861);
      setDeduction(deduction1861);
      setShowEffectiveArea(true);
      setRangeMultiple(1.6);
      setXMax(2500);
      setTaxPayer({ ...taxPayer, year: 1861, deduction: deduction1861 });
      setTickValuesX([800]);
      setTickValuesY(null);
      setLabelNames(['Marginal Tax Rate', 'Effective Tax Rate']);
      setLabelPoints([
        { x: 1600, y: 0.03 },
        { x: 2000, y: 0.012 },
      ]);
      setShowDollar(false);
      setBracketArea(null);
    } else if (slideIndex === 4) {
      setBrackets(rates1862);
      setDeduction(deduction1862);
      setShowEffectiveArea(false);
      setRangeMultiple(1.2);
      setXMax(16000);
      setTaxPayer({ ...taxPayer, year: 1862, deduction: deduction1862 });
      setTickValuesX([600, 10000]);
      setTickValuesY([0.01, 0.03, 0.05, 0.07]);
      setLabelNames(['Marginal Tax Rate']);
      setLabelPoints([{ x: 5000, y: 0.03 }]);
      setShowDollar(false);
      setBracketArea(null);
    } else if (slideIndex === 5) {
      //dollar slices 1862
      setBrackets(rates1862fake);
      setDeduction(deduction1862);
      setShowEffectiveArea(false);
      setRangeMultiple(10);
      setXMax(1800);
      setTaxPayer({ ...taxPayer, year: 1862, deduction: deduction1862 });
      setTickValuesX([600, 1200]);
      setTickValuesY([0.03, 0.05]);
      setLabelNames(['$1', '97¢', '3¢', '95¢', '5¢']);
      setLabelPoints([
        { x: 300, y: 0.1 },
        { x: 900, y: 0.1 },
        { x: 900, y: 0.005 },
        { x: 1500, y: 0.1 },
        { x: 1500, y: 0.01 },
      ]);
      setShowDollar(true);
      setGreenArea([
        { x: 100, y: 0, y0: 0 },
        { x: 100, y: 1, y0: 0 },
        { x: 500, y: 1, y0: 0 },
        { x: 500, y: 0, y0: 0.0 },
        { x: 700, y: 0, y0: 0 },
        { x: 700, y: 1, y0: 0.03 },
        { x: 1100, y: 1, y0: 0.03 },
        { x: 1100, y: 0, y0: 0 },
        { x: 1300, y: 0, y0: 0 },
        { x: 1300, y: 1, y0: 0.05 },
        { x: 1700, y: 1, y0: 0.05 },
      ]);
      setRedArea([
        { x: 700, y: 0, y0: 0 },
        { x: 700, y: 0.03, y0: 0 },
        { x: 1100, y: 0.03, y0: 0 },
        { x: 1100, y: 0, y0: 0 },
        { x: 1300, y: 0, y0: 0 },
        { x: 1300, y: 0.05, y0: 0 },
        { x: 1700, y: 0.05, y0: 0 },
      ]);
      setBracketArea(null);
    } else if (slideIndex === 6) {
      setBrackets(rates1862);
      setDeduction(deduction1862);
      setShowEffectiveArea(true);
      setRangeMultiple(1.2);
      setXMax(16000);
      setTaxPayer({ ...taxPayer, year: 1862, deduction: deduction1862 });
      setTickValuesX([600, 10000]);
      setTickValuesY([0.01, 0.03, 0.05, 0.07]);
      setLabelNames(['Marginal Tax Rate', 'Effective Tax Rate', '"bump"']);
      setLabelPoints([
        { x: 5000, y: 0.03 },
        { x: 6000, y: 0.02 },
        { x: 10500, y: 0.025 },
      ]);
      setShowDollar(false);
      setBracketArea(null);
    } else if (slideIndex >= 7) {
      setBrackets(rates2021single);
      setDeduction(deduction2021single);
      setShowEffectiveArea(true);
      setRangeMultiple(1.01);
      setXMax(null);
      setTaxPayer({ ...taxPayer, year: 2021, deduction: deduction2021single });
      setTickValuesX(null);
      setTickValuesY(null);
      setLabelNames(['Marginal Tax Rate', 'Effective Tax Rate']);
      setLabelPoints([
        { x: 770000, y: 0.35 },
        { x: 600000, y: 0.25 },
      ]);
      setShowDollar(false);
      setBracketArea(null);
    }
  }, [slideIndex, taxPayer]);

  // so horizontal line plotted at top of chart doesn't get cut in half
  const maxPercent =
    bracketPlot(taxBrackets, deduction, xMax)[
      bracketPlot(taxBrackets, 0).length - 1
    ].y * rangeMultiple;
  const tickFormat = (t) => {
    if (t === 1200 && showDollar) {
      return '$10,000';
    }
    if (0 < t && t < 1000) {
      return `$${Math.round(t)}`;
    } else if (1000 <= t && t < 1000000) {
      return `$${Math.round(t / 1000)}k`;
    } else {
      return `$${Math.round(t / 1000000)}M`;
    }
  };

  return (
    <div>
      <div ref={ref} style={{ height: !prezMode.prezMode ? 64 : 0 }} />
      <VictoryChart
        domain={{ y: [0, maxPercent] }}
        animate={{ duration: 500 }}
        height={Math.round(dimensions.height * 0.88)}
      >
        <VictoryArea //tax bracket highlight
          style={{
            data: {
              stroke: 'none',
              fill: theme.palette.primary.main,
              opacity: bracketArea ? 0.4 : 0,
            },
          }}
          data={bracketArea}
        />

        <VictoryArea //green parts of dollars
          style={{
            data: {
              stroke: 'none',
              fill: 'forestGreen',
              opacity: showDollar ? 0.7 : 0,
            },
          }}
          data={greenArea}
        />

        <VictoryArea //red part of dollar
          style={{
            data: {
              stroke: 'none',
              fill: 'darkRed',
              opacity: showDollar ? 0.7 : 0,
            },
          }}
          data={redArea}
        />

        <VictoryLine //effective rate
          samples={dimensions.width}
          y={(data) => {
            taxPayer.income = data.x;
            return showEffectiveArea * effectiveRate(taxBrackets, taxPayer);
          }}
          style={{
            data: {
              stroke: theme.palette.primary.main,
              strokeWidth: strokeWidth,
            },
          }}
          animate={{
            onExit: {
              duration: 200,
            },
            onEnter: {
              duration: 400,
            },
          }}
        />

        <VictoryLine //marginal rate
          data={bracketPlot(taxBrackets, deduction, xMax)}
          style={{
            data: {
              stroke: theme.palette.primary.main,
              strokeWidth: strokeWidth,
            },
          }}
          animate={{
            onExit: {
              duration: 200,
              stroke: 'red',
            },
          }}
        />
        <VictoryScatter
          data={labelPoints}
          style={{
            data: { fill: 'none' },
            labels: { fill: theme.palette.primary.main },
          }}
          labels={labelNames}
          animate={{
            onEnter: {
              duration: 400,
              x0: 1000000,
            },
          }}
        />
        <VictoryAxis
          style={{
            axis: {
              stroke: 'beige',
              strokeWidth: strokeWidth,
            },
            tickLabels: { fill: 'beige' },
            axisLabel: { fill: 'beige', padding: 30 },
            ticks: { stroke: 'beige' },
          }}
          tickFormat={(t) => tickFormat(t)}
          label="Income"
          tickValues={tickValuesX}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: {
              stroke: 'beige',
              strokeWidth: strokeWidth,
            },
            tickLabels: { fill: 'beige' },
          }}
          tickFormat={(t) => (showDollar ? null : `${Math.round(t * 100)}%`)}
          animate={{ duration: 500 }}
          tickValues={tickValuesY}
        />
      </VictoryChart>
    </div>
  );
};

export { TestPlot };
